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
exports.instanceOfAppClipDefaultExperienceLocalizationResponse = instanceOfAppClipDefaultExperienceLocalizationResponse;
exports.AppClipDefaultExperienceLocalizationResponseFromJSON = AppClipDefaultExperienceLocalizationResponseFromJSON;
exports.AppClipDefaultExperienceLocalizationResponseFromJSONTyped = AppClipDefaultExperienceLocalizationResponseFromJSONTyped;
exports.AppClipDefaultExperienceLocalizationResponseToJSON = AppClipDefaultExperienceLocalizationResponseToJSON;
const runtime_1 = require("../runtime");
const AppClipDefaultExperienceLocalization_1 = require("./AppClipDefaultExperienceLocalization");
const AppClipDefaultExperienceLocalizationsResponseIncludedInner_1 = require("./AppClipDefaultExperienceLocalizationsResponseIncludedInner");
const DocumentLinks_1 = require("./DocumentLinks");
/**
 * Check if a given object implements the AppClipDefaultExperienceLocalizationResponse interface.
 */
function instanceOfAppClipDefaultExperienceLocalizationResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function AppClipDefaultExperienceLocalizationResponseFromJSON(json) {
    return AppClipDefaultExperienceLocalizationResponseFromJSONTyped(json, false);
}
function AppClipDefaultExperienceLocalizationResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, AppClipDefaultExperienceLocalization_1.AppClipDefaultExperienceLocalizationFromJSON)(json["data"]),
        included: !(0, runtime_1.exists)(json, "included") ? undefined : json["included"].map(AppClipDefaultExperienceLocalizationsResponseIncludedInner_1.AppClipDefaultExperienceLocalizationsResponseIncludedInnerFromJSON),
        links: (0, DocumentLinks_1.DocumentLinksFromJSON)(json["links"])
    };
}
function AppClipDefaultExperienceLocalizationResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, AppClipDefaultExperienceLocalization_1.AppClipDefaultExperienceLocalizationToJSON)(value.data),
        included: value.included === undefined ? undefined : value.included.map(AppClipDefaultExperienceLocalizationsResponseIncludedInner_1.AppClipDefaultExperienceLocalizationsResponseIncludedInnerToJSON),
        links: (0, DocumentLinks_1.DocumentLinksToJSON)(value.links)
    };
}
