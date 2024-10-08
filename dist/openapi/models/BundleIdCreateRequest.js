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
exports.instanceOfBundleIdCreateRequest = instanceOfBundleIdCreateRequest;
exports.BundleIdCreateRequestFromJSON = BundleIdCreateRequestFromJSON;
exports.BundleIdCreateRequestFromJSONTyped = BundleIdCreateRequestFromJSONTyped;
exports.BundleIdCreateRequestToJSON = BundleIdCreateRequestToJSON;
const BundleIdCreateRequestData_1 = require("./BundleIdCreateRequestData");
/**
 * Check if a given object implements the BundleIdCreateRequest interface.
 */
function instanceOfBundleIdCreateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function BundleIdCreateRequestFromJSON(json) {
    return BundleIdCreateRequestFromJSONTyped(json, false);
}
function BundleIdCreateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, BundleIdCreateRequestData_1.BundleIdCreateRequestDataFromJSON)(json["data"])
    };
}
function BundleIdCreateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, BundleIdCreateRequestData_1.BundleIdCreateRequestDataToJSON)(value.data)
    };
}
