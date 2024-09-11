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
import type { AppEventScreenshotUpdateRequestDataAttributes } from "./AppEventScreenshotUpdateRequestDataAttributes";
/**
 *
 * @export
 * @interface GameCenterLeaderboardSetImageUpdateRequestData
 */
export interface GameCenterLeaderboardSetImageUpdateRequestData {
    /**
     *
     * @type {string}
     * @memberof GameCenterLeaderboardSetImageUpdateRequestData
     */
    type: GameCenterLeaderboardSetImageUpdateRequestDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof GameCenterLeaderboardSetImageUpdateRequestData
     */
    id: string;
    /**
     *
     * @type {AppEventScreenshotUpdateRequestDataAttributes}
     * @memberof GameCenterLeaderboardSetImageUpdateRequestData
     */
    attributes?: AppEventScreenshotUpdateRequestDataAttributes;
}
/**
 * @export
 */
export declare const GameCenterLeaderboardSetImageUpdateRequestDataTypeEnum: {
    readonly GameCenterLeaderboardSetImages: "gameCenterLeaderboardSetImages";
};
export type GameCenterLeaderboardSetImageUpdateRequestDataTypeEnum = (typeof GameCenterLeaderboardSetImageUpdateRequestDataTypeEnum)[keyof typeof GameCenterLeaderboardSetImageUpdateRequestDataTypeEnum];
/**
 * Check if a given object implements the GameCenterLeaderboardSetImageUpdateRequestData interface.
 */
export declare function instanceOfGameCenterLeaderboardSetImageUpdateRequestData(value: object): boolean;
export declare function GameCenterLeaderboardSetImageUpdateRequestDataFromJSON(json: any): GameCenterLeaderboardSetImageUpdateRequestData;
export declare function GameCenterLeaderboardSetImageUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetImageUpdateRequestData;
export declare function GameCenterLeaderboardSetImageUpdateRequestDataToJSON(value?: GameCenterLeaderboardSetImageUpdateRequestData | null): any;
