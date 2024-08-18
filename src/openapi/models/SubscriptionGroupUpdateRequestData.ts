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
import type { GameCenterGroupAttributes } from "./GameCenterGroupAttributes";
import { GameCenterGroupAttributesFromJSON, GameCenterGroupAttributesFromJSONTyped, GameCenterGroupAttributesToJSON } from "./GameCenterGroupAttributes";

/**
 *
 * @export
 * @interface SubscriptionGroupUpdateRequestData
 */
export interface SubscriptionGroupUpdateRequestData {
    /**
     *
     * @type {string}
     * @memberof SubscriptionGroupUpdateRequestData
     */
    type: SubscriptionGroupUpdateRequestDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof SubscriptionGroupUpdateRequestData
     */
    id: string;
    /**
     *
     * @type {GameCenterGroupAttributes}
     * @memberof SubscriptionGroupUpdateRequestData
     */
    attributes?: GameCenterGroupAttributes;
}

/**
 * @export
 */
export const SubscriptionGroupUpdateRequestDataTypeEnum = {
    SubscriptionGroups: "subscriptionGroups"
} as const;
export type SubscriptionGroupUpdateRequestDataTypeEnum = (typeof SubscriptionGroupUpdateRequestDataTypeEnum)[keyof typeof SubscriptionGroupUpdateRequestDataTypeEnum];

/**
 * Check if a given object implements the SubscriptionGroupUpdateRequestData interface.
 */
export function instanceOfSubscriptionGroupUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function SubscriptionGroupUpdateRequestDataFromJSON(json: any): SubscriptionGroupUpdateRequestData {
    return SubscriptionGroupUpdateRequestDataFromJSONTyped(json, false);
}

export function SubscriptionGroupUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionGroupUpdateRequestData {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !exists(json, "attributes") ? undefined : GameCenterGroupAttributesFromJSON(json["attributes"])
    };
}

export function SubscriptionGroupUpdateRequestDataToJSON(value?: SubscriptionGroupUpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: GameCenterGroupAttributesToJSON(value.attributes)
    };
}
