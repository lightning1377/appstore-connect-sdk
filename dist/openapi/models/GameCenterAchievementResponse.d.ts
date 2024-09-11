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
import type { DocumentLinks } from "./DocumentLinks";
import type { GameCenterAchievement } from "./GameCenterAchievement";
import type { GameCenterAchievementsResponseIncludedInner } from "./GameCenterAchievementsResponseIncludedInner";
/**
 *
 * @export
 * @interface GameCenterAchievementResponse
 */
export interface GameCenterAchievementResponse {
    /**
     *
     * @type {GameCenterAchievement}
     * @memberof GameCenterAchievementResponse
     */
    data: GameCenterAchievement;
    /**
     *
     * @type {Array<GameCenterAchievementsResponseIncludedInner>}
     * @memberof GameCenterAchievementResponse
     */
    included?: Array<GameCenterAchievementsResponseIncludedInner>;
    /**
     *
     * @type {DocumentLinks}
     * @memberof GameCenterAchievementResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the GameCenterAchievementResponse interface.
 */
export declare function instanceOfGameCenterAchievementResponse(value: object): boolean;
export declare function GameCenterAchievementResponseFromJSON(json: any): GameCenterAchievementResponse;
export declare function GameCenterAchievementResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementResponse;
export declare function GameCenterAchievementResponseToJSON(value?: GameCenterAchievementResponse | null): any;
