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
exports.SubscriptionSubmissionCreateRequestDataTypeEnum = void 0;
exports.instanceOfSubscriptionSubmissionCreateRequestData = instanceOfSubscriptionSubmissionCreateRequestData;
exports.SubscriptionSubmissionCreateRequestDataFromJSON = SubscriptionSubmissionCreateRequestDataFromJSON;
exports.SubscriptionSubmissionCreateRequestDataFromJSONTyped = SubscriptionSubmissionCreateRequestDataFromJSONTyped;
exports.SubscriptionSubmissionCreateRequestDataToJSON = SubscriptionSubmissionCreateRequestDataToJSON;
const SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationships_1 = require("./SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationships");
/**
 * @export
 */
exports.SubscriptionSubmissionCreateRequestDataTypeEnum = {
    SubscriptionSubmissions: "subscriptionSubmissions"
};
/**
 * Check if a given object implements the SubscriptionSubmissionCreateRequestData interface.
 */
function instanceOfSubscriptionSubmissionCreateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "relationships" in value;
    return isInstance;
}
function SubscriptionSubmissionCreateRequestDataFromJSON(json) {
    return SubscriptionSubmissionCreateRequestDataFromJSONTyped(json, false);
}
function SubscriptionSubmissionCreateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        relationships: (0, SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationships_1.SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsFromJSON)(json["relationships"])
    };
}
function SubscriptionSubmissionCreateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        relationships: (0, SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationships_1.SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsToJSON)(value.relationships)
    };
}
