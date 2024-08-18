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
import type { BuildRelationshipsBetaAppReviewSubmissionData } from "./BuildRelationshipsBetaAppReviewSubmissionData";
import { BuildRelationshipsBetaAppReviewSubmissionDataFromJSON, BuildRelationshipsBetaAppReviewSubmissionDataFromJSONTyped, BuildRelationshipsBetaAppReviewSubmissionDataToJSON } from "./BuildRelationshipsBetaAppReviewSubmissionData";

/**
 *
 * @export
 * @interface BuildRelationshipsBetaAppReviewSubmission
 */
export interface BuildRelationshipsBetaAppReviewSubmission {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof BuildRelationshipsBetaAppReviewSubmission
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {BuildRelationshipsBetaAppReviewSubmissionData}
     * @memberof BuildRelationshipsBetaAppReviewSubmission
     */
    data?: BuildRelationshipsBetaAppReviewSubmissionData;
}

/**
 * Check if a given object implements the BuildRelationshipsBetaAppReviewSubmission interface.
 */
export function instanceOfBuildRelationshipsBetaAppReviewSubmission(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BuildRelationshipsBetaAppReviewSubmissionFromJSON(json: any): BuildRelationshipsBetaAppReviewSubmission {
    return BuildRelationshipsBetaAppReviewSubmissionFromJSONTyped(json, false);
}

export function BuildRelationshipsBetaAppReviewSubmissionFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildRelationshipsBetaAppReviewSubmission {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        links: !exists(json, "links") ? undefined : AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON(json["links"]),
        data: !exists(json, "data") ? undefined : BuildRelationshipsBetaAppReviewSubmissionDataFromJSON(json["data"])
    };
}

export function BuildRelationshipsBetaAppReviewSubmissionToJSON(value?: BuildRelationshipsBetaAppReviewSubmission | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        links: AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON(value.links),
        data: BuildRelationshipsBetaAppReviewSubmissionDataToJSON(value.data)
    };
}
