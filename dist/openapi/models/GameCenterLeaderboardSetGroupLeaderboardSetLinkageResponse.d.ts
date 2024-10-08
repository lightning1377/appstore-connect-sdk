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
import type { GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner } from "./GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner";
/**
 *
 * @export
 * @interface GameCenterLeaderboardSetGroupLeaderboardSetLinkageResponse
 */
export interface GameCenterLeaderboardSetGroupLeaderboardSetLinkageResponse {
    /**
     *
     * @type {GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner}
     * @memberof GameCenterLeaderboardSetGroupLeaderboardSetLinkageResponse
     */
    data: GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner;
    /**
     *
     * @type {DocumentLinks}
     * @memberof GameCenterLeaderboardSetGroupLeaderboardSetLinkageResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the GameCenterLeaderboardSetGroupLeaderboardSetLinkageResponse interface.
 */
export declare function instanceOfGameCenterLeaderboardSetGroupLeaderboardSetLinkageResponse(value: object): boolean;
export declare function GameCenterLeaderboardSetGroupLeaderboardSetLinkageResponseFromJSON(json: any): GameCenterLeaderboardSetGroupLeaderboardSetLinkageResponse;
export declare function GameCenterLeaderboardSetGroupLeaderboardSetLinkageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetGroupLeaderboardSetLinkageResponse;
export declare function GameCenterLeaderboardSetGroupLeaderboardSetLinkageResponseToJSON(value?: GameCenterLeaderboardSetGroupLeaderboardSetLinkageResponse | null): any;
