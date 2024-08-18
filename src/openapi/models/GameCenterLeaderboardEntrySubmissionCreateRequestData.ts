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
import type { GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributes } from "./GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributes";
import { GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributesFromJSON, GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributesFromJSONTyped, GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributesToJSON } from "./GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributes";

/**
 *
 * @export
 * @interface GameCenterLeaderboardEntrySubmissionCreateRequestData
 */
export interface GameCenterLeaderboardEntrySubmissionCreateRequestData {
    /**
     *
     * @type {string}
     * @memberof GameCenterLeaderboardEntrySubmissionCreateRequestData
     */
    type: GameCenterLeaderboardEntrySubmissionCreateRequestDataTypeEnum;
    /**
     *
     * @type {GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributes}
     * @memberof GameCenterLeaderboardEntrySubmissionCreateRequestData
     */
    attributes: GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributes;
}

/**
 * @export
 */
export const GameCenterLeaderboardEntrySubmissionCreateRequestDataTypeEnum = {
    GameCenterLeaderboardEntrySubmissions: "gameCenterLeaderboardEntrySubmissions"
} as const;
export type GameCenterLeaderboardEntrySubmissionCreateRequestDataTypeEnum = (typeof GameCenterLeaderboardEntrySubmissionCreateRequestDataTypeEnum)[keyof typeof GameCenterLeaderboardEntrySubmissionCreateRequestDataTypeEnum];

/**
 * Check if a given object implements the GameCenterLeaderboardEntrySubmissionCreateRequestData interface.
 */
export function instanceOfGameCenterLeaderboardEntrySubmissionCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;

    return isInstance;
}

export function GameCenterLeaderboardEntrySubmissionCreateRequestDataFromJSON(json: any): GameCenterLeaderboardEntrySubmissionCreateRequestData {
    return GameCenterLeaderboardEntrySubmissionCreateRequestDataFromJSONTyped(json, false);
}

export function GameCenterLeaderboardEntrySubmissionCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardEntrySubmissionCreateRequestData {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        attributes: GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributesFromJSON(json["attributes"])
    };
}

export function GameCenterLeaderboardEntrySubmissionCreateRequestDataToJSON(value?: GameCenterLeaderboardEntrySubmissionCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        attributes: GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributesToJSON(value.attributes)
    };
}
