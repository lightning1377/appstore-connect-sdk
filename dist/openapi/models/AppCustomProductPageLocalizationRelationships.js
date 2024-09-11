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
exports.instanceOfAppCustomProductPageLocalizationRelationships = instanceOfAppCustomProductPageLocalizationRelationships;
exports.AppCustomProductPageLocalizationRelationshipsFromJSON = AppCustomProductPageLocalizationRelationshipsFromJSON;
exports.AppCustomProductPageLocalizationRelationshipsFromJSONTyped = AppCustomProductPageLocalizationRelationshipsFromJSONTyped;
exports.AppCustomProductPageLocalizationRelationshipsToJSON = AppCustomProductPageLocalizationRelationshipsToJSON;
const runtime_1 = require("../runtime");
const AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersion_1 = require("./AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersion");
const AppCustomProductPageLocalizationRelationshipsAppPreviewSets_1 = require("./AppCustomProductPageLocalizationRelationshipsAppPreviewSets");
const AppCustomProductPageLocalizationRelationshipsAppScreenshotSets_1 = require("./AppCustomProductPageLocalizationRelationshipsAppScreenshotSets");
/**
 * Check if a given object implements the AppCustomProductPageLocalizationRelationships interface.
 */
function instanceOfAppCustomProductPageLocalizationRelationships(value) {
    let isInstance = true;
    return isInstance;
}
function AppCustomProductPageLocalizationRelationshipsFromJSON(json) {
    return AppCustomProductPageLocalizationRelationshipsFromJSONTyped(json, false);
}
function AppCustomProductPageLocalizationRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        appCustomProductPageVersion: !(0, runtime_1.exists)(json, "appCustomProductPageVersion") ? undefined : (0, AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersion_1.AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionFromJSON)(json["appCustomProductPageVersion"]),
        appScreenshotSets: !(0, runtime_1.exists)(json, "appScreenshotSets") ? undefined : (0, AppCustomProductPageLocalizationRelationshipsAppScreenshotSets_1.AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsFromJSON)(json["appScreenshotSets"]),
        appPreviewSets: !(0, runtime_1.exists)(json, "appPreviewSets") ? undefined : (0, AppCustomProductPageLocalizationRelationshipsAppPreviewSets_1.AppCustomProductPageLocalizationRelationshipsAppPreviewSetsFromJSON)(json["appPreviewSets"])
    };
}
function AppCustomProductPageLocalizationRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        appCustomProductPageVersion: (0, AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersion_1.AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionToJSON)(value.appCustomProductPageVersion),
        appScreenshotSets: (0, AppCustomProductPageLocalizationRelationshipsAppScreenshotSets_1.AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsToJSON)(value.appScreenshotSets),
        appPreviewSets: (0, AppCustomProductPageLocalizationRelationshipsAppPreviewSets_1.AppCustomProductPageLocalizationRelationshipsAppPreviewSetsToJSON)(value.appPreviewSets)
    };
}
