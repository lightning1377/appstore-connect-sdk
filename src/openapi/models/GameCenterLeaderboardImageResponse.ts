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
import type { GameCenterLeaderboardImage } from "./GameCenterLeaderboardImage";
import { GameCenterLeaderboardImageFromJSON, GameCenterLeaderboardImageFromJSONTyped, GameCenterLeaderboardImageToJSON } from "./GameCenterLeaderboardImage";
import type { GameCenterLeaderboardLocalization } from "./GameCenterLeaderboardLocalization";
import { GameCenterLeaderboardLocalizationFromJSON, GameCenterLeaderboardLocalizationFromJSONTyped, GameCenterLeaderboardLocalizationToJSON } from "./GameCenterLeaderboardLocalization";

/**
 *
 * @export
 * @interface GameCenterLeaderboardImageResponse
 */
export interface GameCenterLeaderboardImageResponse {
    /**
     *
     * @type {GameCenterLeaderboardImage}
     * @memberof GameCenterLeaderboardImageResponse
     */
    data: GameCenterLeaderboardImage;
    /**
     *
     * @type {Array<GameCenterLeaderboardLocalization>}
     * @memberof GameCenterLeaderboardImageResponse
     */
    included?: Array<GameCenterLeaderboardLocalization>;
    /**
     *
     * @type {DocumentLinks}
     * @memberof GameCenterLeaderboardImageResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the GameCenterLeaderboardImageResponse interface.
 */
export function instanceOfGameCenterLeaderboardImageResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GameCenterLeaderboardImageResponseFromJSON(json: any): GameCenterLeaderboardImageResponse {
    return GameCenterLeaderboardImageResponseFromJSONTyped(json, false);
}

export function GameCenterLeaderboardImageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardImageResponse {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: GameCenterLeaderboardImageFromJSON(json["data"]),
        included: !exists(json, "included") ? undefined : (json["included"] as Array<any>).map(GameCenterLeaderboardLocalizationFromJSON),
        links: DocumentLinksFromJSON(json["links"])
    };
}

export function GameCenterLeaderboardImageResponseToJSON(value?: GameCenterLeaderboardImageResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: GameCenterLeaderboardImageToJSON(value.data),
        included: value.included === undefined ? undefined : (value.included as Array<any>).map(GameCenterLeaderboardLocalizationToJSON),
        links: DocumentLinksToJSON(value.links)
    };
}
