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
import type { AlternativeDistributionPackageCreateRequestData } from "./AlternativeDistributionPackageCreateRequestData";
import { AlternativeDistributionPackageCreateRequestDataFromJSON, AlternativeDistributionPackageCreateRequestDataFromJSONTyped, AlternativeDistributionPackageCreateRequestDataToJSON } from "./AlternativeDistributionPackageCreateRequestData";

/**
 *
 * @export
 * @interface AlternativeDistributionPackageCreateRequest
 */
export interface AlternativeDistributionPackageCreateRequest {
    /**
     *
     * @type {AlternativeDistributionPackageCreateRequestData}
     * @memberof AlternativeDistributionPackageCreateRequest
     */
    data: AlternativeDistributionPackageCreateRequestData;
}

/**
 * Check if a given object implements the AlternativeDistributionPackageCreateRequest interface.
 */
export function instanceOfAlternativeDistributionPackageCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AlternativeDistributionPackageCreateRequestFromJSON(json: any): AlternativeDistributionPackageCreateRequest {
    return AlternativeDistributionPackageCreateRequestFromJSONTyped(json, false);
}

export function AlternativeDistributionPackageCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlternativeDistributionPackageCreateRequest {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: AlternativeDistributionPackageCreateRequestDataFromJSON(json["data"])
    };
}

export function AlternativeDistributionPackageCreateRequestToJSON(value?: AlternativeDistributionPackageCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: AlternativeDistributionPackageCreateRequestDataToJSON(value.data)
    };
}
