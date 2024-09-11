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
exports.instanceOfSubscriptionGroupCreateRequest = instanceOfSubscriptionGroupCreateRequest;
exports.SubscriptionGroupCreateRequestFromJSON = SubscriptionGroupCreateRequestFromJSON;
exports.SubscriptionGroupCreateRequestFromJSONTyped = SubscriptionGroupCreateRequestFromJSONTyped;
exports.SubscriptionGroupCreateRequestToJSON = SubscriptionGroupCreateRequestToJSON;
const SubscriptionGroupCreateRequestData_1 = require("./SubscriptionGroupCreateRequestData");
/**
 * Check if a given object implements the SubscriptionGroupCreateRequest interface.
 */
function instanceOfSubscriptionGroupCreateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function SubscriptionGroupCreateRequestFromJSON(json) {
    return SubscriptionGroupCreateRequestFromJSONTyped(json, false);
}
function SubscriptionGroupCreateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, SubscriptionGroupCreateRequestData_1.SubscriptionGroupCreateRequestDataFromJSON)(json["data"])
    };
}
function SubscriptionGroupCreateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, SubscriptionGroupCreateRequestData_1.SubscriptionGroupCreateRequestDataToJSON)(value.data)
    };
}
