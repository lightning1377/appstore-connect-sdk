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
import type { AppScreenshotSetRelationshipsAppScreenshotsDataInner } from "./AppScreenshotSetRelationshipsAppScreenshotsDataInner";
import { AppScreenshotSetRelationshipsAppScreenshotsDataInnerFromJSON, AppScreenshotSetRelationshipsAppScreenshotsDataInnerFromJSONTyped, AppScreenshotSetRelationshipsAppScreenshotsDataInnerToJSON } from "./AppScreenshotSetRelationshipsAppScreenshotsDataInner";

/**
 *
 * @export
 * @interface AppScreenshotSetAppScreenshotsLinkagesRequest
 */
export interface AppScreenshotSetAppScreenshotsLinkagesRequest {
    /**
     *
     * @type {Array<AppScreenshotSetRelationshipsAppScreenshotsDataInner>}
     * @memberof AppScreenshotSetAppScreenshotsLinkagesRequest
     */
    data: Array<AppScreenshotSetRelationshipsAppScreenshotsDataInner>;
}

/**
 * Check if a given object implements the AppScreenshotSetAppScreenshotsLinkagesRequest interface.
 */
export function instanceOfAppScreenshotSetAppScreenshotsLinkagesRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppScreenshotSetAppScreenshotsLinkagesRequestFromJSON(json: any): AppScreenshotSetAppScreenshotsLinkagesRequest {
    return AppScreenshotSetAppScreenshotsLinkagesRequestFromJSONTyped(json, false);
}

export function AppScreenshotSetAppScreenshotsLinkagesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppScreenshotSetAppScreenshotsLinkagesRequest {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (json["data"] as Array<any>).map(AppScreenshotSetRelationshipsAppScreenshotsDataInnerFromJSON)
    };
}

export function AppScreenshotSetAppScreenshotsLinkagesRequestToJSON(value?: AppScreenshotSetAppScreenshotsLinkagesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (value.data as Array<any>).map(AppScreenshotSetRelationshipsAppScreenshotsDataInnerToJSON)
    };
}
