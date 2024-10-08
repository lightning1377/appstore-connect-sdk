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
import type { BetaGroupCreateRequestData } from "./BetaGroupCreateRequestData";
/**
 *
 * @export
 * @interface BetaGroupCreateRequest
 */
export interface BetaGroupCreateRequest {
    /**
     *
     * @type {BetaGroupCreateRequestData}
     * @memberof BetaGroupCreateRequest
     */
    data: BetaGroupCreateRequestData;
}
/**
 * Check if a given object implements the BetaGroupCreateRequest interface.
 */
export declare function instanceOfBetaGroupCreateRequest(value: object): boolean;
export declare function BetaGroupCreateRequestFromJSON(json: any): BetaGroupCreateRequest;
export declare function BetaGroupCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaGroupCreateRequest;
export declare function BetaGroupCreateRequestToJSON(value?: BetaGroupCreateRequest | null): any;
