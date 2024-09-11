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
import type { GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner } from "./GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner";
import type { PagedDocumentLinks } from "./PagedDocumentLinks";
import type { PagingInformation } from "./PagingInformation";
/**
 *
 * @export
 * @interface GameCenterGroupGameCenterLeaderboardSetsLinkagesResponse
 */
export interface GameCenterGroupGameCenterLeaderboardSetsLinkagesResponse {
    /**
     *
     * @type {Array<GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner>}
     * @memberof GameCenterGroupGameCenterLeaderboardSetsLinkagesResponse
     */
    data: Array<GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof GameCenterGroupGameCenterLeaderboardSetsLinkagesResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof GameCenterGroupGameCenterLeaderboardSetsLinkagesResponse
     */
    meta?: PagingInformation;
}
/**
 * Check if a given object implements the GameCenterGroupGameCenterLeaderboardSetsLinkagesResponse interface.
 */
export declare function instanceOfGameCenterGroupGameCenterLeaderboardSetsLinkagesResponse(value: object): boolean;
export declare function GameCenterGroupGameCenterLeaderboardSetsLinkagesResponseFromJSON(json: any): GameCenterGroupGameCenterLeaderboardSetsLinkagesResponse;
export declare function GameCenterGroupGameCenterLeaderboardSetsLinkagesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterGroupGameCenterLeaderboardSetsLinkagesResponse;
export declare function GameCenterGroupGameCenterLeaderboardSetsLinkagesResponseToJSON(value?: GameCenterGroupGameCenterLeaderboardSetsLinkagesResponse | null): any;
