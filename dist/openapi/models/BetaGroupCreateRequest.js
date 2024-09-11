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
exports.instanceOfBetaGroupCreateRequest = instanceOfBetaGroupCreateRequest;
exports.BetaGroupCreateRequestFromJSON = BetaGroupCreateRequestFromJSON;
exports.BetaGroupCreateRequestFromJSONTyped = BetaGroupCreateRequestFromJSONTyped;
exports.BetaGroupCreateRequestToJSON = BetaGroupCreateRequestToJSON;
const BetaGroupCreateRequestData_1 = require("./BetaGroupCreateRequestData");
/**
 * Check if a given object implements the BetaGroupCreateRequest interface.
 */
function instanceOfBetaGroupCreateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function BetaGroupCreateRequestFromJSON(json) {
    return BetaGroupCreateRequestFromJSONTyped(json, false);
}
function BetaGroupCreateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, BetaGroupCreateRequestData_1.BetaGroupCreateRequestDataFromJSON)(json["data"])
    };
}
function BetaGroupCreateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, BetaGroupCreateRequestData_1.BetaGroupCreateRequestDataToJSON)(value.data)
    };
}
