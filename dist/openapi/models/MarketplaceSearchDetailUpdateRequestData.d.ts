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
import type { MarketplaceSearchDetailAttributes } from "./MarketplaceSearchDetailAttributes";
/**
 *
 * @export
 * @interface MarketplaceSearchDetailUpdateRequestData
 */
export interface MarketplaceSearchDetailUpdateRequestData {
    /**
     *
     * @type {string}
     * @memberof MarketplaceSearchDetailUpdateRequestData
     */
    type: MarketplaceSearchDetailUpdateRequestDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof MarketplaceSearchDetailUpdateRequestData
     */
    id: string;
    /**
     *
     * @type {MarketplaceSearchDetailAttributes}
     * @memberof MarketplaceSearchDetailUpdateRequestData
     */
    attributes?: MarketplaceSearchDetailAttributes;
}
/**
 * @export
 */
export declare const MarketplaceSearchDetailUpdateRequestDataTypeEnum: {
    readonly MarketplaceSearchDetails: "marketplaceSearchDetails";
};
export type MarketplaceSearchDetailUpdateRequestDataTypeEnum = (typeof MarketplaceSearchDetailUpdateRequestDataTypeEnum)[keyof typeof MarketplaceSearchDetailUpdateRequestDataTypeEnum];
/**
 * Check if a given object implements the MarketplaceSearchDetailUpdateRequestData interface.
 */
export declare function instanceOfMarketplaceSearchDetailUpdateRequestData(value: object): boolean;
export declare function MarketplaceSearchDetailUpdateRequestDataFromJSON(json: any): MarketplaceSearchDetailUpdateRequestData;
export declare function MarketplaceSearchDetailUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketplaceSearchDetailUpdateRequestData;
export declare function MarketplaceSearchDetailUpdateRequestDataToJSON(value?: MarketplaceSearchDetailUpdateRequestData | null): any;
