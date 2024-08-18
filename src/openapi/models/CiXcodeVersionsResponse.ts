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
import type { CiMacOsVersion } from "./CiMacOsVersion";
import { CiMacOsVersionFromJSON, CiMacOsVersionFromJSONTyped, CiMacOsVersionToJSON } from "./CiMacOsVersion";
import type { CiXcodeVersion } from "./CiXcodeVersion";
import { CiXcodeVersionFromJSON, CiXcodeVersionFromJSONTyped, CiXcodeVersionToJSON } from "./CiXcodeVersion";
import type { PagedDocumentLinks } from "./PagedDocumentLinks";
import { PagedDocumentLinksFromJSON, PagedDocumentLinksFromJSONTyped, PagedDocumentLinksToJSON } from "./PagedDocumentLinks";
import type { PagingInformation } from "./PagingInformation";
import { PagingInformationFromJSON, PagingInformationFromJSONTyped, PagingInformationToJSON } from "./PagingInformation";

/**
 *
 * @export
 * @interface CiXcodeVersionsResponse
 */
export interface CiXcodeVersionsResponse {
    /**
     *
     * @type {Array<CiXcodeVersion>}
     * @memberof CiXcodeVersionsResponse
     */
    data: Array<CiXcodeVersion>;
    /**
     *
     * @type {Array<CiMacOsVersion>}
     * @memberof CiXcodeVersionsResponse
     */
    included?: Array<CiMacOsVersion>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof CiXcodeVersionsResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof CiXcodeVersionsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the CiXcodeVersionsResponse interface.
 */
export function instanceOfCiXcodeVersionsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function CiXcodeVersionsResponseFromJSON(json: any): CiXcodeVersionsResponse {
    return CiXcodeVersionsResponseFromJSONTyped(json, false);
}

export function CiXcodeVersionsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiXcodeVersionsResponse {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (json["data"] as Array<any>).map(CiXcodeVersionFromJSON),
        included: !exists(json, "included") ? undefined : (json["included"] as Array<any>).map(CiMacOsVersionFromJSON),
        links: PagedDocumentLinksFromJSON(json["links"]),
        meta: !exists(json, "meta") ? undefined : PagingInformationFromJSON(json["meta"])
    };
}

export function CiXcodeVersionsResponseToJSON(value?: CiXcodeVersionsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (value.data as Array<any>).map(CiXcodeVersionToJSON),
        included: value.included === undefined ? undefined : (value.included as Array<any>).map(CiMacOsVersionToJSON),
        links: PagedDocumentLinksToJSON(value.links),
        meta: PagingInformationToJSON(value.meta)
    };
}
