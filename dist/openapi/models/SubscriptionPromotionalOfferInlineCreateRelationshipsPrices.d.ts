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
import type { SubscriptionPromotionalOfferRelationshipsPricesDataInner } from "./SubscriptionPromotionalOfferRelationshipsPricesDataInner";
/**
 *
 * @export
 * @interface SubscriptionPromotionalOfferInlineCreateRelationshipsPrices
 */
export interface SubscriptionPromotionalOfferInlineCreateRelationshipsPrices {
    /**
     *
     * @type {Array<SubscriptionPromotionalOfferRelationshipsPricesDataInner>}
     * @memberof SubscriptionPromotionalOfferInlineCreateRelationshipsPrices
     */
    data?: Array<SubscriptionPromotionalOfferRelationshipsPricesDataInner>;
}
/**
 * Check if a given object implements the SubscriptionPromotionalOfferInlineCreateRelationshipsPrices interface.
 */
export declare function instanceOfSubscriptionPromotionalOfferInlineCreateRelationshipsPrices(value: object): boolean;
export declare function SubscriptionPromotionalOfferInlineCreateRelationshipsPricesFromJSON(json: any): SubscriptionPromotionalOfferInlineCreateRelationshipsPrices;
export declare function SubscriptionPromotionalOfferInlineCreateRelationshipsPricesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPromotionalOfferInlineCreateRelationshipsPrices;
export declare function SubscriptionPromotionalOfferInlineCreateRelationshipsPricesToJSON(value?: SubscriptionPromotionalOfferInlineCreateRelationshipsPrices | null): any;
