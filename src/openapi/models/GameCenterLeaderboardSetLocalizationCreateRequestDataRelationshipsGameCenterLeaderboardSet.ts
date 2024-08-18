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
import type { GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner } from "./GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner";
import { GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInnerFromJSON, GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInnerFromJSONTyped, GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInnerToJSON } from "./GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner";

/**
 *
 * @export
 * @interface GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSet
 */
export interface GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSet {
    /**
     *
     * @type {GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner}
     * @memberof GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSet
     */
    data: GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner;
}

/**
 * Check if a given object implements the GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSet interface.
 */
export function instanceOfGameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSet(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSetFromJSON(json: any): GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSet {
    return GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSetFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSet {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInnerFromJSON(json["data"])
    };
}

export function GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSetToJSON(value?: GameCenterLeaderboardSetLocalizationCreateRequestDataRelationshipsGameCenterLeaderboardSet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInnerToJSON(value.data)
    };
}
