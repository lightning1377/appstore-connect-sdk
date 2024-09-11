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
import type { AppClipAdvancedExperienceAttributesPlaceMainAddressStructuredAddress } from "./AppClipAdvancedExperienceAttributesPlaceMainAddressStructuredAddress";
/**
 *
 * @export
 * @interface AppClipAdvancedExperienceAttributesPlaceMainAddress
 */
export interface AppClipAdvancedExperienceAttributesPlaceMainAddress {
    /**
     *
     * @type {string}
     * @memberof AppClipAdvancedExperienceAttributesPlaceMainAddress
     */
    fullAddress?: string;
    /**
     *
     * @type {AppClipAdvancedExperienceAttributesPlaceMainAddressStructuredAddress}
     * @memberof AppClipAdvancedExperienceAttributesPlaceMainAddress
     */
    structuredAddress?: AppClipAdvancedExperienceAttributesPlaceMainAddressStructuredAddress;
}
/**
 * Check if a given object implements the AppClipAdvancedExperienceAttributesPlaceMainAddress interface.
 */
export declare function instanceOfAppClipAdvancedExperienceAttributesPlaceMainAddress(value: object): boolean;
export declare function AppClipAdvancedExperienceAttributesPlaceMainAddressFromJSON(json: any): AppClipAdvancedExperienceAttributesPlaceMainAddress;
export declare function AppClipAdvancedExperienceAttributesPlaceMainAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAdvancedExperienceAttributesPlaceMainAddress;
export declare function AppClipAdvancedExperienceAttributesPlaceMainAddressToJSON(value?: AppClipAdvancedExperienceAttributesPlaceMainAddress | null): any;
