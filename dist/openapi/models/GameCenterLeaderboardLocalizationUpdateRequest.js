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
exports.instanceOfGameCenterLeaderboardLocalizationUpdateRequest = instanceOfGameCenterLeaderboardLocalizationUpdateRequest;
exports.GameCenterLeaderboardLocalizationUpdateRequestFromJSON = GameCenterLeaderboardLocalizationUpdateRequestFromJSON;
exports.GameCenterLeaderboardLocalizationUpdateRequestFromJSONTyped = GameCenterLeaderboardLocalizationUpdateRequestFromJSONTyped;
exports.GameCenterLeaderboardLocalizationUpdateRequestToJSON = GameCenterLeaderboardLocalizationUpdateRequestToJSON;
const GameCenterLeaderboardLocalizationUpdateRequestData_1 = require("./GameCenterLeaderboardLocalizationUpdateRequestData");
/**
 * Check if a given object implements the GameCenterLeaderboardLocalizationUpdateRequest interface.
 */
function instanceOfGameCenterLeaderboardLocalizationUpdateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function GameCenterLeaderboardLocalizationUpdateRequestFromJSON(json) {
    return GameCenterLeaderboardLocalizationUpdateRequestFromJSONTyped(json, false);
}
function GameCenterLeaderboardLocalizationUpdateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, GameCenterLeaderboardLocalizationUpdateRequestData_1.GameCenterLeaderboardLocalizationUpdateRequestDataFromJSON)(json["data"])
    };
}
function GameCenterLeaderboardLocalizationUpdateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, GameCenterLeaderboardLocalizationUpdateRequestData_1.GameCenterLeaderboardLocalizationUpdateRequestDataToJSON)(value.data)
    };
}
