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
exports.instanceOfAppStoreVersionExperimentTreatmentRelationships = instanceOfAppStoreVersionExperimentTreatmentRelationships;
exports.AppStoreVersionExperimentTreatmentRelationshipsFromJSON = AppStoreVersionExperimentTreatmentRelationshipsFromJSON;
exports.AppStoreVersionExperimentTreatmentRelationshipsFromJSONTyped = AppStoreVersionExperimentTreatmentRelationshipsFromJSONTyped;
exports.AppStoreVersionExperimentTreatmentRelationshipsToJSON = AppStoreVersionExperimentTreatmentRelationshipsToJSON;
const runtime_1 = require("../runtime");
const AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperiment_1 = require("./AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperiment");
const AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentTreatmentLocalizations_1 = require("./AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentTreatmentLocalizations");
/**
 * Check if a given object implements the AppStoreVersionExperimentTreatmentRelationships interface.
 */
function instanceOfAppStoreVersionExperimentTreatmentRelationships(value) {
    let isInstance = true;
    return isInstance;
}
function AppStoreVersionExperimentTreatmentRelationshipsFromJSON(json) {
    return AppStoreVersionExperimentTreatmentRelationshipsFromJSONTyped(json, false);
}
function AppStoreVersionExperimentTreatmentRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        appStoreVersionExperiment: !(0, runtime_1.exists)(json, "appStoreVersionExperiment") ? undefined : (0, AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperiment_1.AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentFromJSON)(json["appStoreVersionExperiment"]),
        appStoreVersionExperimentV2: !(0, runtime_1.exists)(json, "appStoreVersionExperimentV2") ? undefined : (0, AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperiment_1.AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentFromJSON)(json["appStoreVersionExperimentV2"]),
        appStoreVersionExperimentTreatmentLocalizations: !(0, runtime_1.exists)(json, "appStoreVersionExperimentTreatmentLocalizations") ? undefined : (0, AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentTreatmentLocalizations_1.AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentTreatmentLocalizationsFromJSON)(json["appStoreVersionExperimentTreatmentLocalizations"])
    };
}
function AppStoreVersionExperimentTreatmentRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        appStoreVersionExperiment: (0, AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperiment_1.AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentToJSON)(value.appStoreVersionExperiment),
        appStoreVersionExperimentV2: (0, AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperiment_1.AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentToJSON)(value.appStoreVersionExperimentV2),
        appStoreVersionExperimentTreatmentLocalizations: (0, AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentTreatmentLocalizations_1.AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentTreatmentLocalizationsToJSON)(value.appStoreVersionExperimentTreatmentLocalizations)
    };
}
