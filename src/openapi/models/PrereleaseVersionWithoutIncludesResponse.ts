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
import type { DocumentLinks } from "./DocumentLinks";
import { DocumentLinksFromJSON, DocumentLinksFromJSONTyped, DocumentLinksToJSON } from "./DocumentLinks";
import type { PrereleaseVersion } from "./PrereleaseVersion";
import { PrereleaseVersionFromJSON, PrereleaseVersionFromJSONTyped, PrereleaseVersionToJSON } from "./PrereleaseVersion";

/**
 *
 * @export
 * @interface PrereleaseVersionWithoutIncludesResponse
 */
export interface PrereleaseVersionWithoutIncludesResponse {
    /**
     *
     * @type {PrereleaseVersion}
     * @memberof PrereleaseVersionWithoutIncludesResponse
     */
    data: PrereleaseVersion;
    /**
     *
     * @type {DocumentLinks}
     * @memberof PrereleaseVersionWithoutIncludesResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the PrereleaseVersionWithoutIncludesResponse interface.
 */
export function instanceOfPrereleaseVersionWithoutIncludesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function PrereleaseVersionWithoutIncludesResponseFromJSON(json: any): PrereleaseVersionWithoutIncludesResponse {
    return PrereleaseVersionWithoutIncludesResponseFromJSONTyped(json, false);
}

export function PrereleaseVersionWithoutIncludesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrereleaseVersionWithoutIncludesResponse {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: PrereleaseVersionFromJSON(json["data"]),
        links: DocumentLinksFromJSON(json["links"])
    };
}

export function PrereleaseVersionWithoutIncludesResponseToJSON(value?: PrereleaseVersionWithoutIncludesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: PrereleaseVersionToJSON(value.data),
        links: DocumentLinksToJSON(value.links)
    };
}
