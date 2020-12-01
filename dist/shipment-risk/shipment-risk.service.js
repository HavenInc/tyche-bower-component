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
const tracked_order_service_1 = require("../clio-db/service/tracked-order.service");
const tracked_order_container_service_1 = require("../clio-db/service/tracked-order-container.service");
const tracked_order_clio_entity_1 = require("../clio-db/models/tracked-order.clio.entity");
const tracked_order_container_clio_entity_1 = require("../clio-db/models/tracked-order-container.clio.entity");
const filter_container_with_exception_dto_1 = require("../clio-db/dto/filter-container-with-exception.dto");
const dynamic_risk_dto_1 = require("../clio-db/dto/dynamic-risk.dto");
const user_affiliation_dto_1 = require("../clio-db/dto/user-affiliation.dto");
const etdPassedNotLoadedCode = 7;
let ShipmentRiskService = class ShipmentRiskService {
    constructor(trackedOrderService, trackedOrderContainerService) {
        this.trackedOrderService = trackedOrderService;
        this.trackedOrderContainerService = trackedOrderContainerService;
    }
    async getShipmentRisks(filter, dynamicRisks, affiliation) {
        let shipmentRisks = [];
        let count = 0;
        let { orderIds: filterOrderIds } = filter;
        if (dynamicRisks.hasDynamicRisks()) {
            filterOrderIds = await this.runDynamicFilters(dynamicRisks, filterOrderIds);
        }
        if (this.compoundedETDPassedFilter(filter.exceptionCodes)) {
            filterOrderIds = await this.handleCompoundedETAPassed(affiliation, filterOrderIds);
        }
        if (filterOrderIds.length > 0) {
            filter.orderIds = filterOrderIds;
            [shipmentRisks, count] = await this.trackedOrderService.getTrackedOrdersWithEvents(filter, affiliation);
        }
        return { shipmentRisks, count };
    }
    async getContainerRisks(filter, dynamicRisks, affiliation) {
        let containerRisks = [];
        let count = 0;
        let { orderIds: filterOrderIds } = filter;
        if (dynamicRisks.hasDynamicRisks()) {
            filterOrderIds = await this.runDynamicFilters(dynamicRisks, filterOrderIds);
        }
        if (this.compoundedETDPassedFilter(filter.exceptionCodes)) {
            filterOrderIds = await this.handleCompoundedETAPassed(affiliation, filterOrderIds);
        }
        if (filterOrderIds.length > 0) {
            filter.orderIds = filterOrderIds;
            [containerRisks, count] = await this.trackedOrderContainerService.getContainersWithEvents(filter, affiliation);
        }
        return { count, containerRisks };
    }
    async runDynamicFilters(dynamicRisks, orderIds) {
        const { noEmptyReturn, arrivalInDays, etdPassedNotLoaded, noGateOut, } = dynamicRisks;
        let filteredOrderIds = [...orderIds];
        if (this.isValidDays(noEmptyReturn) && filteredOrderIds.length > 0) {
            const noEmptyReturnOrderIds = await this.trackedOrderService.filterWithoutEmptyReturnMilestone(filteredOrderIds, noEmptyReturn);
            filteredOrderIds = [...noEmptyReturnOrderIds];
        }
        if (this.isValidDays(arrivalInDays) && filteredOrderIds.length > 0) {
            const arrivalInNDaysOrderIds = await this.trackedOrderService.filterShipmentsOnArrival(filteredOrderIds, arrivalInDays);
            filteredOrderIds = [...arrivalInNDaysOrderIds];
        }
        if (this.isValidDays(etdPassedNotLoaded) && filteredOrderIds.length > 0) {
            const notLoadedOrderIds = await this.trackedOrderService.filterETDPassedNotLoaded(filteredOrderIds, etdPassedNotLoaded);
            filteredOrderIds = [...notLoadedOrderIds];
        }
        if (this.isValidDays(noGateOut) && filteredOrderIds.length > 0) {
            const noGateOutIds = await this.trackedOrderService.filterNoGateOut(filteredOrderIds, noGateOut);
            filteredOrderIds = [...noGateOutIds];
        }
        return filteredOrderIds;
    }
    isValidDays(value) {
        return (typeof (value) === 'number' && +value >= 0);
    }
    compoundedETDPassedFilter(exceptionCodes) {
        return exceptionCodes.length > 1 && exceptionCodes.includes(etdPassedNotLoadedCode);
    }
    async handleCompoundedETAPassed(affiliation, orderIds) {
        let onlyWithETDPassed = [];
        if (orderIds.length > 0) {
            onlyWithETDPassed = await this.trackedOrderService.getTrackedOrderWithExceptionCode(affiliation, etdPassedNotLoadedCode, orderIds);
        }
        return onlyWithETDPassed;
    }
};
ShipmentRiskService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [tracked_order_service_1.TrackedOrderService,
        tracked_order_container_service_1.TrackedOrderContainerService])
], ShipmentRiskService);
exports.ShipmentRiskService = ShipmentRiskService;
//# sourceMappingURL=shipment-risk.service.js.map