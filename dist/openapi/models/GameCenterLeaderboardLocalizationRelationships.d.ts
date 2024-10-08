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
import type { GameCenterDetailRelationshipsDefaultLeaderboard } from "./GameCenterDetailRelationshipsDefaultLeaderboard";
import type { GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImage } from "./GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImage";
/**
 *
 * @export
 * @interface GameCenterLeaderboardLocalizationRelationships
 */
export interface GameCenterLeaderboardLocalizationRelationships {
    /**
     *
     * @type {GameCenterDetailRelationshipsDefaultLeaderboard}
     * @memberof GameCenterLeaderboardLocalizationRelationships
     */
    gameCenterLeaderboard?: GameCenterDetailRelationshipsDefaultLeaderboard;
    /**
     *
     * @type {GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImage}
     * @memberof GameCenterLeaderboardLocalizationRelationships
     */
    gameCenterLeaderboardImage?: GameCenterLeaderboardLocalizationRelationshipsGameCenterLeaderboardImage;
}
/**
 * Check if a given object implements the GameCenterLeaderboardLocalizationRelationships interface.
 */
export declare function instanceOfGameCenterLeaderboardLocalizationRelationships(value: object): boolean;
export declare function GameCenterLeaderboardLocalizationRelationshipsFromJSON(json: any): GameCenterLeaderboardLocalizationRelationships;
export declare function GameCenterLeaderboardLocalizationRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardLocalizationRelationships;
export declare function GameCenterLeaderboardLocalizationRelationshipsToJSON(value?: GameCenterLeaderboardLocalizationRelationships | null): any;
