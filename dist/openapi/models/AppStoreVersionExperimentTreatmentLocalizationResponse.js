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
exports.instanceOfAppStoreVersionExperimentTreatmentLocalizationResponse = instanceOfAppStoreVersionExperimentTreatmentLocalizationResponse;
exports.AppStoreVersionExperimentTreatmentLocalizationResponseFromJSON = AppStoreVersionExperimentTreatmentLocalizationResponseFromJSON;
exports.AppStoreVersionExperimentTreatmentLocalizationResponseFromJSONTyped = AppStoreVersionExperimentTreatmentLocalizationResponseFromJSONTyped;
exports.AppStoreVersionExperimentTreatmentLocalizationResponseToJSON = AppStoreVersionExperimentTreatmentLocalizationResponseToJSON;
const runtime_1 = require("../runtime");
const AppStoreVersionExperimentTreatmentLocalization_1 = require("./AppStoreVersionExperimentTreatmentLocalization");
const AppStoreVersionExperimentTreatmentLocalizationsResponseIncludedInner_1 = require("./AppStoreVersionExperimentTreatmentLocalizationsResponseIncludedInner");
const DocumentLinks_1 = require("./DocumentLinks");
/**
 * Check if a given object implements the AppStoreVersionExperimentTreatmentLocalizationResponse interface.
 */
function instanceOfAppStoreVersionExperimentTreatmentLocalizationResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function AppStoreVersionExperimentTreatmentLocalizationResponseFromJSON(json) {
    return AppStoreVersionExperimentTreatmentLocalizationResponseFromJSONTyped(json, false);
}
function AppStoreVersionExperimentTreatmentLocalizationResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, AppStoreVersionExperimentTreatmentLocalization_1.AppStoreVersionExperimentTreatmentLocalizationFromJSON)(json["data"]),
        included: !(0, runtime_1.exists)(json, "included") ? undefined : json["included"].map(AppStoreVersionExperimentTreatmentLocalizationsResponseIncludedInner_1.AppStoreVersionExperimentTreatmentLocalizationsResponseIncludedInnerFromJSON),
        links: (0, DocumentLinks_1.DocumentLinksFromJSON)(json["links"])
    };
}
function AppStoreVersionExperimentTreatmentLocalizationResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, AppStoreVersionExperimentTreatmentLocalization_1.AppStoreVersionExperimentTreatmentLocalizationToJSON)(value.data),
        included: value.included === undefined ? undefined : value.included.map(AppStoreVersionExperimentTreatmentLocalizationsResponseIncludedInner_1.AppStoreVersionExperimentTreatmentLocalizationsResponseIncludedInnerToJSON),
        links: (0, DocumentLinks_1.DocumentLinksToJSON)(value.links)
    };
}
