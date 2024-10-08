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
exports.instanceOfInAppPurchaseLocalizationCreateRequest = instanceOfInAppPurchaseLocalizationCreateRequest;
exports.InAppPurchaseLocalizationCreateRequestFromJSON = InAppPurchaseLocalizationCreateRequestFromJSON;
exports.InAppPurchaseLocalizationCreateRequestFromJSONTyped = InAppPurchaseLocalizationCreateRequestFromJSONTyped;
exports.InAppPurchaseLocalizationCreateRequestToJSON = InAppPurchaseLocalizationCreateRequestToJSON;
const InAppPurchaseLocalizationCreateRequestData_1 = require("./InAppPurchaseLocalizationCreateRequestData");
/**
 * Check if a given object implements the InAppPurchaseLocalizationCreateRequest interface.
 */
function instanceOfInAppPurchaseLocalizationCreateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function InAppPurchaseLocalizationCreateRequestFromJSON(json) {
    return InAppPurchaseLocalizationCreateRequestFromJSONTyped(json, false);
}
function InAppPurchaseLocalizationCreateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, InAppPurchaseLocalizationCreateRequestData_1.InAppPurchaseLocalizationCreateRequestDataFromJSON)(json["data"])
    };
}
function InAppPurchaseLocalizationCreateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, InAppPurchaseLocalizationCreateRequestData_1.InAppPurchaseLocalizationCreateRequestDataToJSON)(value.data)
    };
}
