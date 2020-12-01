"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tracked_order_repository_1 = require("./models/tracked-order.repository");
const tracked_event_repository_1 = require("./models/tracked-event.repository");
const tracked_container_repository_1 = require("./models/tracked-container.repository");
const tracked_order_container_repository_1 = require("./models/tracked-order-container.repository");
const exception_code_repository_1 = require("./models/exception-code.repository");
const tracked_order_service_1 = require("./service/tracked-order.service");
const tracked_order_container_service_1 = require("./service/tracked-order-container.service");
const tracked_container_service_1 = require("./service/tracked-container.service");
const tracked_event_service_1 = require("./service/tracked-event.service");
const exception_code_service_1 = require("./service/exception-code.service");
const status_code_service_1 = require("./service/status-code.service");
const status_code_repository_1 = require("./models/status-code.repository");
const sequence_code_repository_1 = require("./models/sequence-code.repository");
const sequence_code_service_1 = require("./service/sequence-code.service");
const carrier_code_repository_1 = require("./models/carrier-code.repository");
const carrier_code_service_1 = require("./service/carrier-code.service");
let ClioDbModule = class ClioDbModule {
};
ClioDbModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                tracked_order_repository_1.TrackedOrderRepository,
                tracked_event_repository_1.TrackedEventRepository,
                tracked_container_repository_1.TrackedContainerRepository,
                tracked_order_container_repository_1.TrackedOrderContainerRepository,
                exception_code_repository_1.ExceptionCodeRepository,
                status_code_repository_1.StatusCodeRepository,
                sequence_code_repository_1.SequenceCodeRepository,
                carrier_code_repository_1.CarrierCodeRepository
            ]),
        ],
        providers: [
            tracked_order_service_1.TrackedOrderService,
            tracked_order_container_service_1.TrackedOrderContainerService,
            tracked_container_service_1.TrackedContainerService,
            tracked_event_service_1.TrackedEventService,
            exception_code_service_1.ExceptionCodeService,
            status_code_service_1.StatusCodeService,
            sequence_code_service_1.SequenceCodeService,
            carrier_code_service_1.CarrierCodeService
        ],
        exports: [
            typeorm_1.TypeOrmModule,
            tracked_order_service_1.TrackedOrderService,
            tracked_order_container_service_1.TrackedOrderContainerService,
            tracked_container_service_1.TrackedContainerService,
            tracked_event_service_1.TrackedEventService,
            exception_code_service_1.ExceptionCodeService,
            status_code_service_1.StatusCodeService,
            sequence_code_service_1.SequenceCodeService,
            carrier_code_service_1.CarrierCodeService
        ],
    })
], ClioDbModule);
exports.ClioDbModule = ClioDbModule;
//# sourceMappingURL=clio-db.module.js.map