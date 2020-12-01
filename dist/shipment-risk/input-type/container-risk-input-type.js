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
const class_validator_1 = require("class-validator");
const filter_container_with_exception_dto_1 = require("../../clio-db/dto/filter-container-with-exception.dto");
graphql_1.registerEnumType(filter_container_with_exception_dto_1.ContainerSortColumn, {
    name: 'ContainerSortColumn',
});
let ContainerSortBy = class ContainerSortBy {
};
__decorate([
    graphql_1.Field(() => filter_container_with_exception_dto_1.ContainerSortColumn),
    __metadata("design:type", Number)
], ContainerSortBy.prototype, "column", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Boolean)
], ContainerSortBy.prototype, "asc", void 0);
ContainerSortBy = __decorate([
    graphql_1.InputType()
], ContainerSortBy);
exports.ContainerSortBy = ContainerSortBy;
let ContainerRiskInputType = class ContainerRiskInputType {
    constructor() {
        this.exceptionCodes = [];
        this.orderIds = [];
    }
};
__decorate([
    graphql_1.Field(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], ContainerRiskInputType.prototype, "orgId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    graphql_1.Field(() => [graphql_1.Int]),
    __metadata("design:type", Array)
], ContainerRiskInputType.prototype, "exceptionCodes", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], ContainerRiskInputType.prototype, "skip", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], ContainerRiskInputType.prototype, "take", void 0);
__decorate([
    graphql_1.Field(() => [graphql_1.Int]),
    __metadata("design:type", Array)
], ContainerRiskInputType.prototype, "orderIds", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], ContainerRiskInputType.prototype, "search", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", ContainerSortBy)
], ContainerRiskInputType.prototype, "containerSortBy", void 0);
ContainerRiskInputType = __decorate([
    graphql_1.InputType()
], ContainerRiskInputType);
exports.ContainerRiskInputType = ContainerRiskInputType;
//# sourceMappingURL=container-risk-input-type.js.map