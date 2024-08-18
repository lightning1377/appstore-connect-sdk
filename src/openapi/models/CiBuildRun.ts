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
import type { CiBuildRunAttributes } from "./CiBuildRunAttributes";
import { CiBuildRunAttributesFromJSON, CiBuildRunAttributesFromJSONTyped, CiBuildRunAttributesToJSON } from "./CiBuildRunAttributes";
import type { CiBuildRunRelationships } from "./CiBuildRunRelationships";
import { CiBuildRunRelationshipsFromJSON, CiBuildRunRelationshipsFromJSONTyped, CiBuildRunRelationshipsToJSON } from "./CiBuildRunRelationships";
import type { ResourceLinks } from "./ResourceLinks";
import { ResourceLinksFromJSON, ResourceLinksFromJSONTyped, ResourceLinksToJSON } from "./ResourceLinks";

/**
 *
 * @export
 * @interface CiBuildRun
 */
export interface CiBuildRun {
    /**
     *
     * @type {string}
     * @memberof CiBuildRun
     */
    type: CiBuildRunTypeEnum;
    /**
     *
     * @type {string}
     * @memberof CiBuildRun
     */
    id: string;
    /**
     *
     * @type {CiBuildRunAttributes}
     * @memberof CiBuildRun
     */
    attributes?: CiBuildRunAttributes;
    /**
     *
     * @type {CiBuildRunRelationships}
     * @memberof CiBuildRun
     */
    relationships?: CiBuildRunRelationships;
    /**
     *
     * @type {ResourceLinks}
     * @memberof CiBuildRun
     */
    links?: ResourceLinks;
}

/**
 * @export
 */
export const CiBuildRunTypeEnum = {
    CiBuildRuns: "ciBuildRuns"
} as const;
export type CiBuildRunTypeEnum = (typeof CiBuildRunTypeEnum)[keyof typeof CiBuildRunTypeEnum];

/**
 * Check if a given object implements the CiBuildRun interface.
 */
export function instanceOfCiBuildRun(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function CiBuildRunFromJSON(json: any): CiBuildRun {
    return CiBuildRunFromJSONTyped(json, false);
}

export function CiBuildRunFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiBuildRun {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !exists(json, "attributes") ? undefined : CiBuildRunAttributesFromJSON(json["attributes"]),
        relationships: !exists(json, "relationships") ? undefined : CiBuildRunRelationshipsFromJSON(json["relationships"]),
        links: !exists(json, "links") ? undefined : ResourceLinksFromJSON(json["links"])
    };
}

export function CiBuildRunToJSON(value?: CiBuildRun | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: CiBuildRunAttributesToJSON(value.attributes),
        relationships: CiBuildRunRelationshipsToJSON(value.relationships),
        links: ResourceLinksToJSON(value.links)
    };
}
