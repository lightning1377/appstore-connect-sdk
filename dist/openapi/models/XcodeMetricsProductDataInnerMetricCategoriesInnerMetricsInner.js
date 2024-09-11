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
exports.instanceOfXcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInner = instanceOfXcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInner;
exports.XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerFromJSON = XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerFromJSON;
exports.XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerFromJSONTyped = XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerFromJSONTyped;
exports.XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerToJSON = XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerToJSON;
const runtime_1 = require("../runtime");
const XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInner_1 = require("./XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInner");
const XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInner_1 = require("./XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInner");
const XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnit_1 = require("./XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnit");
/**
 * Check if a given object implements the XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInner interface.
 */
function instanceOfXcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInner(value) {
    let isInstance = true;
    return isInstance;
}
function XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerFromJSON(json) {
    return XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerFromJSONTyped(json, false);
}
function XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        identifier: !(0, runtime_1.exists)(json, "identifier") ? undefined : json["identifier"],
        goalKeys: !(0, runtime_1.exists)(json, "goalKeys") ? undefined : json["goalKeys"].map(XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInner_1.XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInnerFromJSON),
        unit: !(0, runtime_1.exists)(json, "unit") ? undefined : (0, XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnit_1.XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnitFromJSON)(json["unit"]),
        datasets: !(0, runtime_1.exists)(json, "datasets") ? undefined : json["datasets"].map(XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInner_1.XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerFromJSON)
    };
}
function XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        identifier: value.identifier,
        goalKeys: value.goalKeys === undefined ? undefined : value.goalKeys.map(XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInner_1.XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInnerToJSON),
        unit: (0, XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnit_1.XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnitToJSON)(value.unit),
        datasets: value.datasets === undefined ? undefined : value.datasets.map(XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInner_1.XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerDatasetsInnerToJSON)
    };
}
