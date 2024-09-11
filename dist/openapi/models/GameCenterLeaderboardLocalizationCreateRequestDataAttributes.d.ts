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
import type { GameCenterLeaderboardFormatter } from "./GameCenterLeaderboardFormatter";
/**
 *
 * @export
 * @interface GameCenterLeaderboardLocalizationCreateRequestDataAttributes
 */
export interface GameCenterLeaderboardLocalizationCreateRequestDataAttributes {
    /**
     *
     * @type {string}
     * @memberof GameCenterLeaderboardLocalizationCreateRequestDataAttributes
     */
    locale: string;
    /**
     *
     * @type {string}
     * @memberof GameCenterLeaderboardLocalizationCreateRequestDataAttributes
     */
    name: string;
    /**
     *
     * @type {GameCenterLeaderboardFormatter}
     * @memberof GameCenterLeaderboardLocalizationCreateRequestDataAttributes
     */
    formatterOverride?: GameCenterLeaderboardFormatter;
    /**
     *
     * @type {string}
     * @memberof GameCenterLeaderboardLocalizationCreateRequestDataAttributes
     */
    formatterSuffix?: string;
    /**
     *
     * @type {string}
     * @memberof GameCenterLeaderboardLocalizationCreateRequestDataAttributes
     */
    formatterSuffixSingular?: string;
}
/**
 * Check if a given object implements the GameCenterLeaderboardLocalizationCreateRequestDataAttributes interface.
 */
export declare function instanceOfGameCenterLeaderboardLocalizationCreateRequestDataAttributes(value: object): boolean;
export declare function GameCenterLeaderboardLocalizationCreateRequestDataAttributesFromJSON(json: any): GameCenterLeaderboardLocalizationCreateRequestDataAttributes;
export declare function GameCenterLeaderboardLocalizationCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardLocalizationCreateRequestDataAttributes;
export declare function GameCenterLeaderboardLocalizationCreateRequestDataAttributesToJSON(value?: GameCenterLeaderboardLocalizationCreateRequestDataAttributes | null): any;
