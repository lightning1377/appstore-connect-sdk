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
import type { AppStoreVersionSubmissionCreateRequestData } from "./AppStoreVersionSubmissionCreateRequestData";
/**
 *
 * @export
 * @interface AppStoreVersionSubmissionCreateRequest
 */
export interface AppStoreVersionSubmissionCreateRequest {
    /**
     *
     * @type {AppStoreVersionSubmissionCreateRequestData}
     * @memberof AppStoreVersionSubmissionCreateRequest
     */
    data: AppStoreVersionSubmissionCreateRequestData;
}
/**
 * Check if a given object implements the AppStoreVersionSubmissionCreateRequest interface.
 */
export declare function instanceOfAppStoreVersionSubmissionCreateRequest(value: object): boolean;
export declare function AppStoreVersionSubmissionCreateRequestFromJSON(json: any): AppStoreVersionSubmissionCreateRequest;
export declare function AppStoreVersionSubmissionCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionSubmissionCreateRequest;
export declare function AppStoreVersionSubmissionCreateRequestToJSON(value?: AppStoreVersionSubmissionCreateRequest | null): any;
