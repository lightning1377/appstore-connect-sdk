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
import type { GameCenterAchievementCreateRequestDataRelationshipsGameCenterGroup } from "./GameCenterAchievementCreateRequestDataRelationshipsGameCenterGroup";
import type { GameCenterDetailUpdateRequestDataRelationshipsDefaultLeaderboard } from "./GameCenterDetailUpdateRequestDataRelationshipsDefaultLeaderboard";
/**
 *
 * @export
 * @interface GameCenterDetailUpdateRequestDataRelationships
 */
export interface GameCenterDetailUpdateRequestDataRelationships {
    /**
     *
     * @type {GameCenterAchievementCreateRequestDataRelationshipsGameCenterGroup}
     * @memberof GameCenterDetailUpdateRequestDataRelationships
     */
    gameCenterGroup?: GameCenterAchievementCreateRequestDataRelationshipsGameCenterGroup;
    /**
     *
     * @type {GameCenterDetailUpdateRequestDataRelationshipsDefaultLeaderboard}
     * @memberof GameCenterDetailUpdateRequestDataRelationships
     */
    defaultLeaderboard?: GameCenterDetailUpdateRequestDataRelationshipsDefaultLeaderboard;
    /**
     *
     * @type {GameCenterDetailUpdateRequestDataRelationshipsDefaultLeaderboard}
     * @memberof GameCenterDetailUpdateRequestDataRelationships
     */
    defaultGroupLeaderboard?: GameCenterDetailUpdateRequestDataRelationshipsDefaultLeaderboard;
}
/**
 * Check if a given object implements the GameCenterDetailUpdateRequestDataRelationships interface.
 */
export declare function instanceOfGameCenterDetailUpdateRequestDataRelationships(value: object): boolean;
export declare function GameCenterDetailUpdateRequestDataRelationshipsFromJSON(json: any): GameCenterDetailUpdateRequestDataRelationships;
export declare function GameCenterDetailUpdateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterDetailUpdateRequestDataRelationships;
export declare function GameCenterDetailUpdateRequestDataRelationshipsToJSON(value?: GameCenterDetailUpdateRequestDataRelationships | null): any;
