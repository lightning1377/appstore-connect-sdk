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
exports.instanceOfSubscriptionGroupLocalizationResponse = instanceOfSubscriptionGroupLocalizationResponse;
exports.SubscriptionGroupLocalizationResponseFromJSON = SubscriptionGroupLocalizationResponseFromJSON;
exports.SubscriptionGroupLocalizationResponseFromJSONTyped = SubscriptionGroupLocalizationResponseFromJSONTyped;
exports.SubscriptionGroupLocalizationResponseToJSON = SubscriptionGroupLocalizationResponseToJSON;
const runtime_1 = require("../runtime");
const DocumentLinks_1 = require("./DocumentLinks");
const SubscriptionGroup_1 = require("./SubscriptionGroup");
const SubscriptionGroupLocalization_1 = require("./SubscriptionGroupLocalization");
/**
 * Check if a given object implements the SubscriptionGroupLocalizationResponse interface.
 */
function instanceOfSubscriptionGroupLocalizationResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function SubscriptionGroupLocalizationResponseFromJSON(json) {
    return SubscriptionGroupLocalizationResponseFromJSONTyped(json, false);
}
function SubscriptionGroupLocalizationResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, SubscriptionGroupLocalization_1.SubscriptionGroupLocalizationFromJSON)(json["data"]),
        included: !(0, runtime_1.exists)(json, "included") ? undefined : json["included"].map(SubscriptionGroup_1.SubscriptionGroupFromJSON),
        links: (0, DocumentLinks_1.DocumentLinksFromJSON)(json["links"])
    };
}
function SubscriptionGroupLocalizationResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, SubscriptionGroupLocalization_1.SubscriptionGroupLocalizationToJSON)(value.data),
        included: value.included === undefined ? undefined : value.included.map(SubscriptionGroup_1.SubscriptionGroupToJSON),
        links: (0, DocumentLinks_1.DocumentLinksToJSON)(value.links)
    };
}
