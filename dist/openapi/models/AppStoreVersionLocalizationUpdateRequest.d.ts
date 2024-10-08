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
import type { AppStoreVersionLocalizationUpdateRequestData } from "./AppStoreVersionLocalizationUpdateRequestData";
/**
 *
 * @export
 * @interface AppStoreVersionLocalizationUpdateRequest
 */
export interface AppStoreVersionLocalizationUpdateRequest {
    /**
     *
     * @type {AppStoreVersionLocalizationUpdateRequestData}
     * @memberof AppStoreVersionLocalizationUpdateRequest
     */
    data: AppStoreVersionLocalizationUpdateRequestData;
}
/**
 * Check if a given object implements the AppStoreVersionLocalizationUpdateRequest interface.
 */
export declare function instanceOfAppStoreVersionLocalizationUpdateRequest(value: object): boolean;
export declare function AppStoreVersionLocalizationUpdateRequestFromJSON(json: any): AppStoreVersionLocalizationUpdateRequest;
export declare function AppStoreVersionLocalizationUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionLocalizationUpdateRequest;
export declare function AppStoreVersionLocalizationUpdateRequestToJSON(value?: AppStoreVersionLocalizationUpdateRequest | null): any;
