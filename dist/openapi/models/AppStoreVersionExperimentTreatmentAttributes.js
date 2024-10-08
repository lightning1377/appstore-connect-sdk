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
exports.instanceOfAppStoreVersionExperimentTreatmentAttributes = instanceOfAppStoreVersionExperimentTreatmentAttributes;
exports.AppStoreVersionExperimentTreatmentAttributesFromJSON = AppStoreVersionExperimentTreatmentAttributesFromJSON;
exports.AppStoreVersionExperimentTreatmentAttributesFromJSONTyped = AppStoreVersionExperimentTreatmentAttributesFromJSONTyped;
exports.AppStoreVersionExperimentTreatmentAttributesToJSON = AppStoreVersionExperimentTreatmentAttributesToJSON;
const runtime_1 = require("../runtime");
const ImageAsset_1 = require("./ImageAsset");
/**
 * Check if a given object implements the AppStoreVersionExperimentTreatmentAttributes interface.
 */
function instanceOfAppStoreVersionExperimentTreatmentAttributes(value) {
    let isInstance = true;
    return isInstance;
}
function AppStoreVersionExperimentTreatmentAttributesFromJSON(json) {
    return AppStoreVersionExperimentTreatmentAttributesFromJSONTyped(json, false);
}
function AppStoreVersionExperimentTreatmentAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        name: !(0, runtime_1.exists)(json, "name") ? undefined : json["name"],
        appIcon: !(0, runtime_1.exists)(json, "appIcon") ? undefined : (0, ImageAsset_1.ImageAssetFromJSON)(json["appIcon"]),
        appIconName: !(0, runtime_1.exists)(json, "appIconName") ? undefined : json["appIconName"],
        promotedDate: !(0, runtime_1.exists)(json, "promotedDate") ? undefined : new Date(json["promotedDate"])
    };
}
function AppStoreVersionExperimentTreatmentAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        name: value.name,
        appIcon: (0, ImageAsset_1.ImageAssetToJSON)(value.appIcon),
        appIconName: value.appIconName,
        promotedDate: value.promotedDate === undefined ? undefined : value.promotedDate.toISOString()
    };
}
