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
import type { CiArtifact } from "./CiArtifact";
import { CiArtifactFromJSON, CiArtifactFromJSONTyped, CiArtifactToJSON } from "./CiArtifact";
import type { DocumentLinks } from "./DocumentLinks";
import { DocumentLinksFromJSON, DocumentLinksFromJSONTyped, DocumentLinksToJSON } from "./DocumentLinks";

/**
 *
 * @export
 * @interface CiArtifactResponse
 */
export interface CiArtifactResponse {
    /**
     *
     * @type {CiArtifact}
     * @memberof CiArtifactResponse
     */
    data: CiArtifact;
    /**
     *
     * @type {DocumentLinks}
     * @memberof CiArtifactResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the CiArtifactResponse interface.
 */
export function instanceOfCiArtifactResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function CiArtifactResponseFromJSON(json: any): CiArtifactResponse {
    return CiArtifactResponseFromJSONTyped(json, false);
}

export function CiArtifactResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiArtifactResponse {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: CiArtifactFromJSON(json["data"]),
        links: DocumentLinksFromJSON(json["links"])
    };
}

export function CiArtifactResponseToJSON(value?: CiArtifactResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: CiArtifactToJSON(value.data),
        links: DocumentLinksToJSON(value.links)
    };
}
