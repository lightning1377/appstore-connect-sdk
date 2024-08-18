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
import type { DocumentLinks } from "./DocumentLinks";
import { DocumentLinksFromJSON, DocumentLinksFromJSONTyped, DocumentLinksToJSON } from "./DocumentLinks";
import type { GameCenterLeaderboard } from "./GameCenterLeaderboard";
import { GameCenterLeaderboardFromJSON, GameCenterLeaderboardFromJSONTyped, GameCenterLeaderboardToJSON } from "./GameCenterLeaderboard";
import type { GameCenterLeaderboardsResponseIncludedInner } from "./GameCenterLeaderboardsResponseIncludedInner";
import { GameCenterLeaderboardsResponseIncludedInnerFromJSON, GameCenterLeaderboardsResponseIncludedInnerFromJSONTyped, GameCenterLeaderboardsResponseIncludedInnerToJSON } from "./GameCenterLeaderboardsResponseIncludedInner";

/**
 *
 * @export
 * @interface GameCenterLeaderboardResponse
 */
export interface GameCenterLeaderboardResponse {
    /**
     *
     * @type {GameCenterLeaderboard}
     * @memberof GameCenterLeaderboardResponse
     */
    data: GameCenterLeaderboard;
    /**
     *
     * @type {Array<GameCenterLeaderboardsResponseIncludedInner>}
     * @memberof GameCenterLeaderboardResponse
     */
    included?: Array<GameCenterLeaderboardsResponseIncludedInner>;
    /**
     *
     * @type {DocumentLinks}
     * @memberof GameCenterLeaderboardResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the GameCenterLeaderboardResponse interface.
 */
export function instanceOfGameCenterLeaderboardResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GameCenterLeaderboardResponseFromJSON(json: any): GameCenterLeaderboardResponse {
    return GameCenterLeaderboardResponseFromJSONTyped(json, false);
}

export function GameCenterLeaderboardResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardResponse {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: GameCenterLeaderboardFromJSON(json["data"]),
        included: !exists(json, "included") ? undefined : (json["included"] as Array<any>).map(GameCenterLeaderboardsResponseIncludedInnerFromJSON),
        links: DocumentLinksFromJSON(json["links"])
    };
}

export function GameCenterLeaderboardResponseToJSON(value?: GameCenterLeaderboardResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: GameCenterLeaderboardToJSON(value.data),
        included: value.included === undefined ? undefined : (value.included as Array<any>).map(GameCenterLeaderboardsResponseIncludedInnerToJSON),
        links: DocumentLinksToJSON(value.links)
    };
}
