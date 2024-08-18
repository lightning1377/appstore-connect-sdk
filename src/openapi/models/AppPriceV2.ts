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
import type { AppPriceV2Attributes } from "./AppPriceV2Attributes";
import { AppPriceV2AttributesFromJSON, AppPriceV2AttributesFromJSONTyped, AppPriceV2AttributesToJSON } from "./AppPriceV2Attributes";
import type { AppPriceV2Relationships } from "./AppPriceV2Relationships";
import { AppPriceV2RelationshipsFromJSON, AppPriceV2RelationshipsFromJSONTyped, AppPriceV2RelationshipsToJSON } from "./AppPriceV2Relationships";
import type { ResourceLinks } from "./ResourceLinks";
import { ResourceLinksFromJSON, ResourceLinksFromJSONTyped, ResourceLinksToJSON } from "./ResourceLinks";

/**
 *
 * @export
 * @interface AppPriceV2
 */
export interface AppPriceV2 {
    /**
     *
     * @type {string}
     * @memberof AppPriceV2
     */
    type: AppPriceV2TypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppPriceV2
     */
    id: string;
    /**
     *
     * @type {AppPriceV2Attributes}
     * @memberof AppPriceV2
     */
    attributes?: AppPriceV2Attributes;
    /**
     *
     * @type {AppPriceV2Relationships}
     * @memberof AppPriceV2
     */
    relationships?: AppPriceV2Relationships;
    /**
     *
     * @type {ResourceLinks}
     * @memberof AppPriceV2
     */
    links?: ResourceLinks;
}

/**
 * @export
 */
export const AppPriceV2TypeEnum = {
    AppPrices: "appPrices"
} as const;
export type AppPriceV2TypeEnum = (typeof AppPriceV2TypeEnum)[keyof typeof AppPriceV2TypeEnum];

/**
 * Check if a given object implements the AppPriceV2 interface.
 */
export function instanceOfAppPriceV2(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppPriceV2FromJSON(json: any): AppPriceV2 {
    return AppPriceV2FromJSONTyped(json, false);
}

export function AppPriceV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPriceV2 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !exists(json, "attributes") ? undefined : AppPriceV2AttributesFromJSON(json["attributes"]),
        relationships: !exists(json, "relationships") ? undefined : AppPriceV2RelationshipsFromJSON(json["relationships"]),
        links: !exists(json, "links") ? undefined : ResourceLinksFromJSON(json["links"])
    };
}

export function AppPriceV2ToJSON(value?: AppPriceV2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: AppPriceV2AttributesToJSON(value.attributes),
        relationships: AppPriceV2RelationshipsToJSON(value.relationships),
        links: ResourceLinksToJSON(value.links)
    };
}
