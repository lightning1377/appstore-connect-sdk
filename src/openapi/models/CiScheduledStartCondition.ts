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
import type { CiScheduledStartConditionSchedule } from "./CiScheduledStartConditionSchedule";
import { CiScheduledStartConditionScheduleFromJSON, CiScheduledStartConditionScheduleFromJSONTyped, CiScheduledStartConditionScheduleToJSON } from "./CiScheduledStartConditionSchedule";

/**
 *
 * @export
 * @interface CiScheduledStartCondition
 */
export interface CiScheduledStartCondition {
    /**
     *
     * @type {CiBranchPatterns}
     * @memberof CiScheduledStartCondition
     */
    source?: CiBranchPatterns;
    /**
     *
     * @type {CiScheduledStartConditionSchedule}
     * @memberof CiScheduledStartCondition
     */
    schedule?: CiScheduledStartConditionSchedule;
}

/**
 * Check if a given object implements the CiScheduledStartCondition interface.
 */
export function instanceOfCiScheduledStartCondition(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CiScheduledStartConditionFromJSON(json: any): CiScheduledStartCondition {
    return CiScheduledStartConditionFromJSONTyped(json, false);
}

export function CiScheduledStartConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiScheduledStartCondition {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        source: !exists(json, "source") ? undefined : CiBranchPatternsFromJSON(json["source"]),
        schedule: !exists(json, "schedule") ? undefined : CiScheduledStartConditionScheduleFromJSON(json["schedule"])
    };
}

export function CiScheduledStartConditionToJSON(value?: CiScheduledStartCondition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        source: CiBranchPatternsToJSON(value.source),
        schedule: CiScheduledStartConditionScheduleToJSON(value.schedule)
    };
}
