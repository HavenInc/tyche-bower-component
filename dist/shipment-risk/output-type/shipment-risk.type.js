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
const graphql_1 = require("@nestjs/graphql");
const tracked_order_clio_entity_1 = require("../../clio-db/models/tracked-order.clio.entity");
let ShipmentRiskType = class ShipmentRiskType {
};
__decorate([
    graphql_1.Field(() => graphql_1.Int),
    __metadata("design:type", Number)
], ShipmentRiskType.prototype, "count", void 0);
__decorate([
    graphql_1.Field((type) => [tracked_order_clio_entity_1.TrackedOrder], { nullable: true }),
    __metadata("design:type", Array)
], ShipmentRiskType.prototype, "shipmentRisks", void 0);
ShipmentRiskType = __decorate([
    graphql_1.ObjectType('ShipmentRisk')
], ShipmentRiskType);
exports.ShipmentRiskType = ShipmentRiskType;
//# sourceMappingURL=shipment-risk.type.js.map