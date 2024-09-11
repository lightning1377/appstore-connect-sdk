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
exports.instanceOfSubscriptionPromotionalOfferRelationships = instanceOfSubscriptionPromotionalOfferRelationships;
exports.SubscriptionPromotionalOfferRelationshipsFromJSON = SubscriptionPromotionalOfferRelationshipsFromJSON;
exports.SubscriptionPromotionalOfferRelationshipsFromJSONTyped = SubscriptionPromotionalOfferRelationshipsFromJSONTyped;
exports.SubscriptionPromotionalOfferRelationshipsToJSON = SubscriptionPromotionalOfferRelationshipsToJSON;
const runtime_1 = require("../runtime");
const PromotedPurchaseRelationshipsSubscription_1 = require("./PromotedPurchaseRelationshipsSubscription");
const SubscriptionPromotionalOfferRelationshipsPrices_1 = require("./SubscriptionPromotionalOfferRelationshipsPrices");
/**
 * Check if a given object implements the SubscriptionPromotionalOfferRelationships interface.
 */
function instanceOfSubscriptionPromotionalOfferRelationships(value) {
    let isInstance = true;
    return isInstance;
}
function SubscriptionPromotionalOfferRelationshipsFromJSON(json) {
    return SubscriptionPromotionalOfferRelationshipsFromJSONTyped(json, false);
}
function SubscriptionPromotionalOfferRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        subscription: !(0, runtime_1.exists)(json, "subscription") ? undefined : (0, PromotedPurchaseRelationshipsSubscription_1.PromotedPurchaseRelationshipsSubscriptionFromJSON)(json["subscription"]),
        prices: !(0, runtime_1.exists)(json, "prices") ? undefined : (0, SubscriptionPromotionalOfferRelationshipsPrices_1.SubscriptionPromotionalOfferRelationshipsPricesFromJSON)(json["prices"])
    };
}
function SubscriptionPromotionalOfferRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        subscription: (0, PromotedPurchaseRelationshipsSubscription_1.PromotedPurchaseRelationshipsSubscriptionToJSON)(value.subscription),
        prices: (0, SubscriptionPromotionalOfferRelationshipsPrices_1.SubscriptionPromotionalOfferRelationshipsPricesToJSON)(value.prices)
    };
}
