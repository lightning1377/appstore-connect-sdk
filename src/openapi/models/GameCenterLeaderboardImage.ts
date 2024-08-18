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
import type { GameCenterAchievementImageAttributes } from "./GameCenterAchievementImageAttributes";
import { GameCenterAchievementImageAttributesFromJSON, GameCenterAchievementImageAttributesFromJSONTyped, GameCenterAchievementImageAttributesToJSON } from "./GameCenterAchievementImageAttributes";
import type { GameCenterLeaderboardImageRelationships } from "./GameCenterLeaderboardImageRelationships";
import { GameCenterLeaderboardImageRelationshipsFromJSON, GameCenterLeaderboardImageRelationshipsFromJSONTyped, GameCenterLeaderboardImageRelationshipsToJSON } from "./GameCenterLeaderboardImageRelationships";
import type { ResourceLinks } from "./ResourceLinks";
import { ResourceLinksFromJSON, ResourceLinksFromJSONTyped, ResourceLinksToJSON } from "./ResourceLinks";

/**
 *
 * @export
 * @interface GameCenterLeaderboardImage
 */
export interface GameCenterLeaderboardImage {
    /**
     *
     * @type {string}
     * @memberof GameCenterLeaderboardImage
     */
    type: GameCenterLeaderboardImageTypeEnum;
    /**
     *
     * @type {string}
     * @memberof GameCenterLeaderboardImage
     */
    id: string;
    /**
     *
     * @type {GameCenterAchievementImageAttributes}
     * @memberof GameCenterLeaderboardImage
     */
    attributes?: GameCenterAchievementImageAttributes;
    /**
     *
     * @type {GameCenterLeaderboardImageRelationships}
     * @memberof GameCenterLeaderboardImage
     */
    relationships?: GameCenterLeaderboardImageRelationships;
    /**
     *
     * @type {ResourceLinks}
     * @memberof GameCenterLeaderboardImage
     */
    links?: ResourceLinks;
}

/**
 * @export
 */
export const GameCenterLeaderboardImageTypeEnum = {
    GameCenterLeaderboardImages: "gameCenterLeaderboardImages"
} as const;
export type GameCenterLeaderboardImageTypeEnum = (typeof GameCenterLeaderboardImageTypeEnum)[keyof typeof GameCenterLeaderboardImageTypeEnum];

/**
 * Check if a given object implements the GameCenterLeaderboardImage interface.
 */
export function instanceOfGameCenterLeaderboardImage(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function GameCenterLeaderboardImageFromJSON(json: any): GameCenterLeaderboardImage {
    return GameCenterLeaderboardImageFromJSONTyped(json, false);
}

export function GameCenterLeaderboardImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardImage {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !exists(json, "attributes") ? undefined : GameCenterAchievementImageAttributesFromJSON(json["attributes"]),
        relationships: !exists(json, "relationships") ? undefined : GameCenterLeaderboardImageRelationshipsFromJSON(json["relationships"]),
        links: !exists(json, "links") ? undefined : ResourceLinksFromJSON(json["links"])
    };
}

export function GameCenterLeaderboardImageToJSON(value?: GameCenterLeaderboardImage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: GameCenterAchievementImageAttributesToJSON(value.attributes),
        relationships: GameCenterLeaderboardImageRelationshipsToJSON(value.relationships),
        links: ResourceLinksToJSON(value.links)
    };
}
