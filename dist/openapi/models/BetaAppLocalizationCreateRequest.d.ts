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
import type { BetaAppLocalizationCreateRequestData } from "./BetaAppLocalizationCreateRequestData";
/**
 *
 * @export
 * @interface BetaAppLocalizationCreateRequest
 */
export interface BetaAppLocalizationCreateRequest {
    /**
     *
     * @type {BetaAppLocalizationCreateRequestData}
     * @memberof BetaAppLocalizationCreateRequest
     */
    data: BetaAppLocalizationCreateRequestData;
}
/**
 * Check if a given object implements the BetaAppLocalizationCreateRequest interface.
 */
export declare function instanceOfBetaAppLocalizationCreateRequest(value: object): boolean;
export declare function BetaAppLocalizationCreateRequestFromJSON(json: any): BetaAppLocalizationCreateRequest;
export declare function BetaAppLocalizationCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppLocalizationCreateRequest;
export declare function BetaAppLocalizationCreateRequestToJSON(value?: BetaAppLocalizationCreateRequest | null): any;
