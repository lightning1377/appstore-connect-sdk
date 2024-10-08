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
exports.instanceOfBetaBuildUsagesV1MetricResponseDataInnerDataPoints = instanceOfBetaBuildUsagesV1MetricResponseDataInnerDataPoints;
exports.BetaBuildUsagesV1MetricResponseDataInnerDataPointsFromJSON = BetaBuildUsagesV1MetricResponseDataInnerDataPointsFromJSON;
exports.BetaBuildUsagesV1MetricResponseDataInnerDataPointsFromJSONTyped = BetaBuildUsagesV1MetricResponseDataInnerDataPointsFromJSONTyped;
exports.BetaBuildUsagesV1MetricResponseDataInnerDataPointsToJSON = BetaBuildUsagesV1MetricResponseDataInnerDataPointsToJSON;
const runtime_1 = require("../runtime");
const BetaBuildUsagesV1MetricResponseDataInnerDataPointsValues_1 = require("./BetaBuildUsagesV1MetricResponseDataInnerDataPointsValues");
/**
 * Check if a given object implements the BetaBuildUsagesV1MetricResponseDataInnerDataPoints interface.
 */
function instanceOfBetaBuildUsagesV1MetricResponseDataInnerDataPoints(value) {
    let isInstance = true;
    return isInstance;
}
function BetaBuildUsagesV1MetricResponseDataInnerDataPointsFromJSON(json) {
    return BetaBuildUsagesV1MetricResponseDataInnerDataPointsFromJSONTyped(json, false);
}
function BetaBuildUsagesV1MetricResponseDataInnerDataPointsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        start: !(0, runtime_1.exists)(json, "start") ? undefined : new Date(json["start"]),
        end: !(0, runtime_1.exists)(json, "end") ? undefined : new Date(json["end"]),
        values: !(0, runtime_1.exists)(json, "values") ? undefined : (0, BetaBuildUsagesV1MetricResponseDataInnerDataPointsValues_1.BetaBuildUsagesV1MetricResponseDataInnerDataPointsValuesFromJSON)(json["values"])
    };
}
function BetaBuildUsagesV1MetricResponseDataInnerDataPointsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        start: value.start === undefined ? undefined : value.start.toISOString(),
        end: value.end === undefined ? undefined : value.end.toISOString(),
        values: (0, BetaBuildUsagesV1MetricResponseDataInnerDataPointsValues_1.BetaBuildUsagesV1MetricResponseDataInnerDataPointsValuesToJSON)(value.values)
    };
}
