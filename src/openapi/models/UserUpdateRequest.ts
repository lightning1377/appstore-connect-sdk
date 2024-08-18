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
import type { UserUpdateRequestData } from "./UserUpdateRequestData";
import { UserUpdateRequestDataFromJSON, UserUpdateRequestDataFromJSONTyped, UserUpdateRequestDataToJSON } from "./UserUpdateRequestData";

/**
 *
 * @export
 * @interface UserUpdateRequest
 */
export interface UserUpdateRequest {
    /**
     *
     * @type {UserUpdateRequestData}
     * @memberof UserUpdateRequest
     */
    data: UserUpdateRequestData;
}

/**
 * Check if a given object implements the UserUpdateRequest interface.
 */
export function instanceOfUserUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function UserUpdateRequestFromJSON(json: any): UserUpdateRequest {
    return UserUpdateRequestFromJSONTyped(json, false);
}

export function UserUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserUpdateRequest {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: UserUpdateRequestDataFromJSON(json["data"])
    };
}

export function UserUpdateRequestToJSON(value?: UserUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: UserUpdateRequestDataToJSON(value.data)
    };
}
