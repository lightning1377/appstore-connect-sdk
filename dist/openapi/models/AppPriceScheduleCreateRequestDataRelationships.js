"use strict";
/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.5
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfAppPriceScheduleCreateRequestDataRelationships = instanceOfAppPriceScheduleCreateRequestDataRelationships;
exports.AppPriceScheduleCreateRequestDataRelationshipsFromJSON = AppPriceScheduleCreateRequestDataRelationshipsFromJSON;
exports.AppPriceScheduleCreateRequestDataRelationshipsFromJSONTyped = AppPriceScheduleCreateRequestDataRelationshipsFromJSONTyped;
exports.AppPriceScheduleCreateRequestDataRelationshipsToJSON = AppPriceScheduleCreateRequestDataRelationshipsToJSON;
const AnalyticsReportRequestCreateRequestDataRelationshipsApp_1 = require("./AnalyticsReportRequestCreateRequestDataRelationshipsApp");
const AppPriceScheduleCreateRequestDataRelationshipsBaseTerritory_1 = require("./AppPriceScheduleCreateRequestDataRelationshipsBaseTerritory");
const AppPriceScheduleCreateRequestDataRelationshipsManualPrices_1 = require("./AppPriceScheduleCreateRequestDataRelationshipsManualPrices");
/**
 * Check if a given object implements the AppPriceScheduleCreateRequestDataRelationships interface.
 */
function instanceOfAppPriceScheduleCreateRequestDataRelationships(value) {
    let isInstance = true;
    isInstance = isInstance && "app" in value;
    isInstance = isInstance && "baseTerritory" in value;
    isInstance = isInstance && "manualPrices" in value;
    return isInstance;
}
function AppPriceScheduleCreateRequestDataRelationshipsFromJSON(json) {
    return AppPriceScheduleCreateRequestDataRelationshipsFromJSONTyped(json, false);
}
function AppPriceScheduleCreateRequestDataRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        app: (0, AnalyticsReportRequestCreateRequestDataRelationshipsApp_1.AnalyticsReportRequestCreateRequestDataRelationshipsAppFromJSON)(json["app"]),
        baseTerritory: (0, AppPriceScheduleCreateRequestDataRelationshipsBaseTerritory_1.AppPriceScheduleCreateRequestDataRelationshipsBaseTerritoryFromJSON)(json["baseTerritory"]),
        manualPrices: (0, AppPriceScheduleCreateRequestDataRelationshipsManualPrices_1.AppPriceScheduleCreateRequestDataRelationshipsManualPricesFromJSON)(json["manualPrices"])
    };
}
function AppPriceScheduleCreateRequestDataRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        app: (0, AnalyticsReportRequestCreateRequestDataRelationshipsApp_1.AnalyticsReportRequestCreateRequestDataRelationshipsAppToJSON)(value.app),
        baseTerritory: (0, AppPriceScheduleCreateRequestDataRelationshipsBaseTerritory_1.AppPriceScheduleCreateRequestDataRelationshipsBaseTerritoryToJSON)(value.baseTerritory),
        manualPrices: (0, AppPriceScheduleCreateRequestDataRelationshipsManualPrices_1.AppPriceScheduleCreateRequestDataRelationshipsManualPricesToJSON)(value.manualPrices)
    };
}
