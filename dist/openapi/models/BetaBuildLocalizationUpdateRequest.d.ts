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
import type { BetaBuildLocalizationUpdateRequestData } from "./BetaBuildLocalizationUpdateRequestData";
/**
 *
 * @export
 * @interface BetaBuildLocalizationUpdateRequest
 */
export interface BetaBuildLocalizationUpdateRequest {
    /**
     *
     * @type {BetaBuildLocalizationUpdateRequestData}
     * @memberof BetaBuildLocalizationUpdateRequest
     */
    data: BetaBuildLocalizationUpdateRequestData;
}
/**
 * Check if a given object implements the BetaBuildLocalizationUpdateRequest interface.
 */
export declare function instanceOfBetaBuildLocalizationUpdateRequest(value: object): boolean;
export declare function BetaBuildLocalizationUpdateRequestFromJSON(json: any): BetaBuildLocalizationUpdateRequest;
export declare function BetaBuildLocalizationUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaBuildLocalizationUpdateRequest;
export declare function BetaBuildLocalizationUpdateRequestToJSON(value?: BetaBuildLocalizationUpdateRequest | null): any;
