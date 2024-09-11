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
exports.instanceOfGameCenterAchievementCreateRequestDataRelationships = instanceOfGameCenterAchievementCreateRequestDataRelationships;
exports.GameCenterAchievementCreateRequestDataRelationshipsFromJSON = GameCenterAchievementCreateRequestDataRelationshipsFromJSON;
exports.GameCenterAchievementCreateRequestDataRelationshipsFromJSONTyped = GameCenterAchievementCreateRequestDataRelationshipsFromJSONTyped;
exports.GameCenterAchievementCreateRequestDataRelationshipsToJSON = GameCenterAchievementCreateRequestDataRelationshipsToJSON;
const runtime_1 = require("../runtime");
const GameCenterAchievementCreateRequestDataRelationshipsGameCenterDetail_1 = require("./GameCenterAchievementCreateRequestDataRelationshipsGameCenterDetail");
const GameCenterAchievementCreateRequestDataRelationshipsGameCenterGroup_1 = require("./GameCenterAchievementCreateRequestDataRelationshipsGameCenterGroup");
/**
 * Check if a given object implements the GameCenterAchievementCreateRequestDataRelationships interface.
 */
function instanceOfGameCenterAchievementCreateRequestDataRelationships(value) {
    let isInstance = true;
    return isInstance;
}
function GameCenterAchievementCreateRequestDataRelationshipsFromJSON(json) {
    return GameCenterAchievementCreateRequestDataRelationshipsFromJSONTyped(json, false);
}
function GameCenterAchievementCreateRequestDataRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        gameCenterDetail: !(0, runtime_1.exists)(json, "gameCenterDetail") ? undefined : (0, GameCenterAchievementCreateRequestDataRelationshipsGameCenterDetail_1.GameCenterAchievementCreateRequestDataRelationshipsGameCenterDetailFromJSON)(json["gameCenterDetail"]),
        gameCenterGroup: !(0, runtime_1.exists)(json, "gameCenterGroup") ? undefined : (0, GameCenterAchievementCreateRequestDataRelationshipsGameCenterGroup_1.GameCenterAchievementCreateRequestDataRelationshipsGameCenterGroupFromJSON)(json["gameCenterGroup"])
    };
}
function GameCenterAchievementCreateRequestDataRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        gameCenterDetail: (0, GameCenterAchievementCreateRequestDataRelationshipsGameCenterDetail_1.GameCenterAchievementCreateRequestDataRelationshipsGameCenterDetailToJSON)(value.gameCenterDetail),
        gameCenterGroup: (0, GameCenterAchievementCreateRequestDataRelationshipsGameCenterGroup_1.GameCenterAchievementCreateRequestDataRelationshipsGameCenterGroupToJSON)(value.gameCenterGroup)
    };
}
