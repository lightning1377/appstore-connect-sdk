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
import * as runtime from "../runtime";
import type { SubscriptionSubmissionCreateRequest, SubscriptionSubmissionResponse } from "../models";
export interface SubscriptionSubmissionsCreateInstanceRequest {
    subscriptionSubmissionCreateRequest: SubscriptionSubmissionCreateRequest;
}
/**
 *
 */
export declare class SubscriptionSubmissionsApi extends runtime.BaseAPI {
    /**
     */
    subscriptionSubmissionsCreateInstanceRaw(requestParameters: SubscriptionSubmissionsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionSubmissionResponse>>;
    /**
     */
    subscriptionSubmissionsCreateInstance(requestParameters: SubscriptionSubmissionsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionSubmissionResponse>;
}
