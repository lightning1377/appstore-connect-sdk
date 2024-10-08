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
import type { AlternativeDistributionPackageVersionRelationshipsVariantsLinks } from "./AlternativeDistributionPackageVersionRelationshipsVariantsLinks";
import { AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON, AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSONTyped, AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON } from "./AlternativeDistributionPackageVersionRelationshipsVariantsLinks";
import type { AppEventLocalizationRelationshipsAppEventData } from "./AppEventLocalizationRelationshipsAppEventData";
import { AppEventLocalizationRelationshipsAppEventDataFromJSON, AppEventLocalizationRelationshipsAppEventDataFromJSONTyped, AppEventLocalizationRelationshipsAppEventDataToJSON } from "./AppEventLocalizationRelationshipsAppEventData";

/**
 *
 * @export
 * @interface AppEventLocalizationRelationshipsAppEvent
 */
export interface AppEventLocalizationRelationshipsAppEvent {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof AppEventLocalizationRelationshipsAppEvent
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {AppEventLocalizationRelationshipsAppEventData}
     * @memberof AppEventLocalizationRelationshipsAppEvent
     */
    data?: AppEventLocalizationRelationshipsAppEventData;
}

/**
 * Check if a given object implements the AppEventLocalizationRelationshipsAppEvent interface.
 */
export function instanceOfAppEventLocalizationRelationshipsAppEvent(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppEventLocalizationRelationshipsAppEventFromJSON(json: any): AppEventLocalizationRelationshipsAppEvent {
    return AppEventLocalizationRelationshipsAppEventFromJSONTyped(json, false);
}

export function AppEventLocalizationRelationshipsAppEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventLocalizationRelationshipsAppEvent {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        links: !exists(json, "links") ? undefined : AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON(json["links"]),
        data: !exists(json, "data") ? undefined : AppEventLocalizationRelationshipsAppEventDataFromJSON(json["data"])
    };
}

export function AppEventLocalizationRelationshipsAppEventToJSON(value?: AppEventLocalizationRelationshipsAppEvent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        links: AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON(value.links),
        data: AppEventLocalizationRelationshipsAppEventDataToJSON(value.data)
    };
}
