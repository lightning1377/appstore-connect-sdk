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
exports.instanceOfGameCenterEnabledVersionRelationships = instanceOfGameCenterEnabledVersionRelationships;
exports.GameCenterEnabledVersionRelationshipsFromJSON = GameCenterEnabledVersionRelationshipsFromJSON;
exports.GameCenterEnabledVersionRelationshipsFromJSONTyped = GameCenterEnabledVersionRelationshipsFromJSONTyped;
exports.GameCenterEnabledVersionRelationshipsToJSON = GameCenterEnabledVersionRelationshipsToJSON;
const runtime_1 = require("../runtime");
const AppAvailabilityRelationshipsApp_1 = require("./AppAvailabilityRelationshipsApp");
const AppRelationshipsGameCenterEnabledVersions_1 = require("./AppRelationshipsGameCenterEnabledVersions");
/**
 * Check if a given object implements the GameCenterEnabledVersionRelationships interface.
 */
function instanceOfGameCenterEnabledVersionRelationships(value) {
    let isInstance = true;
    return isInstance;
}
function GameCenterEnabledVersionRelationshipsFromJSON(json) {
    return GameCenterEnabledVersionRelationshipsFromJSONTyped(json, false);
}
function GameCenterEnabledVersionRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        compatibleVersions: !(0, runtime_1.exists)(json, "compatibleVersions") ? undefined : (0, AppRelationshipsGameCenterEnabledVersions_1.AppRelationshipsGameCenterEnabledVersionsFromJSON)(json["compatibleVersions"]),
        app: !(0, runtime_1.exists)(json, "app") ? undefined : (0, AppAvailabilityRelationshipsApp_1.AppAvailabilityRelationshipsAppFromJSON)(json["app"])
    };
}
function GameCenterEnabledVersionRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        compatibleVersions: (0, AppRelationshipsGameCenterEnabledVersions_1.AppRelationshipsGameCenterEnabledVersionsToJSON)(value.compatibleVersions),
        app: (0, AppAvailabilityRelationshipsApp_1.AppAvailabilityRelationshipsAppToJSON)(value.app)
    };
}
