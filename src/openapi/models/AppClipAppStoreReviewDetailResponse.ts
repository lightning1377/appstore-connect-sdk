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
import type { AppClipAppStoreReviewDetail } from "./AppClipAppStoreReviewDetail";
import { AppClipAppStoreReviewDetailFromJSON, AppClipAppStoreReviewDetailFromJSONTyped, AppClipAppStoreReviewDetailToJSON } from "./AppClipAppStoreReviewDetail";
import type { AppClipDefaultExperience } from "./AppClipDefaultExperience";
import { AppClipDefaultExperienceFromJSON, AppClipDefaultExperienceFromJSONTyped, AppClipDefaultExperienceToJSON } from "./AppClipDefaultExperience";
import type { DocumentLinks } from "./DocumentLinks";
import { DocumentLinksFromJSON, DocumentLinksFromJSONTyped, DocumentLinksToJSON } from "./DocumentLinks";

/**
 *
 * @export
 * @interface AppClipAppStoreReviewDetailResponse
 */
export interface AppClipAppStoreReviewDetailResponse {
    /**
     *
     * @type {AppClipAppStoreReviewDetail}
     * @memberof AppClipAppStoreReviewDetailResponse
     */
    data: AppClipAppStoreReviewDetail;
    /**
     *
     * @type {Array<AppClipDefaultExperience>}
     * @memberof AppClipAppStoreReviewDetailResponse
     */
    included?: Array<AppClipDefaultExperience>;
    /**
     *
     * @type {DocumentLinks}
     * @memberof AppClipAppStoreReviewDetailResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppClipAppStoreReviewDetailResponse interface.
 */
export function instanceOfAppClipAppStoreReviewDetailResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppClipAppStoreReviewDetailResponseFromJSON(json: any): AppClipAppStoreReviewDetailResponse {
    return AppClipAppStoreReviewDetailResponseFromJSONTyped(json, false);
}

export function AppClipAppStoreReviewDetailResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAppStoreReviewDetailResponse {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: AppClipAppStoreReviewDetailFromJSON(json["data"]),
        included: !exists(json, "included") ? undefined : (json["included"] as Array<any>).map(AppClipDefaultExperienceFromJSON),
        links: DocumentLinksFromJSON(json["links"])
    };
}

export function AppClipAppStoreReviewDetailResponseToJSON(value?: AppClipAppStoreReviewDetailResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: AppClipAppStoreReviewDetailToJSON(value.data),
        included: value.included === undefined ? undefined : (value.included as Array<any>).map(AppClipDefaultExperienceToJSON),
        links: DocumentLinksToJSON(value.links)
    };
}
