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
import type { InAppPurchaseType } from "./InAppPurchaseType";
import { InAppPurchaseTypeFromJSON, InAppPurchaseTypeFromJSONTyped, InAppPurchaseTypeToJSON } from "./InAppPurchaseType";

/**
 *
 * @export
 * @interface InAppPurchaseV2CreateRequestDataAttributes
 */
export interface InAppPurchaseV2CreateRequestDataAttributes {
    /**
     *
     * @type {string}
     * @memberof InAppPurchaseV2CreateRequestDataAttributes
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof InAppPurchaseV2CreateRequestDataAttributes
     */
    productId: string;
    /**
     *
     * @type {InAppPurchaseType}
     * @memberof InAppPurchaseV2CreateRequestDataAttributes
     */
    inAppPurchaseType: InAppPurchaseType;
    /**
     *
     * @type {string}
     * @memberof InAppPurchaseV2CreateRequestDataAttributes
     */
    reviewNote?: string;
    /**
     *
     * @type {boolean}
     * @memberof InAppPurchaseV2CreateRequestDataAttributes
     */
    familySharable?: boolean;
}

/**
 * Check if a given object implements the InAppPurchaseV2CreateRequestDataAttributes interface.
 */
export function instanceOfInAppPurchaseV2CreateRequestDataAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "productId" in value;
    isInstance = isInstance && "inAppPurchaseType" in value;

    return isInstance;
}

export function InAppPurchaseV2CreateRequestDataAttributesFromJSON(json: any): InAppPurchaseV2CreateRequestDataAttributes {
    return InAppPurchaseV2CreateRequestDataAttributesFromJSONTyped(json, false);
}

export function InAppPurchaseV2CreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseV2CreateRequestDataAttributes {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        name: json["name"],
        productId: json["productId"],
        inAppPurchaseType: InAppPurchaseTypeFromJSON(json["inAppPurchaseType"]),
        reviewNote: !exists(json, "reviewNote") ? undefined : json["reviewNote"],
        familySharable: !exists(json, "familySharable") ? undefined : json["familySharable"]
    };
}

export function InAppPurchaseV2CreateRequestDataAttributesToJSON(value?: InAppPurchaseV2CreateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        name: value.name,
        productId: value.productId,
        inAppPurchaseType: InAppPurchaseTypeToJSON(value.inAppPurchaseType),
        reviewNote: value.reviewNote,
        familySharable: value.familySharable
    };
}
