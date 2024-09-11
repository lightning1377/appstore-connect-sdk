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
exports.instanceOfGameCenterLeaderboardSetLocalizationCreateRequestDataAttributes = instanceOfGameCenterLeaderboardSetLocalizationCreateRequestDataAttributes;
exports.GameCenterLeaderboardSetLocalizationCreateRequestDataAttributesFromJSON = GameCenterLeaderboardSetLocalizationCreateRequestDataAttributesFromJSON;
exports.GameCenterLeaderboardSetLocalizationCreateRequestDataAttributesFromJSONTyped = GameCenterLeaderboardSetLocalizationCreateRequestDataAttributesFromJSONTyped;
exports.GameCenterLeaderboardSetLocalizationCreateRequestDataAttributesToJSON = GameCenterLeaderboardSetLocalizationCreateRequestDataAttributesToJSON;
/**
 * Check if a given object implements the GameCenterLeaderboardSetLocalizationCreateRequestDataAttributes interface.
 */
function instanceOfGameCenterLeaderboardSetLocalizationCreateRequestDataAttributes(value) {
    let isInstance = true;
    isInstance = isInstance && "locale" in value;
    isInstance = isInstance && "name" in value;
    return isInstance;
}
function GameCenterLeaderboardSetLocalizationCreateRequestDataAttributesFromJSON(json) {
    return GameCenterLeaderboardSetLocalizationCreateRequestDataAttributesFromJSONTyped(json, false);
}
function GameCenterLeaderboardSetLocalizationCreateRequestDataAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        locale: json["locale"],
        name: json["name"]
    };
}
function GameCenterLeaderboardSetLocalizationCreateRequestDataAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        locale: value.locale,
        name: value.name
    };
}
