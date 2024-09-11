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
 * @interface AppEventScreenshotCreateRequestDataAttributes
 */
export interface AppEventScreenshotCreateRequestDataAttributes {
    /**
     *
     * @type {number}
     * @memberof AppEventScreenshotCreateRequestDataAttributes
     */
    fileSize: number;
    /**
     *
     * @type {string}
     * @memberof AppEventScreenshotCreateRequestDataAttributes
     */
    fileName: string;
    /**
     *
     * @type {AppEventAssetType}
     * @memberof AppEventScreenshotCreateRequestDataAttributes
     */
    appEventAssetType: AppEventAssetType;
}
/**
 * Check if a given object implements the AppEventScreenshotCreateRequestDataAttributes interface.
 */
export declare function instanceOfAppEventScreenshotCreateRequestDataAttributes(value: object): boolean;
export declare function AppEventScreenshotCreateRequestDataAttributesFromJSON(json: any): AppEventScreenshotCreateRequestDataAttributes;
export declare function AppEventScreenshotCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventScreenshotCreateRequestDataAttributes;
export declare function AppEventScreenshotCreateRequestDataAttributesToJSON(value?: AppEventScreenshotCreateRequestDataAttributes | null): any;
