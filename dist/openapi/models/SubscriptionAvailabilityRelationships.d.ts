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
import type { AppAvailabilityRelationshipsAvailableTerritories } from "./AppAvailabilityRelationshipsAvailableTerritories";
import type { PromotedPurchaseRelationshipsSubscription } from "./PromotedPurchaseRelationshipsSubscription";
/**
 *
 * @export
 * @interface SubscriptionAvailabilityRelationships
 */
export interface SubscriptionAvailabilityRelationships {
    /**
     *
     * @type {PromotedPurchaseRelationshipsSubscription}
     * @memberof SubscriptionAvailabilityRelationships
     */
    subscription?: PromotedPurchaseRelationshipsSubscription;
    /**
     *
     * @type {AppAvailabilityRelationshipsAvailableTerritories}
     * @memberof SubscriptionAvailabilityRelationships
     */
    availableTerritories?: AppAvailabilityRelationshipsAvailableTerritories;
}
/**
 * Check if a given object implements the SubscriptionAvailabilityRelationships interface.
 */
export declare function instanceOfSubscriptionAvailabilityRelationships(value: object): boolean;
export declare function SubscriptionAvailabilityRelationshipsFromJSON(json: any): SubscriptionAvailabilityRelationships;
export declare function SubscriptionAvailabilityRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionAvailabilityRelationships;
export declare function SubscriptionAvailabilityRelationshipsToJSON(value?: SubscriptionAvailabilityRelationships | null): any;
