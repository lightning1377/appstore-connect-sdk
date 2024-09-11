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
import type { AppClipAdvancedExperienceLocalizationAttributes } from "./AppClipAdvancedExperienceLocalizationAttributes";
/**
 *
 * @export
 * @interface AppClipAdvancedExperienceLocalizationInlineCreate
 */
export interface AppClipAdvancedExperienceLocalizationInlineCreate {
    /**
     *
     * @type {string}
     * @memberof AppClipAdvancedExperienceLocalizationInlineCreate
     */
    type: AppClipAdvancedExperienceLocalizationInlineCreateTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppClipAdvancedExperienceLocalizationInlineCreate
     */
    id?: string;
    /**
     *
     * @type {AppClipAdvancedExperienceLocalizationAttributes}
     * @memberof AppClipAdvancedExperienceLocalizationInlineCreate
     */
    attributes?: AppClipAdvancedExperienceLocalizationAttributes;
}
/**
 * @export
 */
export declare const AppClipAdvancedExperienceLocalizationInlineCreateTypeEnum: {
    readonly AppClipAdvancedExperienceLocalizations: "appClipAdvancedExperienceLocalizations";
};
export type AppClipAdvancedExperienceLocalizationInlineCreateTypeEnum = (typeof AppClipAdvancedExperienceLocalizationInlineCreateTypeEnum)[keyof typeof AppClipAdvancedExperienceLocalizationInlineCreateTypeEnum];
/**
 * Check if a given object implements the AppClipAdvancedExperienceLocalizationInlineCreate interface.
 */
export declare function instanceOfAppClipAdvancedExperienceLocalizationInlineCreate(value: object): boolean;
export declare function AppClipAdvancedExperienceLocalizationInlineCreateFromJSON(json: any): AppClipAdvancedExperienceLocalizationInlineCreate;
export declare function AppClipAdvancedExperienceLocalizationInlineCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAdvancedExperienceLocalizationInlineCreate;
export declare function AppClipAdvancedExperienceLocalizationInlineCreateToJSON(value?: AppClipAdvancedExperienceLocalizationInlineCreate | null): any;
