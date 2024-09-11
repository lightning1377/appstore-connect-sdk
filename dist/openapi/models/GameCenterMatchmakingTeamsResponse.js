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
exports.instanceOfGameCenterMatchmakingTeamsResponse = instanceOfGameCenterMatchmakingTeamsResponse;
exports.GameCenterMatchmakingTeamsResponseFromJSON = GameCenterMatchmakingTeamsResponseFromJSON;
exports.GameCenterMatchmakingTeamsResponseFromJSONTyped = GameCenterMatchmakingTeamsResponseFromJSONTyped;
exports.GameCenterMatchmakingTeamsResponseToJSON = GameCenterMatchmakingTeamsResponseToJSON;
const runtime_1 = require("../runtime");
const GameCenterMatchmakingTeam_1 = require("./GameCenterMatchmakingTeam");
const PagedDocumentLinks_1 = require("./PagedDocumentLinks");
const PagingInformation_1 = require("./PagingInformation");
/**
 * Check if a given object implements the GameCenterMatchmakingTeamsResponse interface.
 */
function instanceOfGameCenterMatchmakingTeamsResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function GameCenterMatchmakingTeamsResponseFromJSON(json) {
    return GameCenterMatchmakingTeamsResponseFromJSONTyped(json, false);
}
function GameCenterMatchmakingTeamsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: json["data"].map(GameCenterMatchmakingTeam_1.GameCenterMatchmakingTeamFromJSON),
        links: (0, PagedDocumentLinks_1.PagedDocumentLinksFromJSON)(json["links"]),
        meta: !(0, runtime_1.exists)(json, "meta") ? undefined : (0, PagingInformation_1.PagingInformationFromJSON)(json["meta"])
    };
}
function GameCenterMatchmakingTeamsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: value.data.map(GameCenterMatchmakingTeam_1.GameCenterMatchmakingTeamToJSON),
        links: (0, PagedDocumentLinks_1.PagedDocumentLinksToJSON)(value.links),
        meta: (0, PagingInformation_1.PagingInformationToJSON)(value.meta)
    };
}
