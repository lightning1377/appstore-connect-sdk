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
exports.SubscriptionSubmissionTypeEnum = void 0;
exports.instanceOfSubscriptionSubmission = instanceOfSubscriptionSubmission;
exports.SubscriptionSubmissionFromJSON = SubscriptionSubmissionFromJSON;
exports.SubscriptionSubmissionFromJSONTyped = SubscriptionSubmissionFromJSONTyped;
exports.SubscriptionSubmissionToJSON = SubscriptionSubmissionToJSON;
const runtime_1 = require("../runtime");
const ResourceLinks_1 = require("./ResourceLinks");
const SubscriptionAppStoreReviewScreenshotRelationships_1 = require("./SubscriptionAppStoreReviewScreenshotRelationships");
/**
 * @export
 */
exports.SubscriptionSubmissionTypeEnum = {
    SubscriptionSubmissions: "subscriptionSubmissions"
};
/**
 * Check if a given object implements the SubscriptionSubmission interface.
 */
function instanceOfSubscriptionSubmission(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
function SubscriptionSubmissionFromJSON(json) {
    return SubscriptionSubmissionFromJSONTyped(json, false);
}
function SubscriptionSubmissionFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        relationships: !(0, runtime_1.exists)(json, "relationships") ? undefined : (0, SubscriptionAppStoreReviewScreenshotRelationships_1.SubscriptionAppStoreReviewScreenshotRelationshipsFromJSON)(json["relationships"]),
        links: !(0, runtime_1.exists)(json, "links") ? undefined : (0, ResourceLinks_1.ResourceLinksFromJSON)(json["links"])
    };
}
function SubscriptionSubmissionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        relationships: (0, SubscriptionAppStoreReviewScreenshotRelationships_1.SubscriptionAppStoreReviewScreenshotRelationshipsToJSON)(value.relationships),
        links: (0, ResourceLinks_1.ResourceLinksToJSON)(value.links)
    };
}
