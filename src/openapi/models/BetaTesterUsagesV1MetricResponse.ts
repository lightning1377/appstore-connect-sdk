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
import type { BetaTesterUsagesV1MetricResponseDataInner } from "./BetaTesterUsagesV1MetricResponseDataInner";
import { BetaTesterUsagesV1MetricResponseDataInnerFromJSON, BetaTesterUsagesV1MetricResponseDataInnerFromJSONTyped, BetaTesterUsagesV1MetricResponseDataInnerToJSON } from "./BetaTesterUsagesV1MetricResponseDataInner";
import type { PagedDocumentLinks } from "./PagedDocumentLinks";
import { PagedDocumentLinksFromJSON, PagedDocumentLinksFromJSONTyped, PagedDocumentLinksToJSON } from "./PagedDocumentLinks";
import type { PagingInformation } from "./PagingInformation";
import { PagingInformationFromJSON, PagingInformationFromJSONTyped, PagingInformationToJSON } from "./PagingInformation";

/**
 *
 * @export
 * @interface BetaTesterUsagesV1MetricResponse
 */
export interface BetaTesterUsagesV1MetricResponse {
    /**
     *
     * @type {Array<BetaTesterUsagesV1MetricResponseDataInner>}
     * @memberof BetaTesterUsagesV1MetricResponse
     */
    data: Array<BetaTesterUsagesV1MetricResponseDataInner>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof BetaTesterUsagesV1MetricResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof BetaTesterUsagesV1MetricResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the BetaTesterUsagesV1MetricResponse interface.
 */
export function instanceOfBetaTesterUsagesV1MetricResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function BetaTesterUsagesV1MetricResponseFromJSON(json: any): BetaTesterUsagesV1MetricResponse {
    return BetaTesterUsagesV1MetricResponseFromJSONTyped(json, false);
}

export function BetaTesterUsagesV1MetricResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaTesterUsagesV1MetricResponse {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (json["data"] as Array<any>).map(BetaTesterUsagesV1MetricResponseDataInnerFromJSON),
        links: PagedDocumentLinksFromJSON(json["links"]),
        meta: !exists(json, "meta") ? undefined : PagingInformationFromJSON(json["meta"])
    };
}

export function BetaTesterUsagesV1MetricResponseToJSON(value?: BetaTesterUsagesV1MetricResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (value.data as Array<any>).map(BetaTesterUsagesV1MetricResponseDataInnerToJSON),
        links: PagedDocumentLinksToJSON(value.links),
        meta: PagingInformationToJSON(value.meta)
    };
}
