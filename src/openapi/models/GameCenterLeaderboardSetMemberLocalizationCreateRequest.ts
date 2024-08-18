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
import type { GameCenterLeaderboardSetMemberLocalizationCreateRequestData } from "./GameCenterLeaderboardSetMemberLocalizationCreateRequestData";
import { GameCenterLeaderboardSetMemberLocalizationCreateRequestDataFromJSON, GameCenterLeaderboardSetMemberLocalizationCreateRequestDataFromJSONTyped, GameCenterLeaderboardSetMemberLocalizationCreateRequestDataToJSON } from "./GameCenterLeaderboardSetMemberLocalizationCreateRequestData";

/**
 *
 * @export
 * @interface GameCenterLeaderboardSetMemberLocalizationCreateRequest
 */
export interface GameCenterLeaderboardSetMemberLocalizationCreateRequest {
    /**
     *
     * @type {GameCenterLeaderboardSetMemberLocalizationCreateRequestData}
     * @memberof GameCenterLeaderboardSetMemberLocalizationCreateRequest
     */
    data: GameCenterLeaderboardSetMemberLocalizationCreateRequestData;
}

/**
 * Check if a given object implements the GameCenterLeaderboardSetMemberLocalizationCreateRequest interface.
 */
export function instanceOfGameCenterLeaderboardSetMemberLocalizationCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function GameCenterLeaderboardSetMemberLocalizationCreateRequestFromJSON(json: any): GameCenterLeaderboardSetMemberLocalizationCreateRequest {
    return GameCenterLeaderboardSetMemberLocalizationCreateRequestFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetMemberLocalizationCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetMemberLocalizationCreateRequest {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: GameCenterLeaderboardSetMemberLocalizationCreateRequestDataFromJSON(json["data"])
    };
}

export function GameCenterLeaderboardSetMemberLocalizationCreateRequestToJSON(value?: GameCenterLeaderboardSetMemberLocalizationCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: GameCenterLeaderboardSetMemberLocalizationCreateRequestDataToJSON(value.data)
    };
}
