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
const tracked_order_clio_entity_1 = require("./tracked-order.clio.entity");
const tracked_container_clio_entity_1 = require("./tracked-container.clio.entity");
const tracked_event_clio_entity_1 = require("./tracked-event.clio.entity");
let TrackedOrderContainer = class TrackedOrderContainer {
};
__decorate([
    graphql_1.Field(() => graphql_1.ID),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], TrackedOrderContainer.prototype, "id", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], TrackedOrderContainer.prototype, "trackedContainer", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], TrackedOrderContainer.prototype, "trackedOrder", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], TrackedOrderContainer.prototype, "visibility", void 0);
__decorate([
    graphql_1.Field(type => tracked_container_clio_entity_1.TrackedContainer, { nullable: true }),
    typeorm_1.OneToOne(type => tracked_container_clio_entity_1.TrackedContainer, trackedContainer => trackedContainer.trackedOrderContainer),
    typeorm_1.JoinColumn({ name: 'trackedContainer' }),
    __metadata("design:type", tracked_container_clio_entity_1.TrackedContainer)
], TrackedOrderContainer.prototype, "container", void 0);
__decorate([
    graphql_1.Field(type => tracked_order_clio_entity_1.TrackedOrder, { nullable: true }),
    typeorm_1.ManyToOne(type => tracked_order_clio_entity_1.TrackedOrder, trackedOrder => trackedOrder.trackedOrderContainers),
    typeorm_1.JoinColumn({ name: 'trackedOrder' }),
    __metadata("design:type", tracked_order_clio_entity_1.TrackedOrder)
], TrackedOrderContainer.prototype, "order", void 0);
__decorate([
    graphql_1.Field(type => [tracked_event_clio_entity_1.TrackedEvent], { nullable: true }),
    typeorm_1.OneToMany(type => tracked_event_clio_entity_1.TrackedEvent, trackedEvent => trackedEvent.trackedOrderContainer),
    __metadata("design:type", Array)
], TrackedOrderContainer.prototype, "trackedEvents", void 0);
TrackedOrderContainer = __decorate([
    graphql_1.ObjectType('TrackedOrderContainer'),
    typeorm_1.Entity({ name: 'TrackedOrderContainer' })
], TrackedOrderContainer);
exports.TrackedOrderContainer = TrackedOrderContainer;
//# sourceMappingURL=tracked-order-container.clio.entity.js.map