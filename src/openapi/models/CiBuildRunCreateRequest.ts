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
import type { CiBuildRunCreateRequestData } from "./CiBuildRunCreateRequestData";
import { CiBuildRunCreateRequestDataFromJSON, CiBuildRunCreateRequestDataFromJSONTyped, CiBuildRunCreateRequestDataToJSON } from "./CiBuildRunCreateRequestData";

/**
 *
 * @export
 * @interface CiBuildRunCreateRequest
 */
export interface CiBuildRunCreateRequest {
    /**
     *
     * @type {CiBuildRunCreateRequestData}
     * @memberof CiBuildRunCreateRequest
     */
    data: CiBuildRunCreateRequestData;
}

/**
 * Check if a given object implements the CiBuildRunCreateRequest interface.
 */
export function instanceOfCiBuildRunCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function CiBuildRunCreateRequestFromJSON(json: any): CiBuildRunCreateRequest {
    return CiBuildRunCreateRequestFromJSONTyped(json, false);
}

export function CiBuildRunCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiBuildRunCreateRequest {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: CiBuildRunCreateRequestDataFromJSON(json["data"])
    };
}

export function CiBuildRunCreateRequestToJSON(value?: CiBuildRunCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: CiBuildRunCreateRequestDataToJSON(value.data)
    };
}
