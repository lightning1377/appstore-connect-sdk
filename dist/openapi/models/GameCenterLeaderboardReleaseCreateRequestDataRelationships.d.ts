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
import type { GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetail } from "./GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetail";
import type { GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsGameCenterLeaderboard } from "./GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsGameCenterLeaderboard";
/**
 *
 * @export
 * @interface GameCenterLeaderboardReleaseCreateRequestDataRelationships
 */
export interface GameCenterLeaderboardReleaseCreateRequestDataRelationships {
    /**
     *
     * @type {GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetail}
     * @memberof GameCenterLeaderboardReleaseCreateRequestDataRelationships
     */
    gameCenterDetail: GameCenterAchievementReleaseCreateRequestDataRelationshipsGameCenterDetail;
    /**
     *
     * @type {GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsGameCenterLeaderboard}
     * @memberof GameCenterLeaderboardReleaseCreateRequestDataRelationships
     */
    gameCenterLeaderboard: GameCenterLeaderboardLocalizationCreateRequestDataRelationshipsGameCenterLeaderboard;
}
/**
 * Check if a given object implements the GameCenterLeaderboardReleaseCreateRequestDataRelationships interface.
 */
export declare function instanceOfGameCenterLeaderboardReleaseCreateRequestDataRelationships(value: object): boolean;
export declare function GameCenterLeaderboardReleaseCreateRequestDataRelationshipsFromJSON(json: any): GameCenterLeaderboardReleaseCreateRequestDataRelationships;
export declare function GameCenterLeaderboardReleaseCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardReleaseCreateRequestDataRelationships;
export declare function GameCenterLeaderboardReleaseCreateRequestDataRelationshipsToJSON(value?: GameCenterLeaderboardReleaseCreateRequestDataRelationships | null): any;
