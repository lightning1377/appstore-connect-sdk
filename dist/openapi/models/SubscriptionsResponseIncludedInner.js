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
exports.SubscriptionsResponseIncludedInnerFromJSON = SubscriptionsResponseIncludedInnerFromJSON;
exports.SubscriptionsResponseIncludedInnerFromJSONTyped = SubscriptionsResponseIncludedInnerFromJSONTyped;
exports.SubscriptionsResponseIncludedInnerToJSON = SubscriptionsResponseIncludedInnerToJSON;
const PromotedPurchase_1 = require("./PromotedPurchase");
const SubscriptionAppStoreReviewScreenshot_1 = require("./SubscriptionAppStoreReviewScreenshot");
const SubscriptionAvailability_1 = require("./SubscriptionAvailability");
const SubscriptionGroup_1 = require("./SubscriptionGroup");
const SubscriptionIntroductoryOffer_1 = require("./SubscriptionIntroductoryOffer");
const SubscriptionLocalization_1 = require("./SubscriptionLocalization");
const SubscriptionOfferCode_1 = require("./SubscriptionOfferCode");
const SubscriptionPrice_1 = require("./SubscriptionPrice");
const SubscriptionPromotionalOffer_1 = require("./SubscriptionPromotionalOffer");
function SubscriptionsResponseIncludedInnerFromJSON(json) {
    return SubscriptionsResponseIncludedInnerFromJSONTyped(json, false);
}
function SubscriptionsResponseIncludedInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (0, PromotedPurchase_1.PromotedPurchaseFromJSONTyped)(json, true)), (0, SubscriptionAppStoreReviewScreenshot_1.SubscriptionAppStoreReviewScreenshotFromJSONTyped)(json, true)), (0, SubscriptionAvailability_1.SubscriptionAvailabilityFromJSONTyped)(json, true)), (0, SubscriptionGroup_1.SubscriptionGroupFromJSONTyped)(json, true)), (0, SubscriptionIntroductoryOffer_1.SubscriptionIntroductoryOfferFromJSONTyped)(json, true)), (0, SubscriptionLocalization_1.SubscriptionLocalizationFromJSONTyped)(json, true)), (0, SubscriptionOfferCode_1.SubscriptionOfferCodeFromJSONTyped)(json, true)), (0, SubscriptionPrice_1.SubscriptionPriceFromJSONTyped)(json, true)), (0, SubscriptionPromotionalOffer_1.SubscriptionPromotionalOfferFromJSONTyped)(json, true));
}
function SubscriptionsResponseIncludedInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    if ((0, PromotedPurchase_1.instanceOfPromotedPurchase)(value)) {
        return (0, PromotedPurchase_1.PromotedPurchaseToJSON)(value);
    }
    if ((0, SubscriptionAppStoreReviewScreenshot_1.instanceOfSubscriptionAppStoreReviewScreenshot)(value)) {
        return (0, SubscriptionAppStoreReviewScreenshot_1.SubscriptionAppStoreReviewScreenshotToJSON)(value);
    }
    if ((0, SubscriptionAvailability_1.instanceOfSubscriptionAvailability)(value)) {
        return (0, SubscriptionAvailability_1.SubscriptionAvailabilityToJSON)(value);
    }
    if ((0, SubscriptionGroup_1.instanceOfSubscriptionGroup)(value)) {
        return (0, SubscriptionGroup_1.SubscriptionGroupToJSON)(value);
    }
    if ((0, SubscriptionIntroductoryOffer_1.instanceOfSubscriptionIntroductoryOffer)(value)) {
        return (0, SubscriptionIntroductoryOffer_1.SubscriptionIntroductoryOfferToJSON)(value);
    }
    if ((0, SubscriptionLocalization_1.instanceOfSubscriptionLocalization)(value)) {
        return (0, SubscriptionLocalization_1.SubscriptionLocalizationToJSON)(value);
    }
    if ((0, SubscriptionOfferCode_1.instanceOfSubscriptionOfferCode)(value)) {
        return (0, SubscriptionOfferCode_1.SubscriptionOfferCodeToJSON)(value);
    }
    if ((0, SubscriptionPrice_1.instanceOfSubscriptionPrice)(value)) {
        return (0, SubscriptionPrice_1.SubscriptionPriceToJSON)(value);
    }
    if ((0, SubscriptionPromotionalOffer_1.instanceOfSubscriptionPromotionalOffer)(value)) {
        return (0, SubscriptionPromotionalOffer_1.SubscriptionPromotionalOfferToJSON)(value);
    }
    return {};
}
