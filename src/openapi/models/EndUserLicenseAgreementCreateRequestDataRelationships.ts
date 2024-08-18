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
 * @interface EndUserLicenseAgreementCreateRequestDataRelationships
 */
export interface EndUserLicenseAgreementCreateRequestDataRelationships {
    /**
     *
     * @type {AnalyticsReportRequestCreateRequestDataRelationshipsApp}
     * @memberof EndUserLicenseAgreementCreateRequestDataRelationships
     */
    app: AnalyticsReportRequestCreateRequestDataRelationshipsApp;
    /**
     *
     * @type {AppAvailabilityCreateRequestDataRelationshipsAvailableTerritories}
     * @memberof EndUserLicenseAgreementCreateRequestDataRelationships
     */
    territories: AppAvailabilityCreateRequestDataRelationshipsAvailableTerritories;
}

/**
 * Check if a given object implements the EndUserLicenseAgreementCreateRequestDataRelationships interface.
 */
export function instanceOfEndUserLicenseAgreementCreateRequestDataRelationships(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "app" in value;
    isInstance = isInstance && "territories" in value;

    return isInstance;
}

export function EndUserLicenseAgreementCreateRequestDataRelationshipsFromJSON(json: any): EndUserLicenseAgreementCreateRequestDataRelationships {
    return EndUserLicenseAgreementCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function EndUserLicenseAgreementCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): EndUserLicenseAgreementCreateRequestDataRelationships {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        app: AnalyticsReportRequestCreateRequestDataRelationshipsAppFromJSON(json["app"]),
        territories: AppAvailabilityCreateRequestDataRelationshipsAvailableTerritoriesFromJSON(json["territories"])
    };
}

export function EndUserLicenseAgreementCreateRequestDataRelationshipsToJSON(value?: EndUserLicenseAgreementCreateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        app: AnalyticsReportRequestCreateRequestDataRelationshipsAppToJSON(value.app),
        territories: AppAvailabilityCreateRequestDataRelationshipsAvailableTerritoriesToJSON(value.territories)
    };
}
