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
import type { PagedDocumentLinks } from "./PagedDocumentLinks";
import { PagedDocumentLinksFromJSON, PagedDocumentLinksFromJSONTyped, PagedDocumentLinksToJSON } from "./PagedDocumentLinks";
import type { PagingInformation } from "./PagingInformation";
import { PagingInformationFromJSON, PagingInformationFromJSONTyped, PagingInformationToJSON } from "./PagingInformation";
import type { ScmRepositoriesResponseIncludedInner } from "./ScmRepositoriesResponseIncludedInner";
import { ScmRepositoriesResponseIncludedInnerFromJSON, ScmRepositoriesResponseIncludedInnerFromJSONTyped, ScmRepositoriesResponseIncludedInnerToJSON } from "./ScmRepositoriesResponseIncludedInner";
import type { ScmRepository } from "./ScmRepository";
import { ScmRepositoryFromJSON, ScmRepositoryFromJSONTyped, ScmRepositoryToJSON } from "./ScmRepository";

/**
 *
 * @export
 * @interface ScmRepositoriesResponse
 */
export interface ScmRepositoriesResponse {
    /**
     *
     * @type {Array<ScmRepository>}
     * @memberof ScmRepositoriesResponse
     */
    data: Array<ScmRepository>;
    /**
     *
     * @type {Array<ScmRepositoriesResponseIncludedInner>}
     * @memberof ScmRepositoriesResponse
     */
    included?: Array<ScmRepositoriesResponseIncludedInner>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof ScmRepositoriesResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof ScmRepositoriesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the ScmRepositoriesResponse interface.
 */
export function instanceOfScmRepositoriesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function ScmRepositoriesResponseFromJSON(json: any): ScmRepositoriesResponse {
    return ScmRepositoriesResponseFromJSONTyped(json, false);
}

export function ScmRepositoriesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScmRepositoriesResponse {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (json["data"] as Array<any>).map(ScmRepositoryFromJSON),
        included: !exists(json, "included") ? undefined : (json["included"] as Array<any>).map(ScmRepositoriesResponseIncludedInnerFromJSON),
        links: PagedDocumentLinksFromJSON(json["links"]),
        meta: !exists(json, "meta") ? undefined : PagingInformationFromJSON(json["meta"])
    };
}

export function ScmRepositoriesResponseToJSON(value?: ScmRepositoriesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (value.data as Array<any>).map(ScmRepositoryToJSON),
        included: value.included === undefined ? undefined : (value.included as Array<any>).map(ScmRepositoriesResponseIncludedInnerToJSON),
        links: PagedDocumentLinksToJSON(value.links),
        meta: PagingInformationToJSON(value.meta)
    };
}
