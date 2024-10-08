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
import type { PagedDocumentLinks } from "./PagedDocumentLinks";
import type { PagingInformation } from "./PagingInformation";
import type { SubscriptionOfferCodePricesResponseIncludedInner } from "./SubscriptionOfferCodePricesResponseIncludedInner";
import type { SubscriptionPrice } from "./SubscriptionPrice";
/**
 *
 * @export
 * @interface SubscriptionPricesResponse
 */
export interface SubscriptionPricesResponse {
    /**
     *
     * @type {Array<SubscriptionPrice>}
     * @memberof SubscriptionPricesResponse
     */
    data: Array<SubscriptionPrice>;
    /**
     *
     * @type {Array<SubscriptionOfferCodePricesResponseIncludedInner>}
     * @memberof SubscriptionPricesResponse
     */
    included?: Array<SubscriptionOfferCodePricesResponseIncludedInner>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof SubscriptionPricesResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof SubscriptionPricesResponse
     */
    meta?: PagingInformation;
}
/**
 * Check if a given object implements the SubscriptionPricesResponse interface.
 */
export declare function instanceOfSubscriptionPricesResponse(value: object): boolean;
export declare function SubscriptionPricesResponseFromJSON(json: any): SubscriptionPricesResponse;
export declare function SubscriptionPricesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPricesResponse;
export declare function SubscriptionPricesResponseToJSON(value?: SubscriptionPricesResponse | null): any;
