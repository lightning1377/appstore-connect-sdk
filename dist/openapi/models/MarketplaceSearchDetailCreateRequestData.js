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
exports.MarketplaceSearchDetailCreateRequestDataTypeEnum = void 0;
exports.instanceOfMarketplaceSearchDetailCreateRequestData = instanceOfMarketplaceSearchDetailCreateRequestData;
exports.MarketplaceSearchDetailCreateRequestDataFromJSON = MarketplaceSearchDetailCreateRequestDataFromJSON;
exports.MarketplaceSearchDetailCreateRequestDataFromJSONTyped = MarketplaceSearchDetailCreateRequestDataFromJSONTyped;
exports.MarketplaceSearchDetailCreateRequestDataToJSON = MarketplaceSearchDetailCreateRequestDataToJSON;
const AnalyticsReportRequestCreateRequestDataRelationships_1 = require("./AnalyticsReportRequestCreateRequestDataRelationships");
const MarketplaceSearchDetailCreateRequestDataAttributes_1 = require("./MarketplaceSearchDetailCreateRequestDataAttributes");
/**
 * @export
 */
exports.MarketplaceSearchDetailCreateRequestDataTypeEnum = {
    MarketplaceSearchDetails: "marketplaceSearchDetails"
};
/**
 * Check if a given object implements the MarketplaceSearchDetailCreateRequestData interface.
 */
function instanceOfMarketplaceSearchDetailCreateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;
    return isInstance;
}
function MarketplaceSearchDetailCreateRequestDataFromJSON(json) {
    return MarketplaceSearchDetailCreateRequestDataFromJSONTyped(json, false);
}
function MarketplaceSearchDetailCreateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        attributes: (0, MarketplaceSearchDetailCreateRequestDataAttributes_1.MarketplaceSearchDetailCreateRequestDataAttributesFromJSON)(json["attributes"]),
        relationships: (0, AnalyticsReportRequestCreateRequestDataRelationships_1.AnalyticsReportRequestCreateRequestDataRelationshipsFromJSON)(json["relationships"])
    };
}
function MarketplaceSearchDetailCreateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        attributes: (0, MarketplaceSearchDetailCreateRequestDataAttributes_1.MarketplaceSearchDetailCreateRequestDataAttributesToJSON)(value.attributes),
        relationships: (0, AnalyticsReportRequestCreateRequestDataRelationships_1.AnalyticsReportRequestCreateRequestDataRelationshipsToJSON)(value.relationships)
    };
}
