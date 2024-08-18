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
import type { CiBuildRunRelationshipsPullRequestData } from "./CiBuildRunRelationshipsPullRequestData";
import { CiBuildRunRelationshipsPullRequestDataFromJSON, CiBuildRunRelationshipsPullRequestDataFromJSONTyped, CiBuildRunRelationshipsPullRequestDataToJSON } from "./CiBuildRunRelationshipsPullRequestData";

/**
 *
 * @export
 * @interface CiBuildRunCreateRequestDataRelationshipsPullRequest
 */
export interface CiBuildRunCreateRequestDataRelationshipsPullRequest {
    /**
     *
     * @type {CiBuildRunRelationshipsPullRequestData}
     * @memberof CiBuildRunCreateRequestDataRelationshipsPullRequest
     */
    data?: CiBuildRunRelationshipsPullRequestData;
}

/**
 * Check if a given object implements the CiBuildRunCreateRequestDataRelationshipsPullRequest interface.
 */
export function instanceOfCiBuildRunCreateRequestDataRelationshipsPullRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CiBuildRunCreateRequestDataRelationshipsPullRequestFromJSON(json: any): CiBuildRunCreateRequestDataRelationshipsPullRequest {
    return CiBuildRunCreateRequestDataRelationshipsPullRequestFromJSONTyped(json, false);
}

export function CiBuildRunCreateRequestDataRelationshipsPullRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiBuildRunCreateRequestDataRelationshipsPullRequest {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: !exists(json, "data") ? undefined : CiBuildRunRelationshipsPullRequestDataFromJSON(json["data"])
    };
}

export function CiBuildRunCreateRequestDataRelationshipsPullRequestToJSON(value?: CiBuildRunCreateRequestDataRelationshipsPullRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: CiBuildRunRelationshipsPullRequestDataToJSON(value.data)
    };
}
