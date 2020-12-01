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
const graphql_1 = require("@nestjs/graphql");
const shipment_risk_type_1 = require("./output-type/shipment-risk.type");
const shipment_risk_service_1 = require("./shipment-risk.service");
const common_1 = require("@nestjs/common");
const container_risk_type_1 = require("./output-type/container-risk.type");
const user_affiliation_dto_1 = require("../clio-db/dto/user-affiliation.dto");
const auth_gql_guard_1 = require("../auth/auth.gql.guard");
const filter_container_with_exception_dto_1 = require("../clio-db/dto/filter-container-with-exception.dto");
const filter_order_with_exception_dto_1 = require("../clio-db/dto/filter-order-with-exception.dto");
const dynamic_risk_dto_1 = require("../clio-db/dto/dynamic-risk.dto");
const logger = new common_1.Logger('ShipmentRisk');
let ShipmentRiskResolver = class ShipmentRiskResolver {
    constructor(shipmentRiskService) {
        this.shipmentRiskService = shipmentRiskService;
    }
    async shipmentRisks(affiliation, filter, risks) {
        logger.log(`ShipmentRisks with filter ${JSON.stringify(filter)} and dynamicRisks ${JSON.stringify(risks)}`);
        return this.shipmentRiskService.getShipmentRisks(filter, risks, affiliation);
    }
    async containerRisks(affiliation, filter, risks) {
        logger.log(`ContainerRisks with filter ${JSON.stringify(filter)} and dynamicRisks ${JSON.stringify(risks)}`);
        return this.shipmentRiskService.getContainerRisks(filter, risks, affiliation);
    }
};
__decorate([
    graphql_1.Query(() => shipment_risk_type_1.ShipmentRiskType),
    common_1.UseGuards(new auth_gql_guard_1.GQLAuthGuard()),
    __param(0, graphql_1.Context('userAffiliation')),
    __param(1, graphql_1.Args('filter')),
    __param(2, graphql_1.Args('dynamicRisks', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_affiliation_dto_1.UserAffiliationDto,
        filter_order_with_exception_dto_1.FilterOrderWithExceptionDto,
        dynamic_risk_dto_1.DynamicRiskDto]),
    __metadata("design:returntype", Promise)
], ShipmentRiskResolver.prototype, "shipmentRisks", null);
__decorate([
    graphql_1.Query(() => container_risk_type_1.ContainerRiskType),
    common_1.UseGuards(new auth_gql_guard_1.GQLAuthGuard()),
    __param(0, graphql_1.Context('userAffiliation')),
    __param(1, graphql_1.Args('filter')),
    __param(2, graphql_1.Args('dynamicRisks', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_affiliation_dto_1.UserAffiliationDto,
        filter_container_with_exception_dto_1.FilterContainerWithExceptionDto,
        dynamic_risk_dto_1.DynamicRiskDto]),
    __metadata("design:returntype", Promise)
], ShipmentRiskResolver.prototype, "containerRisks", null);
ShipmentRiskResolver = __decorate([
    graphql_1.Resolver((of) => shipment_risk_type_1.ShipmentRiskType),
    __metadata("design:paramtypes", [shipment_risk_service_1.ShipmentRiskService])
], ShipmentRiskResolver);
exports.ShipmentRiskResolver = ShipmentRiskResolver;
//# sourceMappingURL=shipment-risk.resolver.js.map