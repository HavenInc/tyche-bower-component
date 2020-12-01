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
const tracked_event_repository_1 = require("../models/tracked-event.repository");
const common_1 = require("@nestjs/common");
let TrackedEventService = class TrackedEventService {
    constructor(trackedEventRepository) {
        this.trackedEventRepository = trackedEventRepository;
    }
    async getEventsByTrackedContainer(trackedContainer) {
        return this.trackedEventRepository.find({ where: { trackedContainer } });
    }
    async getArrivalOfContainers(orgId, days, orderIds) {
        return this.trackedEventRepository.getArrivalOfContainers(orgId, days, orderIds);
    }
};
TrackedEventService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [tracked_event_repository_1.TrackedEventRepository])
], TrackedEventService);
exports.TrackedEventService = TrackedEventService;
//# sourceMappingURL=tracked-event.service.js.map