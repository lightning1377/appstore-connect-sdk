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
import type { SubscriptionGracePeriod } from "./SubscriptionGracePeriod";
/**
 *
 * @export
 * @interface SubscriptionGracePeriodResponse
 */
export interface SubscriptionGracePeriodResponse {
    /**
     *
     * @type {SubscriptionGracePeriod}
     * @memberof SubscriptionGracePeriodResponse
     */
    data: SubscriptionGracePeriod;
    /**
     *
     * @type {DocumentLinks}
     * @memberof SubscriptionGracePeriodResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the SubscriptionGracePeriodResponse interface.
 */
export declare function instanceOfSubscriptionGracePeriodResponse(value: object): boolean;
export declare function SubscriptionGracePeriodResponseFromJSON(json: any): SubscriptionGracePeriodResponse;
export declare function SubscriptionGracePeriodResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionGracePeriodResponse;
export declare function SubscriptionGracePeriodResponseToJSON(value?: SubscriptionGracePeriodResponse | null): any;
