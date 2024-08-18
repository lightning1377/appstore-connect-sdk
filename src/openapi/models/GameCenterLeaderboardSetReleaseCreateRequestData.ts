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
import type { GameCenterLeaderboardSetReleaseCreateRequestDataRelationships } from "./GameCenterLeaderboardSetReleaseCreateRequestDataRelationships";
import { GameCenterLeaderboardSetReleaseCreateRequestDataRelationshipsFromJSON, GameCenterLeaderboardSetReleaseCreateRequestDataRelationshipsFromJSONTyped, GameCenterLeaderboardSetReleaseCreateRequestDataRelationshipsToJSON } from "./GameCenterLeaderboardSetReleaseCreateRequestDataRelationships";

/**
 *
 * @export
 * @interface GameCenterLeaderboardSetReleaseCreateRequestData
 */
export interface GameCenterLeaderboardSetReleaseCreateRequestData {
    /**
     *
     * @type {string}
     * @memberof GameCenterLeaderboardSetReleaseCreateRequestData
     */
    type: GameCenterLeaderboardSetReleaseCreateRequestDataTypeEnum;
    /**
     *
     * @type {GameCenterLeaderboardSetReleaseCreateRequestDataRelationships}
     * @memberof GameCenterLeaderboardSetReleaseCreateRequestData
     */
    relationships: GameCenterLeaderboardSetReleaseCreateRequestDataRelationships;
}

/**
 * @export
 */
export const GameCenterLeaderboardSetReleaseCreateRequestDataTypeEnum = {
    GameCenterLeaderboardSetReleases: "gameCenterLeaderboardSetReleases"
} as const;
export type GameCenterLeaderboardSetReleaseCreateRequestDataTypeEnum = (typeof GameCenterLeaderboardSetReleaseCreateRequestDataTypeEnum)[keyof typeof GameCenterLeaderboardSetReleaseCreateRequestDataTypeEnum];

/**
 * Check if a given object implements the GameCenterLeaderboardSetReleaseCreateRequestData interface.
 */
export function instanceOfGameCenterLeaderboardSetReleaseCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function GameCenterLeaderboardSetReleaseCreateRequestDataFromJSON(json: any): GameCenterLeaderboardSetReleaseCreateRequestData {
    return GameCenterLeaderboardSetReleaseCreateRequestDataFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetReleaseCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetReleaseCreateRequestData {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        relationships: GameCenterLeaderboardSetReleaseCreateRequestDataRelationshipsFromJSON(json["relationships"])
    };
}

export function GameCenterLeaderboardSetReleaseCreateRequestDataToJSON(value?: GameCenterLeaderboardSetReleaseCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        relationships: GameCenterLeaderboardSetReleaseCreateRequestDataRelationshipsToJSON(value.relationships)
    };
}
