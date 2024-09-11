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
exports.instanceOfGameCenterLeaderboardLocalizationCreateRequestDataRelationshipsGameCenterLeaderboard = instanceOfGameCenterLeaderboardLocalizationCreateRequestDataRelationshipsGameCenterLeaderboard;
exports.GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardFromJSON = GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardFromJSON;
exports.GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardFromJSONTyped = GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardFromJSONTyped;
exports.GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardToJSON = GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardToJSON;
const GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner_1 = require("./GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner");
/**
 * Check if a given object implements the GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsGameCenterLeaderboard interface.
 */
function instanceOfGameCenterLeaderboardLocalizationCreateRequestDataRelationshipsGameCenterLeaderboard(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardFromJSON(json) {
    return GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardFromJSONTyped(json, false);
}
function GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner_1.GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerFromJSON)(json["data"])
    };
}
function GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner_1.GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerToJSON)(value.data)
    };
}
