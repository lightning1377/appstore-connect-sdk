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
exports.instanceOfBetaAppReviewDetailUpdateRequest = instanceOfBetaAppReviewDetailUpdateRequest;
exports.BetaAppReviewDetailUpdateRequestFromJSON = BetaAppReviewDetailUpdateRequestFromJSON;
exports.BetaAppReviewDetailUpdateRequestFromJSONTyped = BetaAppReviewDetailUpdateRequestFromJSONTyped;
exports.BetaAppReviewDetailUpdateRequestToJSON = BetaAppReviewDetailUpdateRequestToJSON;
const BetaAppReviewDetailUpdateRequestData_1 = require("./BetaAppReviewDetailUpdateRequestData");
/**
 * Check if a given object implements the BetaAppReviewDetailUpdateRequest interface.
 */
function instanceOfBetaAppReviewDetailUpdateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function BetaAppReviewDetailUpdateRequestFromJSON(json) {
    return BetaAppReviewDetailUpdateRequestFromJSONTyped(json, false);
}
function BetaAppReviewDetailUpdateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, BetaAppReviewDetailUpdateRequestData_1.BetaAppReviewDetailUpdateRequestDataFromJSON)(json["data"])
    };
}
function BetaAppReviewDetailUpdateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, BetaAppReviewDetailUpdateRequestData_1.BetaAppReviewDetailUpdateRequestDataToJSON)(value.data)
    };
}
