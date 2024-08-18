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
import type { AlternativeDistributionPackageCreateRequestDataRelationships } from "./AlternativeDistributionPackageCreateRequestDataRelationships";
import { AlternativeDistributionPackageCreateRequestDataRelationshipsFromJSON, AlternativeDistributionPackageCreateRequestDataRelationshipsFromJSONTyped, AlternativeDistributionPackageCreateRequestDataRelationshipsToJSON } from "./AlternativeDistributionPackageCreateRequestDataRelationships";

/**
 *
 * @export
 * @interface AppStoreVersionReleaseRequestCreateRequestData
 */
export interface AppStoreVersionReleaseRequestCreateRequestData {
    /**
     *
     * @type {string}
     * @memberof AppStoreVersionReleaseRequestCreateRequestData
     */
    type: AppStoreVersionReleaseRequestCreateRequestDataTypeEnum;
    /**
     *
     * @type {AlternativeDistributionPackageCreateRequestDataRelationships}
     * @memberof AppStoreVersionReleaseRequestCreateRequestData
     */
    relationships: AlternativeDistributionPackageCreateRequestDataRelationships;
}

/**
 * @export
 */
export const AppStoreVersionReleaseRequestCreateRequestDataTypeEnum = {
    AppStoreVersionReleaseRequests: "appStoreVersionReleaseRequests"
} as const;
export type AppStoreVersionReleaseRequestCreateRequestDataTypeEnum = (typeof AppStoreVersionReleaseRequestCreateRequestDataTypeEnum)[keyof typeof AppStoreVersionReleaseRequestCreateRequestDataTypeEnum];

/**
 * Check if a given object implements the AppStoreVersionReleaseRequestCreateRequestData interface.
 */
export function instanceOfAppStoreVersionReleaseRequestCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function AppStoreVersionReleaseRequestCreateRequestDataFromJSON(json: any): AppStoreVersionReleaseRequestCreateRequestData {
    return AppStoreVersionReleaseRequestCreateRequestDataFromJSONTyped(json, false);
}

export function AppStoreVersionReleaseRequestCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionReleaseRequestCreateRequestData {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        relationships: AlternativeDistributionPackageCreateRequestDataRelationshipsFromJSON(json["relationships"])
    };
}

export function AppStoreVersionReleaseRequestCreateRequestDataToJSON(value?: AppStoreVersionReleaseRequestCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        relationships: AlternativeDistributionPackageCreateRequestDataRelationshipsToJSON(value.relationships)
    };
}
