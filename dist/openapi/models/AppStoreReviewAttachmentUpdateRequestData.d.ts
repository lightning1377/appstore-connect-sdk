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
 * @interface AppStoreReviewAttachmentUpdateRequestData
 */
export interface AppStoreReviewAttachmentUpdateRequestData {
    /**
     *
     * @type {string}
     * @memberof AppStoreReviewAttachmentUpdateRequestData
     */
    type: AppStoreReviewAttachmentUpdateRequestDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppStoreReviewAttachmentUpdateRequestData
     */
    id: string;
    /**
     *
     * @type {AppClipAdvancedExperienceImageUpdateRequestDataAttributes}
     * @memberof AppStoreReviewAttachmentUpdateRequestData
     */
    attributes?: AppClipAdvancedExperienceImageUpdateRequestDataAttributes;
}
/**
 * @export
 */
export declare const AppStoreReviewAttachmentUpdateRequestDataTypeEnum: {
    readonly AppStoreReviewAttachments: "appStoreReviewAttachments";
};
export type AppStoreReviewAttachmentUpdateRequestDataTypeEnum = (typeof AppStoreReviewAttachmentUpdateRequestDataTypeEnum)[keyof typeof AppStoreReviewAttachmentUpdateRequestDataTypeEnum];
/**
 * Check if a given object implements the AppStoreReviewAttachmentUpdateRequestData interface.
 */
export declare function instanceOfAppStoreReviewAttachmentUpdateRequestData(value: object): boolean;
export declare function AppStoreReviewAttachmentUpdateRequestDataFromJSON(json: any): AppStoreReviewAttachmentUpdateRequestData;
export declare function AppStoreReviewAttachmentUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreReviewAttachmentUpdateRequestData;
export declare function AppStoreReviewAttachmentUpdateRequestDataToJSON(value?: AppStoreReviewAttachmentUpdateRequestData | null): any;
