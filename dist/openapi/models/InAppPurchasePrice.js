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
exports.InAppPurchasePriceTypeEnum = void 0;
exports.instanceOfInAppPurchasePrice = instanceOfInAppPurchasePrice;
exports.InAppPurchasePriceFromJSON = InAppPurchasePriceFromJSON;
exports.InAppPurchasePriceFromJSONTyped = InAppPurchasePriceFromJSONTyped;
exports.InAppPurchasePriceToJSON = InAppPurchasePriceToJSON;
const runtime_1 = require("../runtime");
const InAppPurchasePriceAttributes_1 = require("./InAppPurchasePriceAttributes");
const InAppPurchasePriceRelationships_1 = require("./InAppPurchasePriceRelationships");
const ResourceLinks_1 = require("./ResourceLinks");
/**
 * @export
 */
exports.InAppPurchasePriceTypeEnum = {
    InAppPurchasePrices: "inAppPurchasePrices"
};
/**
 * Check if a given object implements the InAppPurchasePrice interface.
 */
function instanceOfInAppPurchasePrice(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
function InAppPurchasePriceFromJSON(json) {
    return InAppPurchasePriceFromJSONTyped(json, false);
}
function InAppPurchasePriceFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !(0, runtime_1.exists)(json, "attributes") ? undefined : (0, InAppPurchasePriceAttributes_1.InAppPurchasePriceAttributesFromJSON)(json["attributes"]),
        relationships: !(0, runtime_1.exists)(json, "relationships") ? undefined : (0, InAppPurchasePriceRelationships_1.InAppPurchasePriceRelationshipsFromJSON)(json["relationships"]),
        links: !(0, runtime_1.exists)(json, "links") ? undefined : (0, ResourceLinks_1.ResourceLinksFromJSON)(json["links"])
    };
}
function InAppPurchasePriceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: (0, InAppPurchasePriceAttributes_1.InAppPurchasePriceAttributesToJSON)(value.attributes),
        relationships: (0, InAppPurchasePriceRelationships_1.InAppPurchasePriceRelationshipsToJSON)(value.relationships),
        links: (0, ResourceLinks_1.ResourceLinksToJSON)(value.links)
    };
}
