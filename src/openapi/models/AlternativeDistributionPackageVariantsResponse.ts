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
import type { AlternativeDistributionPackageVariant } from "./AlternativeDistributionPackageVariant";
import { AlternativeDistributionPackageVariantFromJSON, AlternativeDistributionPackageVariantFromJSONTyped, AlternativeDistributionPackageVariantToJSON } from "./AlternativeDistributionPackageVariant";
import type { PagedDocumentLinks } from "./PagedDocumentLinks";
import { PagedDocumentLinksFromJSON, PagedDocumentLinksFromJSONTyped, PagedDocumentLinksToJSON } from "./PagedDocumentLinks";
import type { PagingInformation } from "./PagingInformation";
import { PagingInformationFromJSON, PagingInformationFromJSONTyped, PagingInformationToJSON } from "./PagingInformation";

/**
 *
 * @export
 * @interface AlternativeDistributionPackageVariantsResponse
 */
export interface AlternativeDistributionPackageVariantsResponse {
    /**
     *
     * @type {Array<AlternativeDistributionPackageVariant>}
     * @memberof AlternativeDistributionPackageVariantsResponse
     */
    data: Array<AlternativeDistributionPackageVariant>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof AlternativeDistributionPackageVariantsResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof AlternativeDistributionPackageVariantsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the AlternativeDistributionPackageVariantsResponse interface.
 */
export function instanceOfAlternativeDistributionPackageVariantsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AlternativeDistributionPackageVariantsResponseFromJSON(json: any): AlternativeDistributionPackageVariantsResponse {
    return AlternativeDistributionPackageVariantsResponseFromJSONTyped(json, false);
}

export function AlternativeDistributionPackageVariantsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlternativeDistributionPackageVariantsResponse {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (json["data"] as Array<any>).map(AlternativeDistributionPackageVariantFromJSON),
        links: PagedDocumentLinksFromJSON(json["links"]),
        meta: !exists(json, "meta") ? undefined : PagingInformationFromJSON(json["meta"])
    };
}

export function AlternativeDistributionPackageVariantsResponseToJSON(value?: AlternativeDistributionPackageVariantsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (value.data as Array<any>).map(AlternativeDistributionPackageVariantToJSON),
        links: PagedDocumentLinksToJSON(value.links),
        meta: PagingInformationToJSON(value.meta)
    };
}
