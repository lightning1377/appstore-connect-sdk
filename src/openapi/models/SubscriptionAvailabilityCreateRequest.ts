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
import type { SubscriptionAvailabilityCreateRequestData } from "./SubscriptionAvailabilityCreateRequestData";
import { SubscriptionAvailabilityCreateRequestDataFromJSON, SubscriptionAvailabilityCreateRequestDataFromJSONTyped, SubscriptionAvailabilityCreateRequestDataToJSON } from "./SubscriptionAvailabilityCreateRequestData";

/**
 *
 * @export
 * @interface SubscriptionAvailabilityCreateRequest
 */
export interface SubscriptionAvailabilityCreateRequest {
    /**
     *
     * @type {SubscriptionAvailabilityCreateRequestData}
     * @memberof SubscriptionAvailabilityCreateRequest
     */
    data: SubscriptionAvailabilityCreateRequestData;
}

/**
 * Check if a given object implements the SubscriptionAvailabilityCreateRequest interface.
 */
export function instanceOfSubscriptionAvailabilityCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function SubscriptionAvailabilityCreateRequestFromJSON(json: any): SubscriptionAvailabilityCreateRequest {
    return SubscriptionAvailabilityCreateRequestFromJSONTyped(json, false);
}

export function SubscriptionAvailabilityCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionAvailabilityCreateRequest {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: SubscriptionAvailabilityCreateRequestDataFromJSON(json["data"])
    };
}

export function SubscriptionAvailabilityCreateRequestToJSON(value?: SubscriptionAvailabilityCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: SubscriptionAvailabilityCreateRequestDataToJSON(value.data)
    };
}
