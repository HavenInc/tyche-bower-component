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
const tracked_event_clio_entity_1 = require("./tracked-event.clio.entity");
let ExceptionCode = class ExceptionCode {
};
__decorate([
    graphql_1.Field((type) => graphql_1.ID),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ExceptionCode.prototype, "id", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], ExceptionCode.prototype, "value", void 0);
__decorate([
    graphql_1.Field((type) => [tracked_event_clio_entity_1.TrackedEvent], { nullable: true }),
    typeorm_1.OneToMany((type) => tracked_event_clio_entity_1.TrackedEvent, (trackedEvent) => trackedEvent.exceptionCode),
    typeorm_1.JoinColumn({ name: 'id' }),
    __metadata("design:type", Array)
], ExceptionCode.prototype, "events", void 0);
ExceptionCode = __decorate([
    graphql_1.ObjectType('ExceptionCode'),
    typeorm_1.Entity({ name: 'ExceptionCode' })
], ExceptionCode);
exports.ExceptionCode = ExceptionCode;
//# sourceMappingURL=exception-code.clio.entity.js.map