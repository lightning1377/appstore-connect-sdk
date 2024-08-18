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
/**
 *
 * @export
 * @interface DocumentLinks
 */
export interface DocumentLinks {
    /**
     *
     * @type {string}
     * @memberof DocumentLinks
     */
    self: string;
}

/**
 * Check if a given object implements the DocumentLinks interface.
 */
export function instanceOfDocumentLinks(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "self" in value;

    return isInstance;
}

export function DocumentLinksFromJSON(json: any): DocumentLinks {
    return DocumentLinksFromJSONTyped(json, false);
}

export function DocumentLinksFromJSONTyped(json: any, ignoreDiscriminator: boolean): DocumentLinks {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        self: json["self"]
    };
}

export function DocumentLinksToJSON(value?: DocumentLinks | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        self: value.self
    };
}
