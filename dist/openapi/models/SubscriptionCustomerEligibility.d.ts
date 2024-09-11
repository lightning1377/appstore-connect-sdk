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
export declare const SubscriptionCustomerEligibility: {
    readonly New: "NEW";
    readonly Existing: "EXISTING";
    readonly Expired: "EXPIRED";
};
export type SubscriptionCustomerEligibility = (typeof SubscriptionCustomerEligibility)[keyof typeof SubscriptionCustomerEligibility];
export declare function SubscriptionCustomerEligibilityFromJSON(json: any): SubscriptionCustomerEligibility;
export declare function SubscriptionCustomerEligibilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionCustomerEligibility;
export declare function SubscriptionCustomerEligibilityToJSON(value?: SubscriptionCustomerEligibility | null): any;
