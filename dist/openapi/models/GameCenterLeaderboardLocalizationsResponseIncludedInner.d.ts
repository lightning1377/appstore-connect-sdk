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
import { GameCenterLeaderboard } from "./GameCenterLeaderboard";
import { GameCenterLeaderboardImage } from "./GameCenterLeaderboardImage";
/**
 * @type GameCenterLeaderboardLocalizationsResponseIncludedInner
 *
 * @export
 */
export type GameCenterLeaderboardLocalizationsResponseIncludedInner = GameCenterLeaderboard | GameCenterLeaderboardImage;
export declare function GameCenterLeaderboardLocalizationsResponseIncludedInnerFromJSON(json: any): GameCenterLeaderboardLocalizationsResponseIncludedInner;
export declare function GameCenterLeaderboardLocalizationsResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardLocalizationsResponseIncludedInner;
export declare function GameCenterLeaderboardLocalizationsResponseIncludedInnerToJSON(value?: GameCenterLeaderboardLocalizationsResponseIncludedInner | null): any;
