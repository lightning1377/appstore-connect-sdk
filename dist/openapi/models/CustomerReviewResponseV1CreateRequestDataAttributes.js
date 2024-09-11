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
exports.instanceOfCustomerReviewResponseV1CreateRequestDataAttributes = instanceOfCustomerReviewResponseV1CreateRequestDataAttributes;
exports.CustomerReviewResponseV1CreateRequestDataAttributesFromJSON = CustomerReviewResponseV1CreateRequestDataAttributesFromJSON;
exports.CustomerReviewResponseV1CreateRequestDataAttributesFromJSONTyped = CustomerReviewResponseV1CreateRequestDataAttributesFromJSONTyped;
exports.CustomerReviewResponseV1CreateRequestDataAttributesToJSON = CustomerReviewResponseV1CreateRequestDataAttributesToJSON;
/**
 * Check if a given object implements the CustomerReviewResponseV1CreateRequestDataAttributes interface.
 */
function instanceOfCustomerReviewResponseV1CreateRequestDataAttributes(value) {
    let isInstance = true;
    isInstance = isInstance && "responseBody" in value;
    return isInstance;
}
function CustomerReviewResponseV1CreateRequestDataAttributesFromJSON(json) {
    return CustomerReviewResponseV1CreateRequestDataAttributesFromJSONTyped(json, false);
}
function CustomerReviewResponseV1CreateRequestDataAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        responseBody: json["responseBody"]
    };
}
function CustomerReviewResponseV1CreateRequestDataAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        responseBody: value.responseBody
    };
}
