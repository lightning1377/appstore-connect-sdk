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
import type { GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributes } from "./GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributes";
/**
 *
 * @export
 * @interface GameCenterLeaderboardEntrySubmissionCreateRequestData
 */
export interface GameCenterLeaderboardEntrySubmissionCreateRequestData {
    /**
     *
     * @type {string}
     * @memberof GameCenterLeaderboardEntrySubmissionCreateRequestData
     */
    type: GameCenterLeaderboardEntrySubmissionCreateRequestDataTypeEnum;
    /**
     *
     * @type {GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributes}
     * @memberof GameCenterLeaderboardEntrySubmissionCreateRequestData
     */
    attributes: GameCenterLeaderboardEntrySubmissionCreateRequestDataAttributes;
}
/**
 * @export
 */
export declare const GameCenterLeaderboardEntrySubmissionCreateRequestDataTypeEnum: {
    readonly GameCenterLeaderboardEntrySubmissions: "gameCenterLeaderboardEntrySubmissions";
};
export type GameCenterLeaderboardEntrySubmissionCreateRequestDataTypeEnum = (typeof GameCenterLeaderboardEntrySubmissionCreateRequestDataTypeEnum)[keyof typeof GameCenterLeaderboardEntrySubmissionCreateRequestDataTypeEnum];
/**
 * Check if a given object implements the GameCenterLeaderboardEntrySubmissionCreateRequestData interface.
 */
export declare function instanceOfGameCenterLeaderboardEntrySubmissionCreateRequestData(value: object): boolean;
export declare function GameCenterLeaderboardEntrySubmissionCreateRequestDataFromJSON(json: any): GameCenterLeaderboardEntrySubmissionCreateRequestData;
export declare function GameCenterLeaderboardEntrySubmissionCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardEntrySubmissionCreateRequestData;
export declare function GameCenterLeaderboardEntrySubmissionCreateRequestDataToJSON(value?: GameCenterLeaderboardEntrySubmissionCreateRequestData | null): any;
