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
import type { AppStoreVersionLocalizationAttributes } from "./AppStoreVersionLocalizationAttributes";
import { AppStoreVersionLocalizationAttributesFromJSON, AppStoreVersionLocalizationAttributesFromJSONTyped, AppStoreVersionLocalizationAttributesToJSON } from "./AppStoreVersionLocalizationAttributes";
import type { AppStoreVersionLocalizationRelationships } from "./AppStoreVersionLocalizationRelationships";
import { AppStoreVersionLocalizationRelationshipsFromJSON, AppStoreVersionLocalizationRelationshipsFromJSONTyped, AppStoreVersionLocalizationRelationshipsToJSON } from "./AppStoreVersionLocalizationRelationships";
import type { ResourceLinks } from "./ResourceLinks";
import { ResourceLinksFromJSON, ResourceLinksFromJSONTyped, ResourceLinksToJSON } from "./ResourceLinks";

/**
 *
 * @export
 * @interface AppStoreVersionLocalization
 */
export interface AppStoreVersionLocalization {
    /**
     *
     * @type {string}
     * @memberof AppStoreVersionLocalization
     */
    type: AppStoreVersionLocalizationTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppStoreVersionLocalization
     */
    id: string;
    /**
     *
     * @type {AppStoreVersionLocalizationAttributes}
     * @memberof AppStoreVersionLocalization
     */
    attributes?: AppStoreVersionLocalizationAttributes;
    /**
     *
     * @type {AppStoreVersionLocalizationRelationships}
     * @memberof AppStoreVersionLocalization
     */
    relationships?: AppStoreVersionLocalizationRelationships;
    /**
     *
     * @type {ResourceLinks}
     * @memberof AppStoreVersionLocalization
     */
    links?: ResourceLinks;
}

/**
 * @export
 */
export const AppStoreVersionLocalizationTypeEnum = {
    AppStoreVersionLocalizations: "appStoreVersionLocalizations"
} as const;
export type AppStoreVersionLocalizationTypeEnum = (typeof AppStoreVersionLocalizationTypeEnum)[keyof typeof AppStoreVersionLocalizationTypeEnum];

/**
 * Check if a given object implements the AppStoreVersionLocalization interface.
 */
export function instanceOfAppStoreVersionLocalization(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppStoreVersionLocalizationFromJSON(json: any): AppStoreVersionLocalization {
    return AppStoreVersionLocalizationFromJSONTyped(json, false);
}

export function AppStoreVersionLocalizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionLocalization {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !exists(json, "attributes") ? undefined : AppStoreVersionLocalizationAttributesFromJSON(json["attributes"]),
        relationships: !exists(json, "relationships") ? undefined : AppStoreVersionLocalizationRelationshipsFromJSON(json["relationships"]),
        links: !exists(json, "links") ? undefined : ResourceLinksFromJSON(json["links"])
    };
}

export function AppStoreVersionLocalizationToJSON(value?: AppStoreVersionLocalization | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: AppStoreVersionLocalizationAttributesToJSON(value.attributes),
        relationships: AppStoreVersionLocalizationRelationshipsToJSON(value.relationships),
        links: ResourceLinksToJSON(value.links)
    };
}
