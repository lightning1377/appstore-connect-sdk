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
import type { PagingInformation } from "./PagingInformation";
import { PagingInformationFromJSON, PagingInformationFromJSONTyped, PagingInformationToJSON } from "./PagingInformation";

/**
 *
 * @export
 * @interface AppRelationshipsAppEvents
 */
export interface AppRelationshipsAppEvents {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof AppRelationshipsAppEvents
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof AppRelationshipsAppEvents
     */
    meta?: PagingInformation;
    /**
     *
     * @type {Array<AppEventLocalizationRelationshipsAppEventData>}
     * @memberof AppRelationshipsAppEvents
     */
    data?: Array<AppEventLocalizationRelationshipsAppEventData>;
}

/**
 * Check if a given object implements the AppRelationshipsAppEvents interface.
 */
export function instanceOfAppRelationshipsAppEvents(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppRelationshipsAppEventsFromJSON(json: any): AppRelationshipsAppEvents {
    return AppRelationshipsAppEventsFromJSONTyped(json, false);
}

export function AppRelationshipsAppEventsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRelationshipsAppEvents {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        links: !exists(json, "links") ? undefined : AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON(json["links"]),
        meta: !exists(json, "meta") ? undefined : PagingInformationFromJSON(json["meta"]),
        data: !exists(json, "data") ? undefined : (json["data"] as Array<any>).map(AppEventLocalizationRelationshipsAppEventDataFromJSON)
    };
}

export function AppRelationshipsAppEventsToJSON(value?: AppRelationshipsAppEvents | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        links: AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON(value.links),
        meta: PagingInformationToJSON(value.meta),
        data: value.data === undefined ? undefined : (value.data as Array<any>).map(AppEventLocalizationRelationshipsAppEventDataToJSON)
    };
}
