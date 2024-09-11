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
import type { PromotedPurchaseUpdateRequestData } from "./PromotedPurchaseUpdateRequestData";
/**
 *
 * @export
 * @interface PromotedPurchaseUpdateRequest
 */
export interface PromotedPurchaseUpdateRequest {
    /**
     *
     * @type {PromotedPurchaseUpdateRequestData}
     * @memberof PromotedPurchaseUpdateRequest
     */
    data: PromotedPurchaseUpdateRequestData;
}
/**
 * Check if a given object implements the PromotedPurchaseUpdateRequest interface.
 */
export declare function instanceOfPromotedPurchaseUpdateRequest(value: object): boolean;
export declare function PromotedPurchaseUpdateRequestFromJSON(json: any): PromotedPurchaseUpdateRequest;
export declare function PromotedPurchaseUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchaseUpdateRequest;
export declare function PromotedPurchaseUpdateRequestToJSON(value?: PromotedPurchaseUpdateRequest | null): any;
