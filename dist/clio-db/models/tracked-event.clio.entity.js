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
const tracked_container_clio_entity_1 = require("./tracked-container.clio.entity");
const tracked_order_container_clio_entity_1 = require("./tracked-order-container.clio.entity");
const exception_code_clio_entity_1 = require("./exception-code.clio.entity");
const status_code_clio_entity_1 = require("./status-code.clio.entity");
let TrackedEvent = class TrackedEvent {
};
__decorate([
    graphql_1.Field((type) => graphql_1.ID),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], TrackedEvent.prototype, "id", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], TrackedEvent.prototype, "trackedContainer", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", String)
], TrackedEvent.prototype, "updatedAt", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ type: 'timestamp' }),
    __metadata("design:type", Date)
], TrackedEvent.prototype, "actual", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ type: 'timestamp' }),
    __metadata("design:type", Date)
], TrackedEvent.prototype, "planned", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], TrackedEvent.prototype, "providerLocation", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], TrackedEvent.prototype, "providerVessel", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], TrackedEvent.prototype, "providerVoyage", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], TrackedEvent.prototype, "providerStatus", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], TrackedEvent.prototype, "providerContents", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], TrackedEvent.prototype, "exceptionCode", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], TrackedEvent.prototype, "statusCode", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], TrackedEvent.prototype, "sourceCode", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], TrackedEvent.prototype, "notes", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], TrackedEvent.prototype, "orderContainer", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column({ default: true }),
    __metadata("design:type", Boolean)
], TrackedEvent.prototype, "visibility", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], TrackedEvent.prototype, "timezone", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], TrackedEvent.prototype, "havenPortId", void 0);
__decorate([
    graphql_1.Field((type) => tracked_container_clio_entity_1.TrackedContainer, { nullable: true }),
    typeorm_1.ManyToOne(type => tracked_container_clio_entity_1.TrackedContainer, trackedContainer => trackedContainer.trackedEvents),
    typeorm_1.JoinColumn({ name: 'trackedContainer' }),
    __metadata("design:type", tracked_container_clio_entity_1.TrackedContainer)
], TrackedEvent.prototype, "container", void 0);
__decorate([
    graphql_1.Field((type) => tracked_order_container_clio_entity_1.TrackedOrderContainer, { nullable: true }),
    typeorm_1.ManyToOne(type => tracked_order_container_clio_entity_1.TrackedOrderContainer, trackedOrderContainer => trackedOrderContainer.trackedEvents),
    typeorm_1.JoinColumn({ name: 'orderContainer' }),
    __metadata("design:type", tracked_order_container_clio_entity_1.TrackedOrderContainer)
], TrackedEvent.prototype, "trackedOrderContainer", void 0);
__decorate([
    graphql_1.Field((type) => status_code_clio_entity_1.StatusCode, { nullable: true }),
    typeorm_1.ManyToOne(type => status_code_clio_entity_1.StatusCode, statusCode => statusCode.id),
    typeorm_1.JoinColumn({ name: 'statusCode' }),
    __metadata("design:type", status_code_clio_entity_1.StatusCode)
], TrackedEvent.prototype, "status", void 0);
__decorate([
    graphql_1.Field((type) => exception_code_clio_entity_1.ExceptionCode, { nullable: true }),
    typeorm_1.ManyToOne(type => exception_code_clio_entity_1.ExceptionCode, exceptionCode => exceptionCode.id),
    typeorm_1.JoinColumn({ name: 'exceptionCode' }),
    __metadata("design:type", exception_code_clio_entity_1.ExceptionCode)
], TrackedEvent.prototype, "exception", void 0);
TrackedEvent = __decorate([
    graphql_1.ObjectType('TrackedEvent'),
    typeorm_1.Entity({ name: 'TrackedEvent' })
], TrackedEvent);
exports.TrackedEvent = TrackedEvent;
//# sourceMappingURL=tracked-event.clio.entity.js.map