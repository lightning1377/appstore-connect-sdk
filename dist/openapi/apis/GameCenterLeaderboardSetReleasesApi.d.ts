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
import * as runtime from "../runtime";
import type { GameCenterLeaderboardSetReleaseCreateRequest, GameCenterLeaderboardSetReleaseResponse } from "../models";
export interface GameCenterLeaderboardSetReleasesCreateInstanceRequest {
    gameCenterLeaderboardSetReleaseCreateRequest: GameCenterLeaderboardSetReleaseCreateRequest;
}
export interface GameCenterLeaderboardSetReleasesDeleteInstanceRequest {
    id: string;
}
export interface GameCenterLeaderboardSetReleasesGetInstanceRequest {
    id: string;
    fieldsGameCenterLeaderboardSetReleases?: Array<GameCenterLeaderboardSetReleasesGetInstanceFieldsGameCenterLeaderboardSetReleasesEnum>;
    include?: Array<GameCenterLeaderboardSetReleasesGetInstanceIncludeEnum>;
}
/**
 *
 */
export declare class GameCenterLeaderboardSetReleasesApi extends runtime.BaseAPI {
    /**
     */
    gameCenterLeaderboardSetReleasesCreateInstanceRaw(requestParameters: GameCenterLeaderboardSetReleasesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterLeaderboardSetReleaseResponse>>;
    /**
     */
    gameCenterLeaderboardSetReleasesCreateInstance(requestParameters: GameCenterLeaderboardSetReleasesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterLeaderboardSetReleaseResponse>;
    /**
     */
    gameCenterLeaderboardSetReleasesDeleteInstanceRaw(requestParameters: GameCenterLeaderboardSetReleasesDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    gameCenterLeaderboardSetReleasesDeleteInstance(requestParameters: GameCenterLeaderboardSetReleasesDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    gameCenterLeaderboardSetReleasesGetInstanceRaw(requestParameters: GameCenterLeaderboardSetReleasesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterLeaderboardSetReleaseResponse>>;
    /**
     */
    gameCenterLeaderboardSetReleasesGetInstance(requestParameters: GameCenterLeaderboardSetReleasesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterLeaderboardSetReleaseResponse>;
}
/**
 * @export
 */
export declare const GameCenterLeaderboardSetReleasesGetInstanceFieldsGameCenterLeaderboardSetReleasesEnum: {
    readonly GameCenterDetail: "gameCenterDetail";
    readonly GameCenterLeaderboardSet: "gameCenterLeaderboardSet";
    readonly Live: "live";
};
export type GameCenterLeaderboardSetReleasesGetInstanceFieldsGameCenterLeaderboardSetReleasesEnum = (typeof GameCenterLeaderboardSetReleasesGetInstanceFieldsGameCenterLeaderboardSetReleasesEnum)[keyof typeof GameCenterLeaderboardSetReleasesGetInstanceFieldsGameCenterLeaderboardSetReleasesEnum];
/**
 * @export
 */
export declare const GameCenterLeaderboardSetReleasesGetInstanceIncludeEnum: {
    readonly GameCenterDetail: "gameCenterDetail";
    readonly GameCenterLeaderboardSet: "gameCenterLeaderboardSet";
};
export type GameCenterLeaderboardSetReleasesGetInstanceIncludeEnum = (typeof GameCenterLeaderboardSetReleasesGetInstanceIncludeEnum)[keyof typeof GameCenterLeaderboardSetReleasesGetInstanceIncludeEnum];
