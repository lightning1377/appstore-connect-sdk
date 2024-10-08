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
import type { AppStoreVersionPhasedReleaseUpdateRequestData } from "./AppStoreVersionPhasedReleaseUpdateRequestData";
/**
 *
 * @export
 * @interface AppStoreVersionPhasedReleaseUpdateRequest
 */
export interface AppStoreVersionPhasedReleaseUpdateRequest {
    /**
     *
     * @type {AppStoreVersionPhasedReleaseUpdateRequestData}
     * @memberof AppStoreVersionPhasedReleaseUpdateRequest
     */
    data: AppStoreVersionPhasedReleaseUpdateRequestData;
}
/**
 * Check if a given object implements the AppStoreVersionPhasedReleaseUpdateRequest interface.
 */
export declare function instanceOfAppStoreVersionPhasedReleaseUpdateRequest(value: object): boolean;
export declare function AppStoreVersionPhasedReleaseUpdateRequestFromJSON(json: any): AppStoreVersionPhasedReleaseUpdateRequest;
export declare function AppStoreVersionPhasedReleaseUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionPhasedReleaseUpdateRequest;
export declare function AppStoreVersionPhasedReleaseUpdateRequestToJSON(value?: AppStoreVersionPhasedReleaseUpdateRequest | null): any;
