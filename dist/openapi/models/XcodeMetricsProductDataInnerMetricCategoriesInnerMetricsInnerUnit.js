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
exports.instanceOfXcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnit = instanceOfXcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnit;
exports.XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnitFromJSON = XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnitFromJSON;
exports.XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnitFromJSONTyped = XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnitFromJSONTyped;
exports.XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnitToJSON = XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnitToJSON;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnit interface.
 */
function instanceOfXcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnit(value) {
    let isInstance = true;
    return isInstance;
}
function XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnitFromJSON(json) {
    return XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnitFromJSONTyped(json, false);
}
function XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnitFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        identifier: !(0, runtime_1.exists)(json, "identifier") ? undefined : json["identifier"],
        displayName: !(0, runtime_1.exists)(json, "displayName") ? undefined : json["displayName"]
    };
}
function XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnitToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        identifier: value.identifier,
        displayName: value.displayName
    };
}
