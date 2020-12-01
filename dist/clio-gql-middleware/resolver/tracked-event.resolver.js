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
const tracked_event_clio_entity_1 = require("../../clio-db/models/tracked-event.clio.entity");
const tracked_order_container_service_1 = require("../../clio-db/service/tracked-order-container.service");
const tracked_container_service_1 = require("../../clio-db/service/tracked-container.service");
const exception_code_service_1 = require("../../clio-db/service/exception-code.service");
const status_code_service_1 = require("../../clio-db/service/status-code.service");
let TrackedEventResolver = class TrackedEventResolver {
    constructor(trackedOrderContainerService, trackedContainerService, exceptionCodeServicerService, statusCodeService) {
        this.trackedOrderContainerService = trackedOrderContainerService;
        this.trackedContainerService = trackedContainerService;
        this.exceptionCodeServicerService = exceptionCodeServicerService;
        this.statusCodeService = statusCodeService;
    }
    async exception(trackedEvent) {
        if (trackedEvent.exception)
            return trackedEvent.exception;
        return this.exceptionCodeServicerService.getExceptionCodeById(trackedEvent.exceptionCode);
    }
    async trackedOrderContainer(trackedEvent) {
        return this.trackedOrderContainerService.getTrackedOrderContainerById(trackedEvent.orderContainer);
    }
    async container(trackedEvent) {
        return this.trackedContainerService.getTrackedContainerById(trackedEvent.trackedContainer);
    }
    async status(trackedEvent) {
        if (trackedEvent.status)
            return trackedEvent.status;
        return this.statusCodeService.getStatusCodeById(trackedEvent.statusCode);
    }
};
__decorate([
    graphql_1.ResolveField(),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tracked_event_clio_entity_1.TrackedEvent]),
    __metadata("design:returntype", Promise)
], TrackedEventResolver.prototype, "exception", null);
__decorate([
    graphql_1.ResolveField(),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tracked_event_clio_entity_1.TrackedEvent]),
    __metadata("design:returntype", Promise)
], TrackedEventResolver.prototype, "trackedOrderContainer", null);
__decorate([
    graphql_1.ResolveField(),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tracked_event_clio_entity_1.TrackedEvent]),
    __metadata("design:returntype", Promise)
], TrackedEventResolver.prototype, "container", null);
__decorate([
    graphql_1.ResolveField(),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tracked_event_clio_entity_1.TrackedEvent]),
    __metadata("design:returntype", Promise)
], TrackedEventResolver.prototype, "status", null);
TrackedEventResolver = __decorate([
    graphql_1.Resolver(of => tracked_event_clio_entity_1.TrackedEvent),
    __metadata("design:paramtypes", [tracked_order_container_service_1.TrackedOrderContainerService,
        tracked_container_service_1.TrackedContainerService,
        exception_code_service_1.ExceptionCodeService,
        status_code_service_1.StatusCodeService])
], TrackedEventResolver);
exports.TrackedEventResolver = TrackedEventResolver;
//# sourceMappingURL=tracked-event.resolver.js.map