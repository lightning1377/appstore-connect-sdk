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
import type { CiXcodeVersionAttributes } from "./CiXcodeVersionAttributes";
import { CiXcodeVersionAttributesFromJSON, CiXcodeVersionAttributesFromJSONTyped, CiXcodeVersionAttributesToJSON } from "./CiXcodeVersionAttributes";
import type { CiXcodeVersionRelationships } from "./CiXcodeVersionRelationships";
import { CiXcodeVersionRelationshipsFromJSON, CiXcodeVersionRelationshipsFromJSONTyped, CiXcodeVersionRelationshipsToJSON } from "./CiXcodeVersionRelationships";
import type { ResourceLinks } from "./ResourceLinks";
import { ResourceLinksFromJSON, ResourceLinksFromJSONTyped, ResourceLinksToJSON } from "./ResourceLinks";

/**
 *
 * @export
 * @interface CiXcodeVersion
 */
export interface CiXcodeVersion {
    /**
     *
     * @type {string}
     * @memberof CiXcodeVersion
     */
    type: CiXcodeVersionTypeEnum;
    /**
     *
     * @type {string}
     * @memberof CiXcodeVersion
     */
    id: string;
    /**
     *
     * @type {CiXcodeVersionAttributes}
     * @memberof CiXcodeVersion
     */
    attributes?: CiXcodeVersionAttributes;
    /**
     *
     * @type {CiXcodeVersionRelationships}
     * @memberof CiXcodeVersion
     */
    relationships?: CiXcodeVersionRelationships;
    /**
     *
     * @type {ResourceLinks}
     * @memberof CiXcodeVersion
     */
    links?: ResourceLinks;
}

/**
 * @export
 */
export const CiXcodeVersionTypeEnum = {
    CiXcodeVersions: "ciXcodeVersions"
} as const;
export type CiXcodeVersionTypeEnum = (typeof CiXcodeVersionTypeEnum)[keyof typeof CiXcodeVersionTypeEnum];

/**
 * Check if a given object implements the CiXcodeVersion interface.
 */
export function instanceOfCiXcodeVersion(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function CiXcodeVersionFromJSON(json: any): CiXcodeVersion {
    return CiXcodeVersionFromJSONTyped(json, false);
}

export function CiXcodeVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiXcodeVersion {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !exists(json, "attributes") ? undefined : CiXcodeVersionAttributesFromJSON(json["attributes"]),
        relationships: !exists(json, "relationships") ? undefined : CiXcodeVersionRelationshipsFromJSON(json["relationships"]),
        links: !exists(json, "links") ? undefined : ResourceLinksFromJSON(json["links"])
    };
}

export function CiXcodeVersionToJSON(value?: CiXcodeVersion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: CiXcodeVersionAttributesToJSON(value.attributes),
        relationships: CiXcodeVersionRelationshipsToJSON(value.relationships),
        links: ResourceLinksToJSON(value.links)
    };
}
