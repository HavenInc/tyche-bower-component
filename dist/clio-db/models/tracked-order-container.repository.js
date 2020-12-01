"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const tracked_order_container_clio_entity_1 = require("./tracked-order-container.clio.entity");
const filter_container_with_exception_dto_1 = require("../dto/filter-container-with-exception.dto");
let TrackedOrderContainerRepository = class TrackedOrderContainerRepository extends typeorm_1.Repository {
    async getTrackedOrderContainerByTrackedOrder(trackedOrder) {
        return this.find({ where: { trackedOrder } });
    }
    async getContainersWithEvents(filter, affiliation) {
        const { skip, take, containerSortBy } = filter;
        const { column, asc } = containerSortBy;
        const query = this.getQueryForContainersWithEvents(filter, affiliation);
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
            case filter_container_with_exception_dto_1.ContainerSortColumn.ORDER:
                return 'trackedOrder.havenOrderId';
            case filter_container_with_exception_dto_1.ContainerSortColumn.CARRIER:
                return 'CarrierCode.value';
            case filter_container_with_exception_dto_1.ContainerSortColumn.BOOKING:
                return 'trackedOrder.carrierBookingNum';
            case filter_container_with_exception_dto_1.ContainerSortColumn.BL:
                return 'trackedOrder.billOfLadingNum';
            case filter_container_with_exception_dto_1.ContainerSortColumn.CONTAINER:
                return 'trackedContainer.containerId';
            case filter_container_with_exception_dto_1.ContainerSortColumn.EQUIPMENT:
                return 'trackedContainer.type';
            case filter_container_with_exception_dto_1.ContainerSortColumn.LAST_UPDATED:
                return 'trackedOrder.updatedAt';
            case filter_container_with_exception_dto_1.ContainerSortColumn.ARRIVAL:
                return 'trackedOrder.arrival';
            case filter_container_with_exception_dto_1.ContainerSortColumn.DEPARTURE:
                return 'trackedOrder.departure';
        }
    }
    getQueryForContainersWithEvents(filter, affiliation) {
        const { exceptionCodes, orderIds, search, containerIds, arrival, departure, havenStatus, forCsv } = filter;
        const { orgId } = affiliation;
        let query = this.createQueryBuilder('trackedOrderContainer')
            .innerJoinAndSelect('trackedOrderContainer.order', 'trackedOrder')
            .innerJoinAndSelect('trackedOrder.carrier', 'CarrierCode')
            .innerJoinAndSelect('trackedOrderContainer.container', 'trackedContainer')
            .innerJoinAndSelect('trackedOrderContainer.trackedEvents', 'trackedEvent')
            .leftJoinAndSelect('trackedEvent.exception', 'exceptionCode')
            .where('trackedOrder.havenOrderId IN (:...orderIds)', { orderIds })
            .andWhere('trackedContainer.containerId != "Not Assigned"');
        if (exceptionCodes.length > 0) {
            query.andWhere('trackedEvent.exceptionCode IN (:...exceptionCodes)', {
                exceptionCodes,
            });
        }
        if (orgId) {
            query.andWhere('trackedOrder.customerOrgId =:orgId', { orgId });
        }
        if (containerIds.length > 0) {
            query.andWhere('trackedContainer.id IN (:...containerIds)', {
                containerIds,
            });
        }
        if (arrival) {
            query.andWhere('CONVERT(trackedOrder.arrival, date) = CONVERT(:arrival, date)', { arrival });
        }
        if (departure) {
            query.andWhere('CONVERT(trackedOrder.departure, date) = CONVERT(:departure, date)', { departure });
        }
        if (havenStatus) {
            query.andWhere('trackedOrder.havenStatus IN (:...havenStatus)', { havenStatus });
        }
        if (search) {
            query.andWhere(`(
          trackedOrder.havenOrderId LIKE :search
          OR trackedOrder.billOfLadingNum LIKE :search
          OR trackedOrder.carrierBookingNum LIKE :search
          OR trackedContainer.type LIKE :search
          OR trackedContainer.containerId LIKE :search
        )`, { search: `%${search}%` });
        }
        if (forCsv) {
            query.groupBy('trackedOrder.havenOrderId, trackedContainer.containerId, trackedEvent.exceptionCode');
        }
        return query;
    }
};
TrackedOrderContainerRepository = __decorate([
    typeorm_1.EntityRepository(tracked_order_container_clio_entity_1.TrackedOrderContainer)
], TrackedOrderContainerRepository);
exports.TrackedOrderContainerRepository = TrackedOrderContainerRepository;
//# sourceMappingURL=tracked-order-container.repository.js.map