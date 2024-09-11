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
exports.instanceOfAppClipAdvancedExperienceCreateRequestDataRelationshipsAppClip = instanceOfAppClipAdvancedExperienceCreateRequestDataRelationshipsAppClip;
exports.AppClipAdvancedExperienceCreateRequestDataRelationshipsAppClipFromJSON = AppClipAdvancedExperienceCreateRequestDataRelationshipsAppClipFromJSON;
exports.AppClipAdvancedExperienceCreateRequestDataRelationshipsAppClipFromJSONTyped = AppClipAdvancedExperienceCreateRequestDataRelationshipsAppClipFromJSONTyped;
exports.AppClipAdvancedExperienceCreateRequestDataRelationshipsAppClipToJSON = AppClipAdvancedExperienceCreateRequestDataRelationshipsAppClipToJSON;
const AppClipAdvancedExperienceRelationshipsAppClipData_1 = require("./AppClipAdvancedExperienceRelationshipsAppClipData");
/**
 * Check if a given object implements the AppClipAdvancedExperienceCreateRequestDataRelationshipsAppClip interface.
 */
function instanceOfAppClipAdvancedExperienceCreateRequestDataRelationshipsAppClip(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function AppClipAdvancedExperienceCreateRequestDataRelationshipsAppClipFromJSON(json) {
    return AppClipAdvancedExperienceCreateRequestDataRelationshipsAppClipFromJSONTyped(json, false);
}
function AppClipAdvancedExperienceCreateRequestDataRelationshipsAppClipFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, AppClipAdvancedExperienceRelationshipsAppClipData_1.AppClipAdvancedExperienceRelationshipsAppClipDataFromJSON)(json["data"])
    };
}
function AppClipAdvancedExperienceCreateRequestDataRelationshipsAppClipToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, AppClipAdvancedExperienceRelationshipsAppClipData_1.AppClipAdvancedExperienceRelationshipsAppClipDataToJSON)(value.data)
    };
}
