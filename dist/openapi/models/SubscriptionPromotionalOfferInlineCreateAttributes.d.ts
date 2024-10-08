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
import type { SubscriptionOfferDuration } from "./SubscriptionOfferDuration";
import type { SubscriptionOfferMode } from "./SubscriptionOfferMode";
/**
 *
 * @export
 * @interface SubscriptionPromotionalOfferInlineCreateAttributes
 */
export interface SubscriptionPromotionalOfferInlineCreateAttributes {
    /**
     *
     * @type {string}
     * @memberof SubscriptionPromotionalOfferInlineCreateAttributes
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof SubscriptionPromotionalOfferInlineCreateAttributes
     */
    offerCode: string;
    /**
     *
     * @type {SubscriptionOfferDuration}
     * @memberof SubscriptionPromotionalOfferInlineCreateAttributes
     */
    duration: SubscriptionOfferDuration;
    /**
     *
     * @type {SubscriptionOfferMode}
     * @memberof SubscriptionPromotionalOfferInlineCreateAttributes
     */
    offerMode: SubscriptionOfferMode;
    /**
     *
     * @type {number}
     * @memberof SubscriptionPromotionalOfferInlineCreateAttributes
     */
    numberOfPeriods: number;
}
/**
 * Check if a given object implements the SubscriptionPromotionalOfferInlineCreateAttributes interface.
 */
export declare function instanceOfSubscriptionPromotionalOfferInlineCreateAttributes(value: object): boolean;
export declare function SubscriptionPromotionalOfferInlineCreateAttributesFromJSON(json: any): SubscriptionPromotionalOfferInlineCreateAttributes;
export declare function SubscriptionPromotionalOfferInlineCreateAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPromotionalOfferInlineCreateAttributes;
export declare function SubscriptionPromotionalOfferInlineCreateAttributesToJSON(value?: SubscriptionPromotionalOfferInlineCreateAttributes | null): any;
