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
exports.GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerGranularityEnum = void 0;
exports.instanceOfGameCenterMatchmakingAppRequestsV1MetricResponseDataInner = instanceOfGameCenterMatchmakingAppRequestsV1MetricResponseDataInner;
exports.GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerFromJSON = GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerFromJSON;
exports.GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerFromJSONTyped = GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerFromJSONTyped;
exports.GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerToJSON = GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerToJSON;
const runtime_1 = require("../runtime");
const GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPoints_1 = require("./GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPoints");
const GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensions_1 = require("./GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensions");
/**
 * @export
 */
exports.GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerGranularityEnum = {
    P1D: "P1D",
    Pt1H: "PT1H",
    Pt15M: "PT15M"
};
/**
 * Check if a given object implements the GameCenterMatchmakingAppRequestsV1MetricResponseDataInner interface.
 */
function instanceOfGameCenterMatchmakingAppRequestsV1MetricResponseDataInner(value) {
    let isInstance = true;
    return isInstance;
}
function GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerFromJSON(json) {
    return GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerFromJSONTyped(json, false);
}
function GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        dataPoints: !(0, runtime_1.exists)(json, "dataPoints") ? undefined : (0, GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPoints_1.GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPointsFromJSON)(json["dataPoints"]),
        dimensions: !(0, runtime_1.exists)(json, "dimensions") ? undefined : (0, GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensions_1.GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsFromJSON)(json["dimensions"]),
        granularity: !(0, runtime_1.exists)(json, "granularity") ? undefined : json["granularity"]
    };
}
function GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        dataPoints: (0, GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPoints_1.GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDataPointsToJSON)(value.dataPoints),
        dimensions: (0, GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensions_1.GameCenterMatchmakingAppRequestsV1MetricResponseDataInnerDimensionsToJSON)(value.dimensions),
        granularity: value.granularity
    };
}
