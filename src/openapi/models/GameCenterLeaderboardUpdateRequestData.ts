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
import type { GameCenterLeaderboardUpdateRequestDataAttributes } from "./GameCenterLeaderboardUpdateRequestDataAttributes";
import { GameCenterLeaderboardUpdateRequestDataAttributesFromJSON, GameCenterLeaderboardUpdateRequestDataAttributesFromJSONTyped, GameCenterLeaderboardUpdateRequestDataAttributesToJSON } from "./GameCenterLeaderboardUpdateRequestDataAttributes";

/**
 *
 * @export
 * @interface GameCenterLeaderboardUpdateRequestData
 */
export interface GameCenterLeaderboardUpdateRequestData {
    /**
     *
     * @type {string}
     * @memberof GameCenterLeaderboardUpdateRequestData
     */
    type: GameCenterLeaderboardUpdateRequestDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof GameCenterLeaderboardUpdateRequestData
     */
    id: string;
    /**
     *
     * @type {GameCenterLeaderboardUpdateRequestDataAttributes}
     * @memberof GameCenterLeaderboardUpdateRequestData
     */
    attributes?: GameCenterLeaderboardUpdateRequestDataAttributes;
}

/**
 * @export
 */
export const GameCenterLeaderboardUpdateRequestDataTypeEnum = {
    GameCenterLeaderboards: "gameCenterLeaderboards"
} as const;
export type GameCenterLeaderboardUpdateRequestDataTypeEnum = (typeof GameCenterLeaderboardUpdateRequestDataTypeEnum)[keyof typeof GameCenterLeaderboardUpdateRequestDataTypeEnum];

/**
 * Check if a given object implements the GameCenterLeaderboardUpdateRequestData interface.
 */
export function instanceOfGameCenterLeaderboardUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function GameCenterLeaderboardUpdateRequestDataFromJSON(json: any): GameCenterLeaderboardUpdateRequestData {
    return GameCenterLeaderboardUpdateRequestDataFromJSONTyped(json, false);
}

export function GameCenterLeaderboardUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardUpdateRequestData {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !exists(json, "attributes") ? undefined : GameCenterLeaderboardUpdateRequestDataAttributesFromJSON(json["attributes"])
    };
}

export function GameCenterLeaderboardUpdateRequestDataToJSON(value?: GameCenterLeaderboardUpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: GameCenterLeaderboardUpdateRequestDataAttributesToJSON(value.attributes)
    };
}
