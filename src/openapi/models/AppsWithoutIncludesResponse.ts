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
import type { PagedDocumentLinks } from "./PagedDocumentLinks";
import { PagedDocumentLinksFromJSON, PagedDocumentLinksFromJSONTyped, PagedDocumentLinksToJSON } from "./PagedDocumentLinks";
import type { PagingInformation } from "./PagingInformation";
import { PagingInformationFromJSON, PagingInformationFromJSONTyped, PagingInformationToJSON } from "./PagingInformation";

/**
 *
 * @export
 * @interface AppsWithoutIncludesResponse
 */
export interface AppsWithoutIncludesResponse {
    /**
     *
     * @type {Array<App>}
     * @memberof AppsWithoutIncludesResponse
     */
    data: Array<App>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof AppsWithoutIncludesResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof AppsWithoutIncludesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the AppsWithoutIncludesResponse interface.
 */
export function instanceOfAppsWithoutIncludesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppsWithoutIncludesResponseFromJSON(json: any): AppsWithoutIncludesResponse {
    return AppsWithoutIncludesResponseFromJSONTyped(json, false);
}

export function AppsWithoutIncludesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppsWithoutIncludesResponse {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (json["data"] as Array<any>).map(AppFromJSON),
        links: PagedDocumentLinksFromJSON(json["links"]),
        meta: !exists(json, "meta") ? undefined : PagingInformationFromJSON(json["meta"])
    };
}

export function AppsWithoutIncludesResponseToJSON(value?: AppsWithoutIncludesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (value.data as Array<any>).map(AppToJSON),
        links: PagedDocumentLinksToJSON(value.links),
        meta: PagingInformationToJSON(value.meta)
    };
}
