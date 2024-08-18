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
import type { AppRelationshipsReviewSubmissionsDataInner } from "./AppRelationshipsReviewSubmissionsDataInner";
import { AppRelationshipsReviewSubmissionsDataInnerFromJSON, AppRelationshipsReviewSubmissionsDataInnerFromJSONTyped, AppRelationshipsReviewSubmissionsDataInnerToJSON } from "./AppRelationshipsReviewSubmissionsDataInner";
import type { PagingInformation } from "./PagingInformation";
import { PagingInformationFromJSON, PagingInformationFromJSONTyped, PagingInformationToJSON } from "./PagingInformation";

/**
 *
 * @export
 * @interface AppRelationshipsReviewSubmissions
 */
export interface AppRelationshipsReviewSubmissions {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof AppRelationshipsReviewSubmissions
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof AppRelationshipsReviewSubmissions
     */
    meta?: PagingInformation;
    /**
     *
     * @type {Array<AppRelationshipsReviewSubmissionsDataInner>}
     * @memberof AppRelationshipsReviewSubmissions
     */
    data?: Array<AppRelationshipsReviewSubmissionsDataInner>;
}

/**
 * Check if a given object implements the AppRelationshipsReviewSubmissions interface.
 */
export function instanceOfAppRelationshipsReviewSubmissions(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppRelationshipsReviewSubmissionsFromJSON(json: any): AppRelationshipsReviewSubmissions {
    return AppRelationshipsReviewSubmissionsFromJSONTyped(json, false);
}

export function AppRelationshipsReviewSubmissionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRelationshipsReviewSubmissions {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        links: !exists(json, "links") ? undefined : AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON(json["links"]),
        meta: !exists(json, "meta") ? undefined : PagingInformationFromJSON(json["meta"]),
        data: !exists(json, "data") ? undefined : (json["data"] as Array<any>).map(AppRelationshipsReviewSubmissionsDataInnerFromJSON)
    };
}

export function AppRelationshipsReviewSubmissionsToJSON(value?: AppRelationshipsReviewSubmissions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        links: AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON(value.links),
        meta: PagingInformationToJSON(value.meta),
        data: value.data === undefined ? undefined : (value.data as Array<any>).map(AppRelationshipsReviewSubmissionsDataInnerToJSON)
    };
}
