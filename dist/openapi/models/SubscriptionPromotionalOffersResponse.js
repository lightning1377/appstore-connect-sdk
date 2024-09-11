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
exports.instanceOfSubscriptionPromotionalOffersResponse = instanceOfSubscriptionPromotionalOffersResponse;
exports.SubscriptionPromotionalOffersResponseFromJSON = SubscriptionPromotionalOffersResponseFromJSON;
exports.SubscriptionPromotionalOffersResponseFromJSONTyped = SubscriptionPromotionalOffersResponseFromJSONTyped;
exports.SubscriptionPromotionalOffersResponseToJSON = SubscriptionPromotionalOffersResponseToJSON;
const runtime_1 = require("../runtime");
const PagedDocumentLinks_1 = require("./PagedDocumentLinks");
const PagingInformation_1 = require("./PagingInformation");
const SubscriptionPromotionalOffer_1 = require("./SubscriptionPromotionalOffer");
const SubscriptionPromotionalOffersResponseIncludedInner_1 = require("./SubscriptionPromotionalOffersResponseIncludedInner");
/**
 * Check if a given object implements the SubscriptionPromotionalOffersResponse interface.
 */
function instanceOfSubscriptionPromotionalOffersResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function SubscriptionPromotionalOffersResponseFromJSON(json) {
    return SubscriptionPromotionalOffersResponseFromJSONTyped(json, false);
}
function SubscriptionPromotionalOffersResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: json["data"].map(SubscriptionPromotionalOffer_1.SubscriptionPromotionalOfferFromJSON),
        included: !(0, runtime_1.exists)(json, "included") ? undefined : json["included"].map(SubscriptionPromotionalOffersResponseIncludedInner_1.SubscriptionPromotionalOffersResponseIncludedInnerFromJSON),
        links: (0, PagedDocumentLinks_1.PagedDocumentLinksFromJSON)(json["links"]),
        meta: !(0, runtime_1.exists)(json, "meta") ? undefined : (0, PagingInformation_1.PagingInformationFromJSON)(json["meta"])
    };
}
function SubscriptionPromotionalOffersResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: value.data.map(SubscriptionPromotionalOffer_1.SubscriptionPromotionalOfferToJSON),
        included: value.included === undefined ? undefined : value.included.map(SubscriptionPromotionalOffersResponseIncludedInner_1.SubscriptionPromotionalOffersResponseIncludedInnerToJSON),
        links: (0, PagedDocumentLinks_1.PagedDocumentLinksToJSON)(value.links),
        meta: (0, PagingInformation_1.PagingInformationToJSON)(value.meta)
    };
}
