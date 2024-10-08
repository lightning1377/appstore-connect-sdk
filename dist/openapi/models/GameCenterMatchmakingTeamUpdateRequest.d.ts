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
import type { GameCenterMatchmakingTeamUpdateRequestData } from "./GameCenterMatchmakingTeamUpdateRequestData";
/**
 *
 * @export
 * @interface GameCenterMatchmakingTeamUpdateRequest
 */
export interface GameCenterMatchmakingTeamUpdateRequest {
    /**
     *
     * @type {GameCenterMatchmakingTeamUpdateRequestData}
     * @memberof GameCenterMatchmakingTeamUpdateRequest
     */
    data: GameCenterMatchmakingTeamUpdateRequestData;
}
/**
 * Check if a given object implements the GameCenterMatchmakingTeamUpdateRequest interface.
 */
export declare function instanceOfGameCenterMatchmakingTeamUpdateRequest(value: object): boolean;
export declare function GameCenterMatchmakingTeamUpdateRequestFromJSON(json: any): GameCenterMatchmakingTeamUpdateRequest;
export declare function GameCenterMatchmakingTeamUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingTeamUpdateRequest;
export declare function GameCenterMatchmakingTeamUpdateRequestToJSON(value?: GameCenterMatchmakingTeamUpdateRequest | null): any;
