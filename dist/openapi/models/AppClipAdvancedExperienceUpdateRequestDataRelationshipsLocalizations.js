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
exports.instanceOfAppClipAdvancedExperienceUpdateRequestDataRelationshipsLocalizations = instanceOfAppClipAdvancedExperienceUpdateRequestDataRelationshipsLocalizations;
exports.AppClipAdvancedExperienceUpdateRequestDataRelationshipsLocalizationsFromJSON = AppClipAdvancedExperienceUpdateRequestDataRelationshipsLocalizationsFromJSON;
exports.AppClipAdvancedExperienceUpdateRequestDataRelationshipsLocalizationsFromJSONTyped = AppClipAdvancedExperienceUpdateRequestDataRelationshipsLocalizationsFromJSONTyped;
exports.AppClipAdvancedExperienceUpdateRequestDataRelationshipsLocalizationsToJSON = AppClipAdvancedExperienceUpdateRequestDataRelationshipsLocalizationsToJSON;
const runtime_1 = require("../runtime");
const AppClipAdvancedExperienceRelationshipsLocalizationsDataInner_1 = require("./AppClipAdvancedExperienceRelationshipsLocalizationsDataInner");
/**
 * Check if a given object implements the AppClipAdvancedExperienceUpdateRequestDataRelationshipsLocalizations interface.
 */
function instanceOfAppClipAdvancedExperienceUpdateRequestDataRelationshipsLocalizations(value) {
    let isInstance = true;
    return isInstance;
}
function AppClipAdvancedExperienceUpdateRequestDataRelationshipsLocalizationsFromJSON(json) {
    return AppClipAdvancedExperienceUpdateRequestDataRelationshipsLocalizationsFromJSONTyped(json, false);
}
function AppClipAdvancedExperienceUpdateRequestDataRelationshipsLocalizationsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: !(0, runtime_1.exists)(json, "data") ? undefined : json["data"].map(AppClipAdvancedExperienceRelationshipsLocalizationsDataInner_1.AppClipAdvancedExperienceRelationshipsLocalizationsDataInnerFromJSON)
    };
}
function AppClipAdvancedExperienceUpdateRequestDataRelationshipsLocalizationsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: value.data === undefined ? undefined : value.data.map(AppClipAdvancedExperienceRelationshipsLocalizationsDataInner_1.AppClipAdvancedExperienceRelationshipsLocalizationsDataInnerToJSON)
    };
}
