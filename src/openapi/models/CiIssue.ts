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
import type { CiIssueAttributes } from "./CiIssueAttributes";
import { CiIssueAttributesFromJSON, CiIssueAttributesFromJSONTyped, CiIssueAttributesToJSON } from "./CiIssueAttributes";
import type { ResourceLinks } from "./ResourceLinks";
import { ResourceLinksFromJSON, ResourceLinksFromJSONTyped, ResourceLinksToJSON } from "./ResourceLinks";

/**
 *
 * @export
 * @interface CiIssue
 */
export interface CiIssue {
    /**
     *
     * @type {string}
     * @memberof CiIssue
     */
    type: CiIssueTypeEnum;
    /**
     *
     * @type {string}
     * @memberof CiIssue
     */
    id: string;
    /**
     *
     * @type {CiIssueAttributes}
     * @memberof CiIssue
     */
    attributes?: CiIssueAttributes;
    /**
     *
     * @type {ResourceLinks}
     * @memberof CiIssue
     */
    links?: ResourceLinks;
}

/**
 * @export
 */
export const CiIssueTypeEnum = {
    CiIssues: "ciIssues"
} as const;
export type CiIssueTypeEnum = (typeof CiIssueTypeEnum)[keyof typeof CiIssueTypeEnum];

/**
 * Check if a given object implements the CiIssue interface.
 */
export function instanceOfCiIssue(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function CiIssueFromJSON(json: any): CiIssue {
    return CiIssueFromJSONTyped(json, false);
}

export function CiIssueFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiIssue {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !exists(json, "attributes") ? undefined : CiIssueAttributesFromJSON(json["attributes"]),
        links: !exists(json, "links") ? undefined : ResourceLinksFromJSON(json["links"])
    };
}

export function CiIssueToJSON(value?: CiIssue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: CiIssueAttributesToJSON(value.attributes),
        links: ResourceLinksToJSON(value.links)
    };
}
