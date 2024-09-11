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
exports.AppEventCreateRequestDataTypeEnum = void 0;
exports.instanceOfAppEventCreateRequestData = instanceOfAppEventCreateRequestData;
exports.AppEventCreateRequestDataFromJSON = AppEventCreateRequestDataFromJSON;
exports.AppEventCreateRequestDataFromJSONTyped = AppEventCreateRequestDataFromJSONTyped;
exports.AppEventCreateRequestDataToJSON = AppEventCreateRequestDataToJSON;
const AnalyticsReportRequestCreateRequestDataRelationships_1 = require("./AnalyticsReportRequestCreateRequestDataRelationships");
const AppEventCreateRequestDataAttributes_1 = require("./AppEventCreateRequestDataAttributes");
/**
 * @export
 */
exports.AppEventCreateRequestDataTypeEnum = {
    AppEvents: "appEvents"
};
/**
 * Check if a given object implements the AppEventCreateRequestData interface.
 */
function instanceOfAppEventCreateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;
    return isInstance;
}
function AppEventCreateRequestDataFromJSON(json) {
    return AppEventCreateRequestDataFromJSONTyped(json, false);
}
function AppEventCreateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        attributes: (0, AppEventCreateRequestDataAttributes_1.AppEventCreateRequestDataAttributesFromJSON)(json["attributes"]),
        relationships: (0, AnalyticsReportRequestCreateRequestDataRelationships_1.AnalyticsReportRequestCreateRequestDataRelationshipsFromJSON)(json["relationships"])
    };
}
function AppEventCreateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        attributes: (0, AppEventCreateRequestDataAttributes_1.AppEventCreateRequestDataAttributesToJSON)(value.attributes),
        relationships: (0, AnalyticsReportRequestCreateRequestDataRelationships_1.AnalyticsReportRequestCreateRequestDataRelationshipsToJSON)(value.relationships)
    };
}
