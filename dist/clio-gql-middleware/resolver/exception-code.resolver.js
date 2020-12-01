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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
const exception_code_service_1 = require("../../clio-db/service/exception-code.service");
const exception_code_clio_entity_1 = require("../../clio-db/models/exception-code.clio.entity");
const common_1 = require("@nestjs/common");
const logger = new common_1.Logger('ExceptionCode');
let ExceptionCodeResolver = class ExceptionCodeResolver {
    constructor(exceptionCodeService) {
        this.exceptionCodeService = exceptionCodeService;
    }
    async exceptionCodes() {
        logger.log(`ExceptionCodes()`);
        return this.exceptionCodeService.getExceptionCodes();
    }
    async exceptionCode(id) {
        logger.log(`ExceptionCode with Id: ${id}`);
        return this.exceptionCodeService.getExceptionCodeById(id);
    }
};
__decorate([
    graphql_1.Query(returns => [exception_code_clio_entity_1.ExceptionCode]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExceptionCodeResolver.prototype, "exceptionCodes", null);
__decorate([
    graphql_1.Query(returns => exception_code_clio_entity_1.ExceptionCode),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ExceptionCodeResolver.prototype, "exceptionCode", null);
ExceptionCodeResolver = __decorate([
    graphql_1.Resolver(of => exception_code_clio_entity_1.ExceptionCode),
    __metadata("design:paramtypes", [exception_code_service_1.ExceptionCodeService])
], ExceptionCodeResolver);
exports.ExceptionCodeResolver = ExceptionCodeResolver;
//# sourceMappingURL=exception-code.resolver.js.map