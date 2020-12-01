"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const clio_db_module_1 = require("../clio-db/clio-db.module");
const tracked_order_container_resolver_1 = require("./resolver/tracked-order-container.resolver");
const tracked_container_resolver_1 = require("./resolver/tracked-container.resolver");
const tracked_order_resolver_1 = require("./resolver/tracked-order.resolver");
const tracked_event_resolver_1 = require("./resolver/tracked-event.resolver");
const exception_code_resolver_1 = require("./resolver/exception-code.resolver");
const auth_module_1 = require("../auth/auth.module");
let ClioGqlMiddlewareModule = class ClioGqlMiddlewareModule {
};
ClioGqlMiddlewareModule = __decorate([
    common_1.Module({
        imports: [
            clio_db_module_1.ClioDbModule,
            auth_module_1.AuthModule
        ],
        providers: [
            tracked_order_container_resolver_1.TrackedOrderContainerResolver,
            tracked_container_resolver_1.TrackedContainerResolver,
            tracked_order_resolver_1.TrackedOrderResolver,
            tracked_event_resolver_1.TrackedEventResolver,
            exception_code_resolver_1.ExceptionCodeResolver
        ],
    })
], ClioGqlMiddlewareModule);
exports.ClioGqlMiddlewareModule = ClioGqlMiddlewareModule;
//# sourceMappingURL=clio-gql-middleware.module.js.map