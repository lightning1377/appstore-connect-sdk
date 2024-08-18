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
import type { AlternativeDistributionDomainAttributes } from "./AlternativeDistributionDomainAttributes";
import { AlternativeDistributionDomainAttributesFromJSON, AlternativeDistributionDomainAttributesFromJSONTyped, AlternativeDistributionDomainAttributesToJSON } from "./AlternativeDistributionDomainAttributes";
import type { ResourceLinks } from "./ResourceLinks";
import { ResourceLinksFromJSON, ResourceLinksFromJSONTyped, ResourceLinksToJSON } from "./ResourceLinks";

/**
 *
 * @export
 * @interface AlternativeDistributionDomain
 */
export interface AlternativeDistributionDomain {
    /**
     *
     * @type {string}
     * @memberof AlternativeDistributionDomain
     */
    type: AlternativeDistributionDomainTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AlternativeDistributionDomain
     */
    id: string;
    /**
     *
     * @type {AlternativeDistributionDomainAttributes}
     * @memberof AlternativeDistributionDomain
     */
    attributes?: AlternativeDistributionDomainAttributes;
    /**
     *
     * @type {ResourceLinks}
     * @memberof AlternativeDistributionDomain
     */
    links?: ResourceLinks;
}

/**
 * @export
 */
export const AlternativeDistributionDomainTypeEnum = {
    AlternativeDistributionDomains: "alternativeDistributionDomains"
} as const;
export type AlternativeDistributionDomainTypeEnum = (typeof AlternativeDistributionDomainTypeEnum)[keyof typeof AlternativeDistributionDomainTypeEnum];

/**
 * Check if a given object implements the AlternativeDistributionDomain interface.
 */
export function instanceOfAlternativeDistributionDomain(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AlternativeDistributionDomainFromJSON(json: any): AlternativeDistributionDomain {
    return AlternativeDistributionDomainFromJSONTyped(json, false);
}

export function AlternativeDistributionDomainFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlternativeDistributionDomain {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !exists(json, "attributes") ? undefined : AlternativeDistributionDomainAttributesFromJSON(json["attributes"]),
        links: !exists(json, "links") ? undefined : ResourceLinksFromJSON(json["links"])
    };
}

export function AlternativeDistributionDomainToJSON(value?: AlternativeDistributionDomain | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: AlternativeDistributionDomainAttributesToJSON(value.attributes),
        links: ResourceLinksToJSON(value.links)
    };
}
