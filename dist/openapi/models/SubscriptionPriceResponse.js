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
exports.instanceOfSubscriptionPriceResponse = instanceOfSubscriptionPriceResponse;
exports.SubscriptionPriceResponseFromJSON = SubscriptionPriceResponseFromJSON;
exports.SubscriptionPriceResponseFromJSONTyped = SubscriptionPriceResponseFromJSONTyped;
exports.SubscriptionPriceResponseToJSON = SubscriptionPriceResponseToJSON;
const runtime_1 = require("../runtime");
const DocumentLinks_1 = require("./DocumentLinks");
const SubscriptionOfferCodePricesResponseIncludedInner_1 = require("./SubscriptionOfferCodePricesResponseIncludedInner");
const SubscriptionPrice_1 = require("./SubscriptionPrice");
/**
 * Check if a given object implements the SubscriptionPriceResponse interface.
 */
function instanceOfSubscriptionPriceResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function SubscriptionPriceResponseFromJSON(json) {
    return SubscriptionPriceResponseFromJSONTyped(json, false);
}
function SubscriptionPriceResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, SubscriptionPrice_1.SubscriptionPriceFromJSON)(json["data"]),
        included: !(0, runtime_1.exists)(json, "included") ? undefined : json["included"].map(SubscriptionOfferCodePricesResponseIncludedInner_1.SubscriptionOfferCodePricesResponseIncludedInnerFromJSON),
        links: (0, DocumentLinks_1.DocumentLinksFromJSON)(json["links"])
    };
}
function SubscriptionPriceResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, SubscriptionPrice_1.SubscriptionPriceToJSON)(value.data),
        included: value.included === undefined ? undefined : value.included.map(SubscriptionOfferCodePricesResponseIncludedInner_1.SubscriptionOfferCodePricesResponseIncludedInnerToJSON),
        links: (0, DocumentLinks_1.DocumentLinksToJSON)(value.links)
    };
}
