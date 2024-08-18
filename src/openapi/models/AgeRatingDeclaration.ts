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
import type { AgeRatingDeclarationAttributes } from "./AgeRatingDeclarationAttributes";
import { AgeRatingDeclarationAttributesFromJSON, AgeRatingDeclarationAttributesFromJSONTyped, AgeRatingDeclarationAttributesToJSON } from "./AgeRatingDeclarationAttributes";
import type { ResourceLinks } from "./ResourceLinks";
import { ResourceLinksFromJSON, ResourceLinksFromJSONTyped, ResourceLinksToJSON } from "./ResourceLinks";

/**
 *
 * @export
 * @interface AgeRatingDeclaration
 */
export interface AgeRatingDeclaration {
    /**
     *
     * @type {string}
     * @memberof AgeRatingDeclaration
     */
    type: AgeRatingDeclarationTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AgeRatingDeclaration
     */
    id: string;
    /**
     *
     * @type {AgeRatingDeclarationAttributes}
     * @memberof AgeRatingDeclaration
     */
    attributes?: AgeRatingDeclarationAttributes;
    /**
     *
     * @type {ResourceLinks}
     * @memberof AgeRatingDeclaration
     */
    links?: ResourceLinks;
}

/**
 * @export
 */
export const AgeRatingDeclarationTypeEnum = {
    AgeRatingDeclarations: "ageRatingDeclarations"
} as const;
export type AgeRatingDeclarationTypeEnum = (typeof AgeRatingDeclarationTypeEnum)[keyof typeof AgeRatingDeclarationTypeEnum];

/**
 * Check if a given object implements the AgeRatingDeclaration interface.
 */
export function instanceOfAgeRatingDeclaration(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AgeRatingDeclarationFromJSON(json: any): AgeRatingDeclaration {
    return AgeRatingDeclarationFromJSONTyped(json, false);
}

export function AgeRatingDeclarationFromJSONTyped(json: any, ignoreDiscriminator: boolean): AgeRatingDeclaration {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !exists(json, "attributes") ? undefined : AgeRatingDeclarationAttributesFromJSON(json["attributes"]),
        links: !exists(json, "links") ? undefined : ResourceLinksFromJSON(json["links"])
    };
}

export function AgeRatingDeclarationToJSON(value?: AgeRatingDeclaration | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: AgeRatingDeclarationAttributesToJSON(value.attributes),
        links: ResourceLinksToJSON(value.links)
    };
}
