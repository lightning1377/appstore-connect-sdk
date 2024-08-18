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
import type { GameCenterLeaderboardLocalizationCreateRequestData } from "./GameCenterLeaderboardLocalizationCreateRequestData";
import { GameCenterLeaderboardLocalizationCreateRequestDataFromJSON, GameCenterLeaderboardLocalizationCreateRequestDataFromJSONTyped, GameCenterLeaderboardLocalizationCreateRequestDataToJSON } from "./GameCenterLeaderboardLocalizationCreateRequestData";

/**
 *
 * @export
 * @interface GameCenterLeaderboardLocalizationCreateRequest
 */
export interface GameCenterLeaderboardLocalizationCreateRequest {
    /**
     *
     * @type {GameCenterLeaderboardLocalizationCreateRequestData}
     * @memberof GameCenterLeaderboardLocalizationCreateRequest
     */
    data: GameCenterLeaderboardLocalizationCreateRequestData;
}

/**
 * Check if a given object implements the GameCenterLeaderboardLocalizationCreateRequest interface.
 */
export function instanceOfGameCenterLeaderboardLocalizationCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function GameCenterLeaderboardLocalizationCreateRequestFromJSON(json: any): GameCenterLeaderboardLocalizationCreateRequest {
    return GameCenterLeaderboardLocalizationCreateRequestFromJSONTyped(json, false);
}

export function GameCenterLeaderboardLocalizationCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardLocalizationCreateRequest {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: GameCenterLeaderboardLocalizationCreateRequestDataFromJSON(json["data"])
    };
}

export function GameCenterLeaderboardLocalizationCreateRequestToJSON(value?: GameCenterLeaderboardLocalizationCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: GameCenterLeaderboardLocalizationCreateRequestDataToJSON(value.data)
    };
}
