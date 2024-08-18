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
import type { AppPreviewSetRelationshipsAppStoreVersionLocalizationData } from "./AppPreviewSetRelationshipsAppStoreVersionLocalizationData";
import { AppPreviewSetRelationshipsAppStoreVersionLocalizationDataFromJSON, AppPreviewSetRelationshipsAppStoreVersionLocalizationDataFromJSONTyped, AppPreviewSetRelationshipsAppStoreVersionLocalizationDataToJSON } from "./AppPreviewSetRelationshipsAppStoreVersionLocalizationData";
import type { PagingInformation } from "./PagingInformation";
import { PagingInformationFromJSON, PagingInformationFromJSONTyped, PagingInformationToJSON } from "./PagingInformation";

/**
 *
 * @export
 * @interface AppStoreVersionRelationshipsAppStoreVersionLocalizations
 */
export interface AppStoreVersionRelationshipsAppStoreVersionLocalizations {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof AppStoreVersionRelationshipsAppStoreVersionLocalizations
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof AppStoreVersionRelationshipsAppStoreVersionLocalizations
     */
    meta?: PagingInformation;
    /**
     *
     * @type {Array<AppPreviewSetRelationshipsAppStoreVersionLocalizationData>}
     * @memberof AppStoreVersionRelationshipsAppStoreVersionLocalizations
     */
    data?: Array<AppPreviewSetRelationshipsAppStoreVersionLocalizationData>;
}

/**
 * Check if a given object implements the AppStoreVersionRelationshipsAppStoreVersionLocalizations interface.
 */
export function instanceOfAppStoreVersionRelationshipsAppStoreVersionLocalizations(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppStoreVersionRelationshipsAppStoreVersionLocalizationsFromJSON(json: any): AppStoreVersionRelationshipsAppStoreVersionLocalizations {
    return AppStoreVersionRelationshipsAppStoreVersionLocalizationsFromJSONTyped(json, false);
}

export function AppStoreVersionRelationshipsAppStoreVersionLocalizationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionRelationshipsAppStoreVersionLocalizations {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        links: !exists(json, "links") ? undefined : AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON(json["links"]),
        meta: !exists(json, "meta") ? undefined : PagingInformationFromJSON(json["meta"]),
        data: !exists(json, "data") ? undefined : (json["data"] as Array<any>).map(AppPreviewSetRelationshipsAppStoreVersionLocalizationDataFromJSON)
    };
}

export function AppStoreVersionRelationshipsAppStoreVersionLocalizationsToJSON(value?: AppStoreVersionRelationshipsAppStoreVersionLocalizations | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        links: AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON(value.links),
        meta: PagingInformationToJSON(value.meta),
        data: value.data === undefined ? undefined : (value.data as Array<any>).map(AppPreviewSetRelationshipsAppStoreVersionLocalizationDataToJSON)
    };
}
