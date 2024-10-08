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
exports.instanceOfAppEventScreenshotCreateRequestDataRelationshipsAppEventLocalization = instanceOfAppEventScreenshotCreateRequestDataRelationshipsAppEventLocalization;
exports.AppEventScreenshotCreateRequestDataRelationshipsAppEventLocalizationFromJSON = AppEventScreenshotCreateRequestDataRelationshipsAppEventLocalizationFromJSON;
exports.AppEventScreenshotCreateRequestDataRelationshipsAppEventLocalizationFromJSONTyped = AppEventScreenshotCreateRequestDataRelationshipsAppEventLocalizationFromJSONTyped;
exports.AppEventScreenshotCreateRequestDataRelationshipsAppEventLocalizationToJSON = AppEventScreenshotCreateRequestDataRelationshipsAppEventLocalizationToJSON;
const AppEventScreenshotRelationshipsAppEventLocalizationData_1 = require("./AppEventScreenshotRelationshipsAppEventLocalizationData");
/**
 * Check if a given object implements the AppEventScreenshotCreateRequestDataRelationshipsAppEventLocalization interface.
 */
function instanceOfAppEventScreenshotCreateRequestDataRelationshipsAppEventLocalization(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function AppEventScreenshotCreateRequestDataRelationshipsAppEventLocalizationFromJSON(json) {
    return AppEventScreenshotCreateRequestDataRelationshipsAppEventLocalizationFromJSONTyped(json, false);
}
function AppEventScreenshotCreateRequestDataRelationshipsAppEventLocalizationFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, AppEventScreenshotRelationshipsAppEventLocalizationData_1.AppEventScreenshotRelationshipsAppEventLocalizationDataFromJSON)(json["data"])
    };
}
function AppEventScreenshotCreateRequestDataRelationshipsAppEventLocalizationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, AppEventScreenshotRelationshipsAppEventLocalizationData_1.AppEventScreenshotRelationshipsAppEventLocalizationDataToJSON)(value.data)
    };
}
