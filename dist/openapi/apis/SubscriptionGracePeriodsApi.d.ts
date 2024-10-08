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
import type { SubscriptionGracePeriodResponse, SubscriptionGracePeriodUpdateRequest } from "../models";
export interface SubscriptionGracePeriodsGetInstanceRequest {
    id: string;
    fieldsSubscriptionGracePeriods?: Array<SubscriptionGracePeriodsGetInstanceFieldsSubscriptionGracePeriodsEnum>;
}
export interface SubscriptionGracePeriodsUpdateInstanceRequest {
    id: string;
    subscriptionGracePeriodUpdateRequest: SubscriptionGracePeriodUpdateRequest;
}
/**
 *
 */
export declare class SubscriptionGracePeriodsApi extends runtime.BaseAPI {
    /**
     */
    subscriptionGracePeriodsGetInstanceRaw(requestParameters: SubscriptionGracePeriodsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionGracePeriodResponse>>;
    /**
     */
    subscriptionGracePeriodsGetInstance(requestParameters: SubscriptionGracePeriodsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionGracePeriodResponse>;
    /**
     */
    subscriptionGracePeriodsUpdateInstanceRaw(requestParameters: SubscriptionGracePeriodsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionGracePeriodResponse>>;
    /**
     */
    subscriptionGracePeriodsUpdateInstance(requestParameters: SubscriptionGracePeriodsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionGracePeriodResponse>;
}
/**
 * @export
 */
export declare const SubscriptionGracePeriodsGetInstanceFieldsSubscriptionGracePeriodsEnum: {
    readonly Duration: "duration";
    readonly OptIn: "optIn";
    readonly RenewalType: "renewalType";
    readonly SandboxOptIn: "sandboxOptIn";
};
export type SubscriptionGracePeriodsGetInstanceFieldsSubscriptionGracePeriodsEnum = (typeof SubscriptionGracePeriodsGetInstanceFieldsSubscriptionGracePeriodsEnum)[keyof typeof SubscriptionGracePeriodsGetInstanceFieldsSubscriptionGracePeriodsEnum];
