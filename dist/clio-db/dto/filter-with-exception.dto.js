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
const class_transformer_1 = require("class-transformer");
const graphql_1 = require("@nestjs/graphql");
let FilterWithExceptionDto = class FilterWithExceptionDto {
    constructor() {
        this.exceptionCodes = [];
        this.orderIds = [];
    }
};
__decorate([
    graphql_1.Field(() => [graphql_1.Int]),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Array)
], FilterWithExceptionDto.prototype, "exceptionCodes", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { nullable: true }),
    class_transformer_1.Transform((number) => parseInt(number), { toClassOnly: true }),
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], FilterWithExceptionDto.prototype, "skip", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { nullable: true }),
    class_validator_1.IsOptional(),
    class_transformer_1.Transform((number) => parseInt(number), { toClassOnly: true }),
    __metadata("design:type", Number)
], FilterWithExceptionDto.prototype, "take", void 0);
__decorate([
    graphql_1.Field(() => [graphql_1.Int]),
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], FilterWithExceptionDto.prototype, "orderIds", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], FilterWithExceptionDto.prototype, "search", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    class_validator_1.IsDate(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Date)
], FilterWithExceptionDto.prototype, "arrival", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    class_validator_1.IsDate(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Date)
], FilterWithExceptionDto.prototype, "departure", void 0);
__decorate([
    graphql_1.Field(() => [String], { nullable: true }),
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], FilterWithExceptionDto.prototype, "havenStatus", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    class_validator_1.IsOptional(),
    __metadata("design:type", Boolean)
], FilterWithExceptionDto.prototype, "forCsv", void 0);
FilterWithExceptionDto = __decorate([
    graphql_1.InputType()
], FilterWithExceptionDto);
exports.FilterWithExceptionDto = FilterWithExceptionDto;
//# sourceMappingURL=filter-with-exception.dto.js.map