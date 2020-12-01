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
const tracked_container_type_1 = require("./tracked-container.type");
const tracked_order_type_1 = require("./tracked-order.type");
const tracked_event_type_1 = require("./tracked-event.type");
let TrackedOrderContainerType = class TrackedOrderContainerType {
};
__decorate([
    graphql_1.Field(() => graphql_1.ID),
    __metadata("design:type", Number)
], TrackedOrderContainerType.prototype, "id", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], TrackedOrderContainerType.prototype, "trackedOrder", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], TrackedOrderContainerType.prototype, "trackedContainer", void 0);
__decorate([
    graphql_1.Field(type => tracked_order_type_1.TrackedOrderType, { nullable: true }),
    __metadata("design:type", tracked_order_type_1.TrackedOrderType)
], TrackedOrderContainerType.prototype, "order", void 0);
__decorate([
    graphql_1.Field(type => tracked_container_type_1.TrackedContainerType, { nullable: true }),
    __metadata("design:type", tracked_container_type_1.TrackedContainerType)
], TrackedOrderContainerType.prototype, "container", void 0);
__decorate([
    graphql_1.Field(type => [tracked_event_type_1.TrackedEventType], { nullable: true }),
    __metadata("design:type", Array)
], TrackedOrderContainerType.prototype, "trackedEvents", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Boolean)
], TrackedOrderContainerType.prototype, "visibility", void 0);
TrackedOrderContainerType = __decorate([
    graphql_1.ObjectType('TrackedOrderContainer')
], TrackedOrderContainerType);
exports.TrackedOrderContainerType = TrackedOrderContainerType;
//# sourceMappingURL=tracked-order-container.type.js.map