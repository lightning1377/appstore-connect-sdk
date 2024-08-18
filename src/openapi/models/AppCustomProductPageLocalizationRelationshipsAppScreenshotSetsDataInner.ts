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
 * @interface AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInner
 */
export interface AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInner {
    /**
     *
     * @type {string}
     * @memberof AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInner
     */
    type: AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInnerTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInner
     */
    id: string;
}

/**
 * @export
 */
export const AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInnerTypeEnum = {
    AppScreenshotSets: "appScreenshotSets"
} as const;
export type AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInnerTypeEnum = (typeof AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInnerTypeEnum)[keyof typeof AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInnerTypeEnum];

/**
 * Check if a given object implements the AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInner interface.
 */
export function instanceOfAppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInnerFromJSON(json: any): AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInner {
    return AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInnerFromJSONTyped(json, false);
}

export function AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInner {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"]
    };
}

export function AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInnerToJSON(value?: AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInner | null): any {
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
