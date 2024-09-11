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
exports.instanceOfSubscriptionAppStoreReviewScreenshotCreateRequestDataRelationships = instanceOfSubscriptionAppStoreReviewScreenshotCreateRequestDataRelationships;
exports.SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsFromJSON = SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsFromJSON;
exports.SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsFromJSONTyped = SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsFromJSONTyped;
exports.SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsToJSON = SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsToJSON;
const SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription_1 = require("./SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription");
/**
 * Check if a given object implements the SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationships interface.
 */
function instanceOfSubscriptionAppStoreReviewScreenshotCreateRequestDataRelationships(value) {
    let isInstance = true;
    isInstance = isInstance && "subscription" in value;
    return isInstance;
}
function SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsFromJSON(json) {
    return SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsFromJSONTyped(json, false);
}
function SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        subscription: (0, SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription_1.SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscriptionFromJSON)(json["subscription"])
    };
}
function SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        subscription: (0, SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription_1.SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscriptionToJSON)(value.subscription)
    };
}
