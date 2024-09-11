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
exports.AppPriceScheduleCreateRequestDataTypeEnum = void 0;
exports.instanceOfAppPriceScheduleCreateRequestData = instanceOfAppPriceScheduleCreateRequestData;
exports.AppPriceScheduleCreateRequestDataFromJSON = AppPriceScheduleCreateRequestDataFromJSON;
exports.AppPriceScheduleCreateRequestDataFromJSONTyped = AppPriceScheduleCreateRequestDataFromJSONTyped;
exports.AppPriceScheduleCreateRequestDataToJSON = AppPriceScheduleCreateRequestDataToJSON;
const AppPriceScheduleCreateRequestDataRelationships_1 = require("./AppPriceScheduleCreateRequestDataRelationships");
/**
 * @export
 */
exports.AppPriceScheduleCreateRequestDataTypeEnum = {
    AppPriceSchedules: "appPriceSchedules"
};
/**
 * Check if a given object implements the AppPriceScheduleCreateRequestData interface.
 */
function instanceOfAppPriceScheduleCreateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "relationships" in value;
    return isInstance;
}
function AppPriceScheduleCreateRequestDataFromJSON(json) {
    return AppPriceScheduleCreateRequestDataFromJSONTyped(json, false);
}
function AppPriceScheduleCreateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        relationships: (0, AppPriceScheduleCreateRequestDataRelationships_1.AppPriceScheduleCreateRequestDataRelationshipsFromJSON)(json["relationships"])
    };
}
function AppPriceScheduleCreateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        relationships: (0, AppPriceScheduleCreateRequestDataRelationships_1.AppPriceScheduleCreateRequestDataRelationshipsToJSON)(value.relationships)
    };
}
