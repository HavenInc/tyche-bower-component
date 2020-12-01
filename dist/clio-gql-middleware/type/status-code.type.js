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
const sequence_code_type_1 = require("./sequence-code.type");
let StatusCodeType = class StatusCodeType {
};
__decorate([
    graphql_1.Field(type => graphql_1.ID),
    __metadata("design:type", Number)
], StatusCodeType.prototype, "id", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], StatusCodeType.prototype, "value", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], StatusCodeType.prototype, "edi_code", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], StatusCodeType.prototype, "loaded_status", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], StatusCodeType.prototype, "sequenceCode", void 0);
__decorate([
    graphql_1.Field(type => sequence_code_type_1.SequenceCodeType, { nullable: true }),
    __metadata("design:type", sequence_code_type_1.SequenceCodeType)
], StatusCodeType.prototype, "sequence", void 0);
StatusCodeType = __decorate([
    graphql_1.ObjectType('StatusCode')
], StatusCodeType);
exports.StatusCodeType = StatusCodeType;
//# sourceMappingURL=status-code.type.js.map