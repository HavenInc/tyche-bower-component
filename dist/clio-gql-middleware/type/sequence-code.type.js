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
const status_code_type_1 = require("./status-code.type");
let SequenceCodeType = class SequenceCodeType {
};
__decorate([
    graphql_1.Field(type => graphql_1.ID),
    __metadata("design:type", Number)
], SequenceCodeType.prototype, "id", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], SequenceCodeType.prototype, "value", void 0);
__decorate([
    graphql_1.Field(type => [status_code_type_1.StatusCodeType]),
    __metadata("design:type", Array)
], SequenceCodeType.prototype, "statusCodes", void 0);
SequenceCodeType = __decorate([
    graphql_1.ObjectType('SequenceCode')
], SequenceCodeType);
exports.SequenceCodeType = SequenceCodeType;
//# sourceMappingURL=sequence-code.type.js.map