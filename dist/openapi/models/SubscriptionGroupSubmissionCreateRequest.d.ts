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
import type { SubscriptionGroupSubmissionCreateRequestData } from "./SubscriptionGroupSubmissionCreateRequestData";
/**
 *
 * @export
 * @interface SubscriptionGroupSubmissionCreateRequest
 */
export interface SubscriptionGroupSubmissionCreateRequest {
    /**
     *
     * @type {SubscriptionGroupSubmissionCreateRequestData}
     * @memberof SubscriptionGroupSubmissionCreateRequest
     */
    data: SubscriptionGroupSubmissionCreateRequestData;
}
/**
 * Check if a given object implements the SubscriptionGroupSubmissionCreateRequest interface.
 */
export declare function instanceOfSubscriptionGroupSubmissionCreateRequest(value: object): boolean;
export declare function SubscriptionGroupSubmissionCreateRequestFromJSON(json: any): SubscriptionGroupSubmissionCreateRequest;
export declare function SubscriptionGroupSubmissionCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionGroupSubmissionCreateRequest;
export declare function SubscriptionGroupSubmissionCreateRequestToJSON(value?: SubscriptionGroupSubmissionCreateRequest | null): any;
