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
import type { SubscriptionOfferCodeCustomCodeRelationshipsOfferCodeData } from "./SubscriptionOfferCodeCustomCodeRelationshipsOfferCodeData";
/**
 *
 * @export
 * @interface SubscriptionOfferCodeCustomCodeRelationshipsOfferCode
 */
export interface SubscriptionOfferCodeCustomCodeRelationshipsOfferCode {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof SubscriptionOfferCodeCustomCodeRelationshipsOfferCode
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {SubscriptionOfferCodeCustomCodeRelationshipsOfferCodeData}
     * @memberof SubscriptionOfferCodeCustomCodeRelationshipsOfferCode
     */
    data?: SubscriptionOfferCodeCustomCodeRelationshipsOfferCodeData;
}
/**
 * Check if a given object implements the SubscriptionOfferCodeCustomCodeRelationshipsOfferCode interface.
 */
export declare function instanceOfSubscriptionOfferCodeCustomCodeRelationshipsOfferCode(value: object): boolean;
export declare function SubscriptionOfferCodeCustomCodeRelationshipsOfferCodeFromJSON(json: any): SubscriptionOfferCodeCustomCodeRelationshipsOfferCode;
export declare function SubscriptionOfferCodeCustomCodeRelationshipsOfferCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeCustomCodeRelationshipsOfferCode;
export declare function SubscriptionOfferCodeCustomCodeRelationshipsOfferCodeToJSON(value?: SubscriptionOfferCodeCustomCodeRelationshipsOfferCode | null): any;
