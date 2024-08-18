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
import type { SubscriptionGroupCreateRequestData } from "./SubscriptionGroupCreateRequestData";
import { SubscriptionGroupCreateRequestDataFromJSON, SubscriptionGroupCreateRequestDataFromJSONTyped, SubscriptionGroupCreateRequestDataToJSON } from "./SubscriptionGroupCreateRequestData";

/**
 *
 * @export
 * @interface SubscriptionGroupCreateRequest
 */
export interface SubscriptionGroupCreateRequest {
    /**
     *
     * @type {SubscriptionGroupCreateRequestData}
     * @memberof SubscriptionGroupCreateRequest
     */
    data: SubscriptionGroupCreateRequestData;
}

/**
 * Check if a given object implements the SubscriptionGroupCreateRequest interface.
 */
export function instanceOfSubscriptionGroupCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function SubscriptionGroupCreateRequestFromJSON(json: any): SubscriptionGroupCreateRequest {
    return SubscriptionGroupCreateRequestFromJSONTyped(json, false);
}

export function SubscriptionGroupCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionGroupCreateRequest {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: SubscriptionGroupCreateRequestDataFromJSON(json["data"])
    };
}

export function SubscriptionGroupCreateRequestToJSON(value?: SubscriptionGroupCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: SubscriptionGroupCreateRequestDataToJSON(value.data)
    };
}
