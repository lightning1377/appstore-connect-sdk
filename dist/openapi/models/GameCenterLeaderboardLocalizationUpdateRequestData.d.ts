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
import type { GameCenterLeaderboardLocalizationUpdateRequestDataAttributes } from "./GameCenterLeaderboardLocalizationUpdateRequestDataAttributes";
/**
 *
 * @export
 * @interface GameCenterLeaderboardLocalizationUpdateRequestData
 */
export interface GameCenterLeaderboardLocalizationUpdateRequestData {
    /**
     *
     * @type {string}
     * @memberof GameCenterLeaderboardLocalizationUpdateRequestData
     */
    type: GameCenterLeaderboardLocalizationUpdateRequestDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof GameCenterLeaderboardLocalizationUpdateRequestData
     */
    id: string;
    /**
     *
     * @type {GameCenterLeaderboardLocalizationUpdateRequestDataAttributes}
     * @memberof GameCenterLeaderboardLocalizationUpdateRequestData
     */
    attributes?: GameCenterLeaderboardLocalizationUpdateRequestDataAttributes;
}
/**
 * @export
 */
export declare const GameCenterLeaderboardLocalizationUpdateRequestDataTypeEnum: {
    readonly GameCenterLeaderboardLocalizations: "gameCenterLeaderboardLocalizations";
};
export type GameCenterLeaderboardLocalizationUpdateRequestDataTypeEnum = (typeof GameCenterLeaderboardLocalizationUpdateRequestDataTypeEnum)[keyof typeof GameCenterLeaderboardLocalizationUpdateRequestDataTypeEnum];
/**
 * Check if a given object implements the GameCenterLeaderboardLocalizationUpdateRequestData interface.
 */
export declare function instanceOfGameCenterLeaderboardLocalizationUpdateRequestData(value: object): boolean;
export declare function GameCenterLeaderboardLocalizationUpdateRequestDataFromJSON(json: any): GameCenterLeaderboardLocalizationUpdateRequestData;
export declare function GameCenterLeaderboardLocalizationUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardLocalizationUpdateRequestData;
export declare function GameCenterLeaderboardLocalizationUpdateRequestDataToJSON(value?: GameCenterLeaderboardLocalizationUpdateRequestData | null): any;
