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

import { exists, mapValues } from "../runtime";
import type { AnalyticsReportRequestCreateRequestDataRelationships } from "./AnalyticsReportRequestCreateRequestDataRelationships";
import { AnalyticsReportRequestCreateRequestDataRelationshipsFromJSON, AnalyticsReportRequestCreateRequestDataRelationshipsFromJSONTyped, AnalyticsReportRequestCreateRequestDataRelationshipsToJSON } from "./AnalyticsReportRequestCreateRequestDataRelationships";
import type { MarketplaceSearchDetailCreateRequestDataAttributes } from "./MarketplaceSearchDetailCreateRequestDataAttributes";
import { MarketplaceSearchDetailCreateRequestDataAttributesFromJSON, MarketplaceSearchDetailCreateRequestDataAttributesFromJSONTyped, MarketplaceSearchDetailCreateRequestDataAttributesToJSON } from "./MarketplaceSearchDetailCreateRequestDataAttributes";

/**
 *
 * @export
 * @interface MarketplaceSearchDetailCreateRequestData
 */
export interface MarketplaceSearchDetailCreateRequestData {
    /**
     *
     * @type {string}
     * @memberof MarketplaceSearchDetailCreateRequestData
     */
    type: MarketplaceSearchDetailCreateRequestDataTypeEnum;
    /**
     *
     * @type {MarketplaceSearchDetailCreateRequestDataAttributes}
     * @memberof MarketplaceSearchDetailCreateRequestData
     */
    attributes: MarketplaceSearchDetailCreateRequestDataAttributes;
    /**
     *
     * @type {AnalyticsReportRequestCreateRequestDataRelationships}
     * @memberof MarketplaceSearchDetailCreateRequestData
     */
    relationships: AnalyticsReportRequestCreateRequestDataRelationships;
}

/**
 * @export
 */
export const MarketplaceSearchDetailCreateRequestDataTypeEnum = {
    MarketplaceSearchDetails: "marketplaceSearchDetails"
} as const;
export type MarketplaceSearchDetailCreateRequestDataTypeEnum = (typeof MarketplaceSearchDetailCreateRequestDataTypeEnum)[keyof typeof MarketplaceSearchDetailCreateRequestDataTypeEnum];

/**
 * Check if a given object implements the MarketplaceSearchDetailCreateRequestData interface.
 */
export function instanceOfMarketplaceSearchDetailCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function MarketplaceSearchDetailCreateRequestDataFromJSON(json: any): MarketplaceSearchDetailCreateRequestData {
    return MarketplaceSearchDetailCreateRequestDataFromJSONTyped(json, false);
}

export function MarketplaceSearchDetailCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketplaceSearchDetailCreateRequestData {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        attributes: MarketplaceSearchDetailCreateRequestDataAttributesFromJSON(json["attributes"]),
        relationships: AnalyticsReportRequestCreateRequestDataRelationshipsFromJSON(json["relationships"])
    };
}

export function MarketplaceSearchDetailCreateRequestDataToJSON(value?: MarketplaceSearchDetailCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        attributes: MarketplaceSearchDetailCreateRequestDataAttributesToJSON(value.attributes),
        relationships: AnalyticsReportRequestCreateRequestDataRelationshipsToJSON(value.relationships)
    };
}
