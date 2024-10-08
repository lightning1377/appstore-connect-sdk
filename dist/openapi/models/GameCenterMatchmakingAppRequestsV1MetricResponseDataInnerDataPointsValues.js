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
exports.instanceOfGameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPointsValues = instanceOfGameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPointsValues;
exports.GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPointsValuesFromJSON = GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPointsValuesFromJSON;
exports.GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPointsValuesFromJSONTyped = GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPointsValuesFromJSONTyped;
exports.GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPointsValuesToJSON = GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPointsValuesToJSON;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPointsValues interface.
 */
function instanceOfGameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPointsValues(value) {
    let isInstance = true;
    return isInstance;
}
function GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPointsValuesFromJSON(json) {
    return GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPointsValuesFromJSONTyped(json, false);
}
function GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPointsValuesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        count: !(0, runtime_1.exists)(json, "count") ? undefined : json["count"],
        averageSecondsInQueue: !(0, runtime_1.exists)(json, "averageSecondsInQueue") ? undefined : json["averageSecondsInQueue"],
        p50SecondsInQueue: !(0, runtime_1.exists)(json, "p50SecondsInQueue") ? undefined : json["p50SecondsInQueue"],
        p95SecondsInQueue: !(0, runtime_1.exists)(json, "p95SecondsInQueue") ? undefined : json["p95SecondsInQueue"]
    };
}
function GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPointsValuesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        count: value.count,
        averageSecondsInQueue: value.averageSecondsInQueue,
        p50SecondsInQueue: value.p50SecondsInQueue,
        p95SecondsInQueue: value.p95SecondsInQueue
    };
}
