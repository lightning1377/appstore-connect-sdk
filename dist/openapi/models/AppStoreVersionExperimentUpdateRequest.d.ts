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
import type { AppStoreVersionExperimentV2UpdateRequestData } from "./AppStoreVersionExperimentV2UpdateRequestData";
/**
 *
 * @export
 * @interface AppStoreVersionExperimentUpdateRequest
 */
export interface AppStoreVersionExperimentUpdateRequest {
    /**
     *
     * @type {AppStoreVersionExperimentV2UpdateRequestData}
     * @memberof AppStoreVersionExperimentUpdateRequest
     */
    data: AppStoreVersionExperimentV2UpdateRequestData;
}
/**
 * Check if a given object implements the AppStoreVersionExperimentUpdateRequest interface.
 */
export declare function instanceOfAppStoreVersionExperimentUpdateRequest(value: object): boolean;
export declare function AppStoreVersionExperimentUpdateRequestFromJSON(json: any): AppStoreVersionExperimentUpdateRequest;
export declare function AppStoreVersionExperimentUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentUpdateRequest;
export declare function AppStoreVersionExperimentUpdateRequestToJSON(value?: AppStoreVersionExperimentUpdateRequest | null): any;
