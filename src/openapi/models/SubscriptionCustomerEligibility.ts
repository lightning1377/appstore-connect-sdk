/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
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
export const SubscriptionCustomerEligibility = {
    New: "NEW",
    Existing: "EXISTING",
    Expired: "EXPIRED"
} as const;
export type SubscriptionCustomerEligibility = (typeof SubscriptionCustomerEligibility)[keyof typeof SubscriptionCustomerEligibility];

export function SubscriptionCustomerEligibilityFromJSON(json: any): SubscriptionCustomerEligibility {
    return SubscriptionCustomerEligibilityFromJSONTyped(json, false);
}

export function SubscriptionCustomerEligibilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionCustomerEligibility {
    return json as SubscriptionCustomerEligibility;
}

export function SubscriptionCustomerEligibilityToJSON(value?: SubscriptionCustomerEligibility | null): any {
    return value as any;
}
