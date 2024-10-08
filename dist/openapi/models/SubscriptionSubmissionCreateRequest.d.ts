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
import type { SubscriptionSubmissionCreateRequestData } from "./SubscriptionSubmissionCreateRequestData";
/**
 *
 * @export
 * @interface SubscriptionSubmissionCreateRequest
 */
export interface SubscriptionSubmissionCreateRequest {
    /**
     *
     * @type {SubscriptionSubmissionCreateRequestData}
     * @memberof SubscriptionSubmissionCreateRequest
     */
    data: SubscriptionSubmissionCreateRequestData;
}
/**
 * Check if a given object implements the SubscriptionSubmissionCreateRequest interface.
 */
export declare function instanceOfSubscriptionSubmissionCreateRequest(value: object): boolean;
export declare function SubscriptionSubmissionCreateRequestFromJSON(json: any): SubscriptionSubmissionCreateRequest;
export declare function SubscriptionSubmissionCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionSubmissionCreateRequest;
export declare function SubscriptionSubmissionCreateRequestToJSON(value?: SubscriptionSubmissionCreateRequest | null): any;
