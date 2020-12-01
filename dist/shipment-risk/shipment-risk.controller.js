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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const shipment_risk_service_1 = require("./shipment-risk.service");
const filter_order_with_exception_dto_1 = require("../clio-db/dto/filter-order-with-exception.dto");
const tracked_order_clio_entity_1 = require("../clio-db/models/tracked-order.clio.entity");
const tracked_order_container_clio_entity_1 = require("../clio-db/models/tracked-order-container.clio.entity");
const common_2 = require("@nestjs/common");
const filter_container_with_exception_dto_1 = require("../clio-db/dto/filter-container-with-exception.dto");
const dynamic_risk_dto_1 = require("../clio-db/dto/dynamic-risk.dto");
const auth_rest_guard_1 = require("../auth/auth.rest.guard");
const logger = new common_2.Logger('ShipmentRiskController');
let ShipmentRiskController = class ShipmentRiskController {
    constructor(shipmentRiskService) {
        this.shipmentRiskService = shipmentRiskService;
    }
    healthCheck() {
        return 'Shipment Risk Online';
    }
    getShipmentRisks(filter, risks, params) {
        logger.log(`/api/v1.0.0/shipmentRisk with filter ${JSON.stringify(filter)}`);
        return this.shipmentRiskService.getShipmentRisks(filter, risks, params);
    }
    getContainerRisks(filter, risks, params) {
        logger.log(`/api/v1.0.0/shipmentRisk/containers with filter ${JSON.stringify(filter)}`);
        return this.shipmentRiskService.getContainerRisks(filter, risks, params);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ShipmentRiskController.prototype, "healthCheck", null);
__decorate([
    common_1.Get('/:orgId'),
    common_1.UseGuards(new auth_rest_guard_1.RESTAuthGuard),
    __param(0, common_1.Query()),
    __param(1, common_1.Query()),
    __param(2, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_order_with_exception_dto_1.FilterOrderWithExceptionDto,
        dynamic_risk_dto_1.DynamicRiskDto, Object]),
    __metadata("design:returntype", Promise)
], ShipmentRiskController.prototype, "getShipmentRisks", null);
__decorate([
    common_1.Get('/containers/:orgId'),
    common_1.UseGuards(new auth_rest_guard_1.RESTAuthGuard),
    __param(0, common_1.Query()),
    __param(1, common_1.Query()),
    __param(2, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_container_with_exception_dto_1.FilterContainerWithExceptionDto,
        dynamic_risk_dto_1.DynamicRiskDto, Object]),
    __metadata("design:returntype", Promise)
], ShipmentRiskController.prototype, "getContainerRisks", null);
ShipmentRiskController = __decorate([
    common_1.Controller('/api/v1.0.0/shipmentRisk'),
    __metadata("design:paramtypes", [shipment_risk_service_1.ShipmentRiskService])
], ShipmentRiskController);
exports.ShipmentRiskController = ShipmentRiskController;
//# sourceMappingURL=shipment-risk.controller.js.map