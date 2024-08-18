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
 * @interface AnalyticsReportRequestCreateRequestDataAttributes
 */
export interface AnalyticsReportRequestCreateRequestDataAttributes {
    /**
     *
     * @type {string}
     * @memberof AnalyticsReportRequestCreateRequestDataAttributes
     */
    accessType: AnalyticsReportRequestCreateRequestDataAttributesAccessTypeEnum;
}

/**
 * @export
 */
export const AnalyticsReportRequestCreateRequestDataAttributesAccessTypeEnum = {
    OneTimeSnapshot: "ONE_TIME_SNAPSHOT",
    Ongoing: "ONGOING"
} as const;
export type AnalyticsReportRequestCreateRequestDataAttributesAccessTypeEnum = (typeof AnalyticsReportRequestCreateRequestDataAttributesAccessTypeEnum)[keyof typeof AnalyticsReportRequestCreateRequestDataAttributesAccessTypeEnum];

/**
 * Check if a given object implements the AnalyticsReportRequestCreateRequestDataAttributes interface.
 */
export function instanceOfAnalyticsReportRequestCreateRequestDataAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "accessType" in value;

    return isInstance;
}

export function AnalyticsReportRequestCreateRequestDataAttributesFromJSON(json: any): AnalyticsReportRequestCreateRequestDataAttributes {
    return AnalyticsReportRequestCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function AnalyticsReportRequestCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyticsReportRequestCreateRequestDataAttributes {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        accessType: json["accessType"]
    };
}

export function AnalyticsReportRequestCreateRequestDataAttributesToJSON(value?: AnalyticsReportRequestCreateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        accessType: value.accessType
    };
}
