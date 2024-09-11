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
exports.instanceOfSubscriptionAvailabilityCreateRequest = instanceOfSubscriptionAvailabilityCreateRequest;
exports.SubscriptionAvailabilityCreateRequestFromJSON = SubscriptionAvailabilityCreateRequestFromJSON;
exports.SubscriptionAvailabilityCreateRequestFromJSONTyped = SubscriptionAvailabilityCreateRequestFromJSONTyped;
exports.SubscriptionAvailabilityCreateRequestToJSON = SubscriptionAvailabilityCreateRequestToJSON;
const SubscriptionAvailabilityCreateRequestData_1 = require("./SubscriptionAvailabilityCreateRequestData");
/**
 * Check if a given object implements the SubscriptionAvailabilityCreateRequest interface.
 */
function instanceOfSubscriptionAvailabilityCreateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function SubscriptionAvailabilityCreateRequestFromJSON(json) {
    return SubscriptionAvailabilityCreateRequestFromJSONTyped(json, false);
}
function SubscriptionAvailabilityCreateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, SubscriptionAvailabilityCreateRequestData_1.SubscriptionAvailabilityCreateRequestDataFromJSON)(json["data"])
    };
}
function SubscriptionAvailabilityCreateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, SubscriptionAvailabilityCreateRequestData_1.SubscriptionAvailabilityCreateRequestDataToJSON)(value.data)
    };
}
