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
import type { CiMacOsVersionRelationshipsXcodeVersionsDataInner } from "./CiMacOsVersionRelationshipsXcodeVersionsDataInner";
import { CiMacOsVersionRelationshipsXcodeVersionsDataInnerFromJSON, CiMacOsVersionRelationshipsXcodeVersionsDataInnerFromJSONTyped, CiMacOsVersionRelationshipsXcodeVersionsDataInnerToJSON } from "./CiMacOsVersionRelationshipsXcodeVersionsDataInner";

/**
 *
 * @export
 * @interface CiWorkflowUpdateRequestDataRelationshipsXcodeVersion
 */
export interface CiWorkflowUpdateRequestDataRelationshipsXcodeVersion {
    /**
     *
     * @type {CiMacOsVersionRelationshipsXcodeVersionsDataInner}
     * @memberof CiWorkflowUpdateRequestDataRelationshipsXcodeVersion
     */
    data?: CiMacOsVersionRelationshipsXcodeVersionsDataInner;
}

/**
 * Check if a given object implements the CiWorkflowUpdateRequestDataRelationshipsXcodeVersion interface.
 */
export function instanceOfCiWorkflowUpdateRequestDataRelationshipsXcodeVersion(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CiWorkflowUpdateRequestDataRelationshipsXcodeVersionFromJSON(json: any): CiWorkflowUpdateRequestDataRelationshipsXcodeVersion {
    return CiWorkflowUpdateRequestDataRelationshipsXcodeVersionFromJSONTyped(json, false);
}

export function CiWorkflowUpdateRequestDataRelationshipsXcodeVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiWorkflowUpdateRequestDataRelationshipsXcodeVersion {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: !exists(json, "data") ? undefined : CiMacOsVersionRelationshipsXcodeVersionsDataInnerFromJSON(json["data"])
    };
}

export function CiWorkflowUpdateRequestDataRelationshipsXcodeVersionToJSON(value?: CiWorkflowUpdateRequestDataRelationshipsXcodeVersion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: CiMacOsVersionRelationshipsXcodeVersionsDataInnerToJSON(value.data)
    };
}
