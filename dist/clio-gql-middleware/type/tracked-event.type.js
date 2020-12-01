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
const tracked_order_container_type_1 = require("./tracked-order-container.type");
const tracked_container_type_1 = require("./tracked-container.type");
const exception_code_type_1 = require("./exception-code.type");
const status_code_type_1 = require("./status-code.type");
let TrackedEventType = class TrackedEventType {
};
__decorate([
    graphql_1.Field((type) => graphql_1.ID),
    __metadata("design:type", Number)
], TrackedEventType.prototype, "id", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], TrackedEventType.prototype, "trackedContainer", void 0);
__decorate([
    graphql_1.Field((type) => tracked_container_type_1.TrackedContainerType, { nullable: true }),
    __metadata("design:type", tracked_container_type_1.TrackedContainerType)
], TrackedEventType.prototype, "container", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], TrackedEventType.prototype, "updatedAt", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], TrackedEventType.prototype, "actual", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], TrackedEventType.prototype, "planned", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], TrackedEventType.prototype, "providerLocation", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], TrackedEventType.prototype, "providerVessel", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], TrackedEventType.prototype, "providerVoyage", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], TrackedEventType.prototype, "providerStatus", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], TrackedEventType.prototype, "providerContents", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", Number)
], TrackedEventType.prototype, "exceptionCode", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", Number)
], TrackedEventType.prototype, "statusCode", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", Number)
], TrackedEventType.prototype, "sourceCode", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], TrackedEventType.prototype, "notes", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], TrackedEventType.prototype, "orderContainer", void 0);
__decorate([
    graphql_1.Field((type) => tracked_order_container_type_1.TrackedOrderContainerType, { nullable: true }),
    __metadata("design:type", tracked_order_container_type_1.TrackedOrderContainerType)
], TrackedEventType.prototype, "trackedOrderContainer", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Boolean)
], TrackedEventType.prototype, "visibility", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], TrackedEventType.prototype, "timezone", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], TrackedEventType.prototype, "havenPortId", void 0);
__decorate([
    graphql_1.Field((type) => exception_code_type_1.ExceptionCodeType, { nullable: true }),
    __metadata("design:type", exception_code_type_1.ExceptionCodeType)
], TrackedEventType.prototype, "exception", void 0);
__decorate([
    graphql_1.Field((type) => status_code_type_1.StatusCodeType, { nullable: true }),
    __metadata("design:type", status_code_type_1.StatusCodeType)
], TrackedEventType.prototype, "status", void 0);
TrackedEventType = __decorate([
    graphql_1.ObjectType('TrackedEvent')
], TrackedEventType);
exports.TrackedEventType = TrackedEventType;
//# sourceMappingURL=tracked-event.type.js.map