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
exports.instanceOfSubscriptionGroupLocalizationsResponse = instanceOfSubscriptionGroupLocalizationsResponse;
exports.SubscriptionGroupLocalizationsResponseFromJSON = SubscriptionGroupLocalizationsResponseFromJSON;
exports.SubscriptionGroupLocalizationsResponseFromJSONTyped = SubscriptionGroupLocalizationsResponseFromJSONTyped;
exports.SubscriptionGroupLocalizationsResponseToJSON = SubscriptionGroupLocalizationsResponseToJSON;
const runtime_1 = require("../runtime");
const PagedDocumentLinks_1 = require("./PagedDocumentLinks");
const PagingInformation_1 = require("./PagingInformation");
const SubscriptionGroup_1 = require("./SubscriptionGroup");
const SubscriptionGroupLocalization_1 = require("./SubscriptionGroupLocalization");
/**
 * Check if a given object implements the SubscriptionGroupLocalizationsResponse interface.
 */
function instanceOfSubscriptionGroupLocalizationsResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function SubscriptionGroupLocalizationsResponseFromJSON(json) {
    return SubscriptionGroupLocalizationsResponseFromJSONTyped(json, false);
}
function SubscriptionGroupLocalizationsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: json["data"].map(SubscriptionGroupLocalization_1.SubscriptionGroupLocalizationFromJSON),
        included: !(0, runtime_1.exists)(json, "included") ? undefined : json["included"].map(SubscriptionGroup_1.SubscriptionGroupFromJSON),
        links: (0, PagedDocumentLinks_1.PagedDocumentLinksFromJSON)(json["links"]),
        meta: !(0, runtime_1.exists)(json, "meta") ? undefined : (0, PagingInformation_1.PagingInformationFromJSON)(json["meta"])
    };
}
function SubscriptionGroupLocalizationsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: value.data.map(SubscriptionGroupLocalization_1.SubscriptionGroupLocalizationToJSON),
        included: value.included === undefined ? undefined : value.included.map(SubscriptionGroup_1.SubscriptionGroupToJSON),
        links: (0, PagedDocumentLinks_1.PagedDocumentLinksToJSON)(value.links),
        meta: (0, PagingInformation_1.PagingInformationToJSON)(value.meta)
    };
}
