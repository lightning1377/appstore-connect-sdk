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
exports.instanceOfPromotedPurchaseCreateRequest = instanceOfPromotedPurchaseCreateRequest;
exports.PromotedPurchaseCreateRequestFromJSON = PromotedPurchaseCreateRequestFromJSON;
exports.PromotedPurchaseCreateRequestFromJSONTyped = PromotedPurchaseCreateRequestFromJSONTyped;
exports.PromotedPurchaseCreateRequestToJSON = PromotedPurchaseCreateRequestToJSON;
const PromotedPurchaseCreateRequestData_1 = require("./PromotedPurchaseCreateRequestData");
/**
 * Check if a given object implements the PromotedPurchaseCreateRequest interface.
 */
function instanceOfPromotedPurchaseCreateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function PromotedPurchaseCreateRequestFromJSON(json) {
    return PromotedPurchaseCreateRequestFromJSONTyped(json, false);
}
function PromotedPurchaseCreateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, PromotedPurchaseCreateRequestData_1.PromotedPurchaseCreateRequestDataFromJSON)(json["data"])
    };
}
function PromotedPurchaseCreateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, PromotedPurchaseCreateRequestData_1.PromotedPurchaseCreateRequestDataToJSON)(value.data)
    };
}
