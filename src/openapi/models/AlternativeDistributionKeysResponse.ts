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
import type { AlternativeDistributionKey } from "./AlternativeDistributionKey";
import { AlternativeDistributionKeyFromJSON, AlternativeDistributionKeyFromJSONTyped, AlternativeDistributionKeyToJSON } from "./AlternativeDistributionKey";
import type { PagedDocumentLinks } from "./PagedDocumentLinks";
import { PagedDocumentLinksFromJSON, PagedDocumentLinksFromJSONTyped, PagedDocumentLinksToJSON } from "./PagedDocumentLinks";
import type { PagingInformation } from "./PagingInformation";
import { PagingInformationFromJSON, PagingInformationFromJSONTyped, PagingInformationToJSON } from "./PagingInformation";

/**
 *
 * @export
 * @interface AlternativeDistributionKeysResponse
 */
export interface AlternativeDistributionKeysResponse {
    /**
     *
     * @type {Array<AlternativeDistributionKey>}
     * @memberof AlternativeDistributionKeysResponse
     */
    data: Array<AlternativeDistributionKey>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof AlternativeDistributionKeysResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof AlternativeDistributionKeysResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the AlternativeDistributionKeysResponse interface.
 */
export function instanceOfAlternativeDistributionKeysResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AlternativeDistributionKeysResponseFromJSON(json: any): AlternativeDistributionKeysResponse {
    return AlternativeDistributionKeysResponseFromJSONTyped(json, false);
}

export function AlternativeDistributionKeysResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlternativeDistributionKeysResponse {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (json["data"] as Array<any>).map(AlternativeDistributionKeyFromJSON),
        links: PagedDocumentLinksFromJSON(json["links"]),
        meta: !exists(json, "meta") ? undefined : PagingInformationFromJSON(json["meta"])
    };
}

export function AlternativeDistributionKeysResponseToJSON(value?: AlternativeDistributionKeysResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (value.data as Array<any>).map(AlternativeDistributionKeyToJSON),
        links: PagedDocumentLinksToJSON(value.links),
        meta: PagingInformationToJSON(value.meta)
    };
}
