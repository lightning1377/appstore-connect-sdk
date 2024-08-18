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
import type { AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersion } from "./AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersion";
import { AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionFromJSON, AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionFromJSONTyped, AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionToJSON } from "./AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersion";
import type { AppCustomProductPageLocalizationRelationshipsAppPreviewSets } from "./AppCustomProductPageLocalizationRelationshipsAppPreviewSets";
import { AppCustomProductPageLocalizationRelationshipsAppPreviewSetsFromJSON, AppCustomProductPageLocalizationRelationshipsAppPreviewSetsFromJSONTyped, AppCustomProductPageLocalizationRelationshipsAppPreviewSetsToJSON } from "./AppCustomProductPageLocalizationRelationshipsAppPreviewSets";
import type { AppCustomProductPageLocalizationRelationshipsAppScreenshotSets } from "./AppCustomProductPageLocalizationRelationshipsAppScreenshotSets";
import { AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsFromJSON, AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsFromJSONTyped, AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsToJSON } from "./AppCustomProductPageLocalizationRelationshipsAppScreenshotSets";

/**
 *
 * @export
 * @interface AppCustomProductPageLocalizationRelationships
 */
export interface AppCustomProductPageLocalizationRelationships {
    /**
     *
     * @type {AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersion}
     * @memberof AppCustomProductPageLocalizationRelationships
     */
    appCustomProductPageVersion?: AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersion;
    /**
     *
     * @type {AppCustomProductPageLocalizationRelationshipsAppScreenshotSets}
     * @memberof AppCustomProductPageLocalizationRelationships
     */
    appScreenshotSets?: AppCustomProductPageLocalizationRelationshipsAppScreenshotSets;
    /**
     *
     * @type {AppCustomProductPageLocalizationRelationshipsAppPreviewSets}
     * @memberof AppCustomProductPageLocalizationRelationships
     */
    appPreviewSets?: AppCustomProductPageLocalizationRelationshipsAppPreviewSets;
}

/**
 * Check if a given object implements the AppCustomProductPageLocalizationRelationships interface.
 */
export function instanceOfAppCustomProductPageLocalizationRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppCustomProductPageLocalizationRelationshipsFromJSON(json: any): AppCustomProductPageLocalizationRelationships {
    return AppCustomProductPageLocalizationRelationshipsFromJSONTyped(json, false);
}

export function AppCustomProductPageLocalizationRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageLocalizationRelationships {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        appCustomProductPageVersion: !exists(json, "appCustomProductPageVersion") ? undefined : AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionFromJSON(json["appCustomProductPageVersion"]),
        appScreenshotSets: !exists(json, "appScreenshotSets") ? undefined : AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsFromJSON(json["appScreenshotSets"]),
        appPreviewSets: !exists(json, "appPreviewSets") ? undefined : AppCustomProductPageLocalizationRelationshipsAppPreviewSetsFromJSON(json["appPreviewSets"])
    };
}

export function AppCustomProductPageLocalizationRelationshipsToJSON(value?: AppCustomProductPageLocalizationRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        appCustomProductPageVersion: AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionToJSON(value.appCustomProductPageVersion),
        appScreenshotSets: AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsToJSON(value.appScreenshotSets),
        appPreviewSets: AppCustomProductPageLocalizationRelationshipsAppPreviewSetsToJSON(value.appPreviewSets)
    };
}
