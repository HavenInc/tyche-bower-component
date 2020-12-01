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
const swagger_1 = require("@nestjs/swagger");
let AuthInput = class AuthInput {
};
__decorate([
    swagger_1.ApiProperty(),
    graphql_1.Field(),
    __metadata("design:type", String)
], AuthInput.prototype, "proteusToken", void 0);
__decorate([
    swagger_1.ApiProperty(),
    graphql_1.Field(() => graphql_1.Int),
    __metadata("design:type", Number)
], AuthInput.prototype, "orgId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    graphql_1.Field(),
    __metadata("design:type", String)
], AuthInput.prototype, "key", void 0);
__decorate([
    swagger_1.ApiProperty(),
    graphql_1.Field(),
    __metadata("design:type", String)
], AuthInput.prototype, "authHost", void 0);
AuthInput = __decorate([
    graphql_1.InputType()
], AuthInput);
exports.AuthInput = AuthInput;
//# sourceMappingURL=auth-input.type.js.map