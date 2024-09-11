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
import type { BetaGroupUpdateRequestData } from "./BetaGroupUpdateRequestData";
/**
 *
 * @export
 * @interface BetaGroupUpdateRequest
 */
export interface BetaGroupUpdateRequest {
    /**
     *
     * @type {BetaGroupUpdateRequestData}
     * @memberof BetaGroupUpdateRequest
     */
    data: BetaGroupUpdateRequestData;
}
/**
 * Check if a given object implements the BetaGroupUpdateRequest interface.
 */
export declare function instanceOfBetaGroupUpdateRequest(value: object): boolean;
export declare function BetaGroupUpdateRequestFromJSON(json: any): BetaGroupUpdateRequest;
export declare function BetaGroupUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaGroupUpdateRequest;
export declare function BetaGroupUpdateRequestToJSON(value?: BetaGroupUpdateRequest | null): any;
