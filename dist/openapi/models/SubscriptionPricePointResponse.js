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
exports.instanceOfSubscriptionPricePointResponse = instanceOfSubscriptionPricePointResponse;
exports.SubscriptionPricePointResponseFromJSON = SubscriptionPricePointResponseFromJSON;
exports.SubscriptionPricePointResponseFromJSONTyped = SubscriptionPricePointResponseFromJSONTyped;
exports.SubscriptionPricePointResponseToJSON = SubscriptionPricePointResponseToJSON;
const runtime_1 = require("../runtime");
const DocumentLinks_1 = require("./DocumentLinks");
const SubscriptionPricePoint_1 = require("./SubscriptionPricePoint");
const Territory_1 = require("./Territory");
/**
 * Check if a given object implements the SubscriptionPricePointResponse interface.
 */
function instanceOfSubscriptionPricePointResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function SubscriptionPricePointResponseFromJSON(json) {
    return SubscriptionPricePointResponseFromJSONTyped(json, false);
}
function SubscriptionPricePointResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, SubscriptionPricePoint_1.SubscriptionPricePointFromJSON)(json["data"]),
        included: !(0, runtime_1.exists)(json, "included") ? undefined : json["included"].map(Territory_1.TerritoryFromJSON),
        links: (0, DocumentLinks_1.DocumentLinksFromJSON)(json["links"])
    };
}
function SubscriptionPricePointResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, SubscriptionPricePoint_1.SubscriptionPricePointToJSON)(value.data),
        included: value.included === undefined ? undefined : value.included.map(Territory_1.TerritoryToJSON),
        links: (0, DocumentLinks_1.DocumentLinksToJSON)(value.links)
    };
}
