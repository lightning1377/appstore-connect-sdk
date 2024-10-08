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
import type { GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSet } from "./GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSet";
/**
 *
 * @export
 * @interface GameCenterLeaderboardSetMemberLocalizationRelationships
 */
export interface GameCenterLeaderboardSetMemberLocalizationRelationships {
    /**
     *
     * @type {GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSet}
     * @memberof GameCenterLeaderboardSetMemberLocalizationRelationships
     */
    gameCenterLeaderboardSet?: GameCenterLeaderboardSetLocalizationRelationshipsGameCenterLeaderboardSet;
    /**
     *
     * @type {GameCenterDetailRelationshipsDefaultLeaderboard}
     * @memberof GameCenterLeaderboardSetMemberLocalizationRelationships
     */
    gameCenterLeaderboard?: GameCenterDetailRelationshipsDefaultLeaderboard;
}
/**
 * Check if a given object implements the GameCenterLeaderboardSetMemberLocalizationRelationships interface.
 */
export declare function instanceOfGameCenterLeaderboardSetMemberLocalizationRelationships(value: object): boolean;
export declare function GameCenterLeaderboardSetMemberLocalizationRelationshipsFromJSON(json: any): GameCenterLeaderboardSetMemberLocalizationRelationships;
export declare function GameCenterLeaderboardSetMemberLocalizationRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetMemberLocalizationRelationships;
export declare function GameCenterLeaderboardSetMemberLocalizationRelationshipsToJSON(value?: GameCenterLeaderboardSetMemberLocalizationRelationships | null): any;
