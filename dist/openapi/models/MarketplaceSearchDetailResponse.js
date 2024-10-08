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
exports.instanceOfMarketplaceSearchDetailResponse = instanceOfMarketplaceSearchDetailResponse;
exports.MarketplaceSearchDetailResponseFromJSON = MarketplaceSearchDetailResponseFromJSON;
exports.MarketplaceSearchDetailResponseFromJSONTyped = MarketplaceSearchDetailResponseFromJSONTyped;
exports.MarketplaceSearchDetailResponseToJSON = MarketplaceSearchDetailResponseToJSON;
const DocumentLinks_1 = require("./DocumentLinks");
const MarketplaceSearchDetail_1 = require("./MarketplaceSearchDetail");
/**
 * Check if a given object implements the MarketplaceSearchDetailResponse interface.
 */
function instanceOfMarketplaceSearchDetailResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
function MarketplaceSearchDetailResponseFromJSON(json) {
    return MarketplaceSearchDetailResponseFromJSONTyped(json, false);
}
function MarketplaceSearchDetailResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, MarketplaceSearchDetail_1.MarketplaceSearchDetailFromJSON)(json["data"]),
        links: (0, DocumentLinks_1.DocumentLinksFromJSON)(json["links"])
    };
}
function MarketplaceSearchDetailResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, MarketplaceSearchDetail_1.MarketplaceSearchDetailToJSON)(value.data),
        links: (0, DocumentLinks_1.DocumentLinksToJSON)(value.links)
    };
}
