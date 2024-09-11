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
import type { SubscriptionRelationshipsSubscriptionLocalizationsDataInner } from "./SubscriptionRelationshipsSubscriptionLocalizationsDataInner";
/**
 *
 * @export
 * @interface SubscriptionRelationshipsSubscriptionLocalizations
 */
export interface SubscriptionRelationshipsSubscriptionLocalizations {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof SubscriptionRelationshipsSubscriptionLocalizations
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof SubscriptionRelationshipsSubscriptionLocalizations
     */
    meta?: PagingInformation;
    /**
     *
     * @type {Array<SubscriptionRelationshipsSubscriptionLocalizationsDataInner>}
     * @memberof SubscriptionRelationshipsSubscriptionLocalizations
     */
    data?: Array<SubscriptionRelationshipsSubscriptionLocalizationsDataInner>;
}
/**
 * Check if a given object implements the SubscriptionRelationshipsSubscriptionLocalizations interface.
 */
export declare function instanceOfSubscriptionRelationshipsSubscriptionLocalizations(value: object): boolean;
export declare function SubscriptionRelationshipsSubscriptionLocalizationsFromJSON(json: any): SubscriptionRelationshipsSubscriptionLocalizations;
export declare function SubscriptionRelationshipsSubscriptionLocalizationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionRelationshipsSubscriptionLocalizations;
export declare function SubscriptionRelationshipsSubscriptionLocalizationsToJSON(value?: SubscriptionRelationshipsSubscriptionLocalizations | null): any;
