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
import type { SubscriptionPromotionalOffer } from "./SubscriptionPromotionalOffer";
import type { SubscriptionPromotionalOffersResponseIncludedInner } from "./SubscriptionPromotionalOffersResponseIncludedInner";
/**
 *
 * @export
 * @interface SubscriptionPromotionalOffersResponse
 */
export interface SubscriptionPromotionalOffersResponse {
    /**
     *
     * @type {Array<SubscriptionPromotionalOffer>}
     * @memberof SubscriptionPromotionalOffersResponse
     */
    data: Array<SubscriptionPromotionalOffer>;
    /**
     *
     * @type {Array<SubscriptionPromotionalOffersResponseIncludedInner>}
     * @memberof SubscriptionPromotionalOffersResponse
     */
    included?: Array<SubscriptionPromotionalOffersResponseIncludedInner>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof SubscriptionPromotionalOffersResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof SubscriptionPromotionalOffersResponse
     */
    meta?: PagingInformation;
}
/**
 * Check if a given object implements the SubscriptionPromotionalOffersResponse interface.
 */
export declare function instanceOfSubscriptionPromotionalOffersResponse(value: object): boolean;
export declare function SubscriptionPromotionalOffersResponseFromJSON(json: any): SubscriptionPromotionalOffersResponse;
export declare function SubscriptionPromotionalOffersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPromotionalOffersResponse;
export declare function SubscriptionPromotionalOffersResponseToJSON(value?: SubscriptionPromotionalOffersResponse | null): any;
