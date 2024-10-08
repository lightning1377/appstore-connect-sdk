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
exports.instanceOfAppStoreVersionExperimentTreatmentLocalizationRelationships = instanceOfAppStoreVersionExperimentTreatmentLocalizationRelationships;
exports.AppStoreVersionExperimentTreatmentLocalizationRelationshipsFromJSON = AppStoreVersionExperimentTreatmentLocalizationRelationshipsFromJSON;
exports.AppStoreVersionExperimentTreatmentLocalizationRelationshipsFromJSONTyped = AppStoreVersionExperimentTreatmentLocalizationRelationshipsFromJSONTyped;
exports.AppStoreVersionExperimentTreatmentLocalizationRelationshipsToJSON = AppStoreVersionExperimentTreatmentLocalizationRelationshipsToJSON;
const runtime_1 = require("../runtime");
const AppCustomProductPageLocalizationRelationshipsAppPreviewSets_1 = require("./AppCustomProductPageLocalizationRelationshipsAppPreviewSets");
const AppCustomProductPageLocalizationRelationshipsAppScreenshotSets_1 = require("./AppCustomProductPageLocalizationRelationshipsAppScreenshotSets");
const AppStoreVersionExperimentTreatmentLocalizationRelationshipsAppStoreVersionExperimentTreatment_1 = require("./AppStoreVersionExperimentTreatmentLocalizationRelationshipsAppStoreVersionExperimentTreatment");
/**
 * Check if a given object implements the AppStoreVersionExperimentTreatmentLocalizationRelationships interface.
 */
function instanceOfAppStoreVersionExperimentTreatmentLocalizationRelationships(value) {
    let isInstance = true;
    return isInstance;
}
function AppStoreVersionExperimentTreatmentLocalizationRelationshipsFromJSON(json) {
    return AppStoreVersionExperimentTreatmentLocalizationRelationshipsFromJSONTyped(json, false);
}
function AppStoreVersionExperimentTreatmentLocalizationRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        appStoreVersionExperimentTreatment: !(0, runtime_1.exists)(json, "appStoreVersionExperimentTreatment") ? undefined : (0, AppStoreVersionExperimentTreatmentLocalizationRelationshipsAppStoreVersionExperimentTreatment_1.AppStoreVersionExperimentTreatmentLocalizationRelationshipsAppStoreVersionExperimentTreatmentFromJSON)(json["appStoreVersionExperimentTreatment"]),
        appScreenshotSets: !(0, runtime_1.exists)(json, "appScreenshotSets") ? undefined : (0, AppCustomProductPageLocalizationRelationshipsAppScreenshotSets_1.AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsFromJSON)(json["appScreenshotSets"]),
        appPreviewSets: !(0, runtime_1.exists)(json, "appPreviewSets") ? undefined : (0, AppCustomProductPageLocalizationRelationshipsAppPreviewSets_1.AppCustomProductPageLocalizationRelationshipsAppPreviewSetsFromJSON)(json["appPreviewSets"])
    };
}
function AppStoreVersionExperimentTreatmentLocalizationRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        appStoreVersionExperimentTreatment: (0, AppStoreVersionExperimentTreatmentLocalizationRelationshipsAppStoreVersionExperimentTreatment_1.AppStoreVersionExperimentTreatmentLocalizationRelationshipsAppStoreVersionExperimentTreatmentToJSON)(value.appStoreVersionExperimentTreatment),
        appScreenshotSets: (0, AppCustomProductPageLocalizationRelationshipsAppScreenshotSets_1.AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsToJSON)(value.appScreenshotSets),
        appPreviewSets: (0, AppCustomProductPageLocalizationRelationshipsAppPreviewSets_1.AppCustomProductPageLocalizationRelationshipsAppPreviewSetsToJSON)(value.appPreviewSets)
    };
}
