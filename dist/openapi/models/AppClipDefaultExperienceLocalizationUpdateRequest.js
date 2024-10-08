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
exports.instanceOfAppClipDefaultExperienceLocalizationUpdateRequest = instanceOfAppClipDefaultExperienceLocalizationUpdateRequest;
exports.AppClipDefaultExperienceLocalizationUpdateRequestFromJSON = AppClipDefaultExperienceLocalizationUpdateRequestFromJSON;
exports.AppClipDefaultExperienceLocalizationUpdateRequestFromJSONTyped = AppClipDefaultExperienceLocalizationUpdateRequestFromJSONTyped;
exports.AppClipDefaultExperienceLocalizationUpdateRequestToJSON = AppClipDefaultExperienceLocalizationUpdateRequestToJSON;
const AppClipDefaultExperienceLocalizationUpdateRequestData_1 = require("./AppClipDefaultExperienceLocalizationUpdateRequestData");
/**
 * Check if a given object implements the AppClipDefaultExperienceLocalizationUpdateRequest interface.
 */
function instanceOfAppClipDefaultExperienceLocalizationUpdateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function AppClipDefaultExperienceLocalizationUpdateRequestFromJSON(json) {
    return AppClipDefaultExperienceLocalizationUpdateRequestFromJSONTyped(json, false);
}
function AppClipDefaultExperienceLocalizationUpdateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, AppClipDefaultExperienceLocalizationUpdateRequestData_1.AppClipDefaultExperienceLocalizationUpdateRequestDataFromJSON)(json["data"])
    };
}
function AppClipDefaultExperienceLocalizationUpdateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, AppClipDefaultExperienceLocalizationUpdateRequestData_1.AppClipDefaultExperienceLocalizationUpdateRequestDataToJSON)(value.data)
    };
}
