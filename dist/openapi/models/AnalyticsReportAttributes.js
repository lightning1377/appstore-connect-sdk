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
exports.AnalyticsReportAttributesCategoryEnum = void 0;
exports.instanceOfAnalyticsReportAttributes = instanceOfAnalyticsReportAttributes;
exports.AnalyticsReportAttributesFromJSON = AnalyticsReportAttributesFromJSON;
exports.AnalyticsReportAttributesFromJSONTyped = AnalyticsReportAttributesFromJSONTyped;
exports.AnalyticsReportAttributesToJSON = AnalyticsReportAttributesToJSON;
const runtime_1 = require("../runtime");
/**
 * @export
 */
exports.AnalyticsReportAttributesCategoryEnum = {
    AppUsage: "APP_USAGE",
    AppStoreEngagement: "APP_STORE_ENGAGEMENT",
    Commerce: "COMMERCE",
    FrameworkUsage: "FRAMEWORK_USAGE",
    Performance: "PERFORMANCE"
};
/**
 * Check if a given object implements the AnalyticsReportAttributes interface.
 */
function instanceOfAnalyticsReportAttributes(value) {
    let isInstance = true;
    return isInstance;
}
function AnalyticsReportAttributesFromJSON(json) {
    return AnalyticsReportAttributesFromJSONTyped(json, false);
}
function AnalyticsReportAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        name: !(0, runtime_1.exists)(json, "name") ? undefined : json["name"],
        category: !(0, runtime_1.exists)(json, "category") ? undefined : json["category"]
    };
}
function AnalyticsReportAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        name: value.name,
        category: value.category
    };
}
