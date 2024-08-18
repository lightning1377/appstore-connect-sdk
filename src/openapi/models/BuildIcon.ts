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
import type { BuildIconAttributes } from "./BuildIconAttributes";
import { BuildIconAttributesFromJSON, BuildIconAttributesFromJSONTyped, BuildIconAttributesToJSON } from "./BuildIconAttributes";
import type { ResourceLinks } from "./ResourceLinks";
import { ResourceLinksFromJSON, ResourceLinksFromJSONTyped, ResourceLinksToJSON } from "./ResourceLinks";

/**
 *
 * @export
 * @interface BuildIcon
 */
export interface BuildIcon {
    /**
     *
     * @type {string}
     * @memberof BuildIcon
     */
    type: BuildIconTypeEnum;
    /**
     *
     * @type {string}
     * @memberof BuildIcon
     */
    id: string;
    /**
     *
     * @type {BuildIconAttributes}
     * @memberof BuildIcon
     */
    attributes?: BuildIconAttributes;
    /**
     *
     * @type {ResourceLinks}
     * @memberof BuildIcon
     */
    links?: ResourceLinks;
}

/**
 * @export
 */
export const BuildIconTypeEnum = {
    BuildIcons: "buildIcons"
} as const;
export type BuildIconTypeEnum = (typeof BuildIconTypeEnum)[keyof typeof BuildIconTypeEnum];

/**
 * Check if a given object implements the BuildIcon interface.
 */
export function instanceOfBuildIcon(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function BuildIconFromJSON(json: any): BuildIcon {
    return BuildIconFromJSONTyped(json, false);
}

export function BuildIconFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildIcon {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !exists(json, "attributes") ? undefined : BuildIconAttributesFromJSON(json["attributes"]),
        links: !exists(json, "links") ? undefined : ResourceLinksFromJSON(json["links"])
    };
}

export function BuildIconToJSON(value?: BuildIcon | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: BuildIconAttributesToJSON(value.attributes),
        links: ResourceLinksToJSON(value.links)
    };
}
