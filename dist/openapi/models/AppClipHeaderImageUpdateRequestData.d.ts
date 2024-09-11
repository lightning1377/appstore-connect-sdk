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
import type { AppClipAdvancedExperienceImageUpdateRequestDataAttributes } from "./AppClipAdvancedExperienceImageUpdateRequestDataAttributes";
/**
 *
 * @export
 * @interface AppClipHeaderImageUpdateRequestData
 */
export interface AppClipHeaderImageUpdateRequestData {
    /**
     *
     * @type {string}
     * @memberof AppClipHeaderImageUpdateRequestData
     */
    type: AppClipHeaderImageUpdateRequestDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppClipHeaderImageUpdateRequestData
     */
    id: string;
    /**
     *
     * @type {AppClipAdvancedExperienceImageUpdateRequestDataAttributes}
     * @memberof AppClipHeaderImageUpdateRequestData
     */
    attributes?: AppClipAdvancedExperienceImageUpdateRequestDataAttributes;
}
/**
 * @export
 */
export declare const AppClipHeaderImageUpdateRequestDataTypeEnum: {
    readonly AppClipHeaderImages: "appClipHeaderImages";
};
export type AppClipHeaderImageUpdateRequestDataTypeEnum = (typeof AppClipHeaderImageUpdateRequestDataTypeEnum)[keyof typeof AppClipHeaderImageUpdateRequestDataTypeEnum];
/**
 * Check if a given object implements the AppClipHeaderImageUpdateRequestData interface.
 */
export declare function instanceOfAppClipHeaderImageUpdateRequestData(value: object): boolean;
export declare function AppClipHeaderImageUpdateRequestDataFromJSON(json: any): AppClipHeaderImageUpdateRequestData;
export declare function AppClipHeaderImageUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipHeaderImageUpdateRequestData;
export declare function AppClipHeaderImageUpdateRequestDataToJSON(value?: AppClipHeaderImageUpdateRequestData | null): any;
