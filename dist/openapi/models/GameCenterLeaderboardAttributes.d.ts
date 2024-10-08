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
 * @interface GameCenterLeaderboardAttributes
 */
export interface GameCenterLeaderboardAttributes {
    /**
     *
     * @type {GameCenterLeaderboardFormatter}
     * @memberof GameCenterLeaderboardAttributes
     */
    defaultFormatter?: GameCenterLeaderboardFormatter;
    /**
     *
     * @type {string}
     * @memberof GameCenterLeaderboardAttributes
     */
    referenceName?: string;
    /**
     *
     * @type {string}
     * @memberof GameCenterLeaderboardAttributes
     */
    vendorIdentifier?: string;
    /**
     *
     * @type {string}
     * @memberof GameCenterLeaderboardAttributes
     */
    submissionType?: GameCenterLeaderboardAttributesSubmissionTypeEnum;
    /**
     *
     * @type {string}
     * @memberof GameCenterLeaderboardAttributes
     */
    scoreSortType?: GameCenterLeaderboardAttributesScoreSortTypeEnum;
    /**
     *
     * @type {Decimal}
     * @memberof GameCenterLeaderboardAttributes
     */
    scoreRangeStart?: Decimal;
    /**
     *
     * @type {Decimal}
     * @memberof GameCenterLeaderboardAttributes
     */
    scoreRangeEnd?: Decimal;
    /**
     *
     * @type {Date}
     * @memberof GameCenterLeaderboardAttributes
     */
    recurrenceStartDate?: Date;
    /**
     *
     * @type {string}
     * @memberof GameCenterLeaderboardAttributes
     */
    recurrenceDuration?: string;
    /**
     *
     * @type {string}
     * @memberof GameCenterLeaderboardAttributes
     */
    recurrenceRule?: string;
    /**
     *
     * @type {boolean}
     * @memberof GameCenterLeaderboardAttributes
     */
    archived?: boolean;
}
/**
 * @export
 */
export declare const GameCenterLeaderboardAttributesSubmissionTypeEnum: {
    readonly BestScore: "BEST_SCORE";
    readonly MostRecentScore: "MOST_RECENT_SCORE";
};
export type GameCenterLeaderboardAttributesSubmissionTypeEnum = (typeof GameCenterLeaderboardAttributesSubmissionTypeEnum)[keyof typeof GameCenterLeaderboardAttributesSubmissionTypeEnum];
/**
 * @export
 */
export declare const GameCenterLeaderboardAttributesScoreSortTypeEnum: {
    readonly Asc: "ASC";
    readonly Desc: "DESC";
};
export type GameCenterLeaderboardAttributesScoreSortTypeEnum = (typeof GameCenterLeaderboardAttributesScoreSortTypeEnum)[keyof typeof GameCenterLeaderboardAttributesScoreSortTypeEnum];
/**
 * Check if a given object implements the GameCenterLeaderboardAttributes interface.
 */
export declare function instanceOfGameCenterLeaderboardAttributes(value: object): boolean;
export declare function GameCenterLeaderboardAttributesFromJSON(json: any): GameCenterLeaderboardAttributes;
export declare function GameCenterLeaderboardAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardAttributes;
export declare function GameCenterLeaderboardAttributesToJSON(value?: GameCenterLeaderboardAttributes | null): any;
