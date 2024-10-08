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
import type { AnalyticsReportRequestCreateRequestDataRelationshipsApp } from "./AnalyticsReportRequestCreateRequestDataRelationshipsApp";
import { AnalyticsReportRequestCreateRequestDataRelationshipsAppFromJSON, AnalyticsReportRequestCreateRequestDataRelationshipsAppFromJSONTyped, AnalyticsReportRequestCreateRequestDataRelationshipsAppToJSON } from "./AnalyticsReportRequestCreateRequestDataRelationshipsApp";
import type { AppAvailabilityCreateRequestDataRelationshipsAvailableTerritories } from "./AppAvailabilityCreateRequestDataRelationshipsAvailableTerritories";
import { AppAvailabilityCreateRequestDataRelationshipsAvailableTerritoriesFromJSON, AppAvailabilityCreateRequestDataRelationshipsAvailableTerritoriesFromJSONTyped, AppAvailabilityCreateRequestDataRelationshipsAvailableTerritoriesToJSON } from "./AppAvailabilityCreateRequestDataRelationshipsAvailableTerritories";

/**
 *
 * @export
 * @interface AppAvailabilityCreateRequestDataRelationships
 */
export interface AppAvailabilityCreateRequestDataRelationships {
    /**
     *
     * @type {AnalyticsReportRequestCreateRequestDataRelationshipsApp}
     * @memberof AppAvailabilityCreateRequestDataRelationships
     */
    app: AnalyticsReportRequestCreateRequestDataRelationshipsApp;
    /**
     *
     * @type {AppAvailabilityCreateRequestDataRelationshipsAvailableTerritories}
     * @memberof AppAvailabilityCreateRequestDataRelationships
     */
    availableTerritories: AppAvailabilityCreateRequestDataRelationshipsAvailableTerritories;
}

/**
 * Check if a given object implements the AppAvailabilityCreateRequestDataRelationships interface.
 */
export function instanceOfAppAvailabilityCreateRequestDataRelationships(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "app" in value;
    isInstance = isInstance && "availableTerritories" in value;

    return isInstance;
}

export function AppAvailabilityCreateRequestDataRelationshipsFromJSON(json: any): AppAvailabilityCreateRequestDataRelationships {
    return AppAvailabilityCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function AppAvailabilityCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppAvailabilityCreateRequestDataRelationships {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        app: AnalyticsReportRequestCreateRequestDataRelationshipsAppFromJSON(json["app"]),
        availableTerritories: AppAvailabilityCreateRequestDataRelationshipsAvailableTerritoriesFromJSON(json["availableTerritories"])
    };
}

export function AppAvailabilityCreateRequestDataRelationshipsToJSON(value?: AppAvailabilityCreateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        app: AnalyticsReportRequestCreateRequestDataRelationshipsAppToJSON(value.app),
        availableTerritories: AppAvailabilityCreateRequestDataRelationshipsAvailableTerritoriesToJSON(value.availableTerritories)
    };
}
