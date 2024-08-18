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
 * @interface InAppPurchaseV2RelationshipsAppStoreReviewScreenshotData
 */
export interface InAppPurchaseV2RelationshipsAppStoreReviewScreenshotData {
    /**
     *
     * @type {string}
     * @memberof InAppPurchaseV2RelationshipsAppStoreReviewScreenshotData
     */
    type: InAppPurchaseV2RelationshipsAppStoreReviewScreenshotDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof InAppPurchaseV2RelationshipsAppStoreReviewScreenshotData
     */
    id: string;
}

/**
 * @export
 */
export const InAppPurchaseV2RelationshipsAppStoreReviewScreenshotDataTypeEnum = {
    InAppPurchaseAppStoreReviewScreenshots: "inAppPurchaseAppStoreReviewScreenshots"
} as const;
export type InAppPurchaseV2RelationshipsAppStoreReviewScreenshotDataTypeEnum = (typeof InAppPurchaseV2RelationshipsAppStoreReviewScreenshotDataTypeEnum)[keyof typeof InAppPurchaseV2RelationshipsAppStoreReviewScreenshotDataTypeEnum];

/**
 * Check if a given object implements the InAppPurchaseV2RelationshipsAppStoreReviewScreenshotData interface.
 */
export function instanceOfInAppPurchaseV2RelationshipsAppStoreReviewScreenshotData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function InAppPurchaseV2RelationshipsAppStoreReviewScreenshotDataFromJSON(json: any): InAppPurchaseV2RelationshipsAppStoreReviewScreenshotData {
    return InAppPurchaseV2RelationshipsAppStoreReviewScreenshotDataFromJSONTyped(json, false);
}

export function InAppPurchaseV2RelationshipsAppStoreReviewScreenshotDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseV2RelationshipsAppStoreReviewScreenshotData {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"]
    };
}

export function InAppPurchaseV2RelationshipsAppStoreReviewScreenshotDataToJSON(value?: InAppPurchaseV2RelationshipsAppStoreReviewScreenshotData | null): any {
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
