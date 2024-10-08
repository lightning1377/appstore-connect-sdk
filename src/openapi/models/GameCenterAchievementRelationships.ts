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
import type { AppRelationshipsGameCenterDetail } from "./AppRelationshipsGameCenterDetail";
import { AppRelationshipsGameCenterDetailFromJSON, AppRelationshipsGameCenterDetailFromJSONTyped, AppRelationshipsGameCenterDetailToJSON } from "./AppRelationshipsGameCenterDetail";
import type { GameCenterAchievementLocalizationRelationshipsGameCenterAchievement } from "./GameCenterAchievementLocalizationRelationshipsGameCenterAchievement";
import { GameCenterAchievementLocalizationRelationshipsGameCenterAchievementFromJSON, GameCenterAchievementLocalizationRelationshipsGameCenterAchievementFromJSONTyped, GameCenterAchievementLocalizationRelationshipsGameCenterAchievementToJSON } from "./GameCenterAchievementLocalizationRelationshipsGameCenterAchievement";
import type { GameCenterAchievementRelationshipsGameCenterGroup } from "./GameCenterAchievementRelationshipsGameCenterGroup";
import { GameCenterAchievementRelationshipsGameCenterGroupFromJSON, GameCenterAchievementRelationshipsGameCenterGroupFromJSONTyped, GameCenterAchievementRelationshipsGameCenterGroupToJSON } from "./GameCenterAchievementRelationshipsGameCenterGroup";
import type { GameCenterAchievementRelationshipsLocalizations } from "./GameCenterAchievementRelationshipsLocalizations";
import { GameCenterAchievementRelationshipsLocalizationsFromJSON, GameCenterAchievementRelationshipsLocalizationsFromJSONTyped, GameCenterAchievementRelationshipsLocalizationsToJSON } from "./GameCenterAchievementRelationshipsLocalizations";
import type { GameCenterAchievementRelationshipsReleases } from "./GameCenterAchievementRelationshipsReleases";
import { GameCenterAchievementRelationshipsReleasesFromJSON, GameCenterAchievementRelationshipsReleasesFromJSONTyped, GameCenterAchievementRelationshipsReleasesToJSON } from "./GameCenterAchievementRelationshipsReleases";

/**
 *
 * @export
 * @interface GameCenterAchievementRelationships
 */
export interface GameCenterAchievementRelationships {
    /**
     *
     * @type {AppRelationshipsGameCenterDetail}
     * @memberof GameCenterAchievementRelationships
     */
    gameCenterDetail?: AppRelationshipsGameCenterDetail;
    /**
     *
     * @type {GameCenterAchievementRelationshipsGameCenterGroup}
     * @memberof GameCenterAchievementRelationships
     */
    gameCenterGroup?: GameCenterAchievementRelationshipsGameCenterGroup;
    /**
     *
     * @type {GameCenterAchievementLocalizationRelationshipsGameCenterAchievement}
     * @memberof GameCenterAchievementRelationships
     */
    groupAchievement?: GameCenterAchievementLocalizationRelationshipsGameCenterAchievement;
    /**
     *
     * @type {GameCenterAchievementRelationshipsLocalizations}
     * @memberof GameCenterAchievementRelationships
     */
    localizations?: GameCenterAchievementRelationshipsLocalizations;
    /**
     *
     * @type {GameCenterAchievementRelationshipsReleases}
     * @memberof GameCenterAchievementRelationships
     */
    releases?: GameCenterAchievementRelationshipsReleases;
}

/**
 * Check if a given object implements the GameCenterAchievementRelationships interface.
 */
export function instanceOfGameCenterAchievementRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterAchievementRelationshipsFromJSON(json: any): GameCenterAchievementRelationships {
    return GameCenterAchievementRelationshipsFromJSONTyped(json, false);
}

export function GameCenterAchievementRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementRelationships {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        gameCenterDetail: !exists(json, "gameCenterDetail") ? undefined : AppRelationshipsGameCenterDetailFromJSON(json["gameCenterDetail"]),
        gameCenterGroup: !exists(json, "gameCenterGroup") ? undefined : GameCenterAchievementRelationshipsGameCenterGroupFromJSON(json["gameCenterGroup"]),
        groupAchievement: !exists(json, "groupAchievement") ? undefined : GameCenterAchievementLocalizationRelationshipsGameCenterAchievementFromJSON(json["groupAchievement"]),
        localizations: !exists(json, "localizations") ? undefined : GameCenterAchievementRelationshipsLocalizationsFromJSON(json["localizations"]),
        releases: !exists(json, "releases") ? undefined : GameCenterAchievementRelationshipsReleasesFromJSON(json["releases"])
    };
}

export function GameCenterAchievementRelationshipsToJSON(value?: GameCenterAchievementRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        gameCenterDetail: AppRelationshipsGameCenterDetailToJSON(value.gameCenterDetail),
        gameCenterGroup: GameCenterAchievementRelationshipsGameCenterGroupToJSON(value.gameCenterGroup),
        groupAchievement: GameCenterAchievementLocalizationRelationshipsGameCenterAchievementToJSON(value.groupAchievement),
        localizations: GameCenterAchievementRelationshipsLocalizationsToJSON(value.localizations),
        releases: GameCenterAchievementRelationshipsReleasesToJSON(value.releases)
    };
}
