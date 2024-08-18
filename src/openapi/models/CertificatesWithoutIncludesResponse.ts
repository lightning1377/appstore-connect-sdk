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
import type { Certificate } from "./Certificate";
import { CertificateFromJSON, CertificateFromJSONTyped, CertificateToJSON } from "./Certificate";
import type { PagedDocumentLinks } from "./PagedDocumentLinks";
import { PagedDocumentLinksFromJSON, PagedDocumentLinksFromJSONTyped, PagedDocumentLinksToJSON } from "./PagedDocumentLinks";
import type { PagingInformation } from "./PagingInformation";
import { PagingInformationFromJSON, PagingInformationFromJSONTyped, PagingInformationToJSON } from "./PagingInformation";

/**
 *
 * @export
 * @interface CertificatesWithoutIncludesResponse
 */
export interface CertificatesWithoutIncludesResponse {
    /**
     *
     * @type {Array<Certificate>}
     * @memberof CertificatesWithoutIncludesResponse
     */
    data: Array<Certificate>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof CertificatesWithoutIncludesResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof CertificatesWithoutIncludesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the CertificatesWithoutIncludesResponse interface.
 */
export function instanceOfCertificatesWithoutIncludesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function CertificatesWithoutIncludesResponseFromJSON(json: any): CertificatesWithoutIncludesResponse {
    return CertificatesWithoutIncludesResponseFromJSONTyped(json, false);
}

export function CertificatesWithoutIncludesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CertificatesWithoutIncludesResponse {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (json["data"] as Array<any>).map(CertificateFromJSON),
        links: PagedDocumentLinksFromJSON(json["links"]),
        meta: !exists(json, "meta") ? undefined : PagingInformationFromJSON(json["meta"])
    };
}

export function CertificatesWithoutIncludesResponseToJSON(value?: CertificatesWithoutIncludesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (value.data as Array<any>).map(CertificateToJSON),
        links: PagedDocumentLinksToJSON(value.links),
        meta: PagingInformationToJSON(value.meta)
    };
}
