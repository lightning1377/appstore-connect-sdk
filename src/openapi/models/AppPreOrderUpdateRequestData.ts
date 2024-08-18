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
import type { AppPreOrderCreateRequestDataAttributes } from "./AppPreOrderCreateRequestDataAttributes";
import { AppPreOrderCreateRequestDataAttributesFromJSON, AppPreOrderCreateRequestDataAttributesFromJSONTyped, AppPreOrderCreateRequestDataAttributesToJSON } from "./AppPreOrderCreateRequestDataAttributes";

/**
 *
 * @export
 * @interface AppPreOrderUpdateRequestData
 */
export interface AppPreOrderUpdateRequestData {
    /**
     *
     * @type {string}
     * @memberof AppPreOrderUpdateRequestData
     */
    type: AppPreOrderUpdateRequestDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppPreOrderUpdateRequestData
     */
    id: string;
    /**
     *
     * @type {AppPreOrderCreateRequestDataAttributes}
     * @memberof AppPreOrderUpdateRequestData
     */
    attributes?: AppPreOrderCreateRequestDataAttributes;
}

/**
 * @export
 */
export const AppPreOrderUpdateRequestDataTypeEnum = {
    AppPreOrders: "appPreOrders"
} as const;
export type AppPreOrderUpdateRequestDataTypeEnum = (typeof AppPreOrderUpdateRequestDataTypeEnum)[keyof typeof AppPreOrderUpdateRequestDataTypeEnum];

/**
 * Check if a given object implements the AppPreOrderUpdateRequestData interface.
 */
export function instanceOfAppPreOrderUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppPreOrderUpdateRequestDataFromJSON(json: any): AppPreOrderUpdateRequestData {
    return AppPreOrderUpdateRequestDataFromJSONTyped(json, false);
}

export function AppPreOrderUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreOrderUpdateRequestData {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !exists(json, "attributes") ? undefined : AppPreOrderCreateRequestDataAttributesFromJSON(json["attributes"])
    };
}

export function AppPreOrderUpdateRequestDataToJSON(value?: AppPreOrderUpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: AppPreOrderCreateRequestDataAttributesToJSON(value.attributes)
    };
}
