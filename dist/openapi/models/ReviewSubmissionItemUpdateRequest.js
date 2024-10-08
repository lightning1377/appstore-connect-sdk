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
exports.instanceOfReviewSubmissionItemUpdateRequest = instanceOfReviewSubmissionItemUpdateRequest;
exports.ReviewSubmissionItemUpdateRequestFromJSON = ReviewSubmissionItemUpdateRequestFromJSON;
exports.ReviewSubmissionItemUpdateRequestFromJSONTyped = ReviewSubmissionItemUpdateRequestFromJSONTyped;
exports.ReviewSubmissionItemUpdateRequestToJSON = ReviewSubmissionItemUpdateRequestToJSON;
const ReviewSubmissionItemUpdateRequestData_1 = require("./ReviewSubmissionItemUpdateRequestData");
/**
 * Check if a given object implements the ReviewSubmissionItemUpdateRequest interface.
 */
function instanceOfReviewSubmissionItemUpdateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function ReviewSubmissionItemUpdateRequestFromJSON(json) {
    return ReviewSubmissionItemUpdateRequestFromJSONTyped(json, false);
}
function ReviewSubmissionItemUpdateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, ReviewSubmissionItemUpdateRequestData_1.ReviewSubmissionItemUpdateRequestDataFromJSON)(json["data"])
    };
}
function ReviewSubmissionItemUpdateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, ReviewSubmissionItemUpdateRequestData_1.ReviewSubmissionItemUpdateRequestDataToJSON)(value.data)
    };
}
