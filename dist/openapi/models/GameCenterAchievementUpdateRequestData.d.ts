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
import type { GameCenterAchievementUpdateRequestDataAttributes } from "./GameCenterAchievementUpdateRequestDataAttributes";
/**
 *
 * @export
 * @interface GameCenterAchievementUpdateRequestData
 */
export interface GameCenterAchievementUpdateRequestData {
    /**
     *
     * @type {string}
     * @memberof GameCenterAchievementUpdateRequestData
     */
    type: GameCenterAchievementUpdateRequestDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof GameCenterAchievementUpdateRequestData
     */
    id: string;
    /**
     *
     * @type {GameCenterAchievementUpdateRequestDataAttributes}
     * @memberof GameCenterAchievementUpdateRequestData
     */
    attributes?: GameCenterAchievementUpdateRequestDataAttributes;
}
/**
 * @export
 */
export declare const GameCenterAchievementUpdateRequestDataTypeEnum: {
    readonly GameCenterAchievements: "gameCenterAchievements";
};
export type GameCenterAchievementUpdateRequestDataTypeEnum = (typeof GameCenterAchievementUpdateRequestDataTypeEnum)[keyof typeof GameCenterAchievementUpdateRequestDataTypeEnum];
/**
 * Check if a given object implements the GameCenterAchievementUpdateRequestData interface.
 */
export declare function instanceOfGameCenterAchievementUpdateRequestData(value: object): boolean;
export declare function GameCenterAchievementUpdateRequestDataFromJSON(json: any): GameCenterAchievementUpdateRequestData;
export declare function GameCenterAchievementUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementUpdateRequestData;
export declare function GameCenterAchievementUpdateRequestDataToJSON(value?: GameCenterAchievementUpdateRequestData | null): any;
