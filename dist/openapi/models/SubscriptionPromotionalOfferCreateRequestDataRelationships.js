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
exports.instanceOfSubscriptionPromotionalOfferCreateRequestDataRelationships = instanceOfSubscriptionPromotionalOfferCreateRequestDataRelationships;
exports.SubscriptionPromotionalOfferCreateRequestDataRelationshipsFromJSON = SubscriptionPromotionalOfferCreateRequestDataRelationshipsFromJSON;
exports.SubscriptionPromotionalOfferCreateRequestDataRelationshipsFromJSONTyped = SubscriptionPromotionalOfferCreateRequestDataRelationshipsFromJSONTyped;
exports.SubscriptionPromotionalOfferCreateRequestDataRelationshipsToJSON = SubscriptionPromotionalOfferCreateRequestDataRelationshipsToJSON;
const SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription_1 = require("./SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription");
const SubscriptionPromotionalOfferCreateRequestDataRelationshipsPrices_1 = require("./SubscriptionPromotionalOfferCreateRequestDataRelationshipsPrices");
/**
 * Check if a given object implements the SubscriptionPromotionalOfferCreateRequestDataRelationships interface.
 */
function instanceOfSubscriptionPromotionalOfferCreateRequestDataRelationships(value) {
    let isInstance = true;
    isInstance = isInstance && "subscription" in value;
    isInstance = isInstance && "prices" in value;
    return isInstance;
}
function SubscriptionPromotionalOfferCreateRequestDataRelationshipsFromJSON(json) {
    return SubscriptionPromotionalOfferCreateRequestDataRelationshipsFromJSONTyped(json, false);
}
function SubscriptionPromotionalOfferCreateRequestDataRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        subscription: (0, SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription_1.SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscriptionFromJSON)(json["subscription"]),
        prices: (0, SubscriptionPromotionalOfferCreateRequestDataRelationshipsPrices_1.SubscriptionPromotionalOfferCreateRequestDataRelationshipsPricesFromJSON)(json["prices"])
    };
}
function SubscriptionPromotionalOfferCreateRequestDataRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        subscription: (0, SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription_1.SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscriptionToJSON)(value.subscription),
        prices: (0, SubscriptionPromotionalOfferCreateRequestDataRelationshipsPrices_1.SubscriptionPromotionalOfferCreateRequestDataRelationshipsPricesToJSON)(value.prices)
    };
}
