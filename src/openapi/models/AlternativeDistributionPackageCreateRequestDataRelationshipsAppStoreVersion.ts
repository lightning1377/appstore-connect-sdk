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
import type { AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionData } from "./AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionData";
import { AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataFromJSON, AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataFromJSONTyped, AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataToJSON } from "./AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionData";

/**
 *
 * @export
 * @interface AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersion
 */
export interface AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersion {
    /**
     *
     * @type {AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionData}
     * @memberof AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersion
     */
    data: AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionData;
}

/**
 * Check if a given object implements the AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersion interface.
 */
export function instanceOfAlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersion(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionFromJSON(json: any): AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersion {
    return AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionFromJSONTyped(json, false);
}

export function AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersion {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataFromJSON(json["data"])
    };
}

export function AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionToJSON(value?: AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataToJSON(value.data)
    };
}
