/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
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
import type { ErrorResponse, GameCenterLeaderboardImageCreateRequest, GameCenterLeaderboardImageResponse, GameCenterLeaderboardImageUpdateRequest } from "../models";
import { ErrorResponseFromJSON, ErrorResponseToJSON, GameCenterLeaderboardImageCreateRequestFromJSON, GameCenterLeaderboardImageCreateRequestToJSON, GameCenterLeaderboardImageResponseFromJSON, GameCenterLeaderboardImageResponseToJSON, GameCenterLeaderboardImageUpdateRequestFromJSON, GameCenterLeaderboardImageUpdateRequestToJSON } from "../models";

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
export class GameCenterLeaderboardImagesApi extends runtime.BaseAPI {
    /**
     */
    async gameCenterLeaderboardImagesCreateInstanceRaw(requestParameters: GameCenterLeaderboardImagesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterLeaderboardImageResponse>> {
        if (requestParameters.gameCenterLeaderboardImageCreateRequest === null || requestParameters.gameCenterLeaderboardImageCreateRequest === undefined) {
            throw new runtime.RequiredError("gameCenterLeaderboardImageCreateRequest", "Required parameter requestParameters.gameCenterLeaderboardImageCreateRequest was null or undefined when calling gameCenterLeaderboardImagesCreateInstance.");
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itc-bearer-token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request(
            {
                path: `/v1/gameCenterLeaderboardImages`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: GameCenterLeaderboardImageCreateRequestToJSON(requestParameters.gameCenterLeaderboardImageCreateRequest)
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => GameCenterLeaderboardImageResponseFromJSON(jsonValue));
    }

    /**
     */
    async gameCenterLeaderboardImagesCreateInstance(requestParameters: GameCenterLeaderboardImagesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterLeaderboardImageResponse> {
        const response = await this.gameCenterLeaderboardImagesCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async gameCenterLeaderboardImagesDeleteInstanceRaw(requestParameters: GameCenterLeaderboardImagesDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling gameCenterLeaderboardImagesDeleteInstance.");
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itc-bearer-token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request(
            {
                path: `/v1/gameCenterLeaderboardImages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "DELETE",
                headers: headerParameters,
                query: queryParameters
            },
            initOverrides
        );

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async gameCenterLeaderboardImagesDeleteInstance(requestParameters: GameCenterLeaderboardImagesDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.gameCenterLeaderboardImagesDeleteInstanceRaw(requestParameters, initOverrides);
    }

    /**
     */
    async gameCenterLeaderboardImagesGetInstanceRaw(requestParameters: GameCenterLeaderboardImagesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterLeaderboardImageResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling gameCenterLeaderboardImagesGetInstance.");
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsGameCenterLeaderboardImages) {
            queryParameters["fields[gameCenterLeaderboardImages]"] = requestParameters.fieldsGameCenterLeaderboardImages.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.include) {
            queryParameters["include"] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itc-bearer-token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request(
            {
                path: `/v1/gameCenterLeaderboardImages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => GameCenterLeaderboardImageResponseFromJSON(jsonValue));
    }

    /**
     */
    async gameCenterLeaderboardImagesGetInstance(requestParameters: GameCenterLeaderboardImagesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterLeaderboardImageResponse> {
        const response = await this.gameCenterLeaderboardImagesGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async gameCenterLeaderboardImagesUpdateInstanceRaw(requestParameters: GameCenterLeaderboardImagesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterLeaderboardImageResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling gameCenterLeaderboardImagesUpdateInstance.");
        }

        if (requestParameters.gameCenterLeaderboardImageUpdateRequest === null || requestParameters.gameCenterLeaderboardImageUpdateRequest === undefined) {
            throw new runtime.RequiredError("gameCenterLeaderboardImageUpdateRequest", "Required parameter requestParameters.gameCenterLeaderboardImageUpdateRequest was null or undefined when calling gameCenterLeaderboardImagesUpdateInstance.");
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itc-bearer-token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request(
            {
                path: `/v1/gameCenterLeaderboardImages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "PATCH",
                headers: headerParameters,
                query: queryParameters,
                body: GameCenterLeaderboardImageUpdateRequestToJSON(requestParameters.gameCenterLeaderboardImageUpdateRequest)
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => GameCenterLeaderboardImageResponseFromJSON(jsonValue));
    }

    /**
     */
    async gameCenterLeaderboardImagesUpdateInstance(requestParameters: GameCenterLeaderboardImagesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterLeaderboardImageResponse> {
        const response = await this.gameCenterLeaderboardImagesUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }
}

/**
 * @export
 */
export const GameCenterLeaderboardImagesGetInstanceFieldsGameCenterLeaderboardImagesEnum = {
    AssetDeliveryState: "assetDeliveryState",
    FileName: "fileName",
    FileSize: "fileSize",
    GameCenterLeaderboardLocalization: "gameCenterLeaderboardLocalization",
    ImageAsset: "imageAsset",
    UploadOperations: "uploadOperations",
    Uploaded: "uploaded"
} as const;
export type GameCenterLeaderboardImagesGetInstanceFieldsGameCenterLeaderboardImagesEnum = (typeof GameCenterLeaderboardImagesGetInstanceFieldsGameCenterLeaderboardImagesEnum)[keyof typeof GameCenterLeaderboardImagesGetInstanceFieldsGameCenterLeaderboardImagesEnum];
/**
 * @export
 */
export const GameCenterLeaderboardImagesGetInstanceIncludeEnum = {
    GameCenterLeaderboardLocalization: "gameCenterLeaderboardLocalization"
} as const;
export type GameCenterLeaderboardImagesGetInstanceIncludeEnum = (typeof GameCenterLeaderboardImagesGetInstanceIncludeEnum)[keyof typeof GameCenterLeaderboardImagesGetInstanceIncludeEnum];
