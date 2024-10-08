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
import type { GameCenterLeaderboardSetRelease } from "./GameCenterLeaderboardSetRelease";
import type { GameCenterLeaderboardSetReleasesResponseIncludedInner } from "./GameCenterLeaderboardSetReleasesResponseIncludedInner";
import type { PagedDocumentLinks } from "./PagedDocumentLinks";
import type { PagingInformation } from "./PagingInformation";
/**
 *
 * @export
 * @interface GameCenterLeaderboardSetReleasesResponse
 */
export interface GameCenterLeaderboardSetReleasesResponse {
    /**
     *
     * @type {Array<GameCenterLeaderboardSetRelease>}
     * @memberof GameCenterLeaderboardSetReleasesResponse
     */
    data: Array<GameCenterLeaderboardSetRelease>;
    /**
     *
     * @type {Array<GameCenterLeaderboardSetReleasesResponseIncludedInner>}
     * @memberof GameCenterLeaderboardSetReleasesResponse
     */
    included?: Array<GameCenterLeaderboardSetReleasesResponseIncludedInner>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof GameCenterLeaderboardSetReleasesResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof GameCenterLeaderboardSetReleasesResponse
     */
    meta?: PagingInformation;
}
/**
 * Check if a given object implements the GameCenterLeaderboardSetReleasesResponse interface.
 */
export declare function instanceOfGameCenterLeaderboardSetReleasesResponse(value: object): boolean;
export declare function GameCenterLeaderboardSetReleasesResponseFromJSON(json: any): GameCenterLeaderboardSetReleasesResponse;
export declare function GameCenterLeaderboardSetReleasesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetReleasesResponse;
export declare function GameCenterLeaderboardSetReleasesResponseToJSON(value?: GameCenterLeaderboardSetReleasesResponse | null): any;
