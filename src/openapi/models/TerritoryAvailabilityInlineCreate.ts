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
 * @interface TerritoryAvailabilityInlineCreate
 */
export interface TerritoryAvailabilityInlineCreate {
    /**
     *
     * @type {string}
     * @memberof TerritoryAvailabilityInlineCreate
     */
    type: TerritoryAvailabilityInlineCreateTypeEnum;
    /**
     *
     * @type {string}
     * @memberof TerritoryAvailabilityInlineCreate
     */
    id?: string;
}

/**
 * @export
 */
export const TerritoryAvailabilityInlineCreateTypeEnum = {
    TerritoryAvailabilities: "territoryAvailabilities"
} as const;
export type TerritoryAvailabilityInlineCreateTypeEnum = (typeof TerritoryAvailabilityInlineCreateTypeEnum)[keyof typeof TerritoryAvailabilityInlineCreateTypeEnum];

/**
 * Check if a given object implements the TerritoryAvailabilityInlineCreate interface.
 */
export function instanceOfTerritoryAvailabilityInlineCreate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function TerritoryAvailabilityInlineCreateFromJSON(json: any): TerritoryAvailabilityInlineCreate {
    return TerritoryAvailabilityInlineCreateFromJSONTyped(json, false);
}

export function TerritoryAvailabilityInlineCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): TerritoryAvailabilityInlineCreate {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: !exists(json, "id") ? undefined : json["id"]
    };
}

export function TerritoryAvailabilityInlineCreateToJSON(value?: TerritoryAvailabilityInlineCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id
    };
}
