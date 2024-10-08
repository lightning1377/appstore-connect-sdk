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
import { Subscription } from "./Subscription";
import { Territory } from "./Territory";
/**
 * @type SubscriptionAvailabilityResponseIncludedInner
 *
 * @export
 */
export type SubscriptionAvailabilityResponseIncludedInner = Subscription | Territory;
export declare function SubscriptionAvailabilityResponseIncludedInnerFromJSON(json: any): SubscriptionAvailabilityResponseIncludedInner;
export declare function SubscriptionAvailabilityResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionAvailabilityResponseIncludedInner;
export declare function SubscriptionAvailabilityResponseIncludedInnerToJSON(value?: SubscriptionAvailabilityResponseIncludedInner | null): any;
