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
exports.instanceOfGameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDataPoints = instanceOfGameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDataPoints;
exports.GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDataPointsFromJSON = GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDataPointsFromJSON;
exports.GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDataPointsFromJSONTyped = GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDataPointsFromJSONTyped;
exports.GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDataPointsToJSON = GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDataPointsToJSON;
const runtime_1 = require("../runtime");
const GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDataPointsValues_1 = require("./GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDataPointsValues");
/**
 * Check if a given object implements the GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDataPoints interface.
 */
function instanceOfGameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDataPoints(value) {
    let isInstance = true;
    return isInstance;
}
function GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDataPointsFromJSON(json) {
    return GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDataPointsFromJSONTyped(json, false);
}
function GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDataPointsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        start: !(0, runtime_1.exists)(json, "start") ? undefined : new Date(json["start"]),
        end: !(0, runtime_1.exists)(json, "end") ? undefined : new Date(json["end"]),
        values: !(0, runtime_1.exists)(json, "values") ? undefined : (0, GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDataPointsValues_1.GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDataPointsValuesFromJSON)(json["values"])
    };
}
function GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDataPointsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        start: value.start === undefined ? undefined : value.start.toISOString(),
        end: value.end === undefined ? undefined : value.end.toISOString(),
        values: (0, GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDataPointsValues_1.GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDataPointsValuesToJSON)(value.values)
    };
}
