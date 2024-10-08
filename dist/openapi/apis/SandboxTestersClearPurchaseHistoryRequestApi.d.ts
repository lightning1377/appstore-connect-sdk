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
import type { SandboxTestersClearPurchaseHistoryRequestV2CreateRequest, SandboxTestersClearPurchaseHistoryRequestV2Response } from "../models";
export interface SandboxTestersClearPurchaseHistoryRequestV2CreateInstanceRequest {
    sandboxTestersClearPurchaseHistoryRequestV2CreateRequest: SandboxTestersClearPurchaseHistoryRequestV2CreateRequest;
}
/**
 *
 */
export declare class SandboxTestersClearPurchaseHistoryRequestApi extends runtime.BaseAPI {
    /**
     */
    sandboxTestersClearPurchaseHistoryRequestV2CreateInstanceRaw(requestParameters: SandboxTestersClearPurchaseHistoryRequestV2CreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SandboxTestersClearPurchaseHistoryRequestV2Response>>;
    /**
     */
    sandboxTestersClearPurchaseHistoryRequestV2CreateInstance(requestParameters: SandboxTestersClearPurchaseHistoryRequestV2CreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SandboxTestersClearPurchaseHistoryRequestV2Response>;
}
