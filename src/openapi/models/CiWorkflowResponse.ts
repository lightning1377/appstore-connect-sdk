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
import type { CiWorkflow } from "./CiWorkflow";
import { CiWorkflowFromJSON, CiWorkflowFromJSONTyped, CiWorkflowToJSON } from "./CiWorkflow";
import type { CiWorkflowsResponseIncludedInner } from "./CiWorkflowsResponseIncludedInner";
import { CiWorkflowsResponseIncludedInnerFromJSON, CiWorkflowsResponseIncludedInnerFromJSONTyped, CiWorkflowsResponseIncludedInnerToJSON } from "./CiWorkflowsResponseIncludedInner";
import type { DocumentLinks } from "./DocumentLinks";
import { DocumentLinksFromJSON, DocumentLinksFromJSONTyped, DocumentLinksToJSON } from "./DocumentLinks";

/**
 *
 * @export
 * @interface CiWorkflowResponse
 */
export interface CiWorkflowResponse {
    /**
     *
     * @type {CiWorkflow}
     * @memberof CiWorkflowResponse
     */
    data: CiWorkflow;
    /**
     *
     * @type {Array<CiWorkflowsResponseIncludedInner>}
     * @memberof CiWorkflowResponse
     */
    included?: Array<CiWorkflowsResponseIncludedInner>;
    /**
     *
     * @type {DocumentLinks}
     * @memberof CiWorkflowResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the CiWorkflowResponse interface.
 */
export function instanceOfCiWorkflowResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function CiWorkflowResponseFromJSON(json: any): CiWorkflowResponse {
    return CiWorkflowResponseFromJSONTyped(json, false);
}

export function CiWorkflowResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiWorkflowResponse {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: CiWorkflowFromJSON(json["data"]),
        included: !exists(json, "included") ? undefined : (json["included"] as Array<any>).map(CiWorkflowsResponseIncludedInnerFromJSON),
        links: DocumentLinksFromJSON(json["links"])
    };
}

export function CiWorkflowResponseToJSON(value?: CiWorkflowResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: CiWorkflowToJSON(value.data),
        included: value.included === undefined ? undefined : (value.included as Array<any>).map(CiWorkflowsResponseIncludedInnerToJSON),
        links: DocumentLinksToJSON(value.links)
    };
}
