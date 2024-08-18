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
import type { ScmProvider } from "./ScmProvider";
import { ScmProviderFromJSON, ScmProviderFromJSONTyped, ScmProviderToJSON } from "./ScmProvider";

/**
 *
 * @export
 * @interface ScmProviderResponse
 */
export interface ScmProviderResponse {
    /**
     *
     * @type {ScmProvider}
     * @memberof ScmProviderResponse
     */
    data: ScmProvider;
    /**
     *
     * @type {DocumentLinks}
     * @memberof ScmProviderResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the ScmProviderResponse interface.
 */
export function instanceOfScmProviderResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function ScmProviderResponseFromJSON(json: any): ScmProviderResponse {
    return ScmProviderResponseFromJSONTyped(json, false);
}

export function ScmProviderResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScmProviderResponse {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: ScmProviderFromJSON(json["data"]),
        links: DocumentLinksFromJSON(json["links"])
    };
}

export function ScmProviderResponseToJSON(value?: ScmProviderResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: ScmProviderToJSON(value.data),
        links: DocumentLinksToJSON(value.links)
    };
}
