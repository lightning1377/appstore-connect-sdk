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
exports.instanceOfGameCenterLeaderboardImageCreateRequestDataRelationships = instanceOfGameCenterLeaderboardImageCreateRequestDataRelationships;
exports.GameCenterLeaderboardImageCreateRequestDataRelationshipsFromJSON = GameCenterLeaderboardImageCreateRequestDataRelationshipsFromJSON;
exports.GameCenterLeaderboardImageCreateRequestDataRelationshipsFromJSONTyped = GameCenterLeaderboardImageCreateRequestDataRelationshipsFromJSONTyped;
exports.GameCenterLeaderboardImageCreateRequestDataRelationshipsToJSON = GameCenterLeaderboardImageCreateRequestDataRelationshipsToJSON;
const GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalization_1 = require("./GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalization");
/**
 * Check if a given object implements the GameCenterLeaderboardImageCreateRequestDataRelationships interface.
 */
function instanceOfGameCenterLeaderboardImageCreateRequestDataRelationships(value) {
    let isInstance = true;
    isInstance = isInstance && "gameCenterLeaderboardLocalization" in value;
    return isInstance;
}
function GameCenterLeaderboardImageCreateRequestDataRelationshipsFromJSON(json) {
    return GameCenterLeaderboardImageCreateRequestDataRelationshipsFromJSONTyped(json, false);
}
function GameCenterLeaderboardImageCreateRequestDataRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        gameCenterLeaderboardLocalization: (0, GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalization_1.GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalizationFromJSON)(json["gameCenterLeaderboardLocalization"])
    };
}
function GameCenterLeaderboardImageCreateRequestDataRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        gameCenterLeaderboardLocalization: (0, GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalization_1.GameCenterLeaderboardImageCreateRequestDataRelationshipsGameCenterLeaderboardLocalizationToJSON)(value.gameCenterLeaderboardLocalization)
    };
}
