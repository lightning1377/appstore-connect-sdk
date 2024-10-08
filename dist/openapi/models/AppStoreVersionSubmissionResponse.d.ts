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
import type { AppStoreVersion } from "./AppStoreVersion";
import type { AppStoreVersionSubmission } from "./AppStoreVersionSubmission";
import type { DocumentLinks } from "./DocumentLinks";
/**
 *
 * @export
 * @interface AppStoreVersionSubmissionResponse
 */
export interface AppStoreVersionSubmissionResponse {
    /**
     *
     * @type {AppStoreVersionSubmission}
     * @memberof AppStoreVersionSubmissionResponse
     * @deprecated
     */
    data: AppStoreVersionSubmission;
    /**
     *
     * @type {Array<AppStoreVersion>}
     * @memberof AppStoreVersionSubmissionResponse
     */
    included?: Array<AppStoreVersion>;
    /**
     *
     * @type {DocumentLinks}
     * @memberof AppStoreVersionSubmissionResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the AppStoreVersionSubmissionResponse interface.
 */
export declare function instanceOfAppStoreVersionSubmissionResponse(value: object): boolean;
export declare function AppStoreVersionSubmissionResponseFromJSON(json: any): AppStoreVersionSubmissionResponse;
export declare function AppStoreVersionSubmissionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionSubmissionResponse;
export declare function AppStoreVersionSubmissionResponseToJSON(value?: AppStoreVersionSubmissionResponse | null): any;
