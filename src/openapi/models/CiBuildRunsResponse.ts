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
import type { CiBuildRun } from "./CiBuildRun";
import { CiBuildRunFromJSON, CiBuildRunFromJSONTyped, CiBuildRunToJSON } from "./CiBuildRun";
import type { CiBuildRunsResponseIncludedInner } from "./CiBuildRunsResponseIncludedInner";
import { CiBuildRunsResponseIncludedInnerFromJSON, CiBuildRunsResponseIncludedInnerFromJSONTyped, CiBuildRunsResponseIncludedInnerToJSON } from "./CiBuildRunsResponseIncludedInner";
import type { PagedDocumentLinks } from "./PagedDocumentLinks";
import { PagedDocumentLinksFromJSON, PagedDocumentLinksFromJSONTyped, PagedDocumentLinksToJSON } from "./PagedDocumentLinks";
import type { PagingInformation } from "./PagingInformation";
import { PagingInformationFromJSON, PagingInformationFromJSONTyped, PagingInformationToJSON } from "./PagingInformation";

/**
 *
 * @export
 * @interface CiBuildRunsResponse
 */
export interface CiBuildRunsResponse {
    /**
     *
     * @type {Array<CiBuildRun>}
     * @memberof CiBuildRunsResponse
     */
    data: Array<CiBuildRun>;
    /**
     *
     * @type {Array<CiBuildRunsResponseIncludedInner>}
     * @memberof CiBuildRunsResponse
     */
    included?: Array<CiBuildRunsResponseIncludedInner>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof CiBuildRunsResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof CiBuildRunsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the CiBuildRunsResponse interface.
 */
export function instanceOfCiBuildRunsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function CiBuildRunsResponseFromJSON(json: any): CiBuildRunsResponse {
    return CiBuildRunsResponseFromJSONTyped(json, false);
}

export function CiBuildRunsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiBuildRunsResponse {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (json["data"] as Array<any>).map(CiBuildRunFromJSON),
        included: !exists(json, "included") ? undefined : (json["included"] as Array<any>).map(CiBuildRunsResponseIncludedInnerFromJSON),
        links: PagedDocumentLinksFromJSON(json["links"]),
        meta: !exists(json, "meta") ? undefined : PagingInformationFromJSON(json["meta"])
    };
}

export function CiBuildRunsResponseToJSON(value?: CiBuildRunsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (value.data as Array<any>).map(CiBuildRunToJSON),
        included: value.included === undefined ? undefined : (value.included as Array<any>).map(CiBuildRunsResponseIncludedInnerToJSON),
        links: PagedDocumentLinksToJSON(value.links),
        meta: PagingInformationToJSON(value.meta)
    };
}
