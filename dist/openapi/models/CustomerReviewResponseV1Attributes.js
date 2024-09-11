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
exports.CustomerReviewResponseV1AttributesStateEnum = void 0;
exports.instanceOfCustomerReviewResponseV1Attributes = instanceOfCustomerReviewResponseV1Attributes;
exports.CustomerReviewResponseV1AttributesFromJSON = CustomerReviewResponseV1AttributesFromJSON;
exports.CustomerReviewResponseV1AttributesFromJSONTyped = CustomerReviewResponseV1AttributesFromJSONTyped;
exports.CustomerReviewResponseV1AttributesToJSON = CustomerReviewResponseV1AttributesToJSON;
const runtime_1 = require("../runtime");
/**
 * @export
 */
exports.CustomerReviewResponseV1AttributesStateEnum = {
    Published: "PUBLISHED",
    PendingPublish: "PENDING_PUBLISH"
};
/**
 * Check if a given object implements the CustomerReviewResponseV1Attributes interface.
 */
function instanceOfCustomerReviewResponseV1Attributes(value) {
    let isInstance = true;
    return isInstance;
}
function CustomerReviewResponseV1AttributesFromJSON(json) {
    return CustomerReviewResponseV1AttributesFromJSONTyped(json, false);
}
function CustomerReviewResponseV1AttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        responseBody: !(0, runtime_1.exists)(json, "responseBody") ? undefined : json["responseBody"],
        lastModifiedDate: !(0, runtime_1.exists)(json, "lastModifiedDate") ? undefined : new Date(json["lastModifiedDate"]),
        state: !(0, runtime_1.exists)(json, "state") ? undefined : json["state"]
    };
}
function CustomerReviewResponseV1AttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        responseBody: value.responseBody,
        lastModifiedDate: value.lastModifiedDate === undefined ? undefined : value.lastModifiedDate.toISOString(),
        state: value.state
    };
}
