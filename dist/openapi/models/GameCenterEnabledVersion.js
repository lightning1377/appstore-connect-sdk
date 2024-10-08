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
exports.GameCenterEnabledVersionTypeEnum = void 0;
exports.instanceOfGameCenterEnabledVersion = instanceOfGameCenterEnabledVersion;
exports.GameCenterEnabledVersionFromJSON = GameCenterEnabledVersionFromJSON;
exports.GameCenterEnabledVersionFromJSONTyped = GameCenterEnabledVersionFromJSONTyped;
exports.GameCenterEnabledVersionToJSON = GameCenterEnabledVersionToJSON;
const runtime_1 = require("../runtime");
const GameCenterEnabledVersionAttributes_1 = require("./GameCenterEnabledVersionAttributes");
const GameCenterEnabledVersionRelationships_1 = require("./GameCenterEnabledVersionRelationships");
const ResourceLinks_1 = require("./ResourceLinks");
/**
 * @export
 */
exports.GameCenterEnabledVersionTypeEnum = {
    GameCenterEnabledVersions: "gameCenterEnabledVersions"
};
/**
 * Check if a given object implements the GameCenterEnabledVersion interface.
 */
function instanceOfGameCenterEnabledVersion(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
function GameCenterEnabledVersionFromJSON(json) {
    return GameCenterEnabledVersionFromJSONTyped(json, false);
}
function GameCenterEnabledVersionFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !(0, runtime_1.exists)(json, "attributes") ? undefined : (0, GameCenterEnabledVersionAttributes_1.GameCenterEnabledVersionAttributesFromJSON)(json["attributes"]),
        relationships: !(0, runtime_1.exists)(json, "relationships") ? undefined : (0, GameCenterEnabledVersionRelationships_1.GameCenterEnabledVersionRelationshipsFromJSON)(json["relationships"]),
        links: !(0, runtime_1.exists)(json, "links") ? undefined : (0, ResourceLinks_1.ResourceLinksFromJSON)(json["links"])
    };
}
function GameCenterEnabledVersionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: (0, GameCenterEnabledVersionAttributes_1.GameCenterEnabledVersionAttributesToJSON)(value.attributes),
        relationships: (0, GameCenterEnabledVersionRelationships_1.GameCenterEnabledVersionRelationshipsToJSON)(value.relationships),
        links: (0, ResourceLinks_1.ResourceLinksToJSON)(value.links)
    };
}
