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
exports.instanceOfAppClipAdvancedExperienceRelationships = instanceOfAppClipAdvancedExperienceRelationships;
exports.AppClipAdvancedExperienceRelationshipsFromJSON = AppClipAdvancedExperienceRelationshipsFromJSON;
exports.AppClipAdvancedExperienceRelationshipsFromJSONTyped = AppClipAdvancedExperienceRelationshipsFromJSONTyped;
exports.AppClipAdvancedExperienceRelationshipsToJSON = AppClipAdvancedExperienceRelationshipsToJSON;
const runtime_1 = require("../runtime");
const AppClipAdvancedExperienceRelationshipsAppClip_1 = require("./AppClipAdvancedExperienceRelationshipsAppClip");
const AppClipAdvancedExperienceRelationshipsHeaderImage_1 = require("./AppClipAdvancedExperienceRelationshipsHeaderImage");
const AppClipAdvancedExperienceRelationshipsLocalizations_1 = require("./AppClipAdvancedExperienceRelationshipsLocalizations");
/**
 * Check if a given object implements the AppClipAdvancedExperienceRelationships interface.
 */
function instanceOfAppClipAdvancedExperienceRelationships(value) {
    let isInstance = true;
    return isInstance;
}
function AppClipAdvancedExperienceRelationshipsFromJSON(json) {
    return AppClipAdvancedExperienceRelationshipsFromJSONTyped(json, false);
}
function AppClipAdvancedExperienceRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        appClip: !(0, runtime_1.exists)(json, "appClip") ? undefined : (0, AppClipAdvancedExperienceRelationshipsAppClip_1.AppClipAdvancedExperienceRelationshipsAppClipFromJSON)(json["appClip"]),
        headerImage: !(0, runtime_1.exists)(json, "headerImage") ? undefined : (0, AppClipAdvancedExperienceRelationshipsHeaderImage_1.AppClipAdvancedExperienceRelationshipsHeaderImageFromJSON)(json["headerImage"]),
        localizations: !(0, runtime_1.exists)(json, "localizations") ? undefined : (0, AppClipAdvancedExperienceRelationshipsLocalizations_1.AppClipAdvancedExperienceRelationshipsLocalizationsFromJSON)(json["localizations"])
    };
}
function AppClipAdvancedExperienceRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        appClip: (0, AppClipAdvancedExperienceRelationshipsAppClip_1.AppClipAdvancedExperienceRelationshipsAppClipToJSON)(value.appClip),
        headerImage: (0, AppClipAdvancedExperienceRelationshipsHeaderImage_1.AppClipAdvancedExperienceRelationshipsHeaderImageToJSON)(value.headerImage),
        localizations: (0, AppClipAdvancedExperienceRelationshipsLocalizations_1.AppClipAdvancedExperienceRelationshipsLocalizationsToJSON)(value.localizations)
    };
}
