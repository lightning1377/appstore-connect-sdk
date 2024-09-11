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
exports.instanceOfAppStoreVersionLocalizationUpdateRequest = instanceOfAppStoreVersionLocalizationUpdateRequest;
exports.AppStoreVersionLocalizationUpdateRequestFromJSON = AppStoreVersionLocalizationUpdateRequestFromJSON;
exports.AppStoreVersionLocalizationUpdateRequestFromJSONTyped = AppStoreVersionLocalizationUpdateRequestFromJSONTyped;
exports.AppStoreVersionLocalizationUpdateRequestToJSON = AppStoreVersionLocalizationUpdateRequestToJSON;
const AppStoreVersionLocalizationUpdateRequestData_1 = require("./AppStoreVersionLocalizationUpdateRequestData");
/**
 * Check if a given object implements the AppStoreVersionLocalizationUpdateRequest interface.
 */
function instanceOfAppStoreVersionLocalizationUpdateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function AppStoreVersionLocalizationUpdateRequestFromJSON(json) {
    return AppStoreVersionLocalizationUpdateRequestFromJSONTyped(json, false);
}
function AppStoreVersionLocalizationUpdateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, AppStoreVersionLocalizationUpdateRequestData_1.AppStoreVersionLocalizationUpdateRequestDataFromJSON)(json["data"])
    };
}
function AppStoreVersionLocalizationUpdateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, AppStoreVersionLocalizationUpdateRequestData_1.AppStoreVersionLocalizationUpdateRequestDataToJSON)(value.data)
    };
}
