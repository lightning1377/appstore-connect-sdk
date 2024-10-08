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
import type { AppRelationshipsBetaAppReviewDetailData } from "./AppRelationshipsBetaAppReviewDetailData";
import { AppRelationshipsBetaAppReviewDetailDataFromJSON, AppRelationshipsBetaAppReviewDetailDataFromJSONTyped, AppRelationshipsBetaAppReviewDetailDataToJSON } from "./AppRelationshipsBetaAppReviewDetailData";

/**
 *
 * @export
 * @interface AppRelationshipsBetaAppReviewDetail
 */
export interface AppRelationshipsBetaAppReviewDetail {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof AppRelationshipsBetaAppReviewDetail
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {AppRelationshipsBetaAppReviewDetailData}
     * @memberof AppRelationshipsBetaAppReviewDetail
     */
    data?: AppRelationshipsBetaAppReviewDetailData;
}

/**
 * Check if a given object implements the AppRelationshipsBetaAppReviewDetail interface.
 */
export function instanceOfAppRelationshipsBetaAppReviewDetail(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppRelationshipsBetaAppReviewDetailFromJSON(json: any): AppRelationshipsBetaAppReviewDetail {
    return AppRelationshipsBetaAppReviewDetailFromJSONTyped(json, false);
}

export function AppRelationshipsBetaAppReviewDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRelationshipsBetaAppReviewDetail {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        links: !exists(json, "links") ? undefined : AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON(json["links"]),
        data: !exists(json, "data") ? undefined : AppRelationshipsBetaAppReviewDetailDataFromJSON(json["data"])
    };
}

export function AppRelationshipsBetaAppReviewDetailToJSON(value?: AppRelationshipsBetaAppReviewDetail | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        links: AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON(value.links),
        data: AppRelationshipsBetaAppReviewDetailDataToJSON(value.data)
    };
}
