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
 * @interface CiScheduledStartConditionSchedule
 */
export interface CiScheduledStartConditionSchedule {
    /**
     *
     * @type {string}
     * @memberof CiScheduledStartConditionSchedule
     */
    frequency?: CiScheduledStartConditionScheduleFrequencyEnum;
    /**
     *
     * @type {Array<string>}
     * @memberof CiScheduledStartConditionSchedule
     */
    days?: Array<CiScheduledStartConditionScheduleDaysEnum>;
    /**
     *
     * @type {number}
     * @memberof CiScheduledStartConditionSchedule
     */
    hour?: number;
    /**
     *
     * @type {number}
     * @memberof CiScheduledStartConditionSchedule
     */
    minute?: number;
    /**
     *
     * @type {string}
     * @memberof CiScheduledStartConditionSchedule
     */
    timezone?: string;
}

/**
 * @export
 */
export const CiScheduledStartConditionScheduleFrequencyEnum = {
    Weekly: "WEEKLY",
    Daily: "DAILY",
    Hourly: "HOURLY"
} as const;
export type CiScheduledStartConditionScheduleFrequencyEnum = (typeof CiScheduledStartConditionScheduleFrequencyEnum)[keyof typeof CiScheduledStartConditionScheduleFrequencyEnum];

/**
 * @export
 */
export const CiScheduledStartConditionScheduleDaysEnum = {
    Sunday: "SUNDAY",
    Monday: "MONDAY",
    Tuesday: "TUESDAY",
    Wednesday: "WEDNESDAY",
    Thursday: "THURSDAY",
    Friday: "FRIDAY",
    Saturday: "SATURDAY"
} as const;
export type CiScheduledStartConditionScheduleDaysEnum = (typeof CiScheduledStartConditionScheduleDaysEnum)[keyof typeof CiScheduledStartConditionScheduleDaysEnum];

/**
 * Check if a given object implements the CiScheduledStartConditionSchedule interface.
 */
export function instanceOfCiScheduledStartConditionSchedule(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CiScheduledStartConditionScheduleFromJSON(json: any): CiScheduledStartConditionSchedule {
    return CiScheduledStartConditionScheduleFromJSONTyped(json, false);
}

export function CiScheduledStartConditionScheduleFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiScheduledStartConditionSchedule {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        frequency: !exists(json, "frequency") ? undefined : json["frequency"],
        days: !exists(json, "days") ? undefined : json["days"],
        hour: !exists(json, "hour") ? undefined : json["hour"],
        minute: !exists(json, "minute") ? undefined : json["minute"],
        timezone: !exists(json, "timezone") ? undefined : json["timezone"]
    };
}

export function CiScheduledStartConditionScheduleToJSON(value?: CiScheduledStartConditionSchedule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        frequency: value.frequency,
        days: value.days,
        hour: value.hour,
        minute: value.minute,
        timezone: value.timezone
    };
}
