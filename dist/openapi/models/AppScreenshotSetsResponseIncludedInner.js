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
exports.AppScreenshotSetsResponseIncludedInnerFromJSON = AppScreenshotSetsResponseIncludedInnerFromJSON;
exports.AppScreenshotSetsResponseIncludedInnerFromJSONTyped = AppScreenshotSetsResponseIncludedInnerFromJSONTyped;
exports.AppScreenshotSetsResponseIncludedInnerToJSON = AppScreenshotSetsResponseIncludedInnerToJSON;
const AppCustomProductPageLocalization_1 = require("./AppCustomProductPageLocalization");
const AppScreenshot_1 = require("./AppScreenshot");
const AppStoreVersionExperimentTreatmentLocalization_1 = require("./AppStoreVersionExperimentTreatmentLocalization");
const AppStoreVersionLocalization_1 = require("./AppStoreVersionLocalization");
function AppScreenshotSetsResponseIncludedInnerFromJSON(json) {
    return AppScreenshotSetsResponseIncludedInnerFromJSONTyped(json, false);
}
function AppScreenshotSetsResponseIncludedInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return Object.assign(Object.assign(Object.assign(Object.assign({}, (0, AppCustomProductPageLocalization_1.AppCustomProductPageLocalizationFromJSONTyped)(json, true)), (0, AppScreenshot_1.AppScreenshotFromJSONTyped)(json, true)), (0, AppStoreVersionExperimentTreatmentLocalization_1.AppStoreVersionExperimentTreatmentLocalizationFromJSONTyped)(json, true)), (0, AppStoreVersionLocalization_1.AppStoreVersionLocalizationFromJSONTyped)(json, true));
}
function AppScreenshotSetsResponseIncludedInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    if ((0, AppCustomProductPageLocalization_1.instanceOfAppCustomProductPageLocalization)(value)) {
        return (0, AppCustomProductPageLocalization_1.AppCustomProductPageLocalizationToJSON)(value);
    }
    if ((0, AppScreenshot_1.instanceOfAppScreenshot)(value)) {
        return (0, AppScreenshot_1.AppScreenshotToJSON)(value);
    }
    if ((0, AppStoreVersionExperimentTreatmentLocalization_1.instanceOfAppStoreVersionExperimentTreatmentLocalization)(value)) {
        return (0, AppStoreVersionExperimentTreatmentLocalization_1.AppStoreVersionExperimentTreatmentLocalizationToJSON)(value);
    }
    if ((0, AppStoreVersionLocalization_1.instanceOfAppStoreVersionLocalization)(value)) {
        return (0, AppStoreVersionLocalization_1.AppStoreVersionLocalizationToJSON)(value);
    }
    return {};
}
