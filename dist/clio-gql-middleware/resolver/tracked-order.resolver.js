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
const tracked_order_clio_entity_1 = require("../../clio-db/models/tracked-order.clio.entity");
const carrier_code_service_1 = require("../../clio-db/service/carrier-code.service");
const common_1 = require("@nestjs/common");
const auth_gql_guard_1 = require("../../auth/auth.gql.guard");
const user_affiliation_dto_1 = require("../../clio-db/dto/user-affiliation.dto");
const tracked_order_service_1 = require("../../clio-db/service/tracked-order.service");
let TrackedOrderResolver = class TrackedOrderResolver {
    constructor(carrierCodeService, trackedOrderService) {
        this.carrierCodeService = carrierCodeService;
        this.trackedOrderService = trackedOrderService;
    }
    async orderIdsWithRisk(affiliation) {
        return this.trackedOrderService.getHavenOrderIdsWithRisk(affiliation.orgId);
    }
    async orderIds(affiliation) {
        return this.trackedOrderService.getHavenOrderIds(affiliation.orgId);
    }
    async trackedOrderContainers(trackedOrder) {
        return trackedOrder.trackedOrderContainers;
    }
    async carrier(trackedOrder) {
        if (trackedOrder.carrier)
            return trackedOrder.carrier;
        return this.carrierCodeService.getCarrierCodeById(trackedOrder.carrierCode);
    }
};
__decorate([
    graphql_1.Query(returns => [graphql_1.Int]),
    common_1.UseGuards(new auth_gql_guard_1.GQLAuthGuard()),
    __param(0, graphql_1.Context('userAffiliation')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_affiliation_dto_1.UserAffiliationDto]),
    __metadata("design:returntype", Promise)
], TrackedOrderResolver.prototype, "orderIdsWithRisk", null);
__decorate([
    graphql_1.Query(returns => [graphql_1.Int]),
    common_1.UseGuards(new auth_gql_guard_1.GQLAuthGuard()),
    __param(0, graphql_1.Context('userAffiliation')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_affiliation_dto_1.UserAffiliationDto]),
    __metadata("design:returntype", Promise)
], TrackedOrderResolver.prototype, "orderIds", null);
__decorate([
    graphql_1.ResolveField(),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tracked_order_clio_entity_1.TrackedOrder]),
    __metadata("design:returntype", Promise)
], TrackedOrderResolver.prototype, "trackedOrderContainers", null);
__decorate([
    graphql_1.ResolveField(),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tracked_order_clio_entity_1.TrackedOrder]),
    __metadata("design:returntype", Promise)
], TrackedOrderResolver.prototype, "carrier", null);
TrackedOrderResolver = __decorate([
    graphql_1.Resolver((of) => tracked_order_clio_entity_1.TrackedOrder),
    __metadata("design:paramtypes", [carrier_code_service_1.CarrierCodeService,
        tracked_order_service_1.TrackedOrderService])
], TrackedOrderResolver);
exports.TrackedOrderResolver = TrackedOrderResolver;
//# sourceMappingURL=tracked-order.resolver.js.map