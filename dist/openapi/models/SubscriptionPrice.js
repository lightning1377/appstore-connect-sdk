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
exports.SubscriptionPriceTypeEnum = void 0;
exports.instanceOfSubscriptionPrice = instanceOfSubscriptionPrice;
exports.SubscriptionPriceFromJSON = SubscriptionPriceFromJSON;
exports.SubscriptionPriceFromJSONTyped = SubscriptionPriceFromJSONTyped;
exports.SubscriptionPriceToJSON = SubscriptionPriceToJSON;
const runtime_1 = require("../runtime");
const ResourceLinks_1 = require("./ResourceLinks");
const SubscriptionOfferCodePriceRelationships_1 = require("./SubscriptionOfferCodePriceRelationships");
const SubscriptionPriceAttributes_1 = require("./SubscriptionPriceAttributes");
/**
 * @export
 */
exports.SubscriptionPriceTypeEnum = {
    SubscriptionPrices: "subscriptionPrices"
};
/**
 * Check if a given object implements the SubscriptionPrice interface.
 */
function instanceOfSubscriptionPrice(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
function SubscriptionPriceFromJSON(json) {
    return SubscriptionPriceFromJSONTyped(json, false);
}
function SubscriptionPriceFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !(0, runtime_1.exists)(json, "attributes") ? undefined : (0, SubscriptionPriceAttributes_1.SubscriptionPriceAttributesFromJSON)(json["attributes"]),
        relationships: !(0, runtime_1.exists)(json, "relationships") ? undefined : (0, SubscriptionOfferCodePriceRelationships_1.SubscriptionOfferCodePriceRelationshipsFromJSON)(json["relationships"]),
        links: !(0, runtime_1.exists)(json, "links") ? undefined : (0, ResourceLinks_1.ResourceLinksFromJSON)(json["links"])
    };
}
function SubscriptionPriceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: (0, SubscriptionPriceAttributes_1.SubscriptionPriceAttributesToJSON)(value.attributes),
        relationships: (0, SubscriptionOfferCodePriceRelationships_1.SubscriptionOfferCodePriceRelationshipsToJSON)(value.relationships),
        links: (0, ResourceLinks_1.ResourceLinksToJSON)(value.links)
    };
}
