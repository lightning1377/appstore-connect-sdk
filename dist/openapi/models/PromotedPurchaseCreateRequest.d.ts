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
import type { PromotedPurchaseCreateRequestData } from "./PromotedPurchaseCreateRequestData";
/**
 *
 * @export
 * @interface PromotedPurchaseCreateRequest
 */
export interface PromotedPurchaseCreateRequest {
    /**
     *
     * @type {PromotedPurchaseCreateRequestData}
     * @memberof PromotedPurchaseCreateRequest
     */
    data: PromotedPurchaseCreateRequestData;
}
/**
 * Check if a given object implements the PromotedPurchaseCreateRequest interface.
 */
export declare function instanceOfPromotedPurchaseCreateRequest(value: object): boolean;
export declare function PromotedPurchaseCreateRequestFromJSON(json: any): PromotedPurchaseCreateRequest;
export declare function PromotedPurchaseCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchaseCreateRequest;
export declare function PromotedPurchaseCreateRequestToJSON(value?: PromotedPurchaseCreateRequest | null): any;
