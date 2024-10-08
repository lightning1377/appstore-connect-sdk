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
 * @interface GameCenterLeaderboardImageUpdateRequestData
 */
export interface GameCenterLeaderboardImageUpdateRequestData {
    /**
     *
     * @type {string}
     * @memberof GameCenterLeaderboardImageUpdateRequestData
     */
    type: GameCenterLeaderboardImageUpdateRequestDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof GameCenterLeaderboardImageUpdateRequestData
     */
    id: string;
    /**
     *
     * @type {AppEventScreenshotUpdateRequestDataAttributes}
     * @memberof GameCenterLeaderboardImageUpdateRequestData
     */
    attributes?: AppEventScreenshotUpdateRequestDataAttributes;
}
/**
 * @export
 */
export declare const GameCenterLeaderboardImageUpdateRequestDataTypeEnum: {
    readonly GameCenterLeaderboardImages: "gameCenterLeaderboardImages";
};
export type GameCenterLeaderboardImageUpdateRequestDataTypeEnum = (typeof GameCenterLeaderboardImageUpdateRequestDataTypeEnum)[keyof typeof GameCenterLeaderboardImageUpdateRequestDataTypeEnum];
/**
 * Check if a given object implements the GameCenterLeaderboardImageUpdateRequestData interface.
 */
export declare function instanceOfGameCenterLeaderboardImageUpdateRequestData(value: object): boolean;
export declare function GameCenterLeaderboardImageUpdateRequestDataFromJSON(json: any): GameCenterLeaderboardImageUpdateRequestData;
export declare function GameCenterLeaderboardImageUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardImageUpdateRequestData;
export declare function GameCenterLeaderboardImageUpdateRequestDataToJSON(value?: GameCenterLeaderboardImageUpdateRequestData | null): any;
