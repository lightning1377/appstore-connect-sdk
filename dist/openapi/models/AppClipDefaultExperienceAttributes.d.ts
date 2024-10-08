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
import type { AppClipAction } from "./AppClipAction";
/**
 *
 * @export
 * @interface AppClipDefaultExperienceAttributes
 */
export interface AppClipDefaultExperienceAttributes {
    /**
     *
     * @type {AppClipAction}
     * @memberof AppClipDefaultExperienceAttributes
     */
    action?: AppClipAction;
}
/**
 * Check if a given object implements the AppClipDefaultExperienceAttributes interface.
 */
export declare function instanceOfAppClipDefaultExperienceAttributes(value: object): boolean;
export declare function AppClipDefaultExperienceAttributesFromJSON(json: any): AppClipDefaultExperienceAttributes;
export declare function AppClipDefaultExperienceAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDefaultExperienceAttributes;
export declare function AppClipDefaultExperienceAttributesToJSON(value?: AppClipDefaultExperienceAttributes | null): any;
