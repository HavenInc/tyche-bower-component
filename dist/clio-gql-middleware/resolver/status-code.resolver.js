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
const status_code_clio_entity_1 = require("../../clio-db/models/status-code.clio.entity");
const sequence_code_service_1 = require("../../clio-db/service/sequence-code.service");
let StatusCodeResolver = class StatusCodeResolver {
    constructor(sequenceCodeService) {
        this.sequenceCodeService = sequenceCodeService;
    }
    async sequenceCode(statusCode) {
        if (statusCode.sequence)
            return statusCode.sequence;
        return this.sequenceCodeService.getSequenceCodeById(statusCode.sequenceCode);
    }
};
__decorate([
    graphql_1.ResolveField(),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [status_code_clio_entity_1.StatusCode]),
    __metadata("design:returntype", Promise)
], StatusCodeResolver.prototype, "sequenceCode", null);
StatusCodeResolver = __decorate([
    graphql_1.Resolver(of => status_code_clio_entity_1.StatusCode),
    __metadata("design:paramtypes", [sequence_code_service_1.SequenceCodeService])
], StatusCodeResolver);
exports.StatusCodeResolver = StatusCodeResolver;
//# sourceMappingURL=status-code.resolver.js.map