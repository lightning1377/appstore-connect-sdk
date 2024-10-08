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
import type { DocumentLinks } from "./DocumentLinks";
import type { MarketplaceSearchDetail } from "./MarketplaceSearchDetail";
/**
 *
 * @export
 * @interface MarketplaceSearchDetailResponse
 */
export interface MarketplaceSearchDetailResponse {
    /**
     *
     * @type {MarketplaceSearchDetail}
     * @memberof MarketplaceSearchDetailResponse
     */
    data: MarketplaceSearchDetail;
    /**
     *
     * @type {DocumentLinks}
     * @memberof MarketplaceSearchDetailResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the MarketplaceSearchDetailResponse interface.
 */
export declare function instanceOfMarketplaceSearchDetailResponse(value: object): boolean;
export declare function MarketplaceSearchDetailResponseFromJSON(json: any): MarketplaceSearchDetailResponse;
export declare function MarketplaceSearchDetailResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketplaceSearchDetailResponse;
export declare function MarketplaceSearchDetailResponseToJSON(value?: MarketplaceSearchDetailResponse | null): any;
