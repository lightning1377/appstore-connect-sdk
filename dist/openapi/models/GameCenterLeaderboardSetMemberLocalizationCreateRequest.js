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
exports.instanceOfGameCenterLeaderboardSetMemberLocalizationCreateRequest = instanceOfGameCenterLeaderboardSetMemberLocalizationCreateRequest;
exports.GameCenterLeaderboardSetMemberLocalizationCreateRequestFromJSON = GameCenterLeaderboardSetMemberLocalizationCreateRequestFromJSON;
exports.GameCenterLeaderboardSetMemberLocalizationCreateRequestFromJSONTyped = GameCenterLeaderboardSetMemberLocalizationCreateRequestFromJSONTyped;
exports.GameCenterLeaderboardSetMemberLocalizationCreateRequestToJSON = GameCenterLeaderboardSetMemberLocalizationCreateRequestToJSON;
const GameCenterLeaderboardSetMemberLocalizationCreateRequestData_1 = require("./GameCenterLeaderboardSetMemberLocalizationCreateRequestData");
/**
 * Check if a given object implements the GameCenterLeaderboardSetMemberLocalizationCreateRequest interface.
 */
function instanceOfGameCenterLeaderboardSetMemberLocalizationCreateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function GameCenterLeaderboardSetMemberLocalizationCreateRequestFromJSON(json) {
    return GameCenterLeaderboardSetMemberLocalizationCreateRequestFromJSONTyped(json, false);
}
function GameCenterLeaderboardSetMemberLocalizationCreateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, GameCenterLeaderboardSetMemberLocalizationCreateRequestData_1.GameCenterLeaderboardSetMemberLocalizationCreateRequestDataFromJSON)(json["data"])
    };
}
function GameCenterLeaderboardSetMemberLocalizationCreateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, GameCenterLeaderboardSetMemberLocalizationCreateRequestData_1.GameCenterLeaderboardSetMemberLocalizationCreateRequestDataToJSON)(value.data)
    };
}
