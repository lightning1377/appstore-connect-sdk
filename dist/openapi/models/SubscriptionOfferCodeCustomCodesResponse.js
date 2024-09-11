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
exports.instanceOfSubscriptionOfferCodeCustomCodesResponse = instanceOfSubscriptionOfferCodeCustomCodesResponse;
exports.SubscriptionOfferCodeCustomCodesResponseFromJSON = SubscriptionOfferCodeCustomCodesResponseFromJSON;
exports.SubscriptionOfferCodeCustomCodesResponseFromJSONTyped = SubscriptionOfferCodeCustomCodesResponseFromJSONTyped;
exports.SubscriptionOfferCodeCustomCodesResponseToJSON = SubscriptionOfferCodeCustomCodesResponseToJSON;
const runtime_1 = require("../runtime");
const PagedDocumentLinks_1 = require("./PagedDocumentLinks");
const PagingInformation_1 = require("./PagingInformation");
const SubscriptionOfferCode_1 = require("./SubscriptionOfferCode");
const SubscriptionOfferCodeCustomCode_1 = require("./SubscriptionOfferCodeCustomCode");
/**
 * Check if a given object implements the SubscriptionOfferCodeCustomCodesResponse interface.
 */
function instanceOfSubscriptionOfferCodeCustomCodesResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function SubscriptionOfferCodeCustomCodesResponseFromJSON(json) {
    return SubscriptionOfferCodeCustomCodesResponseFromJSONTyped(json, false);
}
function SubscriptionOfferCodeCustomCodesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: json["data"].map(SubscriptionOfferCodeCustomCode_1.SubscriptionOfferCodeCustomCodeFromJSON),
        included: !(0, runtime_1.exists)(json, "included") ? undefined : json["included"].map(SubscriptionOfferCode_1.SubscriptionOfferCodeFromJSON),
        links: (0, PagedDocumentLinks_1.PagedDocumentLinksFromJSON)(json["links"]),
        meta: !(0, runtime_1.exists)(json, "meta") ? undefined : (0, PagingInformation_1.PagingInformationFromJSON)(json["meta"])
    };
}
function SubscriptionOfferCodeCustomCodesResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: value.data.map(SubscriptionOfferCodeCustomCode_1.SubscriptionOfferCodeCustomCodeToJSON),
        included: value.included === undefined ? undefined : value.included.map(SubscriptionOfferCode_1.SubscriptionOfferCodeToJSON),
        links: (0, PagedDocumentLinks_1.PagedDocumentLinksToJSON)(value.links),
        meta: (0, PagingInformation_1.PagingInformationToJSON)(value.meta)
    };
}
