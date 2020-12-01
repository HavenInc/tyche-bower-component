"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let ShipmentAtRiskView = class ShipmentAtRiskView {
};
ShipmentAtRiskView = __decorate([
    typeorm_1.ViewEntity({
        expression: ` SELECT 
	   "trackedorder"."id"                          AS "trackedOrder_id", 
       "trackedorder"."havenorderid"              AS "havenOrderId" , 
       "trackedorder"."havenstatus"               AS "havenStatus", 
       "trackedorder"."carrierbookingnum"         AS "carrierBookingNum", 
       "trackedorder"."billofladingnum"           AS "trackedOrder_billOfLadingNum", 
       "trackedorder"."nextmove"                  AS "nextMove", 
       "trackedorder"."departure"                 AS "departure", 
       "trackedorder"."arrival"                   AS "arrival", 
       "trackedorder"."customerorgid"             AS "customerOrgId", 
       "trackedordercontainer"."id"               AS "trackedOrderContainer_id", 
       "trackedordercontainer"."visibility"       AS "trackedOrderContainer_visibility", 
       "trackedcontainer"."id"                    AS "trackedContainer_id", 
       "trackedcontainer"."containerid"           AS "containerId", 
       "trackedcontainer"."type"                  AS "containerType", 
       "trackedevent"."id"                        AS "trackedEvent_id", 
       "trackedevent"."actual"                    AS "trackedEvent_actual", 
       "trackedevent"."planned"                   AS "trackedEvent_planned", 
       "trackedevent"."providerlocation"          AS "providerLocation", 
       "trackedevent"."providervessel"            AS "providerVessel", 
       "trackedevent"."providervoyage"            AS "providerVoyage", 
       "trackedevent"."providerstatus"            AS "providerStatus", 
       "trackedevent"."providercontents"          AS "providerContents", 
       "trackedevent"."exceptioncode"             AS "exceptionCode", 
       "trackedevent"."statuscode"                AS "statusCode", 
       "trackedevent"."sourcecode"                AS "sourceCode", 
       "trackedevent"."notes"                     AS "notes", 
       "trackedevent"."visibility"                AS "trackedEvent_visibility", 
       "trackedevent"."timezone"                  AS "trackedEvent_timezone", 
       "trackedevent"."havenportid"               AS "havenPortId", 
       "carriercode"."id"                         AS "carrierCode_id", 
       "carriercode"."value"                      AS "carrierCode_value" 
FROM   "Trackedorder" "trackedorder" 
       INNER JOIN "TrackedOrderContainer" "trackedordercontainer" 
               ON "trackedordercontainer"."trackedorder" = "trackedorder"."id" 
       INNER JOIN "TrackedContainer" "trackedcontainer"
               ON "trackedcontainer"."id" = 
                  "trackedordercontainer"."trackedcontainer" 
       INNER JOIN "TrackedEvent" "trackedevent" 
               ON "trackedevent"."trackedcontainer" = "trackedcontainer"."id" 
       INNER JOIN "CarrierCode" "carriercode" 
               ON "carriercode"."id" = "trackedorder"."carriercode" 
    `
    })
], ShipmentAtRiskView);
exports.ShipmentAtRiskView = ShipmentAtRiskView;
//# sourceMappingURL=shipment-at-risk.view.entity.js.map