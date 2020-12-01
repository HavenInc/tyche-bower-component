"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const shipment_risk_resolver_1 = require("./shipment-risk.resolver");
const shipment_risk_service_1 = require("./shipment-risk.service");
const clio_db_module_1 = require("../clio-db/clio-db.module");
const clio_gql_middleware_module_1 = require("../clio-gql-middleware/clio-gql-middleware.module");
const shipment_risk_controller_1 = require("./shipment-risk.controller");
const auth_module_1 = require("../auth/auth.module");
let ShipmentRiskModule = class ShipmentRiskModule {
};
ShipmentRiskModule = __decorate([
    common_1.Module({
        imports: [
            clio_db_module_1.ClioDbModule,
            clio_gql_middleware_module_1.ClioGqlMiddlewareModule,
            auth_module_1.AuthModule
        ],
        providers: [
            shipment_risk_resolver_1.ShipmentRiskResolver,
            shipment_risk_service_1.ShipmentRiskService,
        ],
        controllers: [shipment_risk_controller_1.ShipmentRiskController]
    })
], ShipmentRiskModule);
exports.ShipmentRiskModule = ShipmentRiskModule;
//# sourceMappingURL=shipment-risk.module.js.map