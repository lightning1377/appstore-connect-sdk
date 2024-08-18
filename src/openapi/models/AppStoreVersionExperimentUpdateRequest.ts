/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
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

import { exists, mapValues } from "../runtime";
import type { AppStoreVersionExperimentV2UpdateRequestData } from "./AppStoreVersionExperimentV2UpdateRequestData";
import { AppStoreVersionExperimentV2UpdateRequestDataFromJSON, AppStoreVersionExperimentV2UpdateRequestDataFromJSONTyped, AppStoreVersionExperimentV2UpdateRequestDataToJSON } from "./AppStoreVersionExperimentV2UpdateRequestData";

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
export function instanceOfAppStoreVersionExperimentUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppStoreVersionExperimentUpdateRequestFromJSON(json: any): AppStoreVersionExperimentUpdateRequest {
    return AppStoreVersionExperimentUpdateRequestFromJSONTyped(json, false);
}

export function AppStoreVersionExperimentUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentUpdateRequest {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: AppStoreVersionExperimentV2UpdateRequestDataFromJSON(json["data"])
    };
}

export function AppStoreVersionExperimentUpdateRequestToJSON(value?: AppStoreVersionExperimentUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: AppStoreVersionExperimentV2UpdateRequestDataToJSON(value.data)
    };
}
