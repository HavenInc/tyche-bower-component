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
const tracked_order_container_type_1 = require("./tracked-order-container.type");
const carrier_code_clio_entity_1 = require("../../clio-db/models/carrier-code.clio.entity");
let TrackedOrderType = class TrackedOrderType {
};
__decorate([
    graphql_1.Field((type) => graphql_1.ID),
    __metadata("design:type", Number)
], TrackedOrderType.prototype, "id", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], TrackedOrderType.prototype, "havenOrderId", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], TrackedOrderType.prototype, "carrierCode", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], TrackedOrderType.prototype, "carrierBookingNum", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], TrackedOrderType.prototype, "billOfLadingNum", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", Date)
], TrackedOrderType.prototype, "nextMove", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", Date)
], TrackedOrderType.prototype, "departure", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", Date)
], TrackedOrderType.prototype, "arrival", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], TrackedOrderType.prototype, "updatedAt", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], TrackedOrderType.prototype, "customerOrgId", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], TrackedOrderType.prototype, "havenStatus", void 0);
__decorate([
    graphql_1.Field((type) => [tracked_order_container_type_1.TrackedOrderContainerType], { nullable: true }),
    __metadata("design:type", Array)
], TrackedOrderType.prototype, "trackedOrderContainers", void 0);
__decorate([
    graphql_1.Field((type) => carrier_code_clio_entity_1.CarrierCode, { nullable: true }),
    __metadata("design:type", carrier_code_clio_entity_1.CarrierCode)
], TrackedOrderType.prototype, "carrier", void 0);
TrackedOrderType = __decorate([
    graphql_1.ObjectType('TrackedOrder')
], TrackedOrderType);
exports.TrackedOrderType = TrackedOrderType;
//# sourceMappingURL=tracked-order.type.js.map