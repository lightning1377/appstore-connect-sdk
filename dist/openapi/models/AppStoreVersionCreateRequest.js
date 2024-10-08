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
exports.instanceOfAppStoreVersionCreateRequest = instanceOfAppStoreVersionCreateRequest;
exports.AppStoreVersionCreateRequestFromJSON = AppStoreVersionCreateRequestFromJSON;
exports.AppStoreVersionCreateRequestFromJSONTyped = AppStoreVersionCreateRequestFromJSONTyped;
exports.AppStoreVersionCreateRequestToJSON = AppStoreVersionCreateRequestToJSON;
const AppStoreVersionCreateRequestData_1 = require("./AppStoreVersionCreateRequestData");
/**
 * Check if a given object implements the AppStoreVersionCreateRequest interface.
 */
function instanceOfAppStoreVersionCreateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function AppStoreVersionCreateRequestFromJSON(json) {
    return AppStoreVersionCreateRequestFromJSONTyped(json, false);
}
function AppStoreVersionCreateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, AppStoreVersionCreateRequestData_1.AppStoreVersionCreateRequestDataFromJSON)(json["data"])
    };
}
function AppStoreVersionCreateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, AppStoreVersionCreateRequestData_1.AppStoreVersionCreateRequestDataToJSON)(value.data)
    };
}
