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
import type { AppCustomProductPageLocalizationUpdateRequestData } from "./AppCustomProductPageLocalizationUpdateRequestData";
/**
 *
 * @export
 * @interface AppCustomProductPageLocalizationUpdateRequest
 */
export interface AppCustomProductPageLocalizationUpdateRequest {
    /**
     *
     * @type {AppCustomProductPageLocalizationUpdateRequestData}
     * @memberof AppCustomProductPageLocalizationUpdateRequest
     */
    data: AppCustomProductPageLocalizationUpdateRequestData;
}
/**
 * Check if a given object implements the AppCustomProductPageLocalizationUpdateRequest interface.
 */
export declare function instanceOfAppCustomProductPageLocalizationUpdateRequest(value: object): boolean;
export declare function AppCustomProductPageLocalizationUpdateRequestFromJSON(json: any): AppCustomProductPageLocalizationUpdateRequest;
export declare function AppCustomProductPageLocalizationUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageLocalizationUpdateRequest;
export declare function AppCustomProductPageLocalizationUpdateRequestToJSON(value?: AppCustomProductPageLocalizationUpdateRequest | null): any;
