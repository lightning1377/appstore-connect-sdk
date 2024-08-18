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
import type { GameCenterPlayerAchievementSubmissionCreateRequestDataAttributes } from "./GameCenterPlayerAchievementSubmissionCreateRequestDataAttributes";
import { GameCenterPlayerAchievementSubmissionCreateRequestDataAttributesFromJSON, GameCenterPlayerAchievementSubmissionCreateRequestDataAttributesFromJSONTyped, GameCenterPlayerAchievementSubmissionCreateRequestDataAttributesToJSON } from "./GameCenterPlayerAchievementSubmissionCreateRequestDataAttributes";

/**
 *
 * @export
 * @interface GameCenterPlayerAchievementSubmissionCreateRequestData
 */
export interface GameCenterPlayerAchievementSubmissionCreateRequestData {
    /**
     *
     * @type {string}
     * @memberof GameCenterPlayerAchievementSubmissionCreateRequestData
     */
    type: GameCenterPlayerAchievementSubmissionCreateRequestDataTypeEnum;
    /**
     *
     * @type {GameCenterPlayerAchievementSubmissionCreateRequestDataAttributes}
     * @memberof GameCenterPlayerAchievementSubmissionCreateRequestData
     */
    attributes: GameCenterPlayerAchievementSubmissionCreateRequestDataAttributes;
}

/**
 * @export
 */
export const GameCenterPlayerAchievementSubmissionCreateRequestDataTypeEnum = {
    GameCenterPlayerAchievementSubmissions: "gameCenterPlayerAchievementSubmissions"
} as const;
export type GameCenterPlayerAchievementSubmissionCreateRequestDataTypeEnum = (typeof GameCenterPlayerAchievementSubmissionCreateRequestDataTypeEnum)[keyof typeof GameCenterPlayerAchievementSubmissionCreateRequestDataTypeEnum];

/**
 * Check if a given object implements the GameCenterPlayerAchievementSubmissionCreateRequestData interface.
 */
export function instanceOfGameCenterPlayerAchievementSubmissionCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;

    return isInstance;
}

export function GameCenterPlayerAchievementSubmissionCreateRequestDataFromJSON(json: any): GameCenterPlayerAchievementSubmissionCreateRequestData {
    return GameCenterPlayerAchievementSubmissionCreateRequestDataFromJSONTyped(json, false);
}

export function GameCenterPlayerAchievementSubmissionCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterPlayerAchievementSubmissionCreateRequestData {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        attributes: GameCenterPlayerAchievementSubmissionCreateRequestDataAttributesFromJSON(json["attributes"])
    };
}

export function GameCenterPlayerAchievementSubmissionCreateRequestDataToJSON(value?: GameCenterPlayerAchievementSubmissionCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        attributes: GameCenterPlayerAchievementSubmissionCreateRequestDataAttributesToJSON(value.attributes)
    };
}
