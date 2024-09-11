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
exports.instanceOfAppClipHeaderImageUpdateRequest = instanceOfAppClipHeaderImageUpdateRequest;
exports.AppClipHeaderImageUpdateRequestFromJSON = AppClipHeaderImageUpdateRequestFromJSON;
exports.AppClipHeaderImageUpdateRequestFromJSONTyped = AppClipHeaderImageUpdateRequestFromJSONTyped;
exports.AppClipHeaderImageUpdateRequestToJSON = AppClipHeaderImageUpdateRequestToJSON;
const AppClipHeaderImageUpdateRequestData_1 = require("./AppClipHeaderImageUpdateRequestData");
/**
 * Check if a given object implements the AppClipHeaderImageUpdateRequest interface.
 */
function instanceOfAppClipHeaderImageUpdateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function AppClipHeaderImageUpdateRequestFromJSON(json) {
    return AppClipHeaderImageUpdateRequestFromJSONTyped(json, false);
}
function AppClipHeaderImageUpdateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, AppClipHeaderImageUpdateRequestData_1.AppClipHeaderImageUpdateRequestDataFromJSON)(json["data"])
    };
}
function AppClipHeaderImageUpdateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, AppClipHeaderImageUpdateRequestData_1.AppClipHeaderImageUpdateRequestDataToJSON)(value.data)
    };
}
