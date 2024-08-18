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
import type { SandboxTesterV2UpdateRequestDataAttributes } from "./SandboxTesterV2UpdateRequestDataAttributes";
import { SandboxTesterV2UpdateRequestDataAttributesFromJSON, SandboxTesterV2UpdateRequestDataAttributesFromJSONTyped, SandboxTesterV2UpdateRequestDataAttributesToJSON } from "./SandboxTesterV2UpdateRequestDataAttributes";

/**
 *
 * @export
 * @interface SandboxTesterV2UpdateRequestData
 */
export interface SandboxTesterV2UpdateRequestData {
    /**
     *
     * @type {string}
     * @memberof SandboxTesterV2UpdateRequestData
     */
    type: SandboxTesterV2UpdateRequestDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof SandboxTesterV2UpdateRequestData
     */
    id: string;
    /**
     *
     * @type {SandboxTesterV2UpdateRequestDataAttributes}
     * @memberof SandboxTesterV2UpdateRequestData
     */
    attributes?: SandboxTesterV2UpdateRequestDataAttributes;
}

/**
 * @export
 */
export const SandboxTesterV2UpdateRequestDataTypeEnum = {
    SandboxTesters: "sandboxTesters"
} as const;
export type SandboxTesterV2UpdateRequestDataTypeEnum = (typeof SandboxTesterV2UpdateRequestDataTypeEnum)[keyof typeof SandboxTesterV2UpdateRequestDataTypeEnum];

/**
 * Check if a given object implements the SandboxTesterV2UpdateRequestData interface.
 */
export function instanceOfSandboxTesterV2UpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function SandboxTesterV2UpdateRequestDataFromJSON(json: any): SandboxTesterV2UpdateRequestData {
    return SandboxTesterV2UpdateRequestDataFromJSONTyped(json, false);
}

export function SandboxTesterV2UpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SandboxTesterV2UpdateRequestData {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !exists(json, "attributes") ? undefined : SandboxTesterV2UpdateRequestDataAttributesFromJSON(json["attributes"])
    };
}

export function SandboxTesterV2UpdateRequestDataToJSON(value?: SandboxTesterV2UpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: SandboxTesterV2UpdateRequestDataAttributesToJSON(value.attributes)
    };
}
