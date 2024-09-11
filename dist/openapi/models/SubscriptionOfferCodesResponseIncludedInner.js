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
exports.SubscriptionOfferCodesResponseIncludedInnerFromJSON = SubscriptionOfferCodesResponseIncludedInnerFromJSON;
exports.SubscriptionOfferCodesResponseIncludedInnerFromJSONTyped = SubscriptionOfferCodesResponseIncludedInnerFromJSONTyped;
exports.SubscriptionOfferCodesResponseIncludedInnerToJSON = SubscriptionOfferCodesResponseIncludedInnerToJSON;
const Subscription_1 = require("./Subscription");
const SubscriptionOfferCodeCustomCode_1 = require("./SubscriptionOfferCodeCustomCode");
const SubscriptionOfferCodeOneTimeUseCode_1 = require("./SubscriptionOfferCodeOneTimeUseCode");
const SubscriptionOfferCodePrice_1 = require("./SubscriptionOfferCodePrice");
function SubscriptionOfferCodesResponseIncludedInnerFromJSON(json) {
    return SubscriptionOfferCodesResponseIncludedInnerFromJSONTyped(json, false);
}
function SubscriptionOfferCodesResponseIncludedInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return Object.assign(Object.assign(Object.assign(Object.assign({}, (0, Subscription_1.SubscriptionFromJSONTyped)(json, true)), (0, SubscriptionOfferCodeCustomCode_1.SubscriptionOfferCodeCustomCodeFromJSONTyped)(json, true)), (0, SubscriptionOfferCodeOneTimeUseCode_1.SubscriptionOfferCodeOneTimeUseCodeFromJSONTyped)(json, true)), (0, SubscriptionOfferCodePrice_1.SubscriptionOfferCodePriceFromJSONTyped)(json, true));
}
function SubscriptionOfferCodesResponseIncludedInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    if ((0, Subscription_1.instanceOfSubscription)(value)) {
        return (0, Subscription_1.SubscriptionToJSON)(value);
    }
    if ((0, SubscriptionOfferCodeCustomCode_1.instanceOfSubscriptionOfferCodeCustomCode)(value)) {
        return (0, SubscriptionOfferCodeCustomCode_1.SubscriptionOfferCodeCustomCodeToJSON)(value);
    }
    if ((0, SubscriptionOfferCodeOneTimeUseCode_1.instanceOfSubscriptionOfferCodeOneTimeUseCode)(value)) {
        return (0, SubscriptionOfferCodeOneTimeUseCode_1.SubscriptionOfferCodeOneTimeUseCodeToJSON)(value);
    }
    if ((0, SubscriptionOfferCodePrice_1.instanceOfSubscriptionOfferCodePrice)(value)) {
        return (0, SubscriptionOfferCodePrice_1.SubscriptionOfferCodePriceToJSON)(value);
    }
    return {};
}
