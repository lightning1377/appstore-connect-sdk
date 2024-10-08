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
import type { PromotedPurchaseRelationshipsSubscriptionData } from "./PromotedPurchaseRelationshipsSubscriptionData";
/**
 *
 * @export
 * @interface PromotedPurchaseCreateRequestDataRelationshipsSubscription
 */
export interface PromotedPurchaseCreateRequestDataRelationshipsSubscription {
    /**
     *
     * @type {PromotedPurchaseRelationshipsSubscriptionData}
     * @memberof PromotedPurchaseCreateRequestDataRelationshipsSubscription
     */
    data?: PromotedPurchaseRelationshipsSubscriptionData;
}
/**
 * Check if a given object implements the PromotedPurchaseCreateRequestDataRelationshipsSubscription interface.
 */
export declare function instanceOfPromotedPurchaseCreateRequestDataRelationshipsSubscription(value: object): boolean;
export declare function PromotedPurchaseCreateRequestDataRelationshipsSubscriptionFromJSON(json: any): PromotedPurchaseCreateRequestDataRelationshipsSubscription;
export declare function PromotedPurchaseCreateRequestDataRelationshipsSubscriptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchaseCreateRequestDataRelationshipsSubscription;
export declare function PromotedPurchaseCreateRequestDataRelationshipsSubscriptionToJSON(value?: PromotedPurchaseCreateRequestDataRelationshipsSubscription | null): any;
