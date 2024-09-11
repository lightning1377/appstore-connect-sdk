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
exports.instanceOfBundleIdCapabilityUpdateRequest = instanceOfBundleIdCapabilityUpdateRequest;
exports.BundleIdCapabilityUpdateRequestFromJSON = BundleIdCapabilityUpdateRequestFromJSON;
exports.BundleIdCapabilityUpdateRequestFromJSONTyped = BundleIdCapabilityUpdateRequestFromJSONTyped;
exports.BundleIdCapabilityUpdateRequestToJSON = BundleIdCapabilityUpdateRequestToJSON;
const BundleIdCapabilityUpdateRequestData_1 = require("./BundleIdCapabilityUpdateRequestData");
/**
 * Check if a given object implements the BundleIdCapabilityUpdateRequest interface.
 */
function instanceOfBundleIdCapabilityUpdateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function BundleIdCapabilityUpdateRequestFromJSON(json) {
    return BundleIdCapabilityUpdateRequestFromJSONTyped(json, false);
}
function BundleIdCapabilityUpdateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, BundleIdCapabilityUpdateRequestData_1.BundleIdCapabilityUpdateRequestDataFromJSON)(json["data"])
    };
}
function BundleIdCapabilityUpdateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, BundleIdCapabilityUpdateRequestData_1.BundleIdCapabilityUpdateRequestDataToJSON)(value.data)
    };
}
