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
import type { GameCenterLeaderboardUpdateRequestDataAttributes } from "./GameCenterLeaderboardUpdateRequestDataAttributes";
/**
 *
 * @export
 * @interface GameCenterLeaderboardUpdateRequestData
 */
export interface GameCenterLeaderboardUpdateRequestData {
    /**
     *
     * @type {string}
     * @memberof GameCenterLeaderboardUpdateRequestData
     */
    type: GameCenterLeaderboardUpdateRequestDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof GameCenterLeaderboardUpdateRequestData
     */
    id: string;
    /**
     *
     * @type {GameCenterLeaderboardUpdateRequestDataAttributes}
     * @memberof GameCenterLeaderboardUpdateRequestData
     */
    attributes?: GameCenterLeaderboardUpdateRequestDataAttributes;
}
/**
 * @export
 */
export declare const GameCenterLeaderboardUpdateRequestDataTypeEnum: {
    readonly GameCenterLeaderboards: "gameCenterLeaderboards";
};
export type GameCenterLeaderboardUpdateRequestDataTypeEnum = (typeof GameCenterLeaderboardUpdateRequestDataTypeEnum)[keyof typeof GameCenterLeaderboardUpdateRequestDataTypeEnum];
/**
 * Check if a given object implements the GameCenterLeaderboardUpdateRequestData interface.
 */
export declare function instanceOfGameCenterLeaderboardUpdateRequestData(value: object): boolean;
export declare function GameCenterLeaderboardUpdateRequestDataFromJSON(json: any): GameCenterLeaderboardUpdateRequestData;
export declare function GameCenterLeaderboardUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardUpdateRequestData;
export declare function GameCenterLeaderboardUpdateRequestDataToJSON(value?: GameCenterLeaderboardUpdateRequestData | null): any;
