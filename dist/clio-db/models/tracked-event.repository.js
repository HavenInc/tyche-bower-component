"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const tracked_event_clio_entity_1 = require("./tracked-event.clio.entity");
let TrackedEventRepository = class TrackedEventRepository extends typeorm_1.Repository {
    async getArrivalOfContainers(orgId, days, orderIds) {
        const arrivalSequenceCodes = [300, 310, 320];
        let query = this.createQueryBuilder('trackedEvent')
            .select([
            'trackedEvent.trackedContainer',
            'trackedEvent.trackedOrderContainer',
            'trackedOrderContainer.order',
            'trackedOrder.havenOrderId',
        ])
            .innerJoinAndSelect('trackedEvent.status', 'StatusCode')
            .innerJoinAndSelect('trackedEvent.trackedOrderContainer', 'trackedOrderContainer')
            .innerJoinAndSelect('trackedOrderContainer.order', 'trackedOrder')
            .where('StatusCode.sequenceCode IN (:...arrivalSequenceCodes)', { arrivalSequenceCodes })
            .andWhere('coalesce(trackedEvent.actual, trackedEvent.planned,null) IS NOT NULL')
            .andWhere('coalesce(trackedEvent.actual, trackedEvent.planned,null) BETWEEN NOW() AND  (NOW() + INTERVAL :days DAY)', { days });
        if (orgId) {
            query.andWhere('trackedOrder.customerOrgId=:orgId', { orgId });
        }
        if (orderIds.length > 0) {
            query.andWhere('trackedOrder.havenOrderId IN (:...orderIds)', {
                orderIds,
            });
        }
        query
            .groupBy('trackedEvent.trackedContainer')
            .orderBy('StatusCode.sequenceCode');
        return query.getMany();
    }
};
TrackedEventRepository = __decorate([
    typeorm_1.EntityRepository(tracked_event_clio_entity_1.TrackedEvent)
], TrackedEventRepository);
exports.TrackedEventRepository = TrackedEventRepository;
//# sourceMappingURL=tracked-event.repository.js.map