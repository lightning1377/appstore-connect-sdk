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
import type { EndAppAvailabilityPreOrderCreateRequest, EndAppAvailabilityPreOrderResponse } from "../models";
export interface EndAppAvailabilityPreOrdersCreateInstanceRequest {
    endAppAvailabilityPreOrderCreateRequest: EndAppAvailabilityPreOrderCreateRequest;
}
/**
 *
 */
export declare class EndAppAvailabilityPreOrdersApi extends runtime.BaseAPI {
    /**
     */
    endAppAvailabilityPreOrdersCreateInstanceRaw(requestParameters: EndAppAvailabilityPreOrdersCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EndAppAvailabilityPreOrderResponse>>;
    /**
     */
    endAppAvailabilityPreOrdersCreateInstance(requestParameters: EndAppAvailabilityPreOrdersCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EndAppAvailabilityPreOrderResponse>;
}
