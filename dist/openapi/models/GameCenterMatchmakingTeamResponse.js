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
exports.instanceOfGameCenterMatchmakingTeamResponse = instanceOfGameCenterMatchmakingTeamResponse;
exports.GameCenterMatchmakingTeamResponseFromJSON = GameCenterMatchmakingTeamResponseFromJSON;
exports.GameCenterMatchmakingTeamResponseFromJSONTyped = GameCenterMatchmakingTeamResponseFromJSONTyped;
exports.GameCenterMatchmakingTeamResponseToJSON = GameCenterMatchmakingTeamResponseToJSON;
const DocumentLinks_1 = require("./DocumentLinks");
const GameCenterMatchmakingTeam_1 = require("./GameCenterMatchmakingTeam");
/**
 * Check if a given object implements the GameCenterMatchmakingTeamResponse interface.
 */
function instanceOfGameCenterMatchmakingTeamResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function GameCenterMatchmakingTeamResponseFromJSON(json) {
    return GameCenterMatchmakingTeamResponseFromJSONTyped(json, false);
}
function GameCenterMatchmakingTeamResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, GameCenterMatchmakingTeam_1.GameCenterMatchmakingTeamFromJSON)(json["data"]),
        links: (0, DocumentLinks_1.DocumentLinksFromJSON)(json["links"])
    };
}
function GameCenterMatchmakingTeamResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, GameCenterMatchmakingTeam_1.GameCenterMatchmakingTeamToJSON)(value.data),
        links: (0, DocumentLinks_1.DocumentLinksToJSON)(value.links)
    };
}
