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
const tracked_order_container_clio_entity_1 = require("../../clio-db/models/tracked-order-container.clio.entity");
let ContainerRiskType = class ContainerRiskType {
};
__decorate([
    graphql_1.Field(() => graphql_1.Int),
    __metadata("design:type", Number)
], ContainerRiskType.prototype, "count", void 0);
__decorate([
    graphql_1.Field((type) => [tracked_order_container_clio_entity_1.TrackedOrderContainer], { nullable: true }),
    __metadata("design:type", Array)
], ContainerRiskType.prototype, "containerRisks", void 0);
ContainerRiskType = __decorate([
    graphql_1.ObjectType('ContainerRisk')
], ContainerRiskType);
exports.ContainerRiskType = ContainerRiskType;
//# sourceMappingURL=container-risk.type.js.map