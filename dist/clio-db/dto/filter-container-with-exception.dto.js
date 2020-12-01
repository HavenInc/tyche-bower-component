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
var ContainerSortColumn;
(function (ContainerSortColumn) {
    ContainerSortColumn[ContainerSortColumn["ORDER"] = 0] = "ORDER";
    ContainerSortColumn[ContainerSortColumn["CARRIER"] = 1] = "CARRIER";
    ContainerSortColumn[ContainerSortColumn["BL"] = 2] = "BL";
    ContainerSortColumn[ContainerSortColumn["BOOKING"] = 3] = "BOOKING";
    ContainerSortColumn[ContainerSortColumn["CONTAINER"] = 4] = "CONTAINER";
    ContainerSortColumn[ContainerSortColumn["EQUIPMENT"] = 5] = "EQUIPMENT";
    ContainerSortColumn[ContainerSortColumn["LAST_UPDATED"] = 6] = "LAST_UPDATED";
    ContainerSortColumn[ContainerSortColumn["ARRIVAL"] = 7] = "ARRIVAL";
    ContainerSortColumn[ContainerSortColumn["DEPARTURE"] = 8] = "DEPARTURE";
})(ContainerSortColumn = exports.ContainerSortColumn || (exports.ContainerSortColumn = {}));
graphql_1.registerEnumType(ContainerSortColumn, {
    name: 'ContainerSortColumn',
});
let ContainerSortBy = class ContainerSortBy {
    constructor() {
        this.column = ContainerSortColumn.ORDER;
        this.asc = false;
    }
};
__decorate([
    graphql_1.Field(() => ContainerSortColumn),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], ContainerSortBy.prototype, "column", void 0);
__decorate([
    graphql_1.Field(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Boolean)
], ContainerSortBy.prototype, "asc", void 0);
ContainerSortBy = __decorate([
    graphql_1.InputType()
], ContainerSortBy);
exports.ContainerSortBy = ContainerSortBy;
let FilterContainerWithExceptionDto = class FilterContainerWithExceptionDto extends filter_with_exception_dto_1.FilterWithExceptionDto {
    constructor() {
        super(...arguments);
        this.containerSortBy = new ContainerSortBy();
        this.containerIds = [];
    }
};
__decorate([
    graphql_1.Field(),
    class_validator_1.IsOptional(),
    __metadata("design:type", ContainerSortBy)
], FilterContainerWithExceptionDto.prototype, "containerSortBy", void 0);
__decorate([
    graphql_1.Field(() => [graphql_1.Int]),
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], FilterContainerWithExceptionDto.prototype, "containerIds", void 0);
FilterContainerWithExceptionDto = __decorate([
    graphql_1.InputType('ContainerRiskInputType')
], FilterContainerWithExceptionDto);
exports.FilterContainerWithExceptionDto = FilterContainerWithExceptionDto;
//# sourceMappingURL=filter-container-with-exception.dto.js.map