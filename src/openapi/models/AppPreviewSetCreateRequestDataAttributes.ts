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
import type { PreviewType } from "./PreviewType";
import { PreviewTypeFromJSON, PreviewTypeFromJSONTyped, PreviewTypeToJSON } from "./PreviewType";

/**
 *
 * @export
 * @interface AppPreviewSetCreateRequestDataAttributes
 */
export interface AppPreviewSetCreateRequestDataAttributes {
    /**
     *
     * @type {PreviewType}
     * @memberof AppPreviewSetCreateRequestDataAttributes
     */
    previewType: PreviewType;
}

/**
 * Check if a given object implements the AppPreviewSetCreateRequestDataAttributes interface.
 */
export function instanceOfAppPreviewSetCreateRequestDataAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "previewType" in value;

    return isInstance;
}

export function AppPreviewSetCreateRequestDataAttributesFromJSON(json: any): AppPreviewSetCreateRequestDataAttributes {
    return AppPreviewSetCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function AppPreviewSetCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreviewSetCreateRequestDataAttributes {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        previewType: PreviewTypeFromJSON(json["previewType"])
    };
}

export function AppPreviewSetCreateRequestDataAttributesToJSON(value?: AppPreviewSetCreateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        previewType: PreviewTypeToJSON(value.previewType)
    };
}
