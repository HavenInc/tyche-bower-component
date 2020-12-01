"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const tracked_order_clio_entity_1 = require("./tracked-order.clio.entity");
const filter_order_with_exception_dto_1 = require("../dto/filter-order-with-exception.dto");
let TrackedOrderRepository = class TrackedOrderRepository extends typeorm_1.Repository {
    async getTrackedOrdersWithEvents(filter, affiliation) {
        const { skip, take, shipmentSortBy } = filter;
        const { column, asc } = shipmentSortBy;
        const query = this.getQueryForTrackedOrdersWithEvents(filter, affiliation);
        query.orderBy(this.getColumnToOrderBy(column), asc ? 'ASC' : 'DESC');
        if (skip) {
            query.skip(skip);
        }
        if (take) {
            query.take(take);
        }
        return await query.getManyAndCount();
    }
    getColumnToOrderBy(column) {
        switch (column) {
            case filter_order_with_exception_dto_1.ShipmentSortColumn.ORDER:
                return 'trackedOrder.havenOrderId';
            case filter_order_with_exception_dto_1.ShipmentSortColumn.CARRIER:
                return 'CarrierCode.value';
            case filter_order_with_exception_dto_1.ShipmentSortColumn.BOOKING:
                return 'trackedOrder.carrierBookingNum';
            case filter_order_with_exception_dto_1.ShipmentSortColumn.BL:
                return 'trackedOrder.billOfLadingNum';
            case filter_order_with_exception_dto_1.ShipmentSortColumn.STATUS:
                return 'trackedOrder.havenStatus';
            case filter_order_with_exception_dto_1.ShipmentSortColumn.ARRIVAL:
                return 'trackedOrder.arrival';
            case filter_order_with_exception_dto_1.ShipmentSortColumn.DEPARTURE:
                return 'trackedOrder.departure';
        }
    }
    getQueryForTrackedOrdersWithEvents(filter, affiliation) {
        const { exceptionCodes, orderIds, search, arrival, departure, havenStatus, forCsv } = filter;
        const { orgId } = affiliation;
        const query = this.createQueryBuilder('trackedOrder')
            .innerJoinAndSelect('trackedOrder.trackedOrderContainers', 'trackedOrderContainer')
            .innerJoinAndSelect('trackedOrderContainer.trackedEvents', 'trackedEvent')
            .innerJoinAndSelect('trackedOrderContainer.container', 'trackedContainer')
            .innerJoinAndSelect('trackedOrder.carrier', 'CarrierCode')
            .where('trackedEvent.actual is not null')
            .andWhere('trackedOrder.havenOrderId IN (:...orderIds)', { orderIds })
            .andWhere('trackedContainer.containerId != "Not Assigned"');
        if (exceptionCodes.length > 0) {
            query.andWhere('trackedEvent.exceptionCode IN (:...exceptionCodes)', {
                exceptionCodes,
            });
        }
        if (orgId) {
            query.andWhere('trackedOrder.customerOrgId =:orgId', { orgId });
        }
        if (arrival) {
            query.andWhere('CONVERT(trackedOrder.arrival, date) = CONVERT(:arrival, date)', { arrival });
        }
        if (departure) {
            query.andWhere('CONVERT(trackedOrder.departure, date) = CONVERT(:departure, date)', { departure });
        }
        if (havenStatus) {
            query.andWhere('trackedOrder.havenStatus IN (:...havenStatus)', {
                havenStatus,
            });
        }
        if (search) {
            query.andWhere(`(
          trackedOrder.havenOrderId LIKE :search
          OR trackedOrder.billOfLadingNum LIKE :search
          OR trackedOrder.carrierBookingNum LIKE :search
          OR trackedOrder.havenStatus LIKE :search
          OR trackedContainer.type LIKE :search
          OR trackedContainer.containerId LIKE :search
        )`, { search: `%${search}%` });
        }
        if (forCsv) {
            query.groupBy('trackedOrder.havenOrderId, trackedContainer.containerId, trackedEvent.exceptionCode');
        }
        return query;
    }
    async findWithEmptyReturnMilestone(orderIds) {
        const emptyReturnSequenceCode = [340];
        const query = this.getMilestoneQuery(emptyReturnSequenceCode, orderIds);
        return query.getMany();
    }
    async findPassedArrival(orderIds, days) {
        const query = this.createQueryBuilder('trackedOrder')
            .select(['trackedOrder.havenOrderId', 'trackedOrder.arrival'])
            .where('trackedOrder.havenOrderId IN (:...orderIds)', { orderIds })
            .andWhere('(CONVERT(trackedOrder.arrival, date) <= (CURDATE() - INTERVAL :days DAY) OR trackedOrder.arrival IS NULL)', {
            days,
        });
        return query.getMany();
    }
    async findOrderIdsWithRiskForCustomerOrgId(customerOrgId) {
        const query = this.createQueryBuilder('trackedOrder')
            .select(['trackedOrder.havenOrderId'])
            .innerJoin('trackedOrder.trackedOrderContainers', 'trackedOrderContainer')
            .leftJoin('trackedOrderContainer.trackedEvents', 'trackedEvent')
            .where('trackedOrder.customerOrgId =:customerOrgId', { customerOrgId })
            .andWhere('trackedEvent.id is not null')
            .andWhere('trackedEvent.exceptionCode NOT IN (1,2)')
            .groupBy('trackedOrder.havenOrderId');
        return await query.getMany();
    }
    async findOrderIdsForCustomerOrgId(customerOrgId) {
        const query = this.createQueryBuilder('trackedOrder')
            .select(['trackedOrder.havenOrderId'])
            .where('trackedOrder.customerOrgId =:customerOrgId', { customerOrgId })
            .groupBy('trackedOrder.havenOrderId');
        return await query.getMany();
    }
    async filterArrival(orderIds, days) {
        const query = this.createQueryBuilder('trackedOrder')
            .select(['trackedOrder.havenOrderId'])
            .where('trackedOrder.havenOrderId IN (:...orderIds)', { orderIds })
            .andWhere('(CONVERT(trackedOrder.arrival, date) <= (CURDATE() + INTERVAL :days DAY) OR trackedOrder.arrival IS NULL)', { days })
            .groupBy('trackedOrder.havenOrderId');
        return await query.getMany();
    }
    async getTrackedOrderWithExceptionCode(affiliation, exceptionCode, orderIds) {
        const { orgId } = affiliation;
        const query = this.createQueryBuilder('trackedOrder')
            .select(['trackedOrder.havenOrderId'])
            .innerJoin('trackedOrder.trackedOrderContainers', 'trackedOrderContainer')
            .innerJoin('trackedOrderContainer.trackedEvents', 'trackedEvent')
            .where('trackedOrder.customerOrgId =:orgId', { orgId })
            .andWhere('trackedEvent.exceptionCode =:exceptionCode', {
            exceptionCode,
        });
        if (orderIds.length > 0) {
            query.andWhere('trackedOrder.havenOrderId IN (:...orderIds)', {
                orderIds,
            });
        }
        return await query.getMany();
    }
    async findPassedDeparture(orderIds, days) {
        const query = this.createQueryBuilder('trackedOrder')
            .select(['trackedOrder.havenOrderId'])
            .where('trackedOrder.havenOrderId IN (:...orderIds)', { orderIds })
            .andWhere('(CONVERT(trackedOrder.departure, date) <= (CURDATE() - INTERVAL :days DAY) OR trackedOrder.departure IS NULL)', {
            days,
        });
        return query.getMany();
    }
    async findWithLoadedMilestone(orderIds) {
        const loadedSequenceCode = [40];
        const otherLoadedStatusCodes = [20, 29, 37, 38, 44];
        const query = this.createQueryBuilder('trackedOrder')
            .select(['trackedOrder.havenOrderId'])
            .innerJoin('trackedOrder.trackedOrderContainers', 'trackedOrderContainer')
            .innerJoin('trackedOrderContainer.trackedEvents', 'trackedEvent')
            .innerJoin('trackedEvent.status', 'StatusCode')
            .where('trackedOrder.havenOrderId IN (:...orderIds)', { orderIds })
            .andWhere(`( StatusCode.sequenceCode IN (:...loadedSequenceCode)
        OR StatusCode.id IN (:...otherLoadedStatusCodes) 
        OR trackedEvent.providerStatus LIKE 'loaded%' 
        OR trackedEvent.providerStatus LIKE '%loaded on%'
        OR trackedEvent.providerStatus LIKE 'shipped on'
        OR trackedEvent.providerStatus LIKE '%loaded at port%'
        )
        `, {
            loadedSequenceCode,
            otherLoadedStatusCodes,
        });
        return query.getMany();
    }
    async findGateInGateOutEvent(orderIds) {
        const gateInGateOutMilestone = [320, 300];
        const query = this.getMilestoneQuery(gateInGateOutMilestone, orderIds)
            .addSelect('trackedOrderContainer.id')
            .addSelect('trackedContainer.id')
            .addSelect('trackedEvent.actual')
            .addSelect('StatusCode.sequenceCode');
        return query.getMany();
    }
    getMilestoneQuery(milestones, orderIds) {
        return this.createQueryBuilder('trackedOrder')
            .select(['trackedOrder.havenOrderId'])
            .innerJoin('trackedOrder.trackedOrderContainers', 'trackedOrderContainer')
            .innerJoin('trackedOrderContainer.container', 'trackedContainer')
            .innerJoin('trackedContainer.trackedEvents', 'trackedEvent')
            .innerJoin('trackedEvent.status', 'StatusCode')
            .where('trackedOrder.havenOrderId IN (:...orderIds)', { orderIds })
            .andWhere('StatusCode.sequenceCode IN (:...milestones)', {
            milestones,
        });
    }
};
TrackedOrderRepository = __decorate([
    typeorm_1.EntityRepository(tracked_order_clio_entity_1.TrackedOrder)
], TrackedOrderRepository);
exports.TrackedOrderRepository = TrackedOrderRepository;
//# sourceMappingURL=tracked-order.repository.js.map