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
const tracked_order_container_clio_entity_1 = require("./tracked-order-container.clio.entity");
const tracked_event_clio_entity_1 = require("./tracked-event.clio.entity");
let TrackedContainer = class TrackedContainer {
};
__decorate([
    graphql_1.Field(type => graphql_1.ID),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], TrackedContainer.prototype, "id", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], TrackedContainer.prototype, "containerId", void 0);
__decorate([
    graphql_1.Field({ nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], TrackedContainer.prototype, "type", void 0);
__decorate([
    graphql_1.Field(type => tracked_order_container_clio_entity_1.TrackedOrderContainer),
    typeorm_1.OneToOne(type => tracked_order_container_clio_entity_1.TrackedOrderContainer, trackedOrderContainer => trackedOrderContainer.container),
    __metadata("design:type", tracked_order_container_clio_entity_1.TrackedOrderContainer)
], TrackedContainer.prototype, "trackedOrderContainer", void 0);
__decorate([
    graphql_1.Field(type => [tracked_event_clio_entity_1.TrackedEvent], { nullable: true }),
    typeorm_1.OneToMany(type => tracked_event_clio_entity_1.TrackedEvent, trackedEvent => trackedEvent.container),
    __metadata("design:type", Array)
], TrackedContainer.prototype, "trackedEvents", void 0);
TrackedContainer = __decorate([
    graphql_1.ObjectType('TrackedContainer'),
    typeorm_1.Entity({ name: 'TrackedContainer' })
], TrackedContainer);
exports.TrackedContainer = TrackedContainer;
//# sourceMappingURL=tracked-container.clio.entity.js.map