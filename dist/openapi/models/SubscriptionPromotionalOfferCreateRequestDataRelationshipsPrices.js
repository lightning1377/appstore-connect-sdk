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
exports.instanceOfSubscriptionPromotionalOfferCreateRequestDataRelationshipsPrices = instanceOfSubscriptionPromotionalOfferCreateRequestDataRelationshipsPrices;
exports.SubscriptionPromotionalOfferCreateRequestDataRelationshipsPricesFromJSON = SubscriptionPromotionalOfferCreateRequestDataRelationshipsPricesFromJSON;
exports.SubscriptionPromotionalOfferCreateRequestDataRelationshipsPricesFromJSONTyped = SubscriptionPromotionalOfferCreateRequestDataRelationshipsPricesFromJSONTyped;
exports.SubscriptionPromotionalOfferCreateRequestDataRelationshipsPricesToJSON = SubscriptionPromotionalOfferCreateRequestDataRelationshipsPricesToJSON;
const SubscriptionPromotionalOfferRelationshipsPricesDataInner_1 = require("./SubscriptionPromotionalOfferRelationshipsPricesDataInner");
/**
 * Check if a given object implements the SubscriptionPromotionalOfferCreateRequestDataRelationshipsPrices interface.
 */
function instanceOfSubscriptionPromotionalOfferCreateRequestDataRelationshipsPrices(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function SubscriptionPromotionalOfferCreateRequestDataRelationshipsPricesFromJSON(json) {
    return SubscriptionPromotionalOfferCreateRequestDataRelationshipsPricesFromJSONTyped(json, false);
}
function SubscriptionPromotionalOfferCreateRequestDataRelationshipsPricesFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: json["data"].map(SubscriptionPromotionalOfferRelationshipsPricesDataInner_1.SubscriptionPromotionalOfferRelationshipsPricesDataInnerFromJSON)
    };
}
function SubscriptionPromotionalOfferCreateRequestDataRelationshipsPricesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: value.data.map(SubscriptionPromotionalOfferRelationshipsPricesDataInner_1.SubscriptionPromotionalOfferRelationshipsPricesDataInnerToJSON)
    };
}
