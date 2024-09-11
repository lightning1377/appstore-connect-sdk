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
exports.instanceOfGameCenterMatchmakingTestPlayerPropertyInlineCreateAttributes = instanceOfGameCenterMatchmakingTestPlayerPropertyInlineCreateAttributes;
exports.GameCenterMatchmakingTestPlayerPropertyInlineCreateAttributesFromJSON = GameCenterMatchmakingTestPlayerPropertyInlineCreateAttributesFromJSON;
exports.GameCenterMatchmakingTestPlayerPropertyInlineCreateAttributesFromJSONTyped = GameCenterMatchmakingTestPlayerPropertyInlineCreateAttributesFromJSONTyped;
exports.GameCenterMatchmakingTestPlayerPropertyInlineCreateAttributesToJSON = GameCenterMatchmakingTestPlayerPropertyInlineCreateAttributesToJSON;
const runtime_1 = require("../runtime");
const Property_1 = require("./Property");
/**
 * Check if a given object implements the GameCenterMatchmakingTestPlayerPropertyInlineCreateAttributes interface.
 */
function instanceOfGameCenterMatchmakingTestPlayerPropertyInlineCreateAttributes(value) {
    let isInstance = true;
    isInstance = isInstance && "playerId" in value;
    return isInstance;
}
function GameCenterMatchmakingTestPlayerPropertyInlineCreateAttributesFromJSON(json) {
    return GameCenterMatchmakingTestPlayerPropertyInlineCreateAttributesFromJSONTyped(json, false);
}
function GameCenterMatchmakingTestPlayerPropertyInlineCreateAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        playerId: json["playerId"],
        properties: !(0, runtime_1.exists)(json, "properties") ? undefined : json["properties"].map(Property_1.PropertyFromJSON)
    };
}
function GameCenterMatchmakingTestPlayerPropertyInlineCreateAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        playerId: value.playerId,
        properties: value.properties === undefined ? undefined : value.properties.map(Property_1.PropertyToJSON)
    };
}
