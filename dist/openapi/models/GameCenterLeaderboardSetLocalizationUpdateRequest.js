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
exports.instanceOfGameCenterLeaderboardSetLocalizationUpdateRequest = instanceOfGameCenterLeaderboardSetLocalizationUpdateRequest;
exports.GameCenterLeaderboardSetLocalizationUpdateRequestFromJSON = GameCenterLeaderboardSetLocalizationUpdateRequestFromJSON;
exports.GameCenterLeaderboardSetLocalizationUpdateRequestFromJSONTyped = GameCenterLeaderboardSetLocalizationUpdateRequestFromJSONTyped;
exports.GameCenterLeaderboardSetLocalizationUpdateRequestToJSON = GameCenterLeaderboardSetLocalizationUpdateRequestToJSON;
const GameCenterLeaderboardSetLocalizationUpdateRequestData_1 = require("./GameCenterLeaderboardSetLocalizationUpdateRequestData");
/**
 * Check if a given object implements the GameCenterLeaderboardSetLocalizationUpdateRequest interface.
 */
function instanceOfGameCenterLeaderboardSetLocalizationUpdateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function GameCenterLeaderboardSetLocalizationUpdateRequestFromJSON(json) {
    return GameCenterLeaderboardSetLocalizationUpdateRequestFromJSONTyped(json, false);
}
function GameCenterLeaderboardSetLocalizationUpdateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, GameCenterLeaderboardSetLocalizationUpdateRequestData_1.GameCenterLeaderboardSetLocalizationUpdateRequestDataFromJSON)(json["data"])
    };
}
function GameCenterLeaderboardSetLocalizationUpdateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, GameCenterLeaderboardSetLocalizationUpdateRequestData_1.GameCenterLeaderboardSetLocalizationUpdateRequestDataToJSON)(value.data)
    };
}
