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
import type { MarketplaceDomain } from "./MarketplaceDomain";
import type { PagedDocumentLinks } from "./PagedDocumentLinks";
import type { PagingInformation } from "./PagingInformation";
/**
 *
 * @export
 * @interface MarketplaceDomainsResponse
 */
export interface MarketplaceDomainsResponse {
    /**
     *
     * @type {Array<MarketplaceDomain>}
     * @memberof MarketplaceDomainsResponse
     */
    data: Array<MarketplaceDomain>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof MarketplaceDomainsResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof MarketplaceDomainsResponse
     */
    meta?: PagingInformation;
}
/**
 * Check if a given object implements the MarketplaceDomainsResponse interface.
 */
export declare function instanceOfMarketplaceDomainsResponse(value: object): boolean;
export declare function MarketplaceDomainsResponseFromJSON(json: any): MarketplaceDomainsResponse;
export declare function MarketplaceDomainsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketplaceDomainsResponse;
export declare function MarketplaceDomainsResponseToJSON(value?: MarketplaceDomainsResponse | null): any;
