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
exports.instanceOfBetaTesterCreateRequest = instanceOfBetaTesterCreateRequest;
exports.BetaTesterCreateRequestFromJSON = BetaTesterCreateRequestFromJSON;
exports.BetaTesterCreateRequestFromJSONTyped = BetaTesterCreateRequestFromJSONTyped;
exports.BetaTesterCreateRequestToJSON = BetaTesterCreateRequestToJSON;
const BetaTesterCreateRequestData_1 = require("./BetaTesterCreateRequestData");
/**
 * Check if a given object implements the BetaTesterCreateRequest interface.
 */
function instanceOfBetaTesterCreateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function BetaTesterCreateRequestFromJSON(json) {
    return BetaTesterCreateRequestFromJSONTyped(json, false);
}
function BetaTesterCreateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, BetaTesterCreateRequestData_1.BetaTesterCreateRequestDataFromJSON)(json["data"])
    };
}
function BetaTesterCreateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, BetaTesterCreateRequestData_1.BetaTesterCreateRequestDataToJSON)(value.data)
    };
}
