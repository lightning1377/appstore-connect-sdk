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
import type { AppRelationshipsBetaAppLocalizationsDataInner } from "./AppRelationshipsBetaAppLocalizationsDataInner";
import { AppRelationshipsBetaAppLocalizationsDataInnerFromJSON, AppRelationshipsBetaAppLocalizationsDataInnerFromJSONTyped, AppRelationshipsBetaAppLocalizationsDataInnerToJSON } from "./AppRelationshipsBetaAppLocalizationsDataInner";
import type { PagingInformation } from "./PagingInformation";
import { PagingInformationFromJSON, PagingInformationFromJSONTyped, PagingInformationToJSON } from "./PagingInformation";

/**
 *
 * @export
 * @interface AppRelationshipsBetaAppLocalizations
 */
export interface AppRelationshipsBetaAppLocalizations {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof AppRelationshipsBetaAppLocalizations
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof AppRelationshipsBetaAppLocalizations
     */
    meta?: PagingInformation;
    /**
     *
     * @type {Array<AppRelationshipsBetaAppLocalizationsDataInner>}
     * @memberof AppRelationshipsBetaAppLocalizations
     */
    data?: Array<AppRelationshipsBetaAppLocalizationsDataInner>;
}

/**
 * Check if a given object implements the AppRelationshipsBetaAppLocalizations interface.
 */
export function instanceOfAppRelationshipsBetaAppLocalizations(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppRelationshipsBetaAppLocalizationsFromJSON(json: any): AppRelationshipsBetaAppLocalizations {
    return AppRelationshipsBetaAppLocalizationsFromJSONTyped(json, false);
}

export function AppRelationshipsBetaAppLocalizationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRelationshipsBetaAppLocalizations {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        links: !exists(json, "links") ? undefined : AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON(json["links"]),
        meta: !exists(json, "meta") ? undefined : PagingInformationFromJSON(json["meta"]),
        data: !exists(json, "data") ? undefined : (json["data"] as Array<any>).map(AppRelationshipsBetaAppLocalizationsDataInnerFromJSON)
    };
}

export function AppRelationshipsBetaAppLocalizationsToJSON(value?: AppRelationshipsBetaAppLocalizations | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        links: AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON(value.links),
        meta: PagingInformationToJSON(value.meta),
        data: value.data === undefined ? undefined : (value.data as Array<any>).map(AppRelationshipsBetaAppLocalizationsDataInnerToJSON)
    };
}
