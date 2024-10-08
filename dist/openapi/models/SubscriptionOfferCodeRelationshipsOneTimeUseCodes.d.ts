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
import type { SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInner } from "./SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInner";
/**
 *
 * @export
 * @interface SubscriptionOfferCodeRelationshipsOneTimeUseCodes
 */
export interface SubscriptionOfferCodeRelationshipsOneTimeUseCodes {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof SubscriptionOfferCodeRelationshipsOneTimeUseCodes
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof SubscriptionOfferCodeRelationshipsOneTimeUseCodes
     */
    meta?: PagingInformation;
    /**
     *
     * @type {Array<SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInner>}
     * @memberof SubscriptionOfferCodeRelationshipsOneTimeUseCodes
     */
    data?: Array<SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInner>;
}
/**
 * Check if a given object implements the SubscriptionOfferCodeRelationshipsOneTimeUseCodes interface.
 */
export declare function instanceOfSubscriptionOfferCodeRelationshipsOneTimeUseCodes(value: object): boolean;
export declare function SubscriptionOfferCodeRelationshipsOneTimeUseCodesFromJSON(json: any): SubscriptionOfferCodeRelationshipsOneTimeUseCodes;
export declare function SubscriptionOfferCodeRelationshipsOneTimeUseCodesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeRelationshipsOneTimeUseCodes;
export declare function SubscriptionOfferCodeRelationshipsOneTimeUseCodesToJSON(value?: SubscriptionOfferCodeRelationshipsOneTimeUseCodes | null): any;
