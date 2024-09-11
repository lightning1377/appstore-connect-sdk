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
exports.instanceOfGameCenterLeaderboardSetLocalizationResponse = instanceOfGameCenterLeaderboardSetLocalizationResponse;
exports.GameCenterLeaderboardSetLocalizationResponseFromJSON = GameCenterLeaderboardSetLocalizationResponseFromJSON;
exports.GameCenterLeaderboardSetLocalizationResponseFromJSONTyped = GameCenterLeaderboardSetLocalizationResponseFromJSONTyped;
exports.GameCenterLeaderboardSetLocalizationResponseToJSON = GameCenterLeaderboardSetLocalizationResponseToJSON;
const runtime_1 = require("../runtime");
const DocumentLinks_1 = require("./DocumentLinks");
const GameCenterLeaderboardSetLocalization_1 = require("./GameCenterLeaderboardSetLocalization");
const GameCenterLeaderboardSetLocalizationsResponseIncludedInner_1 = require("./GameCenterLeaderboardSetLocalizationsResponseIncludedInner");
/**
 * Check if a given object implements the GameCenterLeaderboardSetLocalizationResponse interface.
 */
function instanceOfGameCenterLeaderboardSetLocalizationResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function GameCenterLeaderboardSetLocalizationResponseFromJSON(json) {
    return GameCenterLeaderboardSetLocalizationResponseFromJSONTyped(json, false);
}
function GameCenterLeaderboardSetLocalizationResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, GameCenterLeaderboardSetLocalization_1.GameCenterLeaderboardSetLocalizationFromJSON)(json["data"]),
        included: !(0, runtime_1.exists)(json, "included") ? undefined : json["included"].map(GameCenterLeaderboardSetLocalizationsResponseIncludedInner_1.GameCenterLeaderboardSetLocalizationsResponseIncludedInnerFromJSON),
        links: (0, DocumentLinks_1.DocumentLinksFromJSON)(json["links"])
    };
}
function GameCenterLeaderboardSetLocalizationResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, GameCenterLeaderboardSetLocalization_1.GameCenterLeaderboardSetLocalizationToJSON)(value.data),
        included: value.included === undefined ? undefined : value.included.map(GameCenterLeaderboardSetLocalizationsResponseIncludedInner_1.GameCenterLeaderboardSetLocalizationsResponseIncludedInnerToJSON),
        links: (0, DocumentLinks_1.DocumentLinksToJSON)(value.links)
    };
}
