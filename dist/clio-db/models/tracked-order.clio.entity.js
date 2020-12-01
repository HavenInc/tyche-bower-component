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
const typeorm_1 = require("typeorm");
const graphql_1 = require("@nestjs/graphql");
const tracked_order_container_clio_entity_1 = require("./tracked-order-container.clio.entity");
const carrier_code_clio_entity_1 = require("./carrier-code.clio.entity");
let TrackedOrder = class TrackedOrder {
};
__decorate([
    graphql_1.Field((type) => graphql_1.ID),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], TrackedOrder.prototype, "id", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], TrackedOrder.prototype, "havenOrderId", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], TrackedOrder.prototype, "carrierCode", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], TrackedOrder.prototype, "havenStatus", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], TrackedOrder.prototype, "carrierBookingNum", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], TrackedOrder.prototype, "billOfLadingNum", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", Date)
], TrackedOrder.prototype, "nextMove", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", Date)
], TrackedOrder.prototype, "departure", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", Date)
], TrackedOrder.prototype, "arrival", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", String)
], TrackedOrder.prototype, "updatedAt", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], TrackedOrder.prototype, "customerOrgId", void 0);
__decorate([
    graphql_1.Field((type) => [tracked_order_container_clio_entity_1.TrackedOrderContainer], { nullable: true }),
    typeorm_1.OneToMany((type) => tracked_order_container_clio_entity_1.TrackedOrderContainer, (trackedOrderContainer) => trackedOrderContainer.order),
    __metadata("design:type", Array)
], TrackedOrder.prototype, "trackedOrderContainers", void 0);
__decorate([
    graphql_1.Field((type) => carrier_code_clio_entity_1.CarrierCode, { nullable: true }),
    typeorm_1.OneToOne((type) => carrier_code_clio_entity_1.CarrierCode, (carrierCode) => carrierCode.id),
    typeorm_1.JoinColumn({ name: 'carrierCode' }),
    __metadata("design:type", carrier_code_clio_entity_1.CarrierCode)
], TrackedOrder.prototype, "carrier", void 0);
TrackedOrder = __decorate([
    graphql_1.ObjectType('TrackedOrder'),
    typeorm_1.Entity({ name: 'TrackedOrder' })
], TrackedOrder);
exports.TrackedOrder = TrackedOrder;
//# sourceMappingURL=tracked-order.clio.entity.js.map