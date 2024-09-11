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
exports.PromotedPurchasesResponseIncludedInnerFromJSON = PromotedPurchasesResponseIncludedInnerFromJSON;
exports.PromotedPurchasesResponseIncludedInnerFromJSONTyped = PromotedPurchasesResponseIncludedInnerFromJSONTyped;
exports.PromotedPurchasesResponseIncludedInnerToJSON = PromotedPurchasesResponseIncludedInnerToJSON;
const InAppPurchaseV2_1 = require("./InAppPurchaseV2");
const PromotedPurchaseImage_1 = require("./PromotedPurchaseImage");
const Subscription_1 = require("./Subscription");
function PromotedPurchasesResponseIncludedInnerFromJSON(json) {
    return PromotedPurchasesResponseIncludedInnerFromJSONTyped(json, false);
}
function PromotedPurchasesResponseIncludedInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return Object.assign(Object.assign(Object.assign({}, (0, InAppPurchaseV2_1.InAppPurchaseV2FromJSONTyped)(json, true)), (0, PromotedPurchaseImage_1.PromotedPurchaseImageFromJSONTyped)(json, true)), (0, Subscription_1.SubscriptionFromJSONTyped)(json, true));
}
function PromotedPurchasesResponseIncludedInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    if ((0, InAppPurchaseV2_1.instanceOfInAppPurchaseV2)(value)) {
        return (0, InAppPurchaseV2_1.InAppPurchaseV2ToJSON)(value);
    }
    if ((0, PromotedPurchaseImage_1.instanceOfPromotedPurchaseImage)(value)) {
        return (0, PromotedPurchaseImage_1.PromotedPurchaseImageToJSON)(value);
    }
    if ((0, Subscription_1.instanceOfSubscription)(value)) {
        return (0, Subscription_1.SubscriptionToJSON)(value);
    }
    return {};
}
