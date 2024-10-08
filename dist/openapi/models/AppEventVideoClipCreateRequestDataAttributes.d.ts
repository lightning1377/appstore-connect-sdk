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
import type { AppEventAssetType } from "./AppEventAssetType";
/**
 *
 * @export
 * @interface AppEventVideoClipCreateRequestDataAttributes
 */
export interface AppEventVideoClipCreateRequestDataAttributes {
    /**
     *
     * @type {number}
     * @memberof AppEventVideoClipCreateRequestDataAttributes
     */
    fileSize: number;
    /**
     *
     * @type {string}
     * @memberof AppEventVideoClipCreateRequestDataAttributes
     */
    fileName: string;
    /**
     *
     * @type {string}
     * @memberof AppEventVideoClipCreateRequestDataAttributes
     */
    previewFrameTimeCode?: string;
    /**
     *
     * @type {AppEventAssetType}
     * @memberof AppEventVideoClipCreateRequestDataAttributes
     */
    appEventAssetType: AppEventAssetType;
}
/**
 * Check if a given object implements the AppEventVideoClipCreateRequestDataAttributes interface.
 */
export declare function instanceOfAppEventVideoClipCreateRequestDataAttributes(value: object): boolean;
export declare function AppEventVideoClipCreateRequestDataAttributesFromJSON(json: any): AppEventVideoClipCreateRequestDataAttributes;
export declare function AppEventVideoClipCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventVideoClipCreateRequestDataAttributes;
export declare function AppEventVideoClipCreateRequestDataAttributesToJSON(value?: AppEventVideoClipCreateRequestDataAttributes | null): any;
