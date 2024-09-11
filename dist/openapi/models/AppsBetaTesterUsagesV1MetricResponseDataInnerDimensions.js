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
exports.instanceOfAppsBetaTesterUsagesV1MetricResponseDataInnerDimensions = instanceOfAppsBetaTesterUsagesV1MetricResponseDataInnerDimensions;
exports.AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsFromJSON = AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsFromJSON;
exports.AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsFromJSONTyped = AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsFromJSONTyped;
exports.AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsToJSON = AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsToJSON;
const runtime_1 = require("../runtime");
const AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTesters_1 = require("./AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTesters");
/**
 * Check if a given object implements the AppsBetaTesterUsagesV1MetricResponseDataInnerDimensions interface.
 */
function instanceOfAppsBetaTesterUsagesV1MetricResponseDataInnerDimensions(value) {
    let isInstance = true;
    return isInstance;
}
function AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsFromJSON(json) {
    return AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsFromJSONTyped(json, false);
}
function AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        betaTesters: !(0, runtime_1.exists)(json, "betaTesters") ? undefined : (0, AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTesters_1.AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTestersFromJSON)(json["betaTesters"])
    };
}
function AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        betaTesters: (0, AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTesters_1.AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTestersToJSON)(value.betaTesters)
    };
}
