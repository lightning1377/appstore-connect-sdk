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
import type { AppPriceScheduleCreateRequestDataRelationshipsBaseTerritory } from "./AppPriceScheduleCreateRequestDataRelationshipsBaseTerritory";
import { AppPriceScheduleCreateRequestDataRelationshipsBaseTerritoryFromJSON, AppPriceScheduleCreateRequestDataRelationshipsBaseTerritoryFromJSONTyped, AppPriceScheduleCreateRequestDataRelationshipsBaseTerritoryToJSON } from "./AppPriceScheduleCreateRequestDataRelationshipsBaseTerritory";
import type { AppPriceScheduleCreateRequestDataRelationshipsManualPrices } from "./AppPriceScheduleCreateRequestDataRelationshipsManualPrices";
import { AppPriceScheduleCreateRequestDataRelationshipsManualPricesFromJSON, AppPriceScheduleCreateRequestDataRelationshipsManualPricesFromJSONTyped, AppPriceScheduleCreateRequestDataRelationshipsManualPricesToJSON } from "./AppPriceScheduleCreateRequestDataRelationshipsManualPrices";

/**
 *
 * @export
 * @interface AppPriceScheduleCreateRequestDataRelationships
 */
export interface AppPriceScheduleCreateRequestDataRelationships {
    /**
     *
     * @type {AnalyticsReportRequestCreateRequestDataRelationshipsApp}
     * @memberof AppPriceScheduleCreateRequestDataRelationships
     */
    app: AnalyticsReportRequestCreateRequestDataRelationshipsApp;
    /**
     *
     * @type {AppPriceScheduleCreateRequestDataRelationshipsBaseTerritory}
     * @memberof AppPriceScheduleCreateRequestDataRelationships
     */
    baseTerritory: AppPriceScheduleCreateRequestDataRelationshipsBaseTerritory;
    /**
     *
     * @type {AppPriceScheduleCreateRequestDataRelationshipsManualPrices}
     * @memberof AppPriceScheduleCreateRequestDataRelationships
     */
    manualPrices: AppPriceScheduleCreateRequestDataRelationshipsManualPrices;
}

/**
 * Check if a given object implements the AppPriceScheduleCreateRequestDataRelationships interface.
 */
export function instanceOfAppPriceScheduleCreateRequestDataRelationships(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "app" in value;
    isInstance = isInstance && "baseTerritory" in value;
    isInstance = isInstance && "manualPrices" in value;

    return isInstance;
}

export function AppPriceScheduleCreateRequestDataRelationshipsFromJSON(json: any): AppPriceScheduleCreateRequestDataRelationships {
    return AppPriceScheduleCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function AppPriceScheduleCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPriceScheduleCreateRequestDataRelationships {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        app: AnalyticsReportRequestCreateRequestDataRelationshipsAppFromJSON(json["app"]),
        baseTerritory: AppPriceScheduleCreateRequestDataRelationshipsBaseTerritoryFromJSON(json["baseTerritory"]),
        manualPrices: AppPriceScheduleCreateRequestDataRelationshipsManualPricesFromJSON(json["manualPrices"])
    };
}

export function AppPriceScheduleCreateRequestDataRelationshipsToJSON(value?: AppPriceScheduleCreateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        app: AnalyticsReportRequestCreateRequestDataRelationshipsAppToJSON(value.app),
        baseTerritory: AppPriceScheduleCreateRequestDataRelationshipsBaseTerritoryToJSON(value.baseTerritory),
        manualPrices: AppPriceScheduleCreateRequestDataRelationshipsManualPricesToJSON(value.manualPrices)
    };
}
