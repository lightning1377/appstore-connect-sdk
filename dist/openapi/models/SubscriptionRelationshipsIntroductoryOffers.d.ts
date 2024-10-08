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
import type { SubscriptionRelationshipsIntroductoryOffersDataInner } from "./SubscriptionRelationshipsIntroductoryOffersDataInner";
/**
 *
 * @export
 * @interface SubscriptionRelationshipsIntroductoryOffers
 */
export interface SubscriptionRelationshipsIntroductoryOffers {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof SubscriptionRelationshipsIntroductoryOffers
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof SubscriptionRelationshipsIntroductoryOffers
     */
    meta?: PagingInformation;
    /**
     *
     * @type {Array<SubscriptionRelationshipsIntroductoryOffersDataInner>}
     * @memberof SubscriptionRelationshipsIntroductoryOffers
     */
    data?: Array<SubscriptionRelationshipsIntroductoryOffersDataInner>;
}
/**
 * Check if a given object implements the SubscriptionRelationshipsIntroductoryOffers interface.
 */
export declare function instanceOfSubscriptionRelationshipsIntroductoryOffers(value: object): boolean;
export declare function SubscriptionRelationshipsIntroductoryOffersFromJSON(json: any): SubscriptionRelationshipsIntroductoryOffers;
export declare function SubscriptionRelationshipsIntroductoryOffersFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionRelationshipsIntroductoryOffers;
export declare function SubscriptionRelationshipsIntroductoryOffersToJSON(value?: SubscriptionRelationshipsIntroductoryOffers | null): any;
