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

import { GameCenterLeaderboard, instanceOfGameCenterLeaderboard, GameCenterLeaderboardFromJSON, GameCenterLeaderboardFromJSONTyped, GameCenterLeaderboardToJSON } from "./GameCenterLeaderboard";
import { GameCenterLeaderboardImage, instanceOfGameCenterLeaderboardImage, GameCenterLeaderboardImageFromJSON, GameCenterLeaderboardImageFromJSONTyped, GameCenterLeaderboardImageToJSON } from "./GameCenterLeaderboardImage";

/**
 * @type GameCenterLeaderboardLocalizationsResponseIncludedInner
 *
 * @export
 */
export type GameCenterLeaderboardLocalizationsResponseIncludedInner = GameCenterLeaderboard | GameCenterLeaderboardImage;

export function GameCenterLeaderboardLocalizationsResponseIncludedInnerFromJSON(json: any): GameCenterLeaderboardLocalizationsResponseIncludedInner {
    return GameCenterLeaderboardLocalizationsResponseIncludedInnerFromJSONTyped(json, false);
}

export function GameCenterLeaderboardLocalizationsResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardLocalizationsResponseIncludedInner {
    if (json === undefined || json === null) {
        return json;
    }
    return { ...GameCenterLeaderboardFromJSONTyped(json, true), ...GameCenterLeaderboardImageFromJSONTyped(json, true) };
}

export function GameCenterLeaderboardLocalizationsResponseIncludedInnerToJSON(value?: GameCenterLeaderboardLocalizationsResponseIncludedInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfGameCenterLeaderboard(value)) {
        return GameCenterLeaderboardToJSON(value as GameCenterLeaderboard);
    }
    if (instanceOfGameCenterLeaderboardImage(value)) {
        return GameCenterLeaderboardImageToJSON(value as GameCenterLeaderboardImage);
    }

    return {};
}
