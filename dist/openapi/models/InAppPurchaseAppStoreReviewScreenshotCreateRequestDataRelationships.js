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
exports.instanceOfInAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationships = instanceOfInAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationships;
exports.InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsFromJSON = InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsFromJSON;
exports.InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsFromJSONTyped = InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsFromJSONTyped;
exports.InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsToJSON = InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsToJSON;
const InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsInAppPurchaseV2_1 = require("./InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsInAppPurchaseV2");
/**
 * Check if a given object implements the InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationships interface.
 */
function instanceOfInAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationships(value) {
    let isInstance = true;
    isInstance = isInstance && "inAppPurchaseV2" in value;
    return isInstance;
}
function InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsFromJSON(json) {
    return InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsFromJSONTyped(json, false);
}
function InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        inAppPurchaseV2: (0, InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsInAppPurchaseV2_1.InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsInAppPurchaseV2FromJSON)(json["inAppPurchaseV2"])
    };
}
function InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        inAppPurchaseV2: (0, InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsInAppPurchaseV2_1.InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsInAppPurchaseV2ToJSON)(value.inAppPurchaseV2)
    };
}
