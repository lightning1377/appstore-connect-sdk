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
import type { AppStoreReviewAttachmentCreateRequestData } from "./AppStoreReviewAttachmentCreateRequestData";
/**
 *
 * @export
 * @interface AppStoreReviewAttachmentCreateRequest
 */
export interface AppStoreReviewAttachmentCreateRequest {
    /**
     *
     * @type {AppStoreReviewAttachmentCreateRequestData}
     * @memberof AppStoreReviewAttachmentCreateRequest
     */
    data: AppStoreReviewAttachmentCreateRequestData;
}
/**
 * Check if a given object implements the AppStoreReviewAttachmentCreateRequest interface.
 */
export declare function instanceOfAppStoreReviewAttachmentCreateRequest(value: object): boolean;
export declare function AppStoreReviewAttachmentCreateRequestFromJSON(json: any): AppStoreReviewAttachmentCreateRequest;
export declare function AppStoreReviewAttachmentCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreReviewAttachmentCreateRequest;
export declare function AppStoreReviewAttachmentCreateRequestToJSON(value?: AppStoreReviewAttachmentCreateRequest | null): any;
