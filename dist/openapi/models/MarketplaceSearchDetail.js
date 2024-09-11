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
exports.MarketplaceSearchDetailTypeEnum = void 0;
exports.instanceOfMarketplaceSearchDetail = instanceOfMarketplaceSearchDetail;
exports.MarketplaceSearchDetailFromJSON = MarketplaceSearchDetailFromJSON;
exports.MarketplaceSearchDetailFromJSONTyped = MarketplaceSearchDetailFromJSONTyped;
exports.MarketplaceSearchDetailToJSON = MarketplaceSearchDetailToJSON;
const runtime_1 = require("../runtime");
const MarketplaceSearchDetailAttributes_1 = require("./MarketplaceSearchDetailAttributes");
const ResourceLinks_1 = require("./ResourceLinks");
/**
 * @export
 */
exports.MarketplaceSearchDetailTypeEnum = {
    MarketplaceSearchDetails: "marketplaceSearchDetails"
};
/**
 * Check if a given object implements the MarketplaceSearchDetail interface.
 */
function instanceOfMarketplaceSearchDetail(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
function MarketplaceSearchDetailFromJSON(json) {
    return MarketplaceSearchDetailFromJSONTyped(json, false);
}
function MarketplaceSearchDetailFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !(0, runtime_1.exists)(json, "attributes") ? undefined : (0, MarketplaceSearchDetailAttributes_1.MarketplaceSearchDetailAttributesFromJSON)(json["attributes"]),
        links: !(0, runtime_1.exists)(json, "links") ? undefined : (0, ResourceLinks_1.ResourceLinksFromJSON)(json["links"])
    };
}
function MarketplaceSearchDetailToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: (0, MarketplaceSearchDetailAttributes_1.MarketplaceSearchDetailAttributesToJSON)(value.attributes),
        links: (0, ResourceLinks_1.ResourceLinksToJSON)(value.links)
    };
}
