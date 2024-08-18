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
import type { GameCenterAchievementRelationshipsGameCenterGroup } from "./GameCenterAchievementRelationshipsGameCenterGroup";
import { GameCenterAchievementRelationshipsGameCenterGroupFromJSON, GameCenterAchievementRelationshipsGameCenterGroupFromJSONTyped, GameCenterAchievementRelationshipsGameCenterGroupToJSON } from "./GameCenterAchievementRelationshipsGameCenterGroup";
import type { GameCenterDetailRelationshipsGameCenterLeaderboards } from "./GameCenterDetailRelationshipsGameCenterLeaderboards";
import { GameCenterDetailRelationshipsGameCenterLeaderboardsFromJSON, GameCenterDetailRelationshipsGameCenterLeaderboardsFromJSONTyped, GameCenterDetailRelationshipsGameCenterLeaderboardsToJSON } from "./GameCenterDetailRelationshipsGameCenterLeaderboards";
import type { GameCenterDetailRelationshipsLeaderboardSetReleases } from "./GameCenterDetailRelationshipsLeaderboardSetReleases";
import { GameCenterDetailRelationshipsLeaderboardSetReleasesFromJSON, GameCenterDetailRelationshipsLeaderboardSetReleasesFromJSONTyped, GameCenterDetailRelationshipsLeaderboardSetReleasesToJSON } from "./GameCenterDetailRelationshipsLeaderboardSetReleases";
import type { GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSet } from "./GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSet";
import { GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetFromJSON, GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetFromJSONTyped, GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetToJSON } from "./GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSet";
import type { GameCenterLeaderboardSetRelationshipsLocalizations } from "./GameCenterLeaderboardSetRelationshipsLocalizations";
import { GameCenterLeaderboardSetRelationshipsLocalizationsFromJSON, GameCenterLeaderboardSetRelationshipsLocalizationsFromJSONTyped, GameCenterLeaderboardSetRelationshipsLocalizationsToJSON } from "./GameCenterLeaderboardSetRelationshipsLocalizations";

/**
 *
 * @export
 * @interface GameCenterLeaderboardSetRelationships
 */
export interface GameCenterLeaderboardSetRelationships {
    /**
     *
     * @type {AppRelationshipsGameCenterDetail}
     * @memberof GameCenterLeaderboardSetRelationships
     */
    gameCenterDetail?: AppRelationshipsGameCenterDetail;
    /**
     *
     * @type {GameCenterAchievementRelationshipsGameCenterGroup}
     * @memberof GameCenterLeaderboardSetRelationships
     */
    gameCenterGroup?: GameCenterAchievementRelationshipsGameCenterGroup;
    /**
     *
     * @type {GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSet}
     * @memberof GameCenterLeaderboardSetRelationships
     */
    groupLeaderboardSet?: GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSet;
    /**
     *
     * @type {GameCenterLeaderboardSetRelationshipsLocalizations}
     * @memberof GameCenterLeaderboardSetRelationships
     */
    localizations?: GameCenterLeaderboardSetRelationshipsLocalizations;
    /**
     *
     * @type {GameCenterDetailRelationshipsGameCenterLeaderboards}
     * @memberof GameCenterLeaderboardSetRelationships
     */
    gameCenterLeaderboards?: GameCenterDetailRelationshipsGameCenterLeaderboards;
    /**
     *
     * @type {GameCenterDetailRelationshipsLeaderboardSetReleases}
     * @memberof GameCenterLeaderboardSetRelationships
     */
    releases?: GameCenterDetailRelationshipsLeaderboardSetReleases;
}

/**
 * Check if a given object implements the GameCenterLeaderboardSetRelationships interface.
 */
export function instanceOfGameCenterLeaderboardSetRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterLeaderboardSetRelationshipsFromJSON(json: any): GameCenterLeaderboardSetRelationships {
    return GameCenterLeaderboardSetRelationshipsFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetRelationships {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        gameCenterDetail: !exists(json, "gameCenterDetail") ? undefined : AppRelationshipsGameCenterDetailFromJSON(json["gameCenterDetail"]),
        gameCenterGroup: !exists(json, "gameCenterGroup") ? undefined : GameCenterAchievementRelationshipsGameCenterGroupFromJSON(json["gameCenterGroup"]),
        groupLeaderboardSet: !exists(json, "groupLeaderboardSet") ? undefined : GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetFromJSON(json["groupLeaderboardSet"]),
        localizations: !exists(json, "localizations") ? undefined : GameCenterLeaderboardSetRelationshipsLocalizationsFromJSON(json["localizations"]),
        gameCenterLeaderboards: !exists(json, "gameCenterLeaderboards") ? undefined : GameCenterDetailRelationshipsGameCenterLeaderboardsFromJSON(json["gameCenterLeaderboards"]),
        releases: !exists(json, "releases") ? undefined : GameCenterDetailRelationshipsLeaderboardSetReleasesFromJSON(json["releases"])
    };
}

export function GameCenterLeaderboardSetRelationshipsToJSON(value?: GameCenterLeaderboardSetRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        gameCenterDetail: AppRelationshipsGameCenterDetailToJSON(value.gameCenterDetail),
        gameCenterGroup: GameCenterAchievementRelationshipsGameCenterGroupToJSON(value.gameCenterGroup),
        groupLeaderboardSet: GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSetToJSON(value.groupLeaderboardSet),
        localizations: GameCenterLeaderboardSetRelationshipsLocalizationsToJSON(value.localizations),
        gameCenterLeaderboards: GameCenterDetailRelationshipsGameCenterLeaderboardsToJSON(value.gameCenterLeaderboards),
        releases: GameCenterDetailRelationshipsLeaderboardSetReleasesToJSON(value.releases)
    };
}
