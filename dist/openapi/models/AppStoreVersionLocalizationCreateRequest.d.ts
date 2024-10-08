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
import type { AppStoreVersionLocalizationCreateRequestData } from "./AppStoreVersionLocalizationCreateRequestData";
/**
 *
 * @export
 * @interface AppStoreVersionLocalizationCreateRequest
 */
export interface AppStoreVersionLocalizationCreateRequest {
    /**
     *
     * @type {AppStoreVersionLocalizationCreateRequestData}
     * @memberof AppStoreVersionLocalizationCreateRequest
     */
    data: AppStoreVersionLocalizationCreateRequestData;
}
/**
 * Check if a given object implements the AppStoreVersionLocalizationCreateRequest interface.
 */
export declare function instanceOfAppStoreVersionLocalizationCreateRequest(value: object): boolean;
export declare function AppStoreVersionLocalizationCreateRequestFromJSON(json: any): AppStoreVersionLocalizationCreateRequest;
export declare function AppStoreVersionLocalizationCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionLocalizationCreateRequest;
export declare function AppStoreVersionLocalizationCreateRequestToJSON(value?: AppStoreVersionLocalizationCreateRequest | null): any;
