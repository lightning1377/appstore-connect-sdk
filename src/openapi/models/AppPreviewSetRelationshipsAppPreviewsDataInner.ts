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
 * @interface AppPreviewSetRelationshipsAppPreviewsDataInner
 */
export interface AppPreviewSetRelationshipsAppPreviewsDataInner {
    /**
     *
     * @type {string}
     * @memberof AppPreviewSetRelationshipsAppPreviewsDataInner
     */
    type: AppPreviewSetRelationshipsAppPreviewsDataInnerTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppPreviewSetRelationshipsAppPreviewsDataInner
     */
    id: string;
}

/**
 * @export
 */
export const AppPreviewSetRelationshipsAppPreviewsDataInnerTypeEnum = {
    AppPreviews: "appPreviews"
} as const;
export type AppPreviewSetRelationshipsAppPreviewsDataInnerTypeEnum = (typeof AppPreviewSetRelationshipsAppPreviewsDataInnerTypeEnum)[keyof typeof AppPreviewSetRelationshipsAppPreviewsDataInnerTypeEnum];

/**
 * Check if a given object implements the AppPreviewSetRelationshipsAppPreviewsDataInner interface.
 */
export function instanceOfAppPreviewSetRelationshipsAppPreviewsDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppPreviewSetRelationshipsAppPreviewsDataInnerFromJSON(json: any): AppPreviewSetRelationshipsAppPreviewsDataInner {
    return AppPreviewSetRelationshipsAppPreviewsDataInnerFromJSONTyped(json, false);
}

export function AppPreviewSetRelationshipsAppPreviewsDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreviewSetRelationshipsAppPreviewsDataInner {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"]
    };
}

export function AppPreviewSetRelationshipsAppPreviewsDataInnerToJSON(value?: AppPreviewSetRelationshipsAppPreviewsDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id
    };
}
