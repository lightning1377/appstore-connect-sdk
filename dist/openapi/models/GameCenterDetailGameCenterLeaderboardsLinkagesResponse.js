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
exports.instanceOfGameCenterDetailGameCenterLeaderboardsLinkagesResponse = instanceOfGameCenterDetailGameCenterLeaderboardsLinkagesResponse;
exports.GameCenterDetailGameCenterLeaderboardsLinkagesResponseFromJSON = GameCenterDetailGameCenterLeaderboardsLinkagesResponseFromJSON;
exports.GameCenterDetailGameCenterLeaderboardsLinkagesResponseFromJSONTyped = GameCenterDetailGameCenterLeaderboardsLinkagesResponseFromJSONTyped;
exports.GameCenterDetailGameCenterLeaderboardsLinkagesResponseToJSON = GameCenterDetailGameCenterLeaderboardsLinkagesResponseToJSON;
const runtime_1 = require("../runtime");
const GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner_1 = require("./GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner");
const PagedDocumentLinks_1 = require("./PagedDocumentLinks");
const PagingInformation_1 = require("./PagingInformation");
/**
 * Check if a given object implements the GameCenterDetailGameCenterLeaderboardsLinkagesResponse interface.
 */
function instanceOfGameCenterDetailGameCenterLeaderboardsLinkagesResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function GameCenterDetailGameCenterLeaderboardsLinkagesResponseFromJSON(json) {
    return GameCenterDetailGameCenterLeaderboardsLinkagesResponseFromJSONTyped(json, false);
}
function GameCenterDetailGameCenterLeaderboardsLinkagesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: json["data"].map(GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner_1.GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerFromJSON),
        links: (0, PagedDocumentLinks_1.PagedDocumentLinksFromJSON)(json["links"]),
        meta: !(0, runtime_1.exists)(json, "meta") ? undefined : (0, PagingInformation_1.PagingInformationFromJSON)(json["meta"])
    };
}
function GameCenterDetailGameCenterLeaderboardsLinkagesResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: value.data.map(GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner_1.GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerToJSON),
        links: (0, PagedDocumentLinks_1.PagedDocumentLinksToJSON)(value.links),
        meta: (0, PagingInformation_1.PagingInformationToJSON)(value.meta)
    };
}
