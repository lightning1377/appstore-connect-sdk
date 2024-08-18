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
import type { InAppPurchasePriceInlineCreateAttributes } from "./InAppPurchasePriceInlineCreateAttributes";
import { InAppPurchasePriceInlineCreateAttributesFromJSON, InAppPurchasePriceInlineCreateAttributesFromJSONTyped, InAppPurchasePriceInlineCreateAttributesToJSON } from "./InAppPurchasePriceInlineCreateAttributes";
import type { InAppPurchasePriceInlineCreateRelationships } from "./InAppPurchasePriceInlineCreateRelationships";
import { InAppPurchasePriceInlineCreateRelationshipsFromJSON, InAppPurchasePriceInlineCreateRelationshipsFromJSONTyped, InAppPurchasePriceInlineCreateRelationshipsToJSON } from "./InAppPurchasePriceInlineCreateRelationships";

/**
 *
 * @export
 * @interface InAppPurchasePriceInlineCreate
 */
export interface InAppPurchasePriceInlineCreate {
    /**
     *
     * @type {string}
     * @memberof InAppPurchasePriceInlineCreate
     */
    type: InAppPurchasePriceInlineCreateTypeEnum;
    /**
     *
     * @type {string}
     * @memberof InAppPurchasePriceInlineCreate
     */
    id?: string;
    /**
     *
     * @type {InAppPurchasePriceInlineCreateAttributes}
     * @memberof InAppPurchasePriceInlineCreate
     */
    attributes?: InAppPurchasePriceInlineCreateAttributes;
    /**
     *
     * @type {InAppPurchasePriceInlineCreateRelationships}
     * @memberof InAppPurchasePriceInlineCreate
     */
    relationships?: InAppPurchasePriceInlineCreateRelationships;
}

/**
 * @export
 */
export const InAppPurchasePriceInlineCreateTypeEnum = {
    InAppPurchasePrices: "inAppPurchasePrices"
} as const;
export type InAppPurchasePriceInlineCreateTypeEnum = (typeof InAppPurchasePriceInlineCreateTypeEnum)[keyof typeof InAppPurchasePriceInlineCreateTypeEnum];

/**
 * Check if a given object implements the InAppPurchasePriceInlineCreate interface.
 */
export function instanceOfInAppPurchasePriceInlineCreate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function InAppPurchasePriceInlineCreateFromJSON(json: any): InAppPurchasePriceInlineCreate {
    return InAppPurchasePriceInlineCreateFromJSONTyped(json, false);
}

export function InAppPurchasePriceInlineCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchasePriceInlineCreate {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: !exists(json, "id") ? undefined : json["id"],
        attributes: !exists(json, "attributes") ? undefined : InAppPurchasePriceInlineCreateAttributesFromJSON(json["attributes"]),
        relationships: !exists(json, "relationships") ? undefined : InAppPurchasePriceInlineCreateRelationshipsFromJSON(json["relationships"])
    };
}

export function InAppPurchasePriceInlineCreateToJSON(value?: InAppPurchasePriceInlineCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: InAppPurchasePriceInlineCreateAttributesToJSON(value.attributes),
        relationships: InAppPurchasePriceInlineCreateRelationshipsToJSON(value.relationships)
    };
}
