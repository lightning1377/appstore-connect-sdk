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
import type { DocumentLinks } from "./DocumentLinks";
import type { GameCenterLeaderboardLocalization } from "./GameCenterLeaderboardLocalization";
import type { GameCenterLeaderboardLocalizationsResponseIncludedInner } from "./GameCenterLeaderboardLocalizationsResponseIncludedInner";
/**
 *
 * @export
 * @interface GameCenterLeaderboardLocalizationResponse
 */
export interface GameCenterLeaderboardLocalizationResponse {
    /**
     *
     * @type {GameCenterLeaderboardLocalization}
     * @memberof GameCenterLeaderboardLocalizationResponse
     */
    data: GameCenterLeaderboardLocalization;
    /**
     *
     * @type {Array<GameCenterLeaderboardLocalizationsResponseIncludedInner>}
     * @memberof GameCenterLeaderboardLocalizationResponse
     */
    included?: Array<GameCenterLeaderboardLocalizationsResponseIncludedInner>;
    /**
     *
     * @type {DocumentLinks}
     * @memberof GameCenterLeaderboardLocalizationResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the GameCenterLeaderboardLocalizationResponse interface.
 */
export declare function instanceOfGameCenterLeaderboardLocalizationResponse(value: object): boolean;
export declare function GameCenterLeaderboardLocalizationResponseFromJSON(json: any): GameCenterLeaderboardLocalizationResponse;
export declare function GameCenterLeaderboardLocalizationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardLocalizationResponse;
export declare function GameCenterLeaderboardLocalizationResponseToJSON(value?: GameCenterLeaderboardLocalizationResponse | null): any;
