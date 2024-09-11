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
import type { App } from "./App";
import type { BetaAppLocalization } from "./BetaAppLocalization";
import type { DocumentLinks } from "./DocumentLinks";
/**
 *
 * @export
 * @interface BetaAppLocalizationResponse
 */
export interface BetaAppLocalizationResponse {
    /**
     *
     * @type {BetaAppLocalization}
     * @memberof BetaAppLocalizationResponse
     */
    data: BetaAppLocalization;
    /**
     *
     * @type {Array<App>}
     * @memberof BetaAppLocalizationResponse
     */
    included?: Array<App>;
    /**
     *
     * @type {DocumentLinks}
     * @memberof BetaAppLocalizationResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the BetaAppLocalizationResponse interface.
 */
export declare function instanceOfBetaAppLocalizationResponse(value: object): boolean;
export declare function BetaAppLocalizationResponseFromJSON(json: any): BetaAppLocalizationResponse;
export declare function BetaAppLocalizationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppLocalizationResponse;
export declare function BetaAppLocalizationResponseToJSON(value?: BetaAppLocalizationResponse | null): any;
