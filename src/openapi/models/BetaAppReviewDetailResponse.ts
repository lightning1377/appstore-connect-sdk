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
import type { App } from "./App";
import { AppFromJSON, AppFromJSONTyped, AppToJSON } from "./App";
import type { BetaAppReviewDetail } from "./BetaAppReviewDetail";
import { BetaAppReviewDetailFromJSON, BetaAppReviewDetailFromJSONTyped, BetaAppReviewDetailToJSON } from "./BetaAppReviewDetail";
import type { DocumentLinks } from "./DocumentLinks";
import { DocumentLinksFromJSON, DocumentLinksFromJSONTyped, DocumentLinksToJSON } from "./DocumentLinks";

/**
 *
 * @export
 * @interface BetaAppReviewDetailResponse
 */
export interface BetaAppReviewDetailResponse {
    /**
     *
     * @type {BetaAppReviewDetail}
     * @memberof BetaAppReviewDetailResponse
     */
    data: BetaAppReviewDetail;
    /**
     *
     * @type {Array<App>}
     * @memberof BetaAppReviewDetailResponse
     */
    included?: Array<App>;
    /**
     *
     * @type {DocumentLinks}
     * @memberof BetaAppReviewDetailResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the BetaAppReviewDetailResponse interface.
 */
export function instanceOfBetaAppReviewDetailResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function BetaAppReviewDetailResponseFromJSON(json: any): BetaAppReviewDetailResponse {
    return BetaAppReviewDetailResponseFromJSONTyped(json, false);
}

export function BetaAppReviewDetailResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppReviewDetailResponse {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: BetaAppReviewDetailFromJSON(json["data"]),
        included: !exists(json, "included") ? undefined : (json["included"] as Array<any>).map(AppFromJSON),
        links: DocumentLinksFromJSON(json["links"])
    };
}

export function BetaAppReviewDetailResponseToJSON(value?: BetaAppReviewDetailResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: BetaAppReviewDetailToJSON(value.data),
        included: value.included === undefined ? undefined : (value.included as Array<any>).map(AppToJSON),
        links: DocumentLinksToJSON(value.links)
    };
}
