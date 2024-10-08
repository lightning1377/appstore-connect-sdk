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
exports.instanceOfXcodeMetricsProductDataInnerMetricCategoriesInner = instanceOfXcodeMetricsProductDataInnerMetricCategoriesInner;
exports.XcodeMetricsProductDataInnerMetricCategoriesInnerFromJSON = XcodeMetricsProductDataInnerMetricCategoriesInnerFromJSON;
exports.XcodeMetricsProductDataInnerMetricCategoriesInnerFromJSONTyped = XcodeMetricsProductDataInnerMetricCategoriesInnerFromJSONTyped;
exports.XcodeMetricsProductDataInnerMetricCategoriesInnerToJSON = XcodeMetricsProductDataInnerMetricCategoriesInnerToJSON;
const runtime_1 = require("../runtime");
const MetricCategory_1 = require("./MetricCategory");
const XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInner_1 = require("./XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInner");
/**
 * Check if a given object implements the XcodeMetricsProductDataInnerMetricCategoriesInner interface.
 */
function instanceOfXcodeMetricsProductDataInnerMetricCategoriesInner(value) {
    let isInstance = true;
    return isInstance;
}
function XcodeMetricsProductDataInnerMetricCategoriesInnerFromJSON(json) {
    return XcodeMetricsProductDataInnerMetricCategoriesInnerFromJSONTyped(json, false);
}
function XcodeMetricsProductDataInnerMetricCategoriesInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        identifier: !(0, runtime_1.exists)(json, "identifier") ? undefined : (0, MetricCategory_1.MetricCategoryFromJSON)(json["identifier"]),
        metrics: !(0, runtime_1.exists)(json, "metrics") ? undefined : json["metrics"].map(XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInner_1.XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerFromJSON)
    };
}
function XcodeMetricsProductDataInnerMetricCategoriesInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        identifier: (0, MetricCategory_1.MetricCategoryToJSON)(value.identifier),
        metrics: value.metrics === undefined ? undefined : value.metrics.map(XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInner_1.XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerToJSON)
    };
}
