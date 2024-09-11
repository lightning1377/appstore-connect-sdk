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
import type { AlternativeDistributionPackageVersionRelationshipsVariantsLinks } from "./AlternativeDistributionPackageVersionRelationshipsVariantsLinks";
import type { PagingInformation } from "./PagingInformation";
import type { SubscriptionPromotionalOfferRelationshipsPricesDataInner } from "./SubscriptionPromotionalOfferRelationshipsPricesDataInner";
/**
 *
 * @export
 * @interface SubscriptionPromotionalOfferRelationshipsPrices
 */
export interface SubscriptionPromotionalOfferRelationshipsPrices {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof SubscriptionPromotionalOfferRelationshipsPrices
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof SubscriptionPromotionalOfferRelationshipsPrices
     */
    meta?: PagingInformation;
    /**
     *
     * @type {Array<SubscriptionPromotionalOfferRelationshipsPricesDataInner>}
     * @memberof SubscriptionPromotionalOfferRelationshipsPrices
     */
    data?: Array<SubscriptionPromotionalOfferRelationshipsPricesDataInner>;
}
/**
 * Check if a given object implements the SubscriptionPromotionalOfferRelationshipsPrices interface.
 */
export declare function instanceOfSubscriptionPromotionalOfferRelationshipsPrices(value: object): boolean;
export declare function SubscriptionPromotionalOfferRelationshipsPricesFromJSON(json: any): SubscriptionPromotionalOfferRelationshipsPrices;
export declare function SubscriptionPromotionalOfferRelationshipsPricesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPromotionalOfferRelationshipsPrices;
export declare function SubscriptionPromotionalOfferRelationshipsPricesToJSON(value?: SubscriptionPromotionalOfferRelationshipsPrices | null): any;
