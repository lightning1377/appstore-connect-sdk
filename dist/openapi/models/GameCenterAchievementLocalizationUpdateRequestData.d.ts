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
import type { GameCenterAchievementLocalizationUpdateRequestDataAttributes } from "./GameCenterAchievementLocalizationUpdateRequestDataAttributes";
/**
 *
 * @export
 * @interface GameCenterAchievementLocalizationUpdateRequestData
 */
export interface GameCenterAchievementLocalizationUpdateRequestData {
    /**
     *
     * @type {string}
     * @memberof GameCenterAchievementLocalizationUpdateRequestData
     */
    type: GameCenterAchievementLocalizationUpdateRequestDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof GameCenterAchievementLocalizationUpdateRequestData
     */
    id: string;
    /**
     *
     * @type {GameCenterAchievementLocalizationUpdateRequestDataAttributes}
     * @memberof GameCenterAchievementLocalizationUpdateRequestData
     */
    attributes?: GameCenterAchievementLocalizationUpdateRequestDataAttributes;
}
/**
 * @export
 */
export declare const GameCenterAchievementLocalizationUpdateRequestDataTypeEnum: {
    readonly GameCenterAchievementLocalizations: "gameCenterAchievementLocalizations";
};
export type GameCenterAchievementLocalizationUpdateRequestDataTypeEnum = (typeof GameCenterAchievementLocalizationUpdateRequestDataTypeEnum)[keyof typeof GameCenterAchievementLocalizationUpdateRequestDataTypeEnum];
/**
 * Check if a given object implements the GameCenterAchievementLocalizationUpdateRequestData interface.
 */
export declare function instanceOfGameCenterAchievementLocalizationUpdateRequestData(value: object): boolean;
export declare function GameCenterAchievementLocalizationUpdateRequestDataFromJSON(json: any): GameCenterAchievementLocalizationUpdateRequestData;
export declare function GameCenterAchievementLocalizationUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementLocalizationUpdateRequestData;
export declare function GameCenterAchievementLocalizationUpdateRequestDataToJSON(value?: GameCenterAchievementLocalizationUpdateRequestData | null): any;
