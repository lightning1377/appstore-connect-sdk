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
import type { SubscriptionGroupLocalizationRelationshipsSubscriptionGroup } from "./SubscriptionGroupLocalizationRelationshipsSubscriptionGroup";
/**
 *
 * @export
 * @interface SubscriptionGroupLocalizationRelationships
 */
export interface SubscriptionGroupLocalizationRelationships {
    /**
     *
     * @type {SubscriptionGroupLocalizationRelationshipsSubscriptionGroup}
     * @memberof SubscriptionGroupLocalizationRelationships
     */
    subscriptionGroup?: SubscriptionGroupLocalizationRelationshipsSubscriptionGroup;
}
/**
 * Check if a given object implements the SubscriptionGroupLocalizationRelationships interface.
 */
export declare function instanceOfSubscriptionGroupLocalizationRelationships(value: object): boolean;
export declare function SubscriptionGroupLocalizationRelationshipsFromJSON(json: any): SubscriptionGroupLocalizationRelationships;
export declare function SubscriptionGroupLocalizationRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionGroupLocalizationRelationships;
export declare function SubscriptionGroupLocalizationRelationshipsToJSON(value?: SubscriptionGroupLocalizationRelationships | null): any;
