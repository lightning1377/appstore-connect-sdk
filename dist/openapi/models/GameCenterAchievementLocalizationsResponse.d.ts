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
import type { GameCenterAchievementLocalization } from "./GameCenterAchievementLocalization";
import type { GameCenterAchievementLocalizationsResponseIncludedInner } from "./GameCenterAchievementLocalizationsResponseIncludedInner";
import type { PagedDocumentLinks } from "./PagedDocumentLinks";
import type { PagingInformation } from "./PagingInformation";
/**
 *
 * @export
 * @interface GameCenterAchievementLocalizationsResponse
 */
export interface GameCenterAchievementLocalizationsResponse {
    /**
     *
     * @type {Array<GameCenterAchievementLocalization>}
     * @memberof GameCenterAchievementLocalizationsResponse
     */
    data: Array<GameCenterAchievementLocalization>;
    /**
     *
     * @type {Array<GameCenterAchievementLocalizationsResponseIncludedInner>}
     * @memberof GameCenterAchievementLocalizationsResponse
     */
    included?: Array<GameCenterAchievementLocalizationsResponseIncludedInner>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof GameCenterAchievementLocalizationsResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof GameCenterAchievementLocalizationsResponse
     */
    meta?: PagingInformation;
}
/**
 * Check if a given object implements the GameCenterAchievementLocalizationsResponse interface.
 */
export declare function instanceOfGameCenterAchievementLocalizationsResponse(value: object): boolean;
export declare function GameCenterAchievementLocalizationsResponseFromJSON(json: any): GameCenterAchievementLocalizationsResponse;
export declare function GameCenterAchievementLocalizationsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementLocalizationsResponse;
export declare function GameCenterAchievementLocalizationsResponseToJSON(value?: GameCenterAchievementLocalizationsResponse | null): any;
