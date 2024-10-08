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
exports.instanceOfAppEventScreenshotRelationships = instanceOfAppEventScreenshotRelationships;
exports.AppEventScreenshotRelationshipsFromJSON = AppEventScreenshotRelationshipsFromJSON;
exports.AppEventScreenshotRelationshipsFromJSONTyped = AppEventScreenshotRelationshipsFromJSONTyped;
exports.AppEventScreenshotRelationshipsToJSON = AppEventScreenshotRelationshipsToJSON;
const runtime_1 = require("../runtime");
const AppEventScreenshotRelationshipsAppEventLocalization_1 = require("./AppEventScreenshotRelationshipsAppEventLocalization");
/**
 * Check if a given object implements the AppEventScreenshotRelationships interface.
 */
function instanceOfAppEventScreenshotRelationships(value) {
    let isInstance = true;
    return isInstance;
}
function AppEventScreenshotRelationshipsFromJSON(json) {
    return AppEventScreenshotRelationshipsFromJSONTyped(json, false);
}
function AppEventScreenshotRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        appEventLocalization: !(0, runtime_1.exists)(json, "appEventLocalization") ? undefined : (0, AppEventScreenshotRelationshipsAppEventLocalization_1.AppEventScreenshotRelationshipsAppEventLocalizationFromJSON)(json["appEventLocalization"])
    };
}
function AppEventScreenshotRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        appEventLocalization: (0, AppEventScreenshotRelationshipsAppEventLocalization_1.AppEventScreenshotRelationshipsAppEventLocalizationToJSON)(value.appEventLocalization)
    };
}
