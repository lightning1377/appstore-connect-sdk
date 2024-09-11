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
exports.instanceOfAppEventRelationships = instanceOfAppEventRelationships;
exports.AppEventRelationshipsFromJSON = AppEventRelationshipsFromJSON;
exports.AppEventRelationshipsFromJSONTyped = AppEventRelationshipsFromJSONTyped;
exports.AppEventRelationshipsToJSON = AppEventRelationshipsToJSON;
const runtime_1 = require("../runtime");
const AppEventRelationshipsLocalizations_1 = require("./AppEventRelationshipsLocalizations");
/**
 * Check if a given object implements the AppEventRelationships interface.
 */
function instanceOfAppEventRelationships(value) {
    let isInstance = true;
    return isInstance;
}
function AppEventRelationshipsFromJSON(json) {
    return AppEventRelationshipsFromJSONTyped(json, false);
}
function AppEventRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        localizations: !(0, runtime_1.exists)(json, "localizations") ? undefined : (0, AppEventRelationshipsLocalizations_1.AppEventRelationshipsLocalizationsFromJSON)(json["localizations"])
    };
}
function AppEventRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        localizations: (0, AppEventRelationshipsLocalizations_1.AppEventRelationshipsLocalizationsToJSON)(value.localizations)
    };
}
