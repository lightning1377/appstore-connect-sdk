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
import type { GameCenterLeaderboardSetImageUpdateRequestData } from "./GameCenterLeaderboardSetImageUpdateRequestData";
import { GameCenterLeaderboardSetImageUpdateRequestDataFromJSON, GameCenterLeaderboardSetImageUpdateRequestDataFromJSONTyped, GameCenterLeaderboardSetImageUpdateRequestDataToJSON } from "./GameCenterLeaderboardSetImageUpdateRequestData";

/**
 *
 * @export
 * @interface GameCenterLeaderboardSetImageUpdateRequest
 */
export interface GameCenterLeaderboardSetImageUpdateRequest {
    /**
     *
     * @type {GameCenterLeaderboardSetImageUpdateRequestData}
     * @memberof GameCenterLeaderboardSetImageUpdateRequest
     */
    data: GameCenterLeaderboardSetImageUpdateRequestData;
}

/**
 * Check if a given object implements the GameCenterLeaderboardSetImageUpdateRequest interface.
 */
export function instanceOfGameCenterLeaderboardSetImageUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function GameCenterLeaderboardSetImageUpdateRequestFromJSON(json: any): GameCenterLeaderboardSetImageUpdateRequest {
    return GameCenterLeaderboardSetImageUpdateRequestFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetImageUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetImageUpdateRequest {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: GameCenterLeaderboardSetImageUpdateRequestDataFromJSON(json["data"])
    };
}

export function GameCenterLeaderboardSetImageUpdateRequestToJSON(value?: GameCenterLeaderboardSetImageUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: GameCenterLeaderboardSetImageUpdateRequestDataToJSON(value.data)
    };
}
