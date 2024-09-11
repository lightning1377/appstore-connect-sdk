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
import type { AppMediaAssetState } from "./AppMediaAssetState";
import type { ImageAsset } from "./ImageAsset";
import type { UploadOperation } from "./UploadOperation";
/**
 *
 * @export
 * @interface AppPreviewAttributes
 */
export interface AppPreviewAttributes {
    /**
     *
     * @type {number}
     * @memberof AppPreviewAttributes
     */
    fileSize?: number;
    /**
     *
     * @type {string}
     * @memberof AppPreviewAttributes
     */
    fileName?: string;
    /**
     *
     * @type {string}
     * @memberof AppPreviewAttributes
     */
    sourceFileChecksum?: string;
    /**
     *
     * @type {string}
     * @memberof AppPreviewAttributes
     */
    previewFrameTimeCode?: string;
    /**
     *
     * @type {string}
     * @memberof AppPreviewAttributes
     */
    mimeType?: string;
    /**
     *
     * @type {string}
     * @memberof AppPreviewAttributes
     */
    videoUrl?: string;
    /**
     *
     * @type {ImageAsset}
     * @memberof AppPreviewAttributes
     */
    previewImage?: ImageAsset;
    /**
     *
     * @type {Array<UploadOperation>}
     * @memberof AppPreviewAttributes
     */
    uploadOperations?: Array<UploadOperation>;
    /**
     *
     * @type {AppMediaAssetState}
     * @memberof AppPreviewAttributes
     */
    assetDeliveryState?: AppMediaAssetState;
}
/**
 * Check if a given object implements the AppPreviewAttributes interface.
 */
export declare function instanceOfAppPreviewAttributes(value: object): boolean;
export declare function AppPreviewAttributesFromJSON(json: any): AppPreviewAttributes;
export declare function AppPreviewAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreviewAttributes;
export declare function AppPreviewAttributesToJSON(value?: AppPreviewAttributes | null): any;
