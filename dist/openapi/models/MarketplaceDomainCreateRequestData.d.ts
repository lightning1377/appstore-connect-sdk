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
import type { AlternativeDistributionDomainCreateRequestDataAttributes } from "./AlternativeDistributionDomainCreateRequestDataAttributes";
/**
 *
 * @export
 * @interface MarketplaceDomainCreateRequestData
 */
export interface MarketplaceDomainCreateRequestData {
    /**
     *
     * @type {string}
     * @memberof MarketplaceDomainCreateRequestData
     */
    type: MarketplaceDomainCreateRequestDataTypeEnum;
    /**
     *
     * @type {AlternativeDistributionDomainCreateRequestDataAttributes}
     * @memberof MarketplaceDomainCreateRequestData
     */
    attributes: AlternativeDistributionDomainCreateRequestDataAttributes;
}
/**
 * @export
 */
export declare const MarketplaceDomainCreateRequestDataTypeEnum: {
    readonly MarketplaceDomains: "marketplaceDomains";
};
export type MarketplaceDomainCreateRequestDataTypeEnum = (typeof MarketplaceDomainCreateRequestDataTypeEnum)[keyof typeof MarketplaceDomainCreateRequestDataTypeEnum];
/**
 * Check if a given object implements the MarketplaceDomainCreateRequestData interface.
 */
export declare function instanceOfMarketplaceDomainCreateRequestData(value: object): boolean;
export declare function MarketplaceDomainCreateRequestDataFromJSON(json: any): MarketplaceDomainCreateRequestData;
export declare function MarketplaceDomainCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketplaceDomainCreateRequestData;
export declare function MarketplaceDomainCreateRequestDataToJSON(value?: MarketplaceDomainCreateRequestData | null): any;
