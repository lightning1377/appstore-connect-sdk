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
import type { CiBranchPatterns } from "./CiBranchPatterns";
import { CiBranchPatternsFromJSON, CiBranchPatternsFromJSONTyped, CiBranchPatternsToJSON } from "./CiBranchPatterns";

/**
 *
 * @export
 * @interface CiManualPullRequestStartCondition
 */
export interface CiManualPullRequestStartCondition {
    /**
     *
     * @type {CiBranchPatterns}
     * @memberof CiManualPullRequestStartCondition
     */
    source?: CiBranchPatterns;
    /**
     *
     * @type {CiBranchPatterns}
     * @memberof CiManualPullRequestStartCondition
     */
    destination?: CiBranchPatterns;
}

/**
 * Check if a given object implements the CiManualPullRequestStartCondition interface.
 */
export function instanceOfCiManualPullRequestStartCondition(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CiManualPullRequestStartConditionFromJSON(json: any): CiManualPullRequestStartCondition {
    return CiManualPullRequestStartConditionFromJSONTyped(json, false);
}

export function CiManualPullRequestStartConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiManualPullRequestStartCondition {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        source: !exists(json, "source") ? undefined : CiBranchPatternsFromJSON(json["source"]),
        destination: !exists(json, "destination") ? undefined : CiBranchPatternsFromJSON(json["destination"])
    };
}

export function CiManualPullRequestStartConditionToJSON(value?: CiManualPullRequestStartCondition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        source: CiBranchPatternsToJSON(value.source),
        destination: CiBranchPatternsToJSON(value.destination)
    };
}
