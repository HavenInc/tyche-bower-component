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
const typeorm_1 = require("typeorm");
const graphql_1 = require("@nestjs/graphql");
const status_code_clio_entity_1 = require("./status-code.clio.entity");
let SequenceCode = class SequenceCode {
};
__decorate([
    graphql_1.Field((type) => graphql_1.ID),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", Number)
], SequenceCode.prototype, "id", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], SequenceCode.prototype, "value", void 0);
__decorate([
    graphql_1.Field((type) => [status_code_clio_entity_1.StatusCode]),
    typeorm_1.ManyToOne((type) => status_code_clio_entity_1.StatusCode, (statusCode) => statusCode.sequenceCode),
    typeorm_1.JoinColumn({ name: 'id' }),
    __metadata("design:type", Array)
], SequenceCode.prototype, "statusCodes", void 0);
SequenceCode = __decorate([
    graphql_1.ObjectType('SequenceCode'),
    typeorm_1.Entity({ name: 'SequenceCode' })
], SequenceCode);
exports.SequenceCode = SequenceCode;
//# sourceMappingURL=sequence-code.clio.entity.js.map