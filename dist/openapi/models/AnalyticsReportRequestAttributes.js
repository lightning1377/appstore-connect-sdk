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
exports.AnalyticsReportRequestAttributesAccessTypeEnum = void 0;
exports.instanceOfAnalyticsReportRequestAttributes = instanceOfAnalyticsReportRequestAttributes;
exports.AnalyticsReportRequestAttributesFromJSON = AnalyticsReportRequestAttributesFromJSON;
exports.AnalyticsReportRequestAttributesFromJSONTyped = AnalyticsReportRequestAttributesFromJSONTyped;
exports.AnalyticsReportRequestAttributesToJSON = AnalyticsReportRequestAttributesToJSON;
const runtime_1 = require("../runtime");
/**
 * @export
 */
exports.AnalyticsReportRequestAttributesAccessTypeEnum = {
    OneTimeSnapshot: "ONE_TIME_SNAPSHOT",
    Ongoing: "ONGOING"
};
/**
 * Check if a given object implements the AnalyticsReportRequestAttributes interface.
 */
function instanceOfAnalyticsReportRequestAttributes(value) {
    let isInstance = true;
    return isInstance;
}
function AnalyticsReportRequestAttributesFromJSON(json) {
    return AnalyticsReportRequestAttributesFromJSONTyped(json, false);
}
function AnalyticsReportRequestAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        accessType: !(0, runtime_1.exists)(json, "accessType") ? undefined : json["accessType"],
        stoppedDueToInactivity: !(0, runtime_1.exists)(json, "stoppedDueToInactivity") ? undefined : json["stoppedDueToInactivity"]
    };
}
function AnalyticsReportRequestAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        accessType: value.accessType,
        stoppedDueToInactivity: value.stoppedDueToInactivity
    };
}
