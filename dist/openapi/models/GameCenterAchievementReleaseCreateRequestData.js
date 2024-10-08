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
exports.GameCenterAchievementReleaseCreateRequestDataTypeEnum = void 0;
exports.instanceOfGameCenterAchievementReleaseCreateRequestData = instanceOfGameCenterAchievementReleaseCreateRequestData;
exports.GameCenterAchievementReleaseCreateRequestDataFromJSON = GameCenterAchievementReleaseCreateRequestDataFromJSON;
exports.GameCenterAchievementReleaseCreateRequestDataFromJSONTyped = GameCenterAchievementReleaseCreateRequestDataFromJSONTyped;
exports.GameCenterAchievementReleaseCreateRequestDataToJSON = GameCenterAchievementReleaseCreateRequestDataToJSON;
const GameCenterAchievementReleaseCreateRequestDataRelationships_1 = require("./GameCenterAchievementReleaseCreateRequestDataRelationships");
/**
 * @export
 */
exports.GameCenterAchievementReleaseCreateRequestDataTypeEnum = {
    GameCenterAchievementReleases: "gameCenterAchievementReleases"
};
/**
 * Check if a given object implements the GameCenterAchievementReleaseCreateRequestData interface.
 */
function instanceOfGameCenterAchievementReleaseCreateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "relationships" in value;
    return isInstance;
}
function GameCenterAchievementReleaseCreateRequestDataFromJSON(json) {
    return GameCenterAchievementReleaseCreateRequestDataFromJSONTyped(json, false);
}
function GameCenterAchievementReleaseCreateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        relationships: (0, GameCenterAchievementReleaseCreateRequestDataRelationships_1.GameCenterAchievementReleaseCreateRequestDataRelationshipsFromJSON)(json["relationships"])
    };
}
function GameCenterAchievementReleaseCreateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        relationships: (0, GameCenterAchievementReleaseCreateRequestDataRelationships_1.GameCenterAchievementReleaseCreateRequestDataRelationshipsToJSON)(value.relationships)
    };
}
