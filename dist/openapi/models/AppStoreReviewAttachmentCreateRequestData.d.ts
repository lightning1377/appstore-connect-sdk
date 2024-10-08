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
import type { AppClipAdvancedExperienceImageCreateRequestDataAttributes } from "./AppClipAdvancedExperienceImageCreateRequestDataAttributes";
import type { AppStoreReviewAttachmentCreateRequestDataRelationships } from "./AppStoreReviewAttachmentCreateRequestDataRelationships";
/**
 *
 * @export
 * @interface AppStoreReviewAttachmentCreateRequestData
 */
export interface AppStoreReviewAttachmentCreateRequestData {
    /**
     *
     * @type {string}
     * @memberof AppStoreReviewAttachmentCreateRequestData
     */
    type: AppStoreReviewAttachmentCreateRequestDataTypeEnum;
    /**
     *
     * @type {AppClipAdvancedExperienceImageCreateRequestDataAttributes}
     * @memberof AppStoreReviewAttachmentCreateRequestData
     */
    attributes: AppClipAdvancedExperienceImageCreateRequestDataAttributes;
    /**
     *
     * @type {AppStoreReviewAttachmentCreateRequestDataRelationships}
     * @memberof AppStoreReviewAttachmentCreateRequestData
     */
    relationships: AppStoreReviewAttachmentCreateRequestDataRelationships;
}
/**
 * @export
 */
export declare const AppStoreReviewAttachmentCreateRequestDataTypeEnum: {
    readonly AppStoreReviewAttachments: "appStoreReviewAttachments";
};
export type AppStoreReviewAttachmentCreateRequestDataTypeEnum = (typeof AppStoreReviewAttachmentCreateRequestDataTypeEnum)[keyof typeof AppStoreReviewAttachmentCreateRequestDataTypeEnum];
/**
 * Check if a given object implements the AppStoreReviewAttachmentCreateRequestData interface.
 */
export declare function instanceOfAppStoreReviewAttachmentCreateRequestData(value: object): boolean;
export declare function AppStoreReviewAttachmentCreateRequestDataFromJSON(json: any): AppStoreReviewAttachmentCreateRequestData;
export declare function AppStoreReviewAttachmentCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreReviewAttachmentCreateRequestData;
export declare function AppStoreReviewAttachmentCreateRequestDataToJSON(value?: AppStoreReviewAttachmentCreateRequestData | null): any;
