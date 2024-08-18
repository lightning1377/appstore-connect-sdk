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
import type { AlternativeDistributionPackageVersionAttributes } from "./AlternativeDistributionPackageVersionAttributes";
import { AlternativeDistributionPackageVersionAttributesFromJSON, AlternativeDistributionPackageVersionAttributesFromJSONTyped, AlternativeDistributionPackageVersionAttributesToJSON } from "./AlternativeDistributionPackageVersionAttributes";
import type { AlternativeDistributionPackageVersionRelationships } from "./AlternativeDistributionPackageVersionRelationships";
import { AlternativeDistributionPackageVersionRelationshipsFromJSON, AlternativeDistributionPackageVersionRelationshipsFromJSONTyped, AlternativeDistributionPackageVersionRelationshipsToJSON } from "./AlternativeDistributionPackageVersionRelationships";
import type { ResourceLinks } from "./ResourceLinks";
import { ResourceLinksFromJSON, ResourceLinksFromJSONTyped, ResourceLinksToJSON } from "./ResourceLinks";

/**
 *
 * @export
 * @interface AlternativeDistributionPackageVersion
 */
export interface AlternativeDistributionPackageVersion {
    /**
     *
     * @type {string}
     * @memberof AlternativeDistributionPackageVersion
     */
    type: AlternativeDistributionPackageVersionTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AlternativeDistributionPackageVersion
     */
    id: string;
    /**
     *
     * @type {AlternativeDistributionPackageVersionAttributes}
     * @memberof AlternativeDistributionPackageVersion
     */
    attributes?: AlternativeDistributionPackageVersionAttributes;
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationships}
     * @memberof AlternativeDistributionPackageVersion
     */
    relationships?: AlternativeDistributionPackageVersionRelationships;
    /**
     *
     * @type {ResourceLinks}
     * @memberof AlternativeDistributionPackageVersion
     */
    links?: ResourceLinks;
}

/**
 * @export
 */
export const AlternativeDistributionPackageVersionTypeEnum = {
    AlternativeDistributionPackageVersions: "alternativeDistributionPackageVersions"
} as const;
export type AlternativeDistributionPackageVersionTypeEnum = (typeof AlternativeDistributionPackageVersionTypeEnum)[keyof typeof AlternativeDistributionPackageVersionTypeEnum];

/**
 * Check if a given object implements the AlternativeDistributionPackageVersion interface.
 */
export function instanceOfAlternativeDistributionPackageVersion(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AlternativeDistributionPackageVersionFromJSON(json: any): AlternativeDistributionPackageVersion {
    return AlternativeDistributionPackageVersionFromJSONTyped(json, false);
}

export function AlternativeDistributionPackageVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlternativeDistributionPackageVersion {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !exists(json, "attributes") ? undefined : AlternativeDistributionPackageVersionAttributesFromJSON(json["attributes"]),
        relationships: !exists(json, "relationships") ? undefined : AlternativeDistributionPackageVersionRelationshipsFromJSON(json["relationships"]),
        links: !exists(json, "links") ? undefined : ResourceLinksFromJSON(json["links"])
    };
}

export function AlternativeDistributionPackageVersionToJSON(value?: AlternativeDistributionPackageVersion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: AlternativeDistributionPackageVersionAttributesToJSON(value.attributes),
        relationships: AlternativeDistributionPackageVersionRelationshipsToJSON(value.relationships),
        links: ResourceLinksToJSON(value.links)
    };
}
