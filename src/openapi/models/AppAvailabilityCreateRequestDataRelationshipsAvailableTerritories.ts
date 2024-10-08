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
import type { AppAvailabilityRelationshipsAvailableTerritoriesDataInner } from "./AppAvailabilityRelationshipsAvailableTerritoriesDataInner";
import { AppAvailabilityRelationshipsAvailableTerritoriesDataInnerFromJSON, AppAvailabilityRelationshipsAvailableTerritoriesDataInnerFromJSONTyped, AppAvailabilityRelationshipsAvailableTerritoriesDataInnerToJSON } from "./AppAvailabilityRelationshipsAvailableTerritoriesDataInner";

/**
 *
 * @export
 * @interface AppAvailabilityCreateRequestDataRelationshipsAvailableTerritories
 */
export interface AppAvailabilityCreateRequestDataRelationshipsAvailableTerritories {
    /**
     *
     * @type {Array<AppAvailabilityRelationshipsAvailableTerritoriesDataInner>}
     * @memberof AppAvailabilityCreateRequestDataRelationshipsAvailableTerritories
     */
    data: Array<AppAvailabilityRelationshipsAvailableTerritoriesDataInner>;
}

/**
 * Check if a given object implements the AppAvailabilityCreateRequestDataRelationshipsAvailableTerritories interface.
 */
export function instanceOfAppAvailabilityCreateRequestDataRelationshipsAvailableTerritories(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppAvailabilityCreateRequestDataRelationshipsAvailableTerritoriesFromJSON(json: any): AppAvailabilityCreateRequestDataRelationshipsAvailableTerritories {
    return AppAvailabilityCreateRequestDataRelationshipsAvailableTerritoriesFromJSONTyped(json, false);
}

export function AppAvailabilityCreateRequestDataRelationshipsAvailableTerritoriesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppAvailabilityCreateRequestDataRelationshipsAvailableTerritories {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (json["data"] as Array<any>).map(AppAvailabilityRelationshipsAvailableTerritoriesDataInnerFromJSON)
    };
}

export function AppAvailabilityCreateRequestDataRelationshipsAvailableTerritoriesToJSON(value?: AppAvailabilityCreateRequestDataRelationshipsAvailableTerritories | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (value.data as Array<any>).map(AppAvailabilityRelationshipsAvailableTerritoriesDataInnerToJSON)
    };
}
