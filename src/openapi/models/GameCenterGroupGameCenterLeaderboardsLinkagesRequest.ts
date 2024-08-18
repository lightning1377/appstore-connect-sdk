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
 * @interface GameCenterGroupGameCenterLeaderboardsLinkagesRequest
 */
export interface GameCenterGroupGameCenterLeaderboardsLinkagesRequest {
    /**
     *
     * @type {Array<GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner>}
     * @memberof GameCenterGroupGameCenterLeaderboardsLinkagesRequest
     */
    data: Array<GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner>;
}

/**
 * Check if a given object implements the GameCenterGroupGameCenterLeaderboardsLinkagesRequest interface.
 */
export function instanceOfGameCenterGroupGameCenterLeaderboardsLinkagesRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function GameCenterGroupGameCenterLeaderboardsLinkagesRequestFromJSON(json: any): GameCenterGroupGameCenterLeaderboardsLinkagesRequest {
    return GameCenterGroupGameCenterLeaderboardsLinkagesRequestFromJSONTyped(json, false);
}

export function GameCenterGroupGameCenterLeaderboardsLinkagesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterGroupGameCenterLeaderboardsLinkagesRequest {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (json["data"] as Array<any>).map(GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerFromJSON)
    };
}

export function GameCenterGroupGameCenterLeaderboardsLinkagesRequestToJSON(value?: GameCenterGroupGameCenterLeaderboardsLinkagesRequest | null): any {
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
