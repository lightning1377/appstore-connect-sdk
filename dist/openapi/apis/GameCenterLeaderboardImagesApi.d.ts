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
import type { GameCenterLeaderboardImageCreateRequest, GameCenterLeaderboardImageResponse, GameCenterLeaderboardImageUpdateRequest } from "../models";
export interface GameCenterLeaderboardImagesCreateInstanceRequest {
    gameCenterLeaderboardImageCreateRequest: GameCenterLeaderboardImageCreateRequest;
}
export interface GameCenterLeaderboardImagesDeleteInstanceRequest {
    id: string;
}
export interface GameCenterLeaderboardImagesGetInstanceRequest {
    id: string;
    fieldsGameCenterLeaderboardImages?: Array<GameCenterLeaderboardImagesGetInstanceFieldsGameCenterLeaderboardImagesEnum>;
    include?: Array<GameCenterLeaderboardImagesGetInstanceIncludeEnum>;
}
export interface GameCenterLeaderboardImagesUpdateInstanceRequest {
    id: string;
    gameCenterLeaderboardImageUpdateRequest: GameCenterLeaderboardImageUpdateRequest;
}
/**
 *
 */
export declare class GameCenterLeaderboardImagesApi extends runtime.BaseAPI {
    /**
     */
    gameCenterLeaderboardImagesCreateInstanceRaw(requestParameters: GameCenterLeaderboardImagesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterLeaderboardImageResponse>>;
    /**
     */
    gameCenterLeaderboardImagesCreateInstance(requestParameters: GameCenterLeaderboardImagesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterLeaderboardImageResponse>;
    /**
     */
    gameCenterLeaderboardImagesDeleteInstanceRaw(requestParameters: GameCenterLeaderboardImagesDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    gameCenterLeaderboardImagesDeleteInstance(requestParameters: GameCenterLeaderboardImagesDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    gameCenterLeaderboardImagesGetInstanceRaw(requestParameters: GameCenterLeaderboardImagesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterLeaderboardImageResponse>>;
    /**
     */
    gameCenterLeaderboardImagesGetInstance(requestParameters: GameCenterLeaderboardImagesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterLeaderboardImageResponse>;
    /**
     */
    gameCenterLeaderboardImagesUpdateInstanceRaw(requestParameters: GameCenterLeaderboardImagesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterLeaderboardImageResponse>>;
    /**
     */
    gameCenterLeaderboardImagesUpdateInstance(requestParameters: GameCenterLeaderboardImagesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterLeaderboardImageResponse>;
}
/**
 * @export
 */
export declare const GameCenterLeaderboardImagesGetInstanceFieldsGameCenterLeaderboardImagesEnum: {
    readonly AssetDeliveryState: "assetDeliveryState";
    readonly FileName: "fileName";
    readonly FileSize: "fileSize";
    readonly GameCenterLeaderboardLocalization: "gameCenterLeaderboardLocalization";
    readonly ImageAsset: "imageAsset";
    readonly UploadOperations: "uploadOperations";
    readonly Uploaded: "uploaded";
};
export type GameCenterLeaderboardImagesGetInstanceFieldsGameCenterLeaderboardImagesEnum = (typeof GameCenterLeaderboardImagesGetInstanceFieldsGameCenterLeaderboardImagesEnum)[keyof typeof GameCenterLeaderboardImagesGetInstanceFieldsGameCenterLeaderboardImagesEnum];
/**
 * @export
 */
export declare const GameCenterLeaderboardImagesGetInstanceIncludeEnum: {
    readonly GameCenterLeaderboardLocalization: "gameCenterLeaderboardLocalization";
};
export type GameCenterLeaderboardImagesGetInstanceIncludeEnum = (typeof GameCenterLeaderboardImagesGetInstanceIncludeEnum)[keyof typeof GameCenterLeaderboardImagesGetInstanceIncludeEnum];
