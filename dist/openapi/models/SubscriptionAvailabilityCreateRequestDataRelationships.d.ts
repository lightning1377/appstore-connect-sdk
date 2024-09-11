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
import type { AppAvailabilityCreateRequestDataRelationshipsAvailableTerritories } from "./AppAvailabilityCreateRequestDataRelationshipsAvailableTerritories";
import type { SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription } from "./SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription";
/**
 *
 * @export
 * @interface SubscriptionAvailabilityCreateRequestDataRelationships
 */
export interface SubscriptionAvailabilityCreateRequestDataRelationships {
    /**
     *
     * @type {SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription}
     * @memberof SubscriptionAvailabilityCreateRequestDataRelationships
     */
    subscription: SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription;
    /**
     *
     * @type {AppAvailabilityCreateRequestDataRelationshipsAvailableTerritories}
     * @memberof SubscriptionAvailabilityCreateRequestDataRelationships
     */
    availableTerritories: AppAvailabilityCreateRequestDataRelationshipsAvailableTerritories;
}
/**
 * Check if a given object implements the SubscriptionAvailabilityCreateRequestDataRelationships interface.
 */
export declare function instanceOfSubscriptionAvailabilityCreateRequestDataRelationships(value: object): boolean;
export declare function SubscriptionAvailabilityCreateRequestDataRelationshipsFromJSON(json: any): SubscriptionAvailabilityCreateRequestDataRelationships;
export declare function SubscriptionAvailabilityCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionAvailabilityCreateRequestDataRelationships;
export declare function SubscriptionAvailabilityCreateRequestDataRelationshipsToJSON(value?: SubscriptionAvailabilityCreateRequestDataRelationships | null): any;
