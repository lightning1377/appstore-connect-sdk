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
exports.SubscriptionPromotionalOfferPriceInlineCreateTypeEnum = void 0;
exports.instanceOfSubscriptionPromotionalOfferPriceInlineCreate = instanceOfSubscriptionPromotionalOfferPriceInlineCreate;
exports.SubscriptionPromotionalOfferPriceInlineCreateFromJSON = SubscriptionPromotionalOfferPriceInlineCreateFromJSON;
exports.SubscriptionPromotionalOfferPriceInlineCreateFromJSONTyped = SubscriptionPromotionalOfferPriceInlineCreateFromJSONTyped;
exports.SubscriptionPromotionalOfferPriceInlineCreateToJSON = SubscriptionPromotionalOfferPriceInlineCreateToJSON;
const runtime_1 = require("../runtime");
const SubscriptionOfferCodePriceInlineCreateRelationships_1 = require("./SubscriptionOfferCodePriceInlineCreateRelationships");
/**
 * @export
 */
exports.SubscriptionPromotionalOfferPriceInlineCreateTypeEnum = {
    SubscriptionPromotionalOfferPrices: "subscriptionPromotionalOfferPrices"
};
/**
 * Check if a given object implements the SubscriptionPromotionalOfferPriceInlineCreate interface.
 */
function instanceOfSubscriptionPromotionalOfferPriceInlineCreate(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
function SubscriptionPromotionalOfferPriceInlineCreateFromJSON(json) {
    return SubscriptionPromotionalOfferPriceInlineCreateFromJSONTyped(json, false);
}
function SubscriptionPromotionalOfferPriceInlineCreateFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: !(0, runtime_1.exists)(json, "id") ? undefined : json["id"],
        relationships: !(0, runtime_1.exists)(json, "relationships") ? undefined : (0, SubscriptionOfferCodePriceInlineCreateRelationships_1.SubscriptionOfferCodePriceInlineCreateRelationshipsFromJSON)(json["relationships"])
    };
}
function SubscriptionPromotionalOfferPriceInlineCreateToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        relationships: (0, SubscriptionOfferCodePriceInlineCreateRelationships_1.SubscriptionOfferCodePriceInlineCreateRelationshipsToJSON)(value.relationships)
    };
}
