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
exports.GameCenterLeaderboardSetImageTypeEnum = void 0;
exports.instanceOfGameCenterLeaderboardSetImage = instanceOfGameCenterLeaderboardSetImage;
exports.GameCenterLeaderboardSetImageFromJSON = GameCenterLeaderboardSetImageFromJSON;
exports.GameCenterLeaderboardSetImageFromJSONTyped = GameCenterLeaderboardSetImageFromJSONTyped;
exports.GameCenterLeaderboardSetImageToJSON = GameCenterLeaderboardSetImageToJSON;
const runtime_1 = require("../runtime");
const GameCenterAchievementImageAttributes_1 = require("./GameCenterAchievementImageAttributes");
const GameCenterLeaderboardSetImageRelationships_1 = require("./GameCenterLeaderboardSetImageRelationships");
const ResourceLinks_1 = require("./ResourceLinks");
/**
 * @export
 */
exports.GameCenterLeaderboardSetImageTypeEnum = {
    GameCenterLeaderboardSetImages: "gameCenterLeaderboardSetImages"
};
/**
 * Check if a given object implements the GameCenterLeaderboardSetImage interface.
 */
function instanceOfGameCenterLeaderboardSetImage(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
function GameCenterLeaderboardSetImageFromJSON(json) {
    return GameCenterLeaderboardSetImageFromJSONTyped(json, false);
}
function GameCenterLeaderboardSetImageFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !(0, runtime_1.exists)(json, "attributes") ? undefined : (0, GameCenterAchievementImageAttributes_1.GameCenterAchievementImageAttributesFromJSON)(json["attributes"]),
        relationships: !(0, runtime_1.exists)(json, "relationships") ? undefined : (0, GameCenterLeaderboardSetImageRelationships_1.GameCenterLeaderboardSetImageRelationshipsFromJSON)(json["relationships"]),
        links: !(0, runtime_1.exists)(json, "links") ? undefined : (0, ResourceLinks_1.ResourceLinksFromJSON)(json["links"])
    };
}
function GameCenterLeaderboardSetImageToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: (0, GameCenterAchievementImageAttributes_1.GameCenterAchievementImageAttributesToJSON)(value.attributes),
        relationships: (0, GameCenterLeaderboardSetImageRelationships_1.GameCenterLeaderboardSetImageRelationshipsToJSON)(value.relationships),
        links: (0, ResourceLinks_1.ResourceLinksToJSON)(value.links)
    };
}
