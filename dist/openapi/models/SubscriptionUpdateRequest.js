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
exports.instanceOfSubscriptionUpdateRequest = instanceOfSubscriptionUpdateRequest;
exports.SubscriptionUpdateRequestFromJSON = SubscriptionUpdateRequestFromJSON;
exports.SubscriptionUpdateRequestFromJSONTyped = SubscriptionUpdateRequestFromJSONTyped;
exports.SubscriptionUpdateRequestToJSON = SubscriptionUpdateRequestToJSON;
const runtime_1 = require("../runtime");
const SubscriptionUpdateRequestData_1 = require("./SubscriptionUpdateRequestData");
const SubscriptionUpdateRequestIncludedInner_1 = require("./SubscriptionUpdateRequestIncludedInner");
/**
 * Check if a given object implements the SubscriptionUpdateRequest interface.
 */
function instanceOfSubscriptionUpdateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function SubscriptionUpdateRequestFromJSON(json) {
    return SubscriptionUpdateRequestFromJSONTyped(json, false);
}
function SubscriptionUpdateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, SubscriptionUpdateRequestData_1.SubscriptionUpdateRequestDataFromJSON)(json["data"]),
        included: !(0, runtime_1.exists)(json, "included") ? undefined : json["included"].map(SubscriptionUpdateRequestIncludedInner_1.SubscriptionUpdateRequestIncludedInnerFromJSON)
    };
}
function SubscriptionUpdateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, SubscriptionUpdateRequestData_1.SubscriptionUpdateRequestDataToJSON)(value.data),
        included: value.included === undefined ? undefined : value.included.map(SubscriptionUpdateRequestIncludedInner_1.SubscriptionUpdateRequestIncludedInnerToJSON)
    };
}
