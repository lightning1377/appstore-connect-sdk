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
import type { GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner } from "./GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner";
import { GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerFromJSON, GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerFromJSONTyped, GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerToJSON } from "./GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner";

/**
 *
 * @export
 * @interface GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest
 */
export interface GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest {
    /**
     *
     * @type {Array<GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner>}
     * @memberof GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest
     */
    data: Array<GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner>;
}

/**
 * Check if a given object implements the GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest interface.
 */
export function instanceOfGameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequestFromJSON(json: any): GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest {
    return GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequestFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (json["data"] as Array<any>).map(GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerFromJSON)
    };
}

export function GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequestToJSON(value?: GameCenterLeaderboardSetGameCenterLeaderboardsLinkagesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (value.data as Array<any>).map(GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerToJSON)
    };
}
