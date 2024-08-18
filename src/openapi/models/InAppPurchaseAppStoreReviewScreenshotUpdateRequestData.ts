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
import type { AppClipAdvancedExperienceImageUpdateRequestDataAttributes } from "./AppClipAdvancedExperienceImageUpdateRequestDataAttributes";
import { AppClipAdvancedExperienceImageUpdateRequestDataAttributesFromJSON, AppClipAdvancedExperienceImageUpdateRequestDataAttributesFromJSONTyped, AppClipAdvancedExperienceImageUpdateRequestDataAttributesToJSON } from "./AppClipAdvancedExperienceImageUpdateRequestDataAttributes";

/**
 *
 * @export
 * @interface InAppPurchaseAppStoreReviewScreenshotUpdateRequestData
 */
export interface InAppPurchaseAppStoreReviewScreenshotUpdateRequestData {
    /**
     *
     * @type {string}
     * @memberof InAppPurchaseAppStoreReviewScreenshotUpdateRequestData
     */
    type: InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof InAppPurchaseAppStoreReviewScreenshotUpdateRequestData
     */
    id: string;
    /**
     *
     * @type {AppClipAdvancedExperienceImageUpdateRequestDataAttributes}
     * @memberof InAppPurchaseAppStoreReviewScreenshotUpdateRequestData
     */
    attributes?: AppClipAdvancedExperienceImageUpdateRequestDataAttributes;
}

/**
 * @export
 */
export const InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataTypeEnum = {
    InAppPurchaseAppStoreReviewScreenshots: "inAppPurchaseAppStoreReviewScreenshots"
} as const;
export type InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataTypeEnum = (typeof InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataTypeEnum)[keyof typeof InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataTypeEnum];

/**
 * Check if a given object implements the InAppPurchaseAppStoreReviewScreenshotUpdateRequestData interface.
 */
export function instanceOfInAppPurchaseAppStoreReviewScreenshotUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataFromJSON(json: any): InAppPurchaseAppStoreReviewScreenshotUpdateRequestData {
    return InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataFromJSONTyped(json, false);
}

export function InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseAppStoreReviewScreenshotUpdateRequestData {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !exists(json, "attributes") ? undefined : AppClipAdvancedExperienceImageUpdateRequestDataAttributesFromJSON(json["attributes"])
    };
}

export function InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataToJSON(value?: InAppPurchaseAppStoreReviewScreenshotUpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: AppClipAdvancedExperienceImageUpdateRequestDataAttributesToJSON(value.attributes)
    };
}
