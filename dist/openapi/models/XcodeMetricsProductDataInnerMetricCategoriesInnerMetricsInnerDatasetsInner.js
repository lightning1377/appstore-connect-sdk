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
exports.instanceOfXcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInner = instanceOfXcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInner;
exports.XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerFromJSON = XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerFromJSON;
exports.XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerFromJSONTyped = XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerFromJSONTyped;
exports.XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerToJSON = XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerToJSON;
const runtime_1 = require("../runtime");
const XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerFilterCriteria_1 = require("./XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerFilterCriteria");
const XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerPointsInner_1 = require("./XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerPointsInner");
/**
 * Check if a given object implements the XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInner interface.
 */
function instanceOfXcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInner(value) {
    let isInstance = true;
    return isInstance;
}
function XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerFromJSON(json) {
    return XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerFromJSONTyped(json, false);
}
function XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        filterCriteria: !(0, runtime_1.exists)(json, "filterCriteria") ? undefined : (0, XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerFilterCriteria_1.XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerFilterCriteriaFromJSON)(json["filterCriteria"]),
        points: !(0, runtime_1.exists)(json, "points") ? undefined : json["points"].map(XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerPointsInner_1.XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerPointsInnerFromJSON)
    };
}
function XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        filterCriteria: (0, XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerFilterCriteria_1.XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerFilterCriteriaToJSON)(value.filterCriteria),
        points: value.points === undefined ? undefined : value.points.map(XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerPointsInner_1.XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerPointsInnerToJSON)
    };
}
