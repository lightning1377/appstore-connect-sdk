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
/**
 *
 * @export
 * @interface BuildRelationshipsBetaAppReviewSubmissionData
 */
export interface BuildRelationshipsBetaAppReviewSubmissionData {
    /**
     *
     * @type {string}
     * @memberof BuildRelationshipsBetaAppReviewSubmissionData
     */
    type: BuildRelationshipsBetaAppReviewSubmissionDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof BuildRelationshipsBetaAppReviewSubmissionData
     */
    id: string;
}

/**
 * @export
 */
export const BuildRelationshipsBetaAppReviewSubmissionDataTypeEnum = {
    BetaAppReviewSubmissions: "betaAppReviewSubmissions"
} as const;
export type BuildRelationshipsBetaAppReviewSubmissionDataTypeEnum = (typeof BuildRelationshipsBetaAppReviewSubmissionDataTypeEnum)[keyof typeof BuildRelationshipsBetaAppReviewSubmissionDataTypeEnum];

/**
 * Check if a given object implements the BuildRelationshipsBetaAppReviewSubmissionData interface.
 */
export function instanceOfBuildRelationshipsBetaAppReviewSubmissionData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function BuildRelationshipsBetaAppReviewSubmissionDataFromJSON(json: any): BuildRelationshipsBetaAppReviewSubmissionData {
    return BuildRelationshipsBetaAppReviewSubmissionDataFromJSONTyped(json, false);
}

export function BuildRelationshipsBetaAppReviewSubmissionDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildRelationshipsBetaAppReviewSubmissionData {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"]
    };
}

export function BuildRelationshipsBetaAppReviewSubmissionDataToJSON(value?: BuildRelationshipsBetaAppReviewSubmissionData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id
    };
}
