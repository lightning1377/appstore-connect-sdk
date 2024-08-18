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
import type { GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData } from "./GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData";
import { GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataFromJSON, GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataFromJSONTyped, GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataToJSON } from "./GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData";

/**
 *
 * @export
 * @interface GameCenterDetailGameCenterAchievementsLinkagesRequest
 */
export interface GameCenterDetailGameCenterAchievementsLinkagesRequest {
    /**
     *
     * @type {Array<GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData>}
     * @memberof GameCenterDetailGameCenterAchievementsLinkagesRequest
     */
    data: Array<GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData>;
}

/**
 * Check if a given object implements the GameCenterDetailGameCenterAchievementsLinkagesRequest interface.
 */
export function instanceOfGameCenterDetailGameCenterAchievementsLinkagesRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function GameCenterDetailGameCenterAchievementsLinkagesRequestFromJSON(json: any): GameCenterDetailGameCenterAchievementsLinkagesRequest {
    return GameCenterDetailGameCenterAchievementsLinkagesRequestFromJSONTyped(json, false);
}

export function GameCenterDetailGameCenterAchievementsLinkagesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterDetailGameCenterAchievementsLinkagesRequest {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (json["data"] as Array<any>).map(GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataFromJSON)
    };
}

export function GameCenterDetailGameCenterAchievementsLinkagesRequestToJSON(value?: GameCenterDetailGameCenterAchievementsLinkagesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (value.data as Array<any>).map(GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataToJSON)
    };
}
