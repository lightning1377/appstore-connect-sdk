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
import type { AppStoreVersionExperimentCreateRequestData } from "./AppStoreVersionExperimentCreateRequestData";
import { AppStoreVersionExperimentCreateRequestDataFromJSON, AppStoreVersionExperimentCreateRequestDataFromJSONTyped, AppStoreVersionExperimentCreateRequestDataToJSON } from "./AppStoreVersionExperimentCreateRequestData";

/**
 *
 * @export
 * @interface AppStoreVersionExperimentCreateRequest
 */
export interface AppStoreVersionExperimentCreateRequest {
    /**
     *
     * @type {AppStoreVersionExperimentCreateRequestData}
     * @memberof AppStoreVersionExperimentCreateRequest
     */
    data: AppStoreVersionExperimentCreateRequestData;
}

/**
 * Check if a given object implements the AppStoreVersionExperimentCreateRequest interface.
 */
export function instanceOfAppStoreVersionExperimentCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppStoreVersionExperimentCreateRequestFromJSON(json: any): AppStoreVersionExperimentCreateRequest {
    return AppStoreVersionExperimentCreateRequestFromJSONTyped(json, false);
}

export function AppStoreVersionExperimentCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentCreateRequest {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: AppStoreVersionExperimentCreateRequestDataFromJSON(json["data"])
    };
}

export function AppStoreVersionExperimentCreateRequestToJSON(value?: AppStoreVersionExperimentCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: AppStoreVersionExperimentCreateRequestDataToJSON(value.data)
    };
}
