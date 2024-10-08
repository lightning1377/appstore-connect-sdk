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
exports.instanceOfGameCenterLeaderboardSetLocalizationsResponse = instanceOfGameCenterLeaderboardSetLocalizationsResponse;
exports.GameCenterLeaderboardSetLocalizationsResponseFromJSON = GameCenterLeaderboardSetLocalizationsResponseFromJSON;
exports.GameCenterLeaderboardSetLocalizationsResponseFromJSONTyped = GameCenterLeaderboardSetLocalizationsResponseFromJSONTyped;
exports.GameCenterLeaderboardSetLocalizationsResponseToJSON = GameCenterLeaderboardSetLocalizationsResponseToJSON;
const runtime_1 = require("../runtime");
const GameCenterLeaderboardSetLocalization_1 = require("./GameCenterLeaderboardSetLocalization");
const GameCenterLeaderboardSetLocalizationsResponseIncludedInner_1 = require("./GameCenterLeaderboardSetLocalizationsResponseIncludedInner");
const PagedDocumentLinks_1 = require("./PagedDocumentLinks");
const PagingInformation_1 = require("./PagingInformation");
/**
 * Check if a given object implements the GameCenterLeaderboardSetLocalizationsResponse interface.
 */
function instanceOfGameCenterLeaderboardSetLocalizationsResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function GameCenterLeaderboardSetLocalizationsResponseFromJSON(json) {
    return GameCenterLeaderboardSetLocalizationsResponseFromJSONTyped(json, false);
}
function GameCenterLeaderboardSetLocalizationsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: json["data"].map(GameCenterLeaderboardSetLocalization_1.GameCenterLeaderboardSetLocalizationFromJSON),
        included: !(0, runtime_1.exists)(json, "included") ? undefined : json["included"].map(GameCenterLeaderboardSetLocalizationsResponseIncludedInner_1.GameCenterLeaderboardSetLocalizationsResponseIncludedInnerFromJSON),
        links: (0, PagedDocumentLinks_1.PagedDocumentLinksFromJSON)(json["links"]),
        meta: !(0, runtime_1.exists)(json, "meta") ? undefined : (0, PagingInformation_1.PagingInformationFromJSON)(json["meta"])
    };
}
function GameCenterLeaderboardSetLocalizationsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: value.data.map(GameCenterLeaderboardSetLocalization_1.GameCenterLeaderboardSetLocalizationToJSON),
        included: value.included === undefined ? undefined : value.included.map(GameCenterLeaderboardSetLocalizationsResponseIncludedInner_1.GameCenterLeaderboardSetLocalizationsResponseIncludedInnerToJSON),
        links: (0, PagedDocumentLinks_1.PagedDocumentLinksToJSON)(value.links),
        meta: (0, PagingInformation_1.PagingInformationToJSON)(value.meta)
    };
}
