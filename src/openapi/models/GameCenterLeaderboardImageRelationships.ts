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
import type { GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalization } from "./GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalization";
import { GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationFromJSON, GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationFromJSONTyped, GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationToJSON } from "./GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalization";

/**
 *
 * @export
 * @interface GameCenterLeaderboardImageRelationships
 */
export interface GameCenterLeaderboardImageRelationships {
    /**
     *
     * @type {GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalization}
     * @memberof GameCenterLeaderboardImageRelationships
     */
    gameCenterLeaderboardLocalization?: GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalization;
}

/**
 * Check if a given object implements the GameCenterLeaderboardImageRelationships interface.
 */
export function instanceOfGameCenterLeaderboardImageRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterLeaderboardImageRelationshipsFromJSON(json: any): GameCenterLeaderboardImageRelationships {
    return GameCenterLeaderboardImageRelationshipsFromJSONTyped(json, false);
}

export function GameCenterLeaderboardImageRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardImageRelationships {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        gameCenterLeaderboardLocalization: !exists(json, "gameCenterLeaderboardLocalization") ? undefined : GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationFromJSON(json["gameCenterLeaderboardLocalization"])
    };
}

export function GameCenterLeaderboardImageRelationshipsToJSON(value?: GameCenterLeaderboardImageRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        gameCenterLeaderboardLocalization: GameCenterLeaderboardImageRelationshipsGameCenterLeaderboardLocalizationToJSON(value.gameCenterLeaderboardLocalization)
    };
}
