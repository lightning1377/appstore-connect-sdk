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
exports.instanceOfAppEventScreenshotCreateRequestDataRelationships = instanceOfAppEventScreenshotCreateRequestDataRelationships;
exports.AppEventScreenshotCreateRequestDataRelationshipsFromJSON = AppEventScreenshotCreateRequestDataRelationshipsFromJSON;
exports.AppEventScreenshotCreateRequestDataRelationshipsFromJSONTyped = AppEventScreenshotCreateRequestDataRelationshipsFromJSONTyped;
exports.AppEventScreenshotCreateRequestDataRelationshipsToJSON = AppEventScreenshotCreateRequestDataRelationshipsToJSON;
const AppEventScreenshotCreateRequestDataRelationshipsAppEventLocalization_1 = require("./AppEventScreenshotCreateRequestDataRelationshipsAppEventLocalization");
/**
 * Check if a given object implements the AppEventScreenshotCreateRequestDataRelationships interface.
 */
function instanceOfAppEventScreenshotCreateRequestDataRelationships(value) {
    let isInstance = true;
    isInstance = isInstance && "appEventLocalization" in value;
    return isInstance;
}
function AppEventScreenshotCreateRequestDataRelationshipsFromJSON(json) {
    return AppEventScreenshotCreateRequestDataRelationshipsFromJSONTyped(json, false);
}
function AppEventScreenshotCreateRequestDataRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        appEventLocalization: (0, AppEventScreenshotCreateRequestDataRelationshipsAppEventLocalization_1.AppEventScreenshotCreateRequestDataRelationshipsAppEventLocalizationFromJSON)(json["appEventLocalization"])
    };
}
function AppEventScreenshotCreateRequestDataRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        appEventLocalization: (0, AppEventScreenshotCreateRequestDataRelationshipsAppEventLocalization_1.AppEventScreenshotCreateRequestDataRelationshipsAppEventLocalizationToJSON)(value.appEventLocalization)
    };
}
