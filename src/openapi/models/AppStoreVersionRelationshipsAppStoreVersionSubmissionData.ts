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
/**
 *
 * @export
 * @interface AppStoreVersionRelationshipsAppStoreVersionSubmissionData
 */
export interface AppStoreVersionRelationshipsAppStoreVersionSubmissionData {
    /**
     *
     * @type {string}
     * @memberof AppStoreVersionRelationshipsAppStoreVersionSubmissionData
     */
    type: AppStoreVersionRelationshipsAppStoreVersionSubmissionDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppStoreVersionRelationshipsAppStoreVersionSubmissionData
     */
    id: string;
}

/**
 * @export
 */
export const AppStoreVersionRelationshipsAppStoreVersionSubmissionDataTypeEnum = {
    AppStoreVersionSubmissions: "appStoreVersionSubmissions"
} as const;
export type AppStoreVersionRelationshipsAppStoreVersionSubmissionDataTypeEnum = (typeof AppStoreVersionRelationshipsAppStoreVersionSubmissionDataTypeEnum)[keyof typeof AppStoreVersionRelationshipsAppStoreVersionSubmissionDataTypeEnum];

/**
 * Check if a given object implements the AppStoreVersionRelationshipsAppStoreVersionSubmissionData interface.
 */
export function instanceOfAppStoreVersionRelationshipsAppStoreVersionSubmissionData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppStoreVersionRelationshipsAppStoreVersionSubmissionDataFromJSON(json: any): AppStoreVersionRelationshipsAppStoreVersionSubmissionData {
    return AppStoreVersionRelationshipsAppStoreVersionSubmissionDataFromJSONTyped(json, false);
}

export function AppStoreVersionRelationshipsAppStoreVersionSubmissionDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionRelationshipsAppStoreVersionSubmissionData {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"]
    };
}

export function AppStoreVersionRelationshipsAppStoreVersionSubmissionDataToJSON(value?: AppStoreVersionRelationshipsAppStoreVersionSubmissionData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id
    };
}
