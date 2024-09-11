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
exports.instanceOfAppClipAdvancedExperienceRelationshipsHeaderImage = instanceOfAppClipAdvancedExperienceRelationshipsHeaderImage;
exports.AppClipAdvancedExperienceRelationshipsHeaderImageFromJSON = AppClipAdvancedExperienceRelationshipsHeaderImageFromJSON;
exports.AppClipAdvancedExperienceRelationshipsHeaderImageFromJSONTyped = AppClipAdvancedExperienceRelationshipsHeaderImageFromJSONTyped;
exports.AppClipAdvancedExperienceRelationshipsHeaderImageToJSON = AppClipAdvancedExperienceRelationshipsHeaderImageToJSON;
const runtime_1 = require("../runtime");
const AlternativeDistributionPackageVersionRelationshipsVariantsLinks_1 = require("./AlternativeDistributionPackageVersionRelationshipsVariantsLinks");
const AppClipAdvancedExperienceRelationshipsHeaderImageData_1 = require("./AppClipAdvancedExperienceRelationshipsHeaderImageData");
/**
 * Check if a given object implements the AppClipAdvancedExperienceRelationshipsHeaderImage interface.
 */
function instanceOfAppClipAdvancedExperienceRelationshipsHeaderImage(value) {
    let isInstance = true;
    return isInstance;
}
function AppClipAdvancedExperienceRelationshipsHeaderImageFromJSON(json) {
    return AppClipAdvancedExperienceRelationshipsHeaderImageFromJSONTyped(json, false);
}
function AppClipAdvancedExperienceRelationshipsHeaderImageFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        links: !(0, runtime_1.exists)(json, "links") ? undefined : (0, AlternativeDistributionPackageVersionRelationshipsVariantsLinks_1.AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON)(json["links"]),
        data: !(0, runtime_1.exists)(json, "data") ? undefined : (0, AppClipAdvancedExperienceRelationshipsHeaderImageData_1.AppClipAdvancedExperienceRelationshipsHeaderImageDataFromJSON)(json["data"])
    };
}
function AppClipAdvancedExperienceRelationshipsHeaderImageToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        links: (0, AlternativeDistributionPackageVersionRelationshipsVariantsLinks_1.AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON)(value.links),
        data: (0, AppClipAdvancedExperienceRelationshipsHeaderImageData_1.AppClipAdvancedExperienceRelationshipsHeaderImageDataToJSON)(value.data)
    };
}
