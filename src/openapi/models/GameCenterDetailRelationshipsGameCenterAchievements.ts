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
import type { AlternativeDistributionPackageVersionRelationshipsVariantsLinks } from "./AlternativeDistributionPackageVersionRelationshipsVariantsLinks";
import { AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON, AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSONTyped, AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON } from "./AlternativeDistributionPackageVersionRelationshipsVariantsLinks";
import type { GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData } from "./GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData";
import { GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataFromJSON, GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataFromJSONTyped, GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataToJSON } from "./GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData";
import type { PagingInformation } from "./PagingInformation";
import { PagingInformationFromJSON, PagingInformationFromJSONTyped, PagingInformationToJSON } from "./PagingInformation";

/**
 *
 * @export
 * @interface GameCenterDetailRelationshipsGameCenterAchievements
 */
export interface GameCenterDetailRelationshipsGameCenterAchievements {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof GameCenterDetailRelationshipsGameCenterAchievements
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof GameCenterDetailRelationshipsGameCenterAchievements
     */
    meta?: PagingInformation;
    /**
     *
     * @type {Array<GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData>}
     * @memberof GameCenterDetailRelationshipsGameCenterAchievements
     */
    data?: Array<GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData>;
}

/**
 * Check if a given object implements the GameCenterDetailRelationshipsGameCenterAchievements interface.
 */
export function instanceOfGameCenterDetailRelationshipsGameCenterAchievements(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterDetailRelationshipsGameCenterAchievementsFromJSON(json: any): GameCenterDetailRelationshipsGameCenterAchievements {
    return GameCenterDetailRelationshipsGameCenterAchievementsFromJSONTyped(json, false);
}

export function GameCenterDetailRelationshipsGameCenterAchievementsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterDetailRelationshipsGameCenterAchievements {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        links: !exists(json, "links") ? undefined : AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON(json["links"]),
        meta: !exists(json, "meta") ? undefined : PagingInformationFromJSON(json["meta"]),
        data: !exists(json, "data") ? undefined : (json["data"] as Array<any>).map(GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataFromJSON)
    };
}

export function GameCenterDetailRelationshipsGameCenterAchievementsToJSON(value?: GameCenterDetailRelationshipsGameCenterAchievements | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        links: AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON(value.links),
        meta: PagingInformationToJSON(value.meta),
        data: value.data === undefined ? undefined : (value.data as Array<any>).map(GameCenterAchievementLocalizationRelationshipsGameCenterAchievementDataToJSON)
    };
}
