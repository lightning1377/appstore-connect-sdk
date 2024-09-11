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
exports.instanceOfGameCenterLeaderboardSetGroupLeaderboardSetLinkageResponse = instanceOfGameCenterLeaderboardSetGroupLeaderboardSetLinkageResponse;
exports.GameCenterLeaderboardSetGroupLeaderboardSetLinkageResponseFromJSON = GameCenterLeaderboardSetGroupLeaderboardSetLinkageResponseFromJSON;
exports.GameCenterLeaderboardSetGroupLeaderboardSetLinkageResponseFromJSONTyped = GameCenterLeaderboardSetGroupLeaderboardSetLinkageResponseFromJSONTyped;
exports.GameCenterLeaderboardSetGroupLeaderboardSetLinkageResponseToJSON = GameCenterLeaderboardSetGroupLeaderboardSetLinkageResponseToJSON;
const DocumentLinks_1 = require("./DocumentLinks");
const GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner_1 = require("./GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner");
/**
 * Check if a given object implements the GameCenterLeaderboardSetGroupLeaderboardSetLinkageResponse interface.
 */
function instanceOfGameCenterLeaderboardSetGroupLeaderboardSetLinkageResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function GameCenterLeaderboardSetGroupLeaderboardSetLinkageResponseFromJSON(json) {
    return GameCenterLeaderboardSetGroupLeaderboardSetLinkageResponseFromJSONTyped(json, false);
}
function GameCenterLeaderboardSetGroupLeaderboardSetLinkageResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner_1.GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInnerFromJSON)(json["data"]),
        links: (0, DocumentLinks_1.DocumentLinksFromJSON)(json["links"])
    };
}
function GameCenterLeaderboardSetGroupLeaderboardSetLinkageResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner_1.GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInnerToJSON)(value.data),
        links: (0, DocumentLinks_1.DocumentLinksToJSON)(value.links)
    };
}
