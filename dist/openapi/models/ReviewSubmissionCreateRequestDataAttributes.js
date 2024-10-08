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
exports.instanceOfReviewSubmissionCreateRequestDataAttributes = instanceOfReviewSubmissionCreateRequestDataAttributes;
exports.ReviewSubmissionCreateRequestDataAttributesFromJSON = ReviewSubmissionCreateRequestDataAttributesFromJSON;
exports.ReviewSubmissionCreateRequestDataAttributesFromJSONTyped = ReviewSubmissionCreateRequestDataAttributesFromJSONTyped;
exports.ReviewSubmissionCreateRequestDataAttributesToJSON = ReviewSubmissionCreateRequestDataAttributesToJSON;
const Platform_1 = require("./Platform");
/**
 * Check if a given object implements the ReviewSubmissionCreateRequestDataAttributes interface.
 */
function instanceOfReviewSubmissionCreateRequestDataAttributes(value) {
    let isInstance = true;
    isInstance = isInstance && "platform" in value;
    return isInstance;
}
function ReviewSubmissionCreateRequestDataAttributesFromJSON(json) {
    return ReviewSubmissionCreateRequestDataAttributesFromJSONTyped(json, false);
}
function ReviewSubmissionCreateRequestDataAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        platform: (0, Platform_1.PlatformFromJSON)(json["platform"])
    };
}
function ReviewSubmissionCreateRequestDataAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        platform: (0, Platform_1.PlatformToJSON)(value.platform)
    };
}
