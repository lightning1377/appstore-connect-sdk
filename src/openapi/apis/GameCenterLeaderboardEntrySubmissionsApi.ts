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
import type { ErrorResponse, GameCenterLeaderboardEntrySubmissionCreateRequest, GameCenterLeaderboardEntrySubmissionResponse } from "../models";
import { ErrorResponseFromJSON, ErrorResponseToJSON, GameCenterLeaderboardEntrySubmissionCreateRequestFromJSON, GameCenterLeaderboardEntrySubmissionCreateRequestToJSON, GameCenterLeaderboardEntrySubmissionResponseFromJSON, GameCenterLeaderboardEntrySubmissionResponseToJSON } from "../models";

export interface GameCenterLeaderboardEntrySubmissionsCreateInstanceRequest {
    gameCenterLeaderboardEntrySubmissionCreateRequest: GameCenterLeaderboardEntrySubmissionCreateRequest;
}

/**
 *
 */
export class GameCenterLeaderboardEntrySubmissionsApi extends runtime.BaseAPI {
    /**
     */
    async gameCenterLeaderboardEntrySubmissionsCreateInstanceRaw(requestParameters: GameCenterLeaderboardEntrySubmissionsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterLeaderboardEntrySubmissionResponse>> {
        if (requestParameters.gameCenterLeaderboardEntrySubmissionCreateRequest === null || requestParameters.gameCenterLeaderboardEntrySubmissionCreateRequest === undefined) {
            throw new runtime.RequiredError("gameCenterLeaderboardEntrySubmissionCreateRequest", "Required parameter requestParameters.gameCenterLeaderboardEntrySubmissionCreateRequest was null or undefined when calling gameCenterLeaderboardEntrySubmissionsCreateInstance.");
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
                path: `/v1/gameCenterLeaderboardEntrySubmissions`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: GameCenterLeaderboardEntrySubmissionCreateRequestToJSON(requestParameters.gameCenterLeaderboardEntrySubmissionCreateRequest)
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => GameCenterLeaderboardEntrySubmissionResponseFromJSON(jsonValue));
    }

    /**
     */
    async gameCenterLeaderboardEntrySubmissionsCreateInstance(requestParameters: GameCenterLeaderboardEntrySubmissionsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterLeaderboardEntrySubmissionResponse> {
        const response = await this.gameCenterLeaderboardEntrySubmissionsCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
