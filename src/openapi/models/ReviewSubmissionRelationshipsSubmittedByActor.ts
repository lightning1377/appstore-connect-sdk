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
import type { ReviewSubmissionRelationshipsSubmittedByActorData } from "./ReviewSubmissionRelationshipsSubmittedByActorData";
import { ReviewSubmissionRelationshipsSubmittedByActorDataFromJSON, ReviewSubmissionRelationshipsSubmittedByActorDataFromJSONTyped, ReviewSubmissionRelationshipsSubmittedByActorDataToJSON } from "./ReviewSubmissionRelationshipsSubmittedByActorData";

/**
 *
 * @export
 * @interface ReviewSubmissionRelationshipsSubmittedByActor
 */
export interface ReviewSubmissionRelationshipsSubmittedByActor {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof ReviewSubmissionRelationshipsSubmittedByActor
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {ReviewSubmissionRelationshipsSubmittedByActorData}
     * @memberof ReviewSubmissionRelationshipsSubmittedByActor
     */
    data?: ReviewSubmissionRelationshipsSubmittedByActorData;
}

/**
 * Check if a given object implements the ReviewSubmissionRelationshipsSubmittedByActor interface.
 */
export function instanceOfReviewSubmissionRelationshipsSubmittedByActor(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReviewSubmissionRelationshipsSubmittedByActorFromJSON(json: any): ReviewSubmissionRelationshipsSubmittedByActor {
    return ReviewSubmissionRelationshipsSubmittedByActorFromJSONTyped(json, false);
}

export function ReviewSubmissionRelationshipsSubmittedByActorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReviewSubmissionRelationshipsSubmittedByActor {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        links: !exists(json, "links") ? undefined : AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON(json["links"]),
        data: !exists(json, "data") ? undefined : ReviewSubmissionRelationshipsSubmittedByActorDataFromJSON(json["data"])
    };
}

export function ReviewSubmissionRelationshipsSubmittedByActorToJSON(value?: ReviewSubmissionRelationshipsSubmittedByActor | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        links: AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON(value.links),
        data: ReviewSubmissionRelationshipsSubmittedByActorDataToJSON(value.data)
    };
}
