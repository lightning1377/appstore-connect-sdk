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
import type { ResourceLinks } from "./ResourceLinks";
/**
 *
 * @export
 * @interface MarketplaceSearchDetail
 */
export interface MarketplaceSearchDetail {
    /**
     *
     * @type {string}
     * @memberof MarketplaceSearchDetail
     */
    type: MarketplaceSearchDetailTypeEnum;
    /**
     *
     * @type {string}
     * @memberof MarketplaceSearchDetail
     */
    id: string;
    /**
     *
     * @type {MarketplaceSearchDetailAttributes}
     * @memberof MarketplaceSearchDetail
     */
    attributes?: MarketplaceSearchDetailAttributes;
    /**
     *
     * @type {ResourceLinks}
     * @memberof MarketplaceSearchDetail
     */
    links?: ResourceLinks;
}
/**
 * @export
 */
export declare const MarketplaceSearchDetailTypeEnum: {
    readonly MarketplaceSearchDetails: "marketplaceSearchDetails";
};
export type MarketplaceSearchDetailTypeEnum = (typeof MarketplaceSearchDetailTypeEnum)[keyof typeof MarketplaceSearchDetailTypeEnum];
/**
 * Check if a given object implements the MarketplaceSearchDetail interface.
 */
export declare function instanceOfMarketplaceSearchDetail(value: object): boolean;
export declare function MarketplaceSearchDetailFromJSON(json: any): MarketplaceSearchDetail;
export declare function MarketplaceSearchDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketplaceSearchDetail;
export declare function MarketplaceSearchDetailToJSON(value?: MarketplaceSearchDetail | null): any;
