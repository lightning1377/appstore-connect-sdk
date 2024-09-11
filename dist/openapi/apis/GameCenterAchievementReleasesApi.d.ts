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
import type { GameCenterAchievementReleaseCreateRequest, GameCenterAchievementReleaseResponse } from "../models";
export interface GameCenterAchievementReleasesCreateInstanceRequest {
    gameCenterAchievementReleaseCreateRequest: GameCenterAchievementReleaseCreateRequest;
}
export interface GameCenterAchievementReleasesDeleteInstanceRequest {
    id: string;
}
export interface GameCenterAchievementReleasesGetInstanceRequest {
    id: string;
    fieldsGameCenterAchievementReleases?: Array<GameCenterAchievementReleasesGetInstanceFieldsGameCenterAchievementReleasesEnum>;
    include?: Array<GameCenterAchievementReleasesGetInstanceIncludeEnum>;
}
/**
 *
 */
export declare class GameCenterAchievementReleasesApi extends runtime.BaseAPI {
    /**
     */
    gameCenterAchievementReleasesCreateInstanceRaw(requestParameters: GameCenterAchievementReleasesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterAchievementReleaseResponse>>;
    /**
     */
    gameCenterAchievementReleasesCreateInstance(requestParameters: GameCenterAchievementReleasesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterAchievementReleaseResponse>;
    /**
     */
    gameCenterAchievementReleasesDeleteInstanceRaw(requestParameters: GameCenterAchievementReleasesDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    gameCenterAchievementReleasesDeleteInstance(requestParameters: GameCenterAchievementReleasesDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    gameCenterAchievementReleasesGetInstanceRaw(requestParameters: GameCenterAchievementReleasesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterAchievementReleaseResponse>>;
    /**
     */
    gameCenterAchievementReleasesGetInstance(requestParameters: GameCenterAchievementReleasesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterAchievementReleaseResponse>;
}
/**
 * @export
 */
export declare const GameCenterAchievementReleasesGetInstanceFieldsGameCenterAchievementReleasesEnum: {
    readonly GameCenterAchievement: "gameCenterAchievement";
    readonly GameCenterDetail: "gameCenterDetail";
    readonly Live: "live";
};
export type GameCenterAchievementReleasesGetInstanceFieldsGameCenterAchievementReleasesEnum = (typeof GameCenterAchievementReleasesGetInstanceFieldsGameCenterAchievementReleasesEnum)[keyof typeof GameCenterAchievementReleasesGetInstanceFieldsGameCenterAchievementReleasesEnum];
/**
 * @export
 */
export declare const GameCenterAchievementReleasesGetInstanceIncludeEnum: {
    readonly GameCenterAchievement: "gameCenterAchievement";
    readonly GameCenterDetail: "gameCenterDetail";
};
export type GameCenterAchievementReleasesGetInstanceIncludeEnum = (typeof GameCenterAchievementReleasesGetInstanceIncludeEnum)[keyof typeof GameCenterAchievementReleasesGetInstanceIncludeEnum];
