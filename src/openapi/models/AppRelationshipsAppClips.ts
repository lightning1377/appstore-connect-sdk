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
import type { AppClipAdvancedExperienceRelationshipsAppClipData } from "./AppClipAdvancedExperienceRelationshipsAppClipData";
import { AppClipAdvancedExperienceRelationshipsAppClipDataFromJSON, AppClipAdvancedExperienceRelationshipsAppClipDataFromJSONTyped, AppClipAdvancedExperienceRelationshipsAppClipDataToJSON } from "./AppClipAdvancedExperienceRelationshipsAppClipData";
import type { PagingInformation } from "./PagingInformation";
import { PagingInformationFromJSON, PagingInformationFromJSONTyped, PagingInformationToJSON } from "./PagingInformation";

/**
 *
 * @export
 * @interface AppRelationshipsAppClips
 */
export interface AppRelationshipsAppClips {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof AppRelationshipsAppClips
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof AppRelationshipsAppClips
     */
    meta?: PagingInformation;
    /**
     *
     * @type {Array<AppClipAdvancedExperienceRelationshipsAppClipData>}
     * @memberof AppRelationshipsAppClips
     */
    data?: Array<AppClipAdvancedExperienceRelationshipsAppClipData>;
}

/**
 * Check if a given object implements the AppRelationshipsAppClips interface.
 */
export function instanceOfAppRelationshipsAppClips(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppRelationshipsAppClipsFromJSON(json: any): AppRelationshipsAppClips {
    return AppRelationshipsAppClipsFromJSONTyped(json, false);
}

export function AppRelationshipsAppClipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRelationshipsAppClips {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        links: !exists(json, "links") ? undefined : AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON(json["links"]),
        meta: !exists(json, "meta") ? undefined : PagingInformationFromJSON(json["meta"]),
        data: !exists(json, "data") ? undefined : (json["data"] as Array<any>).map(AppClipAdvancedExperienceRelationshipsAppClipDataFromJSON)
    };
}

export function AppRelationshipsAppClipsToJSON(value?: AppRelationshipsAppClips | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        links: AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON(value.links),
        meta: PagingInformationToJSON(value.meta),
        data: value.data === undefined ? undefined : (value.data as Array<any>).map(AppClipAdvancedExperienceRelationshipsAppClipDataToJSON)
    };
}
