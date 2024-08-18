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
import type { AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersion } from "./AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersion";
import { AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionFromJSON, AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionFromJSONTyped, AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionToJSON } from "./AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersion";
import type { AppCustomProductPageLocalizationRelationshipsAppPreviewSets } from "./AppCustomProductPageLocalizationRelationshipsAppPreviewSets";
import { AppCustomProductPageLocalizationRelationshipsAppPreviewSetsFromJSON, AppCustomProductPageLocalizationRelationshipsAppPreviewSetsFromJSONTyped, AppCustomProductPageLocalizationRelationshipsAppPreviewSetsToJSON } from "./AppCustomProductPageLocalizationRelationshipsAppPreviewSets";
import type { AppCustomProductPageLocalizationRelationshipsAppScreenshotSets } from "./AppCustomProductPageLocalizationRelationshipsAppScreenshotSets";
import { AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsFromJSON, AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsFromJSONTyped, AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsToJSON } from "./AppCustomProductPageLocalizationRelationshipsAppScreenshotSets";

/**
 *
 * @export
 * @interface AppStoreVersionLocalizationRelationships
 */
export interface AppStoreVersionLocalizationRelationships {
    /**
     *
     * @type {AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersion}
     * @memberof AppStoreVersionLocalizationRelationships
     */
    appStoreVersion?: AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersion;
    /**
     *
     * @type {AppCustomProductPageLocalizationRelationshipsAppScreenshotSets}
     * @memberof AppStoreVersionLocalizationRelationships
     */
    appScreenshotSets?: AppCustomProductPageLocalizationRelationshipsAppScreenshotSets;
    /**
     *
     * @type {AppCustomProductPageLocalizationRelationshipsAppPreviewSets}
     * @memberof AppStoreVersionLocalizationRelationships
     */
    appPreviewSets?: AppCustomProductPageLocalizationRelationshipsAppPreviewSets;
}

/**
 * Check if a given object implements the AppStoreVersionLocalizationRelationships interface.
 */
export function instanceOfAppStoreVersionLocalizationRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppStoreVersionLocalizationRelationshipsFromJSON(json: any): AppStoreVersionLocalizationRelationships {
    return AppStoreVersionLocalizationRelationshipsFromJSONTyped(json, false);
}

export function AppStoreVersionLocalizationRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionLocalizationRelationships {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        appStoreVersion: !exists(json, "appStoreVersion") ? undefined : AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionFromJSON(json["appStoreVersion"]),
        appScreenshotSets: !exists(json, "appScreenshotSets") ? undefined : AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsFromJSON(json["appScreenshotSets"]),
        appPreviewSets: !exists(json, "appPreviewSets") ? undefined : AppCustomProductPageLocalizationRelationshipsAppPreviewSetsFromJSON(json["appPreviewSets"])
    };
}

export function AppStoreVersionLocalizationRelationshipsToJSON(value?: AppStoreVersionLocalizationRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        appStoreVersion: AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionToJSON(value.appStoreVersion),
        appScreenshotSets: AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsToJSON(value.appScreenshotSets),
        appPreviewSets: AppCustomProductPageLocalizationRelationshipsAppPreviewSetsToJSON(value.appPreviewSets)
    };
}
