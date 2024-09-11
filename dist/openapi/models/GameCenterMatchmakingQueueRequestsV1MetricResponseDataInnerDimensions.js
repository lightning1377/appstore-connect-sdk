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
exports.instanceOfGameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensions = instanceOfGameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensions;
exports.GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensionsFromJSON = GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensionsFromJSON;
exports.GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensionsFromJSONTyped = GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensionsFromJSONTyped;
exports.GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensionsToJSON = GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensionsToJSON;
const runtime_1 = require("../runtime");
const AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTesters_1 = require("./AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTesters");
const BetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIds_1 = require("./BetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIds");
/**
 * Check if a given object implements the GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensions interface.
 */
function instanceOfGameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensions(value) {
    let isInstance = true;
    return isInstance;
}
function GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensionsFromJSON(json) {
    return GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensionsFromJSONTyped(json, false);
}
function GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        result: !(0, runtime_1.exists)(json, "result") ? undefined : (0, BetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIds_1.BetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIdsFromJSON)(json["result"]),
        gameCenterDetail: !(0, runtime_1.exists)(json, "gameCenterDetail") ? undefined : (0, AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTesters_1.AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTestersFromJSON)(json["gameCenterDetail"])
    };
}
function GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerDimensionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        result: (0, BetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIds_1.BetaBuildUsagesV1MetricResponseDataInnerDimensionsBundleIdsToJSON)(value.result),
        gameCenterDetail: (0, AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTesters_1.AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTestersToJSON)(value.gameCenterDetail)
    };
}
