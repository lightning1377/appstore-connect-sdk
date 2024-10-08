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
exports.GameCenterLeaderboardSetImageCreateRequestDataTypeEnum = void 0;
exports.instanceOfGameCenterLeaderboardSetImageCreateRequestData = instanceOfGameCenterLeaderboardSetImageCreateRequestData;
exports.GameCenterLeaderboardSetImageCreateRequestDataFromJSON = GameCenterLeaderboardSetImageCreateRequestDataFromJSON;
exports.GameCenterLeaderboardSetImageCreateRequestDataFromJSONTyped = GameCenterLeaderboardSetImageCreateRequestDataFromJSONTyped;
exports.GameCenterLeaderboardSetImageCreateRequestDataToJSON = GameCenterLeaderboardSetImageCreateRequestDataToJSON;
const AppClipAdvancedExperienceImageCreateRequestDataAttributes_1 = require("./AppClipAdvancedExperienceImageCreateRequestDataAttributes");
const GameCenterLeaderboardSetImageCreateRequestDataRelationships_1 = require("./GameCenterLeaderboardSetImageCreateRequestDataRelationships");
/**
 * @export
 */
exports.GameCenterLeaderboardSetImageCreateRequestDataTypeEnum = {
    GameCenterLeaderboardSetImages: "gameCenterLeaderboardSetImages"
};
/**
 * Check if a given object implements the GameCenterLeaderboardSetImageCreateRequestData interface.
 */
function instanceOfGameCenterLeaderboardSetImageCreateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;
    return isInstance;
}
function GameCenterLeaderboardSetImageCreateRequestDataFromJSON(json) {
    return GameCenterLeaderboardSetImageCreateRequestDataFromJSONTyped(json, false);
}
function GameCenterLeaderboardSetImageCreateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        attributes: (0, AppClipAdvancedExperienceImageCreateRequestDataAttributes_1.AppClipAdvancedExperienceImageCreateRequestDataAttributesFromJSON)(json["attributes"]),
        relationships: (0, GameCenterLeaderboardSetImageCreateRequestDataRelationships_1.GameCenterLeaderboardSetImageCreateRequestDataRelationshipsFromJSON)(json["relationships"])
    };
}
function GameCenterLeaderboardSetImageCreateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        attributes: (0, AppClipAdvancedExperienceImageCreateRequestDataAttributes_1.AppClipAdvancedExperienceImageCreateRequestDataAttributesToJSON)(value.attributes),
        relationships: (0, GameCenterLeaderboardSetImageCreateRequestDataRelationships_1.GameCenterLeaderboardSetImageCreateRequestDataRelationshipsToJSON)(value.relationships)
    };
}
