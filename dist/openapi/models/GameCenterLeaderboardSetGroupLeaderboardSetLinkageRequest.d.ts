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
/**
 *
 * @export
 * @interface GameCenterLeaderboardSetGroupLeaderboardSetLinkageRequest
 */
export interface GameCenterLeaderboardSetGroupLeaderboardSetLinkageRequest {
    /**
     *
     * @type {GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner}
     * @memberof GameCenterLeaderboardSetGroupLeaderboardSetLinkageRequest
     */
    data: GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner;
}
/**
 * Check if a given object implements the GameCenterLeaderboardSetGroupLeaderboardSetLinkageRequest interface.
 */
export declare function instanceOfGameCenterLeaderboardSetGroupLeaderboardSetLinkageRequest(value: object): boolean;
export declare function GameCenterLeaderboardSetGroupLeaderboardSetLinkageRequestFromJSON(json: any): GameCenterLeaderboardSetGroupLeaderboardSetLinkageRequest;
export declare function GameCenterLeaderboardSetGroupLeaderboardSetLinkageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetGroupLeaderboardSetLinkageRequest;
export declare function GameCenterLeaderboardSetGroupLeaderboardSetLinkageRequestToJSON(value?: GameCenterLeaderboardSetGroupLeaderboardSetLinkageRequest | null): any;
