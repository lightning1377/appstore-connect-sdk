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
import type { BetaGroupUpdateRequestData } from "./BetaGroupUpdateRequestData";
import { BetaGroupUpdateRequestDataFromJSON, BetaGroupUpdateRequestDataFromJSONTyped, BetaGroupUpdateRequestDataToJSON } from "./BetaGroupUpdateRequestData";

/**
 *
 * @export
 * @interface BetaGroupUpdateRequest
 */
export interface BetaGroupUpdateRequest {
    /**
     *
     * @type {BetaGroupUpdateRequestData}
     * @memberof BetaGroupUpdateRequest
     */
    data: BetaGroupUpdateRequestData;
}

/**
 * Check if a given object implements the BetaGroupUpdateRequest interface.
 */
export function instanceOfBetaGroupUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function BetaGroupUpdateRequestFromJSON(json: any): BetaGroupUpdateRequest {
    return BetaGroupUpdateRequestFromJSONTyped(json, false);
}

export function BetaGroupUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaGroupUpdateRequest {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: BetaGroupUpdateRequestDataFromJSON(json["data"])
    };
}

export function BetaGroupUpdateRequestToJSON(value?: BetaGroupUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: BetaGroupUpdateRequestDataToJSON(value.data)
    };
}
