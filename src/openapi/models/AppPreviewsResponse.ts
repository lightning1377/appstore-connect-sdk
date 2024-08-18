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
import type { AppPreview } from "./AppPreview";
import { AppPreviewFromJSON, AppPreviewFromJSONTyped, AppPreviewToJSON } from "./AppPreview";
import type { AppPreviewSet } from "./AppPreviewSet";
import { AppPreviewSetFromJSON, AppPreviewSetFromJSONTyped, AppPreviewSetToJSON } from "./AppPreviewSet";
import type { PagedDocumentLinks } from "./PagedDocumentLinks";
import { PagedDocumentLinksFromJSON, PagedDocumentLinksFromJSONTyped, PagedDocumentLinksToJSON } from "./PagedDocumentLinks";
import type { PagingInformation } from "./PagingInformation";
import { PagingInformationFromJSON, PagingInformationFromJSONTyped, PagingInformationToJSON } from "./PagingInformation";

/**
 *
 * @export
 * @interface AppPreviewsResponse
 */
export interface AppPreviewsResponse {
    /**
     *
     * @type {Array<AppPreview>}
     * @memberof AppPreviewsResponse
     */
    data: Array<AppPreview>;
    /**
     *
     * @type {Array<AppPreviewSet>}
     * @memberof AppPreviewsResponse
     */
    included?: Array<AppPreviewSet>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof AppPreviewsResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof AppPreviewsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the AppPreviewsResponse interface.
 */
export function instanceOfAppPreviewsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppPreviewsResponseFromJSON(json: any): AppPreviewsResponse {
    return AppPreviewsResponseFromJSONTyped(json, false);
}

export function AppPreviewsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreviewsResponse {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (json["data"] as Array<any>).map(AppPreviewFromJSON),
        included: !exists(json, "included") ? undefined : (json["included"] as Array<any>).map(AppPreviewSetFromJSON),
        links: PagedDocumentLinksFromJSON(json["links"]),
        meta: !exists(json, "meta") ? undefined : PagingInformationFromJSON(json["meta"])
    };
}

export function AppPreviewsResponseToJSON(value?: AppPreviewsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (value.data as Array<any>).map(AppPreviewToJSON),
        included: value.included === undefined ? undefined : (value.included as Array<any>).map(AppPreviewSetToJSON),
        links: PagedDocumentLinksToJSON(value.links),
        meta: PagingInformationToJSON(value.meta)
    };
}
