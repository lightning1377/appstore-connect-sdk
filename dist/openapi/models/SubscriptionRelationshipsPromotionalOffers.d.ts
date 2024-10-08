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
import type { SubscriptionRelationshipsPromotionalOffersDataInner } from "./SubscriptionRelationshipsPromotionalOffersDataInner";
/**
 *
 * @export
 * @interface SubscriptionRelationshipsPromotionalOffers
 */
export interface SubscriptionRelationshipsPromotionalOffers {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof SubscriptionRelationshipsPromotionalOffers
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof SubscriptionRelationshipsPromotionalOffers
     */
    meta?: PagingInformation;
    /**
     *
     * @type {Array<SubscriptionRelationshipsPromotionalOffersDataInner>}
     * @memberof SubscriptionRelationshipsPromotionalOffers
     */
    data?: Array<SubscriptionRelationshipsPromotionalOffersDataInner>;
}
/**
 * Check if a given object implements the SubscriptionRelationshipsPromotionalOffers interface.
 */
export declare function instanceOfSubscriptionRelationshipsPromotionalOffers(value: object): boolean;
export declare function SubscriptionRelationshipsPromotionalOffersFromJSON(json: any): SubscriptionRelationshipsPromotionalOffers;
export declare function SubscriptionRelationshipsPromotionalOffersFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionRelationshipsPromotionalOffers;
export declare function SubscriptionRelationshipsPromotionalOffersToJSON(value?: SubscriptionRelationshipsPromotionalOffers | null): any;
