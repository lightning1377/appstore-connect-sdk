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
import type { AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInner } from "./AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInner";
import { AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInnerFromJSON, AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInnerFromJSONTyped, AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInnerToJSON } from "./AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInner";

/**
 *
 * @export
 * @interface AppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalization
 */
export interface AppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalization {
    /**
     *
     * @type {AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInner}
     * @memberof AppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalization
     */
    data?: AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInner;
}

/**
 * Check if a given object implements the AppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalization interface.
 */
export function instanceOfAppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalization(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalizationFromJSON(json: any): AppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalization {
    return AppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalizationFromJSONTyped(json, false);
}

export function AppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalization {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: !exists(json, "data") ? undefined : AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInnerFromJSON(json["data"])
    };
}

export function AppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalizationToJSON(value?: AppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalization | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInnerToJSON(value.data)
    };
}
