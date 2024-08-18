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
import type { Territory } from "./Territory";
import { TerritoryFromJSON, TerritoryFromJSONTyped, TerritoryToJSON } from "./Territory";
import type { TerritoryAvailability } from "./TerritoryAvailability";
import { TerritoryAvailabilityFromJSON, TerritoryAvailabilityFromJSONTyped, TerritoryAvailabilityToJSON } from "./TerritoryAvailability";

/**
 *
 * @export
 * @interface TerritoryAvailabilitiesResponse
 */
export interface TerritoryAvailabilitiesResponse {
    /**
     *
     * @type {Array<TerritoryAvailability>}
     * @memberof TerritoryAvailabilitiesResponse
     */
    data: Array<TerritoryAvailability>;
    /**
     *
     * @type {Array<Territory>}
     * @memberof TerritoryAvailabilitiesResponse
     */
    included?: Array<Territory>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof TerritoryAvailabilitiesResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof TerritoryAvailabilitiesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the TerritoryAvailabilitiesResponse interface.
 */
export function instanceOfTerritoryAvailabilitiesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function TerritoryAvailabilitiesResponseFromJSON(json: any): TerritoryAvailabilitiesResponse {
    return TerritoryAvailabilitiesResponseFromJSONTyped(json, false);
}

export function TerritoryAvailabilitiesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TerritoryAvailabilitiesResponse {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (json["data"] as Array<any>).map(TerritoryAvailabilityFromJSON),
        included: !exists(json, "included") ? undefined : (json["included"] as Array<any>).map(TerritoryFromJSON),
        links: PagedDocumentLinksFromJSON(json["links"]),
        meta: !exists(json, "meta") ? undefined : PagingInformationFromJSON(json["meta"])
    };
}

export function TerritoryAvailabilitiesResponseToJSON(value?: TerritoryAvailabilitiesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (value.data as Array<any>).map(TerritoryAvailabilityToJSON),
        included: value.included === undefined ? undefined : (value.included as Array<any>).map(TerritoryToJSON),
        links: PagedDocumentLinksToJSON(value.links),
        meta: PagingInformationToJSON(value.meta)
    };
}
