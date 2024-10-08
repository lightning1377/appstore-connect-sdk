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
import type { AppStoreReviewAttachment } from "./AppStoreReviewAttachment";
import type { AppStoreReviewDetail } from "./AppStoreReviewDetail";
import type { DocumentLinks } from "./DocumentLinks";
/**
 *
 * @export
 * @interface AppStoreReviewAttachmentResponse
 */
export interface AppStoreReviewAttachmentResponse {
    /**
     *
     * @type {AppStoreReviewAttachment}
     * @memberof AppStoreReviewAttachmentResponse
     */
    data: AppStoreReviewAttachment;
    /**
     *
     * @type {Array<AppStoreReviewDetail>}
     * @memberof AppStoreReviewAttachmentResponse
     */
    included?: Array<AppStoreReviewDetail>;
    /**
     *
     * @type {DocumentLinks}
     * @memberof AppStoreReviewAttachmentResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the AppStoreReviewAttachmentResponse interface.
 */
export declare function instanceOfAppStoreReviewAttachmentResponse(value: object): boolean;
export declare function AppStoreReviewAttachmentResponseFromJSON(json: any): AppStoreReviewAttachmentResponse;
export declare function AppStoreReviewAttachmentResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreReviewAttachmentResponse;
export declare function AppStoreReviewAttachmentResponseToJSON(value?: AppStoreReviewAttachmentResponse | null): any;
