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
import type { ErrorResponse, GameCenterMatchmakingRuleSetTestCreateRequest, GameCenterMatchmakingRuleSetTestResponse } from "../models";
import { ErrorResponseFromJSON, ErrorResponseToJSON, GameCenterMatchmakingRuleSetTestCreateRequestFromJSON, GameCenterMatchmakingRuleSetTestCreateRequestToJSON, GameCenterMatchmakingRuleSetTestResponseFromJSON, GameCenterMatchmakingRuleSetTestResponseToJSON } from "../models";

export interface GameCenterMatchmakingRuleSetTestsCreateInstanceRequest {
    gameCenterMatchmakingRuleSetTestCreateRequest: GameCenterMatchmakingRuleSetTestCreateRequest;
}

/**
 *
 */
export class GameCenterMatchmakingRuleSetTestsApi extends runtime.BaseAPI {
    /**
     */
    async gameCenterMatchmakingRuleSetTestsCreateInstanceRaw(requestParameters: GameCenterMatchmakingRuleSetTestsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterMatchmakingRuleSetTestResponse>> {
        if (requestParameters.gameCenterMatchmakingRuleSetTestCreateRequest === null || requestParameters.gameCenterMatchmakingRuleSetTestCreateRequest === undefined) {
            throw new runtime.RequiredError("gameCenterMatchmakingRuleSetTestCreateRequest", "Required parameter requestParameters.gameCenterMatchmakingRuleSetTestCreateRequest was null or undefined when calling gameCenterMatchmakingRuleSetTestsCreateInstance.");
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
                path: `/v1/gameCenterMatchmakingRuleSetTests`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: GameCenterMatchmakingRuleSetTestCreateRequestToJSON(requestParameters.gameCenterMatchmakingRuleSetTestCreateRequest)
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => GameCenterMatchmakingRuleSetTestResponseFromJSON(jsonValue));
    }

    /**
     */
    async gameCenterMatchmakingRuleSetTestsCreateInstance(requestParameters: GameCenterMatchmakingRuleSetTestsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterMatchmakingRuleSetTestResponse> {
        const response = await this.gameCenterMatchmakingRuleSetTestsCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
