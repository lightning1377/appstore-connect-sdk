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
exports.instanceOfGameCenterDetailGameCenterLeaderboardSetsLinkagesResponse = instanceOfGameCenterDetailGameCenterLeaderboardSetsLinkagesResponse;
exports.GameCenterDetailGameCenterLeaderboardSetsLinkagesResponseFromJSON = GameCenterDetailGameCenterLeaderboardSetsLinkagesResponseFromJSON;
exports.GameCenterDetailGameCenterLeaderboardSetsLinkagesResponseFromJSONTyped = GameCenterDetailGameCenterLeaderboardSetsLinkagesResponseFromJSONTyped;
exports.GameCenterDetailGameCenterLeaderboardSetsLinkagesResponseToJSON = GameCenterDetailGameCenterLeaderboardSetsLinkagesResponseToJSON;
const runtime_1 = require("../runtime");
const GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner_1 = require("./GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner");
const PagedDocumentLinks_1 = require("./PagedDocumentLinks");
const PagingInformation_1 = require("./PagingInformation");
/**
 * Check if a given object implements the GameCenterDetailGameCenterLeaderboardSetsLinkagesResponse interface.
 */
function instanceOfGameCenterDetailGameCenterLeaderboardSetsLinkagesResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function GameCenterDetailGameCenterLeaderboardSetsLinkagesResponseFromJSON(json) {
    return GameCenterDetailGameCenterLeaderboardSetsLinkagesResponseFromJSONTyped(json, false);
}
function GameCenterDetailGameCenterLeaderboardSetsLinkagesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: json["data"].map(GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner_1.GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInnerFromJSON),
        links: (0, PagedDocumentLinks_1.PagedDocumentLinksFromJSON)(json["links"]),
        meta: !(0, runtime_1.exists)(json, "meta") ? undefined : (0, PagingInformation_1.PagingInformationFromJSON)(json["meta"])
    };
}
function GameCenterDetailGameCenterLeaderboardSetsLinkagesResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: value.data.map(GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner_1.GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInnerToJSON),
        links: (0, PagedDocumentLinks_1.PagedDocumentLinksToJSON)(value.links),
        meta: (0, PagingInformation_1.PagingInformationToJSON)(value.meta)
    };
}
