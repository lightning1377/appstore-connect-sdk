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
import type { GameCenterLeaderboardSetLocalizationCreateRequestDataAttributes } from "./GameCenterLeaderboardSetLocalizationCreateRequestDataAttributes";
import { GameCenterLeaderboardSetLocalizationCreateRequestDataAttributesFromJSON, GameCenterLeaderboardSetLocalizationCreateRequestDataAttributesFromJSONTyped, GameCenterLeaderboardSetLocalizationCreateRequestDataAttributesToJSON } from "./GameCenterLeaderboardSetLocalizationCreateRequestDataAttributes";
import type { GameCenterLeaderboardSetLocalizationCreateRequestDataRelationships } from "./GameCenterLeaderboardSetLocalizationCreateRequestDataRelationships";
import { GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsFromJSON, GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsFromJSONTyped, GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsToJSON } from "./GameCenterLeaderboardSetLocalizationCreateRequestDataRelationships";

/**
 *
 * @export
 * @interface GameCenterLeaderboardSetLocalizationCreateRequestData
 */
export interface GameCenterLeaderboardSetLocalizationCreateRequestData {
    /**
     *
     * @type {string}
     * @memberof GameCenterLeaderboardSetLocalizationCreateRequestData
     */
    type: GameCenterLeaderboardSetLocalizationCreateRequestDataTypeEnum;
    /**
     *
     * @type {GameCenterLeaderboardSetLocalizationCreateRequestDataAttributes}
     * @memberof GameCenterLeaderboardSetLocalizationCreateRequestData
     */
    attributes: GameCenterLeaderboardSetLocalizationCreateRequestDataAttributes;
    /**
     *
     * @type {GameCenterLeaderboardSetLocalizationCreateRequestDataRelationships}
     * @memberof GameCenterLeaderboardSetLocalizationCreateRequestData
     */
    relationships: GameCenterLeaderboardSetLocalizationCreateRequestDataRelationships;
}

/**
 * @export
 */
export const GameCenterLeaderboardSetLocalizationCreateRequestDataTypeEnum = {
    GameCenterLeaderboardSetLocalizations: "gameCenterLeaderboardSetLocalizations"
} as const;
export type GameCenterLeaderboardSetLocalizationCreateRequestDataTypeEnum = (typeof GameCenterLeaderboardSetLocalizationCreateRequestDataTypeEnum)[keyof typeof GameCenterLeaderboardSetLocalizationCreateRequestDataTypeEnum];

/**
 * Check if a given object implements the GameCenterLeaderboardSetLocalizationCreateRequestData interface.
 */
export function instanceOfGameCenterLeaderboardSetLocalizationCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function GameCenterLeaderboardSetLocalizationCreateRequestDataFromJSON(json: any): GameCenterLeaderboardSetLocalizationCreateRequestData {
    return GameCenterLeaderboardSetLocalizationCreateRequestDataFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetLocalizationCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetLocalizationCreateRequestData {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        attributes: GameCenterLeaderboardSetLocalizationCreateRequestDataAttributesFromJSON(json["attributes"]),
        relationships: GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsFromJSON(json["relationships"])
    };
}

export function GameCenterLeaderboardSetLocalizationCreateRequestDataToJSON(value?: GameCenterLeaderboardSetLocalizationCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        attributes: GameCenterLeaderboardSetLocalizationCreateRequestDataAttributesToJSON(value.attributes),
        relationships: GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsToJSON(value.relationships)
    };
}
