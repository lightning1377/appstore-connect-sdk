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
exports.instanceOfAppPreviewSetCreateRequestDataRelationshipsAppStoreVersionExperimentTreatmentLocalization = instanceOfAppPreviewSetCreateRequestDataRelationshipsAppStoreVersionExperimentTreatmentLocalization;
exports.AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionExperimentTreatmentLocalizationFromJSON = AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionExperimentTreatmentLocalizationFromJSON;
exports.AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionExperimentTreatmentLocalizationFromJSONTyped = AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionExperimentTreatmentLocalizationFromJSONTyped;
exports.AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionExperimentTreatmentLocalizationToJSON = AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionExperimentTreatmentLocalizationToJSON;
const runtime_1 = require("../runtime");
const AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationData_1 = require("./AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationData");
/**
 * Check if a given object implements the AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionExperimentTreatmentLocalization interface.
 */
function instanceOfAppPreviewSetCreateRequestDataRelationshipsAppStoreVersionExperimentTreatmentLocalization(value) {
    let isInstance = true;
    return isInstance;
}
function AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionExperimentTreatmentLocalizationFromJSON(json) {
    return AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionExperimentTreatmentLocalizationFromJSONTyped(json, false);
}
function AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionExperimentTreatmentLocalizationFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: !(0, runtime_1.exists)(json, "data") ? undefined : (0, AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationData_1.AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationDataFromJSON)(json["data"])
    };
}
function AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionExperimentTreatmentLocalizationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationData_1.AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationDataToJSON)(value.data)
    };
}
