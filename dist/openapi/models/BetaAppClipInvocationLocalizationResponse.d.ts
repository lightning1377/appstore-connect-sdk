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
import type { BetaAppClipInvocationLocalization } from "./BetaAppClipInvocationLocalization";
import type { DocumentLinks } from "./DocumentLinks";
/**
 *
 * @export
 * @interface BetaAppClipInvocationLocalizationResponse
 */
export interface BetaAppClipInvocationLocalizationResponse {
    /**
     *
     * @type {BetaAppClipInvocationLocalization}
     * @memberof BetaAppClipInvocationLocalizationResponse
     */
    data: BetaAppClipInvocationLocalization;
    /**
     *
     * @type {DocumentLinks}
     * @memberof BetaAppClipInvocationLocalizationResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the BetaAppClipInvocationLocalizationResponse interface.
 */
export declare function instanceOfBetaAppClipInvocationLocalizationResponse(value: object): boolean;
export declare function BetaAppClipInvocationLocalizationResponseFromJSON(json: any): BetaAppClipInvocationLocalizationResponse;
export declare function BetaAppClipInvocationLocalizationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppClipInvocationLocalizationResponse;
export declare function BetaAppClipInvocationLocalizationResponseToJSON(value?: BetaAppClipInvocationLocalizationResponse | null): any;
