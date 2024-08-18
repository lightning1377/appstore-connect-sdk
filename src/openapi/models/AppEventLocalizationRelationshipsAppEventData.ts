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
 * @interface AppEventLocalizationRelationshipsAppEventData
 */
export interface AppEventLocalizationRelationshipsAppEventData {
    /**
     *
     * @type {string}
     * @memberof AppEventLocalizationRelationshipsAppEventData
     */
    type: AppEventLocalizationRelationshipsAppEventDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppEventLocalizationRelationshipsAppEventData
     */
    id: string;
}

/**
 * @export
 */
export const AppEventLocalizationRelationshipsAppEventDataTypeEnum = {
    AppEvents: "appEvents"
} as const;
export type AppEventLocalizationRelationshipsAppEventDataTypeEnum = (typeof AppEventLocalizationRelationshipsAppEventDataTypeEnum)[keyof typeof AppEventLocalizationRelationshipsAppEventDataTypeEnum];

/**
 * Check if a given object implements the AppEventLocalizationRelationshipsAppEventData interface.
 */
export function instanceOfAppEventLocalizationRelationshipsAppEventData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppEventLocalizationRelationshipsAppEventDataFromJSON(json: any): AppEventLocalizationRelationshipsAppEventData {
    return AppEventLocalizationRelationshipsAppEventDataFromJSONTyped(json, false);
}

export function AppEventLocalizationRelationshipsAppEventDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventLocalizationRelationshipsAppEventData {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"]
    };
}

export function AppEventLocalizationRelationshipsAppEventDataToJSON(value?: AppEventLocalizationRelationshipsAppEventData | null): any {
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
