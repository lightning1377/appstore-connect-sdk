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
exports.instanceOfSubscriptionOfferCodeOneTimeUseCodeResponse = instanceOfSubscriptionOfferCodeOneTimeUseCodeResponse;
exports.SubscriptionOfferCodeOneTimeUseCodeResponseFromJSON = SubscriptionOfferCodeOneTimeUseCodeResponseFromJSON;
exports.SubscriptionOfferCodeOneTimeUseCodeResponseFromJSONTyped = SubscriptionOfferCodeOneTimeUseCodeResponseFromJSONTyped;
exports.SubscriptionOfferCodeOneTimeUseCodeResponseToJSON = SubscriptionOfferCodeOneTimeUseCodeResponseToJSON;
const runtime_1 = require("../runtime");
const DocumentLinks_1 = require("./DocumentLinks");
const SubscriptionOfferCode_1 = require("./SubscriptionOfferCode");
const SubscriptionOfferCodeOneTimeUseCode_1 = require("./SubscriptionOfferCodeOneTimeUseCode");
/**
 * Check if a given object implements the SubscriptionOfferCodeOneTimeUseCodeResponse interface.
 */
function instanceOfSubscriptionOfferCodeOneTimeUseCodeResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function SubscriptionOfferCodeOneTimeUseCodeResponseFromJSON(json) {
    return SubscriptionOfferCodeOneTimeUseCodeResponseFromJSONTyped(json, false);
}
function SubscriptionOfferCodeOneTimeUseCodeResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, SubscriptionOfferCodeOneTimeUseCode_1.SubscriptionOfferCodeOneTimeUseCodeFromJSON)(json["data"]),
        included: !(0, runtime_1.exists)(json, "included") ? undefined : json["included"].map(SubscriptionOfferCode_1.SubscriptionOfferCodeFromJSON),
        links: (0, DocumentLinks_1.DocumentLinksFromJSON)(json["links"])
    };
}
function SubscriptionOfferCodeOneTimeUseCodeResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, SubscriptionOfferCodeOneTimeUseCode_1.SubscriptionOfferCodeOneTimeUseCodeToJSON)(value.data),
        included: value.included === undefined ? undefined : value.included.map(SubscriptionOfferCode_1.SubscriptionOfferCodeToJSON),
        links: (0, DocumentLinks_1.DocumentLinksToJSON)(value.links)
    };
}
