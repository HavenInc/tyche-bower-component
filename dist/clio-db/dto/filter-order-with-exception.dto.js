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
const filter_with_exception_dto_1 = require("./filter-with-exception.dto");
const graphql_1 = require("@nestjs/graphql");
var ShipmentSortColumn;
(function (ShipmentSortColumn) {
    ShipmentSortColumn[ShipmentSortColumn["ORDER"] = 0] = "ORDER";
    ShipmentSortColumn[ShipmentSortColumn["STATUS"] = 1] = "STATUS";
    ShipmentSortColumn[ShipmentSortColumn["BL"] = 2] = "BL";
    ShipmentSortColumn[ShipmentSortColumn["BOOKING"] = 3] = "BOOKING";
    ShipmentSortColumn[ShipmentSortColumn["CARRIER"] = 4] = "CARRIER";
    ShipmentSortColumn[ShipmentSortColumn["ARRIVAL"] = 5] = "ARRIVAL";
    ShipmentSortColumn[ShipmentSortColumn["DEPARTURE"] = 6] = "DEPARTURE";
})(ShipmentSortColumn = exports.ShipmentSortColumn || (exports.ShipmentSortColumn = {}));
graphql_1.registerEnumType(ShipmentSortColumn, {
    name: 'ShipmentSortColumn',
});
let ShipmentSortBy = class ShipmentSortBy {
    constructor() {
        this.column = ShipmentSortColumn.ORDER;
        this.asc = false;
    }
};
__decorate([
    class_validator_1.IsNotEmpty(),
    graphql_1.Field(() => ShipmentSortColumn),
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
let FilterOrderWithExceptionDto = class FilterOrderWithExceptionDto extends filter_with_exception_dto_1.FilterWithExceptionDto {
    constructor() {
        super(...arguments);
        this.shipmentSortBy = new ShipmentSortBy();
    }
};
__decorate([
    class_validator_1.IsNotEmpty(),
    graphql_1.Field(),
    __metadata("design:type", ShipmentSortBy)
], FilterOrderWithExceptionDto.prototype, "shipmentSortBy", void 0);
FilterOrderWithExceptionDto = __decorate([
    graphql_1.InputType('ShipmentRiskInputType')
], FilterOrderWithExceptionDto);
exports.FilterOrderWithExceptionDto = FilterOrderWithExceptionDto;
//# sourceMappingURL=filter-order-with-exception.dto.js.map