"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const tracked_order_repository_1 = require("../models/tracked-order.repository");
const gateOutSequence = 320;
const gateInSequence = 300;
let TrackedOrderService = class TrackedOrderService {
    constructor(trackedOrderRepository) {
        this.trackedOrderRepository = trackedOrderRepository;
    }
    async getTrackedOrdersWithEvents(filter, affiliation) {
        return this.trackedOrderRepository.getTrackedOrdersWithEvents(filter, affiliation);
    }
    async filterWithoutEmptyReturnMilestone(orderIds, days) {
        const trackedOrderWithEmptyReturn = await this.trackedOrderRepository.findWithEmptyReturnMilestone(orderIds);
        const trackedOrderPassedArrival = await this.trackedOrderRepository.findPassedArrival(orderIds, days);
        const orderIdsWithEmptyReturn = await this.extractOrderIds(trackedOrderWithEmptyReturn);
        const ordersPassedArrival = await this.extractOrderIds(trackedOrderPassedArrival);
        return ordersPassedArrival.filter(orderId => !orderIdsWithEmptyReturn.includes(orderId));
    }
    async filterETDPassedNotLoaded(orderIds, days) {
        const trackedOrderWithLoaded = await this.trackedOrderRepository.findWithLoadedMilestone(orderIds);
        const trackedOrderPassedDeparture = await this.trackedOrderRepository.findPassedDeparture(orderIds, days);
        const orderIdsWithLoaded = await this.extractOrderIds(trackedOrderWithLoaded);
        const orderIdsPassedDeparture = await this.extractOrderIds(trackedOrderPassedDeparture);
        return orderIdsPassedDeparture.filter(orderId => !orderIdsWithLoaded.includes(orderId));
    }
    async filterNoGateOut(orderIds, days) {
        const passedArrivalOrders = await this.trackedOrderRepository.findPassedArrival(orderIds, days);
        if (passedArrivalOrders.length <= 0)
            return [];
        const orderIdsPassedArrival = this.extractOrderIds(passedArrivalOrders);
        const ordersGateInGateOut = await this.trackedOrderRepository.findGateInGateOutEvent(orderIdsPassedArrival);
        const filteredGateInOut = ordersGateInGateOut.filter((orderGateInGateOut) => {
            return orderGateInGateOut.trackedOrderContainers.reduce((containerGateOut, trackedOrderContainer) => {
                const { container } = trackedOrderContainer;
                if (!container.trackedEvents ||
                    container.trackedEvents.length <= 0) {
                    return false;
                }
                const lastEvent = this.findLastGateEvent(container);
                return (containerGateOut &&
                    lastEvent.status.sequenceCode === gateOutSequence);
            }, true);
        });
        const orderIdsWithGateOut = this.extractOrderIds(filteredGateInOut);
        return orderIdsPassedArrival.filter(orderId => !orderIdsWithGateOut.includes(orderId));
    }
    async filterShipmentsOnArrival(orderIds, days) {
        const ordersArrivalInNDays = await this.trackedOrderRepository.filterArrival(orderIds, days);
        return ordersArrivalInNDays.map((order) => order.havenOrderId);
    }
    async getHavenOrderIdsWithRisk(customerOrgId) {
        const trackedOrders = await this.trackedOrderRepository.findOrderIdsWithRiskForCustomerOrgId(customerOrgId);
        return trackedOrders.map(order => order.havenOrderId);
    }
    async getHavenOrderIds(customerOrgId) {
        const trackedOrders = await this.trackedOrderRepository.findOrderIdsForCustomerOrgId(customerOrgId);
        return trackedOrders.map(order => order.havenOrderId);
    }
    async getTrackedOrderWithExceptionCode(affiliation, exceptionCode, orderIds) {
        const trackedOrders = await this.trackedOrderRepository.getTrackedOrderWithExceptionCode(affiliation, exceptionCode, orderIds);
        return trackedOrders.map((order) => order.havenOrderId);
    }
    extractOrderIds(trackedOrders) {
        return trackedOrders.reduce((result, trackedOrder) => {
            if (result.indexOf(trackedOrder.havenOrderId) < 0) {
                result.push(trackedOrder.havenOrderId);
            }
            return result;
        }, []);
    }
    findLastGateEvent(container) {
        return container.trackedEvents.reduce((latestEvent, event) => {
            if (!latestEvent)
                return event;
            const alreadyGateOut = (latestEvent.status.sequenceCode === gateOutSequence &&
                event.status.sequenceCode === gateInSequence);
            if (latestEvent.actual.getTime() < event.actual.getTime()) {
                return event;
            }
            else if (latestEvent.actual.getTime() === event.actual.getTime() && !alreadyGateOut) {
                return event;
            }
            else {
                return latestEvent;
            }
        }, null);
    }
};
TrackedOrderService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [tracked_order_repository_1.TrackedOrderRepository])
], TrackedOrderService);
exports.TrackedOrderService = TrackedOrderService;
//# sourceMappingURL=tracked-order.service.js.map