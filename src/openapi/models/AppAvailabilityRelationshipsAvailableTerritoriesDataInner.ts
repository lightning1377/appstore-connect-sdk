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
 * @interface AppAvailabilityRelationshipsAvailableTerritoriesDataInner
 */
export interface AppAvailabilityRelationshipsAvailableTerritoriesDataInner {
    /**
     *
     * @type {string}
     * @memberof AppAvailabilityRelationshipsAvailableTerritoriesDataInner
     */
    type: AppAvailabilityRelationshipsAvailableTerritoriesDataInnerTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppAvailabilityRelationshipsAvailableTerritoriesDataInner
     */
    id: string;
}

/**
 * @export
 */
export const AppAvailabilityRelationshipsAvailableTerritoriesDataInnerTypeEnum = {
    Territories: "territories"
} as const;
export type AppAvailabilityRelationshipsAvailableTerritoriesDataInnerTypeEnum = (typeof AppAvailabilityRelationshipsAvailableTerritoriesDataInnerTypeEnum)[keyof typeof AppAvailabilityRelationshipsAvailableTerritoriesDataInnerTypeEnum];

/**
 * Check if a given object implements the AppAvailabilityRelationshipsAvailableTerritoriesDataInner interface.
 */
export function instanceOfAppAvailabilityRelationshipsAvailableTerritoriesDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppAvailabilityRelationshipsAvailableTerritoriesDataInnerFromJSON(json: any): AppAvailabilityRelationshipsAvailableTerritoriesDataInner {
    return AppAvailabilityRelationshipsAvailableTerritoriesDataInnerFromJSONTyped(json, false);
}

export function AppAvailabilityRelationshipsAvailableTerritoriesDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppAvailabilityRelationshipsAvailableTerritoriesDataInner {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"]
    };
}

export function AppAvailabilityRelationshipsAvailableTerritoriesDataInnerToJSON(value?: AppAvailabilityRelationshipsAvailableTerritoriesDataInner | null): any {
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
