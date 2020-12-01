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
const common_1 = require("@nestjs/common");
const tracked_order_container_repository_1 = require("../models/tracked-order-container.repository");
let TrackedOrderContainerService = class TrackedOrderContainerService {
    constructor(trackedOrderContainerRepository) {
        this.trackedOrderContainerRepository = trackedOrderContainerRepository;
    }
    async getTrackedOrderContainerByTrackedOrder(trackedOrder) {
        return this.trackedOrderContainerRepository.getTrackedOrderContainerByTrackedOrder(trackedOrder);
    }
    async getTrackedOrderContainerById(id) {
        return this.trackedOrderContainerRepository.findOne(id);
    }
    async getContainersWithEvents(filter, affiliation) {
        return this.trackedOrderContainerRepository.getContainersWithEvents(filter, affiliation);
    }
};
TrackedOrderContainerService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [tracked_order_container_repository_1.TrackedOrderContainerRepository])
], TrackedOrderContainerService);
exports.TrackedOrderContainerService = TrackedOrderContainerService;
//# sourceMappingURL=tracked-order-container.service.js.map