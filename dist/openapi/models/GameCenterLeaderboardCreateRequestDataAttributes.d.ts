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
import type { Decimal } from "./Decimal";
import type { GameCenterLeaderboardFormatter } from "./GameCenterLeaderboardFormatter";
/**
 *
 * @export
 * @interface GameCenterLeaderboardCreateRequestDataAttributes
 */
export interface GameCenterLeaderboardCreateRequestDataAttributes {
    /**
     *
     * @type {GameCenterLeaderboardFormatter}
     * @memberof GameCenterLeaderboardCreateRequestDataAttributes
     */
    defaultFormatter: GameCenterLeaderboardFormatter;
    /**
     *
     * @type {string}
     * @memberof GameCenterLeaderboardCreateRequestDataAttributes
     */
    referenceName: string;
    /**
     *
     * @type {string}
     * @memberof GameCenterLeaderboardCreateRequestDataAttributes
     */
    vendorIdentifier: string;
    /**
     *
     * @type {string}
     * @memberof GameCenterLeaderboardCreateRequestDataAttributes
     */
    submissionType: GameCenterLeaderboardCreateRequestDataAttributesSubmissionTypeEnum;
    /**
     *
     * @type {string}
     * @memberof GameCenterLeaderboardCreateRequestDataAttributes
     */
    scoreSortType: GameCenterLeaderboardCreateRequestDataAttributesScoreSortTypeEnum;
    /**
     *
     * @type {Decimal}
     * @memberof GameCenterLeaderboardCreateRequestDataAttributes
     */
    scoreRangeStart?: Decimal;
    /**
     *
     * @type {Decimal}
     * @memberof GameCenterLeaderboardCreateRequestDataAttributes
     */
    scoreRangeEnd?: Decimal;
    /**
     *
     * @type {Date}
     * @memberof GameCenterLeaderboardCreateRequestDataAttributes
     */
    recurrenceStartDate?: Date;
    /**
     *
     * @type {string}
     * @memberof GameCenterLeaderboardCreateRequestDataAttributes
     */
    recurrenceDuration?: string;
    /**
     *
     * @type {string}
     * @memberof GameCenterLeaderboardCreateRequestDataAttributes
     */
    recurrenceRule?: string;
}
/**
 * @export
 */
export declare const GameCenterLeaderboardCreateRequestDataAttributesSubmissionTypeEnum: {
    readonly BestScore: "BEST_SCORE";
    readonly MostRecentScore: "MOST_RECENT_SCORE";
};
export type GameCenterLeaderboardCreateRequestDataAttributesSubmissionTypeEnum = (typeof GameCenterLeaderboardCreateRequestDataAttributesSubmissionTypeEnum)[keyof typeof GameCenterLeaderboardCreateRequestDataAttributesSubmissionTypeEnum];
/**
 * @export
 */
export declare const GameCenterLeaderboardCreateRequestDataAttributesScoreSortTypeEnum: {
    readonly Asc: "ASC";
    readonly Desc: "DESC";
};
export type GameCenterLeaderboardCreateRequestDataAttributesScoreSortTypeEnum = (typeof GameCenterLeaderboardCreateRequestDataAttributesScoreSortTypeEnum)[keyof typeof GameCenterLeaderboardCreateRequestDataAttributesScoreSortTypeEnum];
/**
 * Check if a given object implements the GameCenterLeaderboardCreateRequestDataAttributes interface.
 */
export declare function instanceOfGameCenterLeaderboardCreateRequestDataAttributes(value: object): boolean;
export declare function GameCenterLeaderboardCreateRequestDataAttributesFromJSON(json: any): GameCenterLeaderboardCreateRequestDataAttributes;
export declare function GameCenterLeaderboardCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardCreateRequestDataAttributes;
export declare function GameCenterLeaderboardCreateRequestDataAttributesToJSON(value?: GameCenterLeaderboardCreateRequestDataAttributes | null): any;
