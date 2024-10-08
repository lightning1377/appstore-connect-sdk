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
import type { GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData } from "./GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData";
import type { PagedDocumentLinks } from "./PagedDocumentLinks";
import type { PagingInformation } from "./PagingInformation";
/**
 *
 * @export
 * @interface GameCenterDetailGameCenterAchievementsLinkagesResponse
 */
export interface GameCenterDetailGameCenterAchievementsLinkagesResponse {
    /**
     *
     * @type {Array<GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData>}
     * @memberof GameCenterDetailGameCenterAchievementsLinkagesResponse
     */
    data: Array<GameCenterAchievementLocalizationRelationshipsGameCenterAchievementData>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof GameCenterDetailGameCenterAchievementsLinkagesResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof GameCenterDetailGameCenterAchievementsLinkagesResponse
     */
    meta?: PagingInformation;
}
/**
 * Check if a given object implements the GameCenterDetailGameCenterAchievementsLinkagesResponse interface.
 */
export declare function instanceOfGameCenterDetailGameCenterAchievementsLinkagesResponse(value: object): boolean;
export declare function GameCenterDetailGameCenterAchievementsLinkagesResponseFromJSON(json: any): GameCenterDetailGameCenterAchievementsLinkagesResponse;
export declare function GameCenterDetailGameCenterAchievementsLinkagesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterDetailGameCenterAchievementsLinkagesResponse;
export declare function GameCenterDetailGameCenterAchievementsLinkagesResponseToJSON(value?: GameCenterDetailGameCenterAchievementsLinkagesResponse | null): any;
