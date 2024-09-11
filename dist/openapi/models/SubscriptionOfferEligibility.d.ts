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
/**
 *
 * @export
 */
export declare const SubscriptionOfferEligibility: {
    readonly StackWithIntroOffers: "STACK_WITH_INTRO_OFFERS";
    readonly ReplaceIntroOffers: "REPLACE_INTRO_OFFERS";
};
export type SubscriptionOfferEligibility = (typeof SubscriptionOfferEligibility)[keyof typeof SubscriptionOfferEligibility];
export declare function SubscriptionOfferEligibilityFromJSON(json: any): SubscriptionOfferEligibility;
export declare function SubscriptionOfferEligibilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferEligibility;
export declare function SubscriptionOfferEligibilityToJSON(value?: SubscriptionOfferEligibility | null): any;
