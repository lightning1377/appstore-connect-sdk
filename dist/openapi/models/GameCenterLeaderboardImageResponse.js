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
exports.instanceOfGameCenterLeaderboardImageResponse = instanceOfGameCenterLeaderboardImageResponse;
exports.GameCenterLeaderboardImageResponseFromJSON = GameCenterLeaderboardImageResponseFromJSON;
exports.GameCenterLeaderboardImageResponseFromJSONTyped = GameCenterLeaderboardImageResponseFromJSONTyped;
exports.GameCenterLeaderboardImageResponseToJSON = GameCenterLeaderboardImageResponseToJSON;
const runtime_1 = require("../runtime");
const DocumentLinks_1 = require("./DocumentLinks");
const GameCenterLeaderboardImage_1 = require("./GameCenterLeaderboardImage");
const GameCenterLeaderboardLocalization_1 = require("./GameCenterLeaderboardLocalization");
/**
 * Check if a given object implements the GameCenterLeaderboardImageResponse interface.
 */
function instanceOfGameCenterLeaderboardImageResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function GameCenterLeaderboardImageResponseFromJSON(json) {
    return GameCenterLeaderboardImageResponseFromJSONTyped(json, false);
}
function GameCenterLeaderboardImageResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, GameCenterLeaderboardImage_1.GameCenterLeaderboardImageFromJSON)(json["data"]),
        included: !(0, runtime_1.exists)(json, "included") ? undefined : json["included"].map(GameCenterLeaderboardLocalization_1.GameCenterLeaderboardLocalizationFromJSON),
        links: (0, DocumentLinks_1.DocumentLinksFromJSON)(json["links"])
    };
}
function GameCenterLeaderboardImageResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, GameCenterLeaderboardImage_1.GameCenterLeaderboardImageToJSON)(value.data),
        included: value.included === undefined ? undefined : value.included.map(GameCenterLeaderboardLocalization_1.GameCenterLeaderboardLocalizationToJSON),
        links: (0, DocumentLinks_1.DocumentLinksToJSON)(value.links)
    };
}
