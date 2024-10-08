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
import type { GameCenterAchievementImageCreateRequestDataRelationshipsGameCenterAchievementLocalization } from "./GameCenterAchievementImageCreateRequestDataRelationshipsGameCenterAchievementLocalization";
/**
 *
 * @export
 * @interface GameCenterAchievementImageCreateRequestDataRelationships
 */
export interface GameCenterAchievementImageCreateRequestDataRelationships {
    /**
     *
     * @type {GameCenterAchievementImageCreateRequestDataRelationshipsGameCenterAchievementLocalization}
     * @memberof GameCenterAchievementImageCreateRequestDataRelationships
     */
    gameCenterAchievementLocalization: GameCenterAchievementImageCreateRequestDataRelationshipsGameCenterAchievementLocalization;
}
/**
 * Check if a given object implements the GameCenterAchievementImageCreateRequestDataRelationships interface.
 */
export declare function instanceOfGameCenterAchievementImageCreateRequestDataRelationships(value: object): boolean;
export declare function GameCenterAchievementImageCreateRequestDataRelationshipsFromJSON(json: any): GameCenterAchievementImageCreateRequestDataRelationships;
export declare function GameCenterAchievementImageCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementImageCreateRequestDataRelationships;
export declare function GameCenterAchievementImageCreateRequestDataRelationshipsToJSON(value?: GameCenterAchievementImageCreateRequestDataRelationships | null): any;
