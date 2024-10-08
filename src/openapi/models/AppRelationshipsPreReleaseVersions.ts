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
import type { AppRelationshipsPreReleaseVersionsDataInner } from "./AppRelationshipsPreReleaseVersionsDataInner";
import { AppRelationshipsPreReleaseVersionsDataInnerFromJSON, AppRelationshipsPreReleaseVersionsDataInnerFromJSONTyped, AppRelationshipsPreReleaseVersionsDataInnerToJSON } from "./AppRelationshipsPreReleaseVersionsDataInner";
import type { PagingInformation } from "./PagingInformation";
import { PagingInformationFromJSON, PagingInformationFromJSONTyped, PagingInformationToJSON } from "./PagingInformation";

/**
 *
 * @export
 * @interface AppRelationshipsPreReleaseVersions
 */
export interface AppRelationshipsPreReleaseVersions {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof AppRelationshipsPreReleaseVersions
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof AppRelationshipsPreReleaseVersions
     */
    meta?: PagingInformation;
    /**
     *
     * @type {Array<AppRelationshipsPreReleaseVersionsDataInner>}
     * @memberof AppRelationshipsPreReleaseVersions
     */
    data?: Array<AppRelationshipsPreReleaseVersionsDataInner>;
}

/**
 * Check if a given object implements the AppRelationshipsPreReleaseVersions interface.
 */
export function instanceOfAppRelationshipsPreReleaseVersions(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppRelationshipsPreReleaseVersionsFromJSON(json: any): AppRelationshipsPreReleaseVersions {
    return AppRelationshipsPreReleaseVersionsFromJSONTyped(json, false);
}

export function AppRelationshipsPreReleaseVersionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRelationshipsPreReleaseVersions {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        links: !exists(json, "links") ? undefined : AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON(json["links"]),
        meta: !exists(json, "meta") ? undefined : PagingInformationFromJSON(json["meta"]),
        data: !exists(json, "data") ? undefined : (json["data"] as Array<any>).map(AppRelationshipsPreReleaseVersionsDataInnerFromJSON)
    };
}

export function AppRelationshipsPreReleaseVersionsToJSON(value?: AppRelationshipsPreReleaseVersions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        links: AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON(value.links),
        meta: PagingInformationToJSON(value.meta),
        data: value.data === undefined ? undefined : (value.data as Array<any>).map(AppRelationshipsPreReleaseVersionsDataInnerToJSON)
    };
}
