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
exports.instanceOfAlternativeDistributionKeyCreateRequest = instanceOfAlternativeDistributionKeyCreateRequest;
exports.AlternativeDistributionKeyCreateRequestFromJSON = AlternativeDistributionKeyCreateRequestFromJSON;
exports.AlternativeDistributionKeyCreateRequestFromJSONTyped = AlternativeDistributionKeyCreateRequestFromJSONTyped;
exports.AlternativeDistributionKeyCreateRequestToJSON = AlternativeDistributionKeyCreateRequestToJSON;
const AlternativeDistributionKeyCreateRequestData_1 = require("./AlternativeDistributionKeyCreateRequestData");
/**
 * Check if a given object implements the AlternativeDistributionKeyCreateRequest interface.
 */
function instanceOfAlternativeDistributionKeyCreateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function AlternativeDistributionKeyCreateRequestFromJSON(json) {
    return AlternativeDistributionKeyCreateRequestFromJSONTyped(json, false);
}
function AlternativeDistributionKeyCreateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, AlternativeDistributionKeyCreateRequestData_1.AlternativeDistributionKeyCreateRequestDataFromJSON)(json["data"])
    };
}
function AlternativeDistributionKeyCreateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, AlternativeDistributionKeyCreateRequestData_1.AlternativeDistributionKeyCreateRequestDataToJSON)(value.data)
    };
}
