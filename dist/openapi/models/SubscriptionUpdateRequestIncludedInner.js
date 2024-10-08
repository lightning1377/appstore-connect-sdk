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
exports.SubscriptionUpdateRequestIncludedInnerFromJSON = SubscriptionUpdateRequestIncludedInnerFromJSON;
exports.SubscriptionUpdateRequestIncludedInnerFromJSONTyped = SubscriptionUpdateRequestIncludedInnerFromJSONTyped;
exports.SubscriptionUpdateRequestIncludedInnerToJSON = SubscriptionUpdateRequestIncludedInnerToJSON;
const SubscriptionIntroductoryOfferInlineCreate_1 = require("./SubscriptionIntroductoryOfferInlineCreate");
const SubscriptionPriceInlineCreate_1 = require("./SubscriptionPriceInlineCreate");
const SubscriptionPromotionalOfferInlineCreate_1 = require("./SubscriptionPromotionalOfferInlineCreate");
function SubscriptionUpdateRequestIncludedInnerFromJSON(json) {
    return SubscriptionUpdateRequestIncludedInnerFromJSONTyped(json, false);
}
function SubscriptionUpdateRequestIncludedInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return Object.assign(Object.assign(Object.assign({}, (0, SubscriptionIntroductoryOfferInlineCreate_1.SubscriptionIntroductoryOfferInlineCreateFromJSONTyped)(json, true)), (0, SubscriptionPriceInlineCreate_1.SubscriptionPriceInlineCreateFromJSONTyped)(json, true)), (0, SubscriptionPromotionalOfferInlineCreate_1.SubscriptionPromotionalOfferInlineCreateFromJSONTyped)(json, true));
}
function SubscriptionUpdateRequestIncludedInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    if ((0, SubscriptionIntroductoryOfferInlineCreate_1.instanceOfSubscriptionIntroductoryOfferInlineCreate)(value)) {
        return (0, SubscriptionIntroductoryOfferInlineCreate_1.SubscriptionIntroductoryOfferInlineCreateToJSON)(value);
    }
    if ((0, SubscriptionPriceInlineCreate_1.instanceOfSubscriptionPriceInlineCreate)(value)) {
        return (0, SubscriptionPriceInlineCreate_1.SubscriptionPriceInlineCreateToJSON)(value);
    }
    if ((0, SubscriptionPromotionalOfferInlineCreate_1.instanceOfSubscriptionPromotionalOfferInlineCreate)(value)) {
        return (0, SubscriptionPromotionalOfferInlineCreate_1.SubscriptionPromotionalOfferInlineCreateToJSON)(value);
    }
    return {};
}
