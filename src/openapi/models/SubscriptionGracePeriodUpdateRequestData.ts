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
import type { SubscriptionGracePeriodAttributes } from "./SubscriptionGracePeriodAttributes";
import { SubscriptionGracePeriodAttributesFromJSON, SubscriptionGracePeriodAttributesFromJSONTyped, SubscriptionGracePeriodAttributesToJSON } from "./SubscriptionGracePeriodAttributes";

/**
 *
 * @export
 * @interface SubscriptionGracePeriodUpdateRequestData
 */
export interface SubscriptionGracePeriodUpdateRequestData {
    /**
     *
     * @type {string}
     * @memberof SubscriptionGracePeriodUpdateRequestData
     */
    type: SubscriptionGracePeriodUpdateRequestDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof SubscriptionGracePeriodUpdateRequestData
     */
    id: string;
    /**
     *
     * @type {SubscriptionGracePeriodAttributes}
     * @memberof SubscriptionGracePeriodUpdateRequestData
     */
    attributes?: SubscriptionGracePeriodAttributes;
}

/**
 * @export
 */
export const SubscriptionGracePeriodUpdateRequestDataTypeEnum = {
    SubscriptionGracePeriods: "subscriptionGracePeriods"
} as const;
export type SubscriptionGracePeriodUpdateRequestDataTypeEnum = (typeof SubscriptionGracePeriodUpdateRequestDataTypeEnum)[keyof typeof SubscriptionGracePeriodUpdateRequestDataTypeEnum];

/**
 * Check if a given object implements the SubscriptionGracePeriodUpdateRequestData interface.
 */
export function instanceOfSubscriptionGracePeriodUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function SubscriptionGracePeriodUpdateRequestDataFromJSON(json: any): SubscriptionGracePeriodUpdateRequestData {
    return SubscriptionGracePeriodUpdateRequestDataFromJSONTyped(json, false);
}

export function SubscriptionGracePeriodUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionGracePeriodUpdateRequestData {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !exists(json, "attributes") ? undefined : SubscriptionGracePeriodAttributesFromJSON(json["attributes"])
    };
}

export function SubscriptionGracePeriodUpdateRequestDataToJSON(value?: SubscriptionGracePeriodUpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: SubscriptionGracePeriodAttributesToJSON(value.attributes)
    };
}
