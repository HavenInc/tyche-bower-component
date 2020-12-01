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
const class_validator_1 = require("class-validator");
const graphql_1 = require("@nestjs/graphql");
const filter_order_with_exception_dto_1 = require("../../clio-db/dto/filter-order-with-exception.dto");
graphql_1.registerEnumType(filter_order_with_exception_dto_1.ShipmentSortColumn, {
    name: 'ShipmentSortColumn',
});
let ShipmentSortBy = class ShipmentSortBy {
    constructor() {
        this.column = filter_order_with_exception_dto_1.ShipmentSortColumn.ORDER;
        this.asc = false;
    }
};
__decorate([
    class_validator_1.IsNotEmpty(),
    graphql_1.Field(() => filter_order_with_exception_dto_1.ShipmentSortColumn),
    __metadata("design:type", Number)
], ShipmentSortBy.prototype, "column", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    graphql_1.Field(),
    __metadata("design:type", Boolean)
], ShipmentSortBy.prototype, "asc", void 0);
ShipmentSortBy = __decorate([
    graphql_1.InputType()
], ShipmentSortBy);
exports.ShipmentSortBy = ShipmentSortBy;
let ShipmentRiskInputType = class ShipmentRiskInputType {
    constructor() {
        this.exceptionCodes = [];
        this.orderIds = [];
        this.shipmentSortBy = new ShipmentSortBy();
    }
};
__decorate([
    class_validator_1.IsNotEmpty(),
    graphql_1.Field(() => [graphql_1.Int]),
    __metadata("design:type", Array)
], ShipmentRiskInputType.prototype, "exceptionCodes", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], ShipmentRiskInputType.prototype, "skip", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], ShipmentRiskInputType.prototype, "take", void 0);
__decorate([
    graphql_1.Field(() => [graphql_1.Int]),
    __metadata("design:type", Array)
], ShipmentRiskInputType.prototype, "orderIds", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], ShipmentRiskInputType.prototype, "search", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    graphql_1.Field(),
    __metadata("design:type", ShipmentSortBy)
], ShipmentRiskInputType.prototype, "shipmentSortBy", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Date)
], ShipmentRiskInputType.prototype, "arrival", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Date)
], ShipmentRiskInputType.prototype, "departure", void 0);
ShipmentRiskInputType = __decorate([
    graphql_1.InputType()
], ShipmentRiskInputType);
exports.ShipmentRiskInputType = ShipmentRiskInputType;
//# sourceMappingURL=shipment-risk-input.type.js.map