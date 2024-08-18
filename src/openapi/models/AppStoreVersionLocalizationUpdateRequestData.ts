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
import type { AppStoreVersionLocalizationUpdateRequestDataAttributes } from "./AppStoreVersionLocalizationUpdateRequestDataAttributes";
import { AppStoreVersionLocalizationUpdateRequestDataAttributesFromJSON, AppStoreVersionLocalizationUpdateRequestDataAttributesFromJSONTyped, AppStoreVersionLocalizationUpdateRequestDataAttributesToJSON } from "./AppStoreVersionLocalizationUpdateRequestDataAttributes";

/**
 *
 * @export
 * @interface AppStoreVersionLocalizationUpdateRequestData
 */
export interface AppStoreVersionLocalizationUpdateRequestData {
    /**
     *
     * @type {string}
     * @memberof AppStoreVersionLocalizationUpdateRequestData
     */
    type: AppStoreVersionLocalizationUpdateRequestDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppStoreVersionLocalizationUpdateRequestData
     */
    id: string;
    /**
     *
     * @type {AppStoreVersionLocalizationUpdateRequestDataAttributes}
     * @memberof AppStoreVersionLocalizationUpdateRequestData
     */
    attributes?: AppStoreVersionLocalizationUpdateRequestDataAttributes;
}

/**
 * @export
 */
export const AppStoreVersionLocalizationUpdateRequestDataTypeEnum = {
    AppStoreVersionLocalizations: "appStoreVersionLocalizations"
} as const;
export type AppStoreVersionLocalizationUpdateRequestDataTypeEnum = (typeof AppStoreVersionLocalizationUpdateRequestDataTypeEnum)[keyof typeof AppStoreVersionLocalizationUpdateRequestDataTypeEnum];

/**
 * Check if a given object implements the AppStoreVersionLocalizationUpdateRequestData interface.
 */
export function instanceOfAppStoreVersionLocalizationUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppStoreVersionLocalizationUpdateRequestDataFromJSON(json: any): AppStoreVersionLocalizationUpdateRequestData {
    return AppStoreVersionLocalizationUpdateRequestDataFromJSONTyped(json, false);
}

export function AppStoreVersionLocalizationUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionLocalizationUpdateRequestData {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !exists(json, "attributes") ? undefined : AppStoreVersionLocalizationUpdateRequestDataAttributesFromJSON(json["attributes"])
    };
}

export function AppStoreVersionLocalizationUpdateRequestDataToJSON(value?: AppStoreVersionLocalizationUpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: AppStoreVersionLocalizationUpdateRequestDataAttributesToJSON(value.attributes)
    };
}
