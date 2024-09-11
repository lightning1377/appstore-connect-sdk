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
exports.GameCenterMatchmakingRuleCreateRequestDataAttributesTypeEnum = void 0;
exports.instanceOfGameCenterMatchmakingRuleCreateRequestDataAttributes = instanceOfGameCenterMatchmakingRuleCreateRequestDataAttributes;
exports.GameCenterMatchmakingRuleCreateRequestDataAttributesFromJSON = GameCenterMatchmakingRuleCreateRequestDataAttributesFromJSON;
exports.GameCenterMatchmakingRuleCreateRequestDataAttributesFromJSONTyped = GameCenterMatchmakingRuleCreateRequestDataAttributesFromJSONTyped;
exports.GameCenterMatchmakingRuleCreateRequestDataAttributesToJSON = GameCenterMatchmakingRuleCreateRequestDataAttributesToJSON;
const runtime_1 = require("../runtime");
/**
 * @export
 */
exports.GameCenterMatchmakingRuleCreateRequestDataAttributesTypeEnum = {
    Compatible: "COMPATIBLE",
    Distance: "DISTANCE",
    Match: "MATCH",
    Team: "TEAM"
};
/**
 * Check if a given object implements the GameCenterMatchmakingRuleCreateRequestDataAttributes interface.
 */
function instanceOfGameCenterMatchmakingRuleCreateRequestDataAttributes(value) {
    let isInstance = true;
    isInstance = isInstance && "referenceName" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "expression" in value;
    return isInstance;
}
function GameCenterMatchmakingRuleCreateRequestDataAttributesFromJSON(json) {
    return GameCenterMatchmakingRuleCreateRequestDataAttributesFromJSONTyped(json, false);
}
function GameCenterMatchmakingRuleCreateRequestDataAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        referenceName: json["referenceName"],
        description: json["description"],
        type: json["type"],
        expression: json["expression"],
        weight: !(0, runtime_1.exists)(json, "weight") ? undefined : json["weight"]
    };
}
function GameCenterMatchmakingRuleCreateRequestDataAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        referenceName: value.referenceName,
        description: value.description,
        type: value.type,
        expression: value.expression,
        weight: value.weight
    };
}
