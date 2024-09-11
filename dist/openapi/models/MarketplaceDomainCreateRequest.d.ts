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
import type { MarketplaceDomainCreateRequestData } from "./MarketplaceDomainCreateRequestData";
/**
 *
 * @export
 * @interface MarketplaceDomainCreateRequest
 */
export interface MarketplaceDomainCreateRequest {
    /**
     *
     * @type {MarketplaceDomainCreateRequestData}
     * @memberof MarketplaceDomainCreateRequest
     */
    data: MarketplaceDomainCreateRequestData;
}
/**
 * Check if a given object implements the MarketplaceDomainCreateRequest interface.
 */
export declare function instanceOfMarketplaceDomainCreateRequest(value: object): boolean;
export declare function MarketplaceDomainCreateRequestFromJSON(json: any): MarketplaceDomainCreateRequest;
export declare function MarketplaceDomainCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketplaceDomainCreateRequest;
export declare function MarketplaceDomainCreateRequestToJSON(value?: MarketplaceDomainCreateRequest | null): any;
