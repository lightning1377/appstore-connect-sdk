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
import type { AppAvailabilityResponseIncludedInner } from "./AppAvailabilityResponseIncludedInner";
import { AppAvailabilityResponseIncludedInnerFromJSON, AppAvailabilityResponseIncludedInnerFromJSONTyped, AppAvailabilityResponseIncludedInnerToJSON } from "./AppAvailabilityResponseIncludedInner";
import type { AppPricePointV3 } from "./AppPricePointV3";
import { AppPricePointV3FromJSON, AppPricePointV3FromJSONTyped, AppPricePointV3ToJSON } from "./AppPricePointV3";
import type { PagedDocumentLinks } from "./PagedDocumentLinks";
import { PagedDocumentLinksFromJSON, PagedDocumentLinksFromJSONTyped, PagedDocumentLinksToJSON } from "./PagedDocumentLinks";
import type { PagingInformation } from "./PagingInformation";
import { PagingInformationFromJSON, PagingInformationFromJSONTyped, PagingInformationToJSON } from "./PagingInformation";

/**
 *
 * @export
 * @interface AppPricePointsV3Response
 */
export interface AppPricePointsV3Response {
    /**
     *
     * @type {Array<AppPricePointV3>}
     * @memberof AppPricePointsV3Response
     */
    data: Array<AppPricePointV3>;
    /**
     *
     * @type {Array<AppAvailabilityResponseIncludedInner>}
     * @memberof AppPricePointsV3Response
     */
    included?: Array<AppAvailabilityResponseIncludedInner>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof AppPricePointsV3Response
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof AppPricePointsV3Response
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the AppPricePointsV3Response interface.
 */
export function instanceOfAppPricePointsV3Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppPricePointsV3ResponseFromJSON(json: any): AppPricePointsV3Response {
    return AppPricePointsV3ResponseFromJSONTyped(json, false);
}

export function AppPricePointsV3ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPricePointsV3Response {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (json["data"] as Array<any>).map(AppPricePointV3FromJSON),
        included: !exists(json, "included") ? undefined : (json["included"] as Array<any>).map(AppAvailabilityResponseIncludedInnerFromJSON),
        links: PagedDocumentLinksFromJSON(json["links"]),
        meta: !exists(json, "meta") ? undefined : PagingInformationFromJSON(json["meta"])
    };
}

export function AppPricePointsV3ResponseToJSON(value?: AppPricePointsV3Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (value.data as Array<any>).map(AppPricePointV3ToJSON),
        included: value.included === undefined ? undefined : (value.included as Array<any>).map(AppAvailabilityResponseIncludedInnerToJSON),
        links: PagedDocumentLinksToJSON(value.links),
        meta: PagingInformationToJSON(value.meta)
    };
}
