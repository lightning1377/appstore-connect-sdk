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
exports.SubscriptionIntroductoryOffersResponseIncludedInnerFromJSON = SubscriptionIntroductoryOffersResponseIncludedInnerFromJSON;
exports.SubscriptionIntroductoryOffersResponseIncludedInnerFromJSONTyped = SubscriptionIntroductoryOffersResponseIncludedInnerFromJSONTyped;
exports.SubscriptionIntroductoryOffersResponseIncludedInnerToJSON = SubscriptionIntroductoryOffersResponseIncludedInnerToJSON;
const Subscription_1 = require("./Subscription");
const SubscriptionPricePoint_1 = require("./SubscriptionPricePoint");
const Territory_1 = require("./Territory");
function SubscriptionIntroductoryOffersResponseIncludedInnerFromJSON(json) {
    return SubscriptionIntroductoryOffersResponseIncludedInnerFromJSONTyped(json, false);
}
function SubscriptionIntroductoryOffersResponseIncludedInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return Object.assign(Object.assign(Object.assign({}, (0, Subscription_1.SubscriptionFromJSONTyped)(json, true)), (0, SubscriptionPricePoint_1.SubscriptionPricePointFromJSONTyped)(json, true)), (0, Territory_1.TerritoryFromJSONTyped)(json, true));
}
function SubscriptionIntroductoryOffersResponseIncludedInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    if ((0, Subscription_1.instanceOfSubscription)(value)) {
        return (0, Subscription_1.SubscriptionToJSON)(value);
    }
    if ((0, SubscriptionPricePoint_1.instanceOfSubscriptionPricePoint)(value)) {
        return (0, SubscriptionPricePoint_1.SubscriptionPricePointToJSON)(value);
    }
    if ((0, Territory_1.instanceOfTerritory)(value)) {
        return (0, Territory_1.TerritoryToJSON)(value);
    }
    return {};
}
