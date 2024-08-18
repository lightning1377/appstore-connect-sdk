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
import type { AppEventScreenshotRelationships } from "./AppEventScreenshotRelationships";
import { AppEventScreenshotRelationshipsFromJSON, AppEventScreenshotRelationshipsFromJSONTyped, AppEventScreenshotRelationshipsToJSON } from "./AppEventScreenshotRelationships";
import type { AppEventVideoClipAttributes } from "./AppEventVideoClipAttributes";
import { AppEventVideoClipAttributesFromJSON, AppEventVideoClipAttributesFromJSONTyped, AppEventVideoClipAttributesToJSON } from "./AppEventVideoClipAttributes";
import type { ResourceLinks } from "./ResourceLinks";
import { ResourceLinksFromJSON, ResourceLinksFromJSONTyped, ResourceLinksToJSON } from "./ResourceLinks";

/**
 *
 * @export
 * @interface AppEventVideoClip
 */
export interface AppEventVideoClip {
    /**
     *
     * @type {string}
     * @memberof AppEventVideoClip
     */
    type: AppEventVideoClipTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppEventVideoClip
     */
    id: string;
    /**
     *
     * @type {AppEventVideoClipAttributes}
     * @memberof AppEventVideoClip
     */
    attributes?: AppEventVideoClipAttributes;
    /**
     *
     * @type {AppEventScreenshotRelationships}
     * @memberof AppEventVideoClip
     */
    relationships?: AppEventScreenshotRelationships;
    /**
     *
     * @type {ResourceLinks}
     * @memberof AppEventVideoClip
     */
    links?: ResourceLinks;
}

/**
 * @export
 */
export const AppEventVideoClipTypeEnum = {
    AppEventVideoClips: "appEventVideoClips"
} as const;
export type AppEventVideoClipTypeEnum = (typeof AppEventVideoClipTypeEnum)[keyof typeof AppEventVideoClipTypeEnum];

/**
 * Check if a given object implements the AppEventVideoClip interface.
 */
export function instanceOfAppEventVideoClip(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppEventVideoClipFromJSON(json: any): AppEventVideoClip {
    return AppEventVideoClipFromJSONTyped(json, false);
}

export function AppEventVideoClipFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventVideoClip {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !exists(json, "attributes") ? undefined : AppEventVideoClipAttributesFromJSON(json["attributes"]),
        relationships: !exists(json, "relationships") ? undefined : AppEventScreenshotRelationshipsFromJSON(json["relationships"]),
        links: !exists(json, "links") ? undefined : ResourceLinksFromJSON(json["links"])
    };
}

export function AppEventVideoClipToJSON(value?: AppEventVideoClip | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: AppEventVideoClipAttributesToJSON(value.attributes),
        relationships: AppEventScreenshotRelationshipsToJSON(value.relationships),
        links: ResourceLinksToJSON(value.links)
    };
}
