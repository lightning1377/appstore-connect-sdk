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
import type { AppInfo } from "./AppInfo";
import { AppInfoFromJSON, AppInfoFromJSONTyped, AppInfoToJSON } from "./AppInfo";
import type { AppInfosResponseIncludedInner } from "./AppInfosResponseIncludedInner";
import { AppInfosResponseIncludedInnerFromJSON, AppInfosResponseIncludedInnerFromJSONTyped, AppInfosResponseIncludedInnerToJSON } from "./AppInfosResponseIncludedInner";
import type { PagedDocumentLinks } from "./PagedDocumentLinks";
import { PagedDocumentLinksFromJSON, PagedDocumentLinksFromJSONTyped, PagedDocumentLinksToJSON } from "./PagedDocumentLinks";
import type { PagingInformation } from "./PagingInformation";
import { PagingInformationFromJSON, PagingInformationFromJSONTyped, PagingInformationToJSON } from "./PagingInformation";

/**
 *
 * @export
 * @interface AppInfosResponse
 */
export interface AppInfosResponse {
    /**
     *
     * @type {Array<AppInfo>}
     * @memberof AppInfosResponse
     */
    data: Array<AppInfo>;
    /**
     *
     * @type {Array<AppInfosResponseIncludedInner>}
     * @memberof AppInfosResponse
     */
    included?: Array<AppInfosResponseIncludedInner>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof AppInfosResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof AppInfosResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the AppInfosResponse interface.
 */
export function instanceOfAppInfosResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppInfosResponseFromJSON(json: any): AppInfosResponse {
    return AppInfosResponseFromJSONTyped(json, false);
}

export function AppInfosResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppInfosResponse {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (json["data"] as Array<any>).map(AppInfoFromJSON),
        included: !exists(json, "included") ? undefined : (json["included"] as Array<any>).map(AppInfosResponseIncludedInnerFromJSON),
        links: PagedDocumentLinksFromJSON(json["links"]),
        meta: !exists(json, "meta") ? undefined : PagingInformationFromJSON(json["meta"])
    };
}

export function AppInfosResponseToJSON(value?: AppInfosResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (value.data as Array<any>).map(AppInfoToJSON),
        included: value.included === undefined ? undefined : (value.included as Array<any>).map(AppInfosResponseIncludedInnerToJSON),
        links: PagedDocumentLinksToJSON(value.links),
        meta: PagingInformationToJSON(value.meta)
    };
}
