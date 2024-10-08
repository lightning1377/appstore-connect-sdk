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
import type { DocumentLinks } from "./DocumentLinks";
import type { SubscriptionAvailability } from "./SubscriptionAvailability";
import type { SubscriptionAvailabilityResponseIncludedInner } from "./SubscriptionAvailabilityResponseIncludedInner";
/**
 *
 * @export
 * @interface SubscriptionAvailabilityResponse
 */
export interface SubscriptionAvailabilityResponse {
    /**
     *
     * @type {SubscriptionAvailability}
     * @memberof SubscriptionAvailabilityResponse
     */
    data: SubscriptionAvailability;
    /**
     *
     * @type {Array<SubscriptionAvailabilityResponseIncludedInner>}
     * @memberof SubscriptionAvailabilityResponse
     */
    included?: Array<SubscriptionAvailabilityResponseIncludedInner>;
    /**
     *
     * @type {DocumentLinks}
     * @memberof SubscriptionAvailabilityResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the SubscriptionAvailabilityResponse interface.
 */
export declare function instanceOfSubscriptionAvailabilityResponse(value: object): boolean;
export declare function SubscriptionAvailabilityResponseFromJSON(json: any): SubscriptionAvailabilityResponse;
export declare function SubscriptionAvailabilityResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionAvailabilityResponse;
export declare function SubscriptionAvailabilityResponseToJSON(value?: SubscriptionAvailabilityResponse | null): any;
