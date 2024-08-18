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
import type { ErrorResponse, SubscriptionGroupLocalizationCreateRequest, SubscriptionGroupLocalizationResponse, SubscriptionGroupLocalizationUpdateRequest } from "../models";
import { ErrorResponseFromJSON, ErrorResponseToJSON, SubscriptionGroupLocalizationCreateRequestFromJSON, SubscriptionGroupLocalizationCreateRequestToJSON, SubscriptionGroupLocalizationResponseFromJSON, SubscriptionGroupLocalizationResponseToJSON, SubscriptionGroupLocalizationUpdateRequestFromJSON, SubscriptionGroupLocalizationUpdateRequestToJSON } from "../models";

export interface SubscriptionGroupLocalizationsCreateInstanceRequest {
    subscriptionGroupLocalizationCreateRequest: SubscriptionGroupLocalizationCreateRequest;
}

export interface SubscriptionGroupLocalizationsDeleteInstanceRequest {
    id: string;
}

export interface SubscriptionGroupLocalizationsGetInstanceRequest {
    id: string;
    fieldsSubscriptionGroupLocalizations?: Array<SubscriptionGroupLocalizationsGetInstanceFieldsSubscriptionGroupLocalizationsEnum>;
    include?: Array<SubscriptionGroupLocalizationsGetInstanceIncludeEnum>;
}

export interface SubscriptionGroupLocalizationsUpdateInstanceRequest {
    id: string;
    subscriptionGroupLocalizationUpdateRequest: SubscriptionGroupLocalizationUpdateRequest;
}

/**
 *
 */
export class SubscriptionGroupLocalizationsApi extends runtime.BaseAPI {
    /**
     */
    async subscriptionGroupLocalizationsCreateInstanceRaw(requestParameters: SubscriptionGroupLocalizationsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionGroupLocalizationResponse>> {
        if (requestParameters.subscriptionGroupLocalizationCreateRequest === null || requestParameters.subscriptionGroupLocalizationCreateRequest === undefined) {
            throw new runtime.RequiredError("subscriptionGroupLocalizationCreateRequest", "Required parameter requestParameters.subscriptionGroupLocalizationCreateRequest was null or undefined when calling subscriptionGroupLocalizationsCreateInstance.");
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
                path: `/v1/subscriptionGroupLocalizations`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: SubscriptionGroupLocalizationCreateRequestToJSON(requestParameters.subscriptionGroupLocalizationCreateRequest)
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionGroupLocalizationResponseFromJSON(jsonValue));
    }

    /**
     */
    async subscriptionGroupLocalizationsCreateInstance(requestParameters: SubscriptionGroupLocalizationsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionGroupLocalizationResponse> {
        const response = await this.subscriptionGroupLocalizationsCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async subscriptionGroupLocalizationsDeleteInstanceRaw(requestParameters: SubscriptionGroupLocalizationsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling subscriptionGroupLocalizationsDeleteInstance.");
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
                path: `/v1/subscriptionGroupLocalizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
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
    async subscriptionGroupLocalizationsDeleteInstance(requestParameters: SubscriptionGroupLocalizationsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.subscriptionGroupLocalizationsDeleteInstanceRaw(requestParameters, initOverrides);
    }

    /**
     */
    async subscriptionGroupLocalizationsGetInstanceRaw(requestParameters: SubscriptionGroupLocalizationsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionGroupLocalizationResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling subscriptionGroupLocalizationsGetInstance.");
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsSubscriptionGroupLocalizations) {
            queryParameters["fields[subscriptionGroupLocalizations]"] = requestParameters.fieldsSubscriptionGroupLocalizations.join(runtime.COLLECTION_FORMATS["csv"]);
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
                path: `/v1/subscriptionGroupLocalizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionGroupLocalizationResponseFromJSON(jsonValue));
    }

    /**
     */
    async subscriptionGroupLocalizationsGetInstance(requestParameters: SubscriptionGroupLocalizationsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionGroupLocalizationResponse> {
        const response = await this.subscriptionGroupLocalizationsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async subscriptionGroupLocalizationsUpdateInstanceRaw(requestParameters: SubscriptionGroupLocalizationsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionGroupLocalizationResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling subscriptionGroupLocalizationsUpdateInstance.");
        }

        if (requestParameters.subscriptionGroupLocalizationUpdateRequest === null || requestParameters.subscriptionGroupLocalizationUpdateRequest === undefined) {
            throw new runtime.RequiredError("subscriptionGroupLocalizationUpdateRequest", "Required parameter requestParameters.subscriptionGroupLocalizationUpdateRequest was null or undefined when calling subscriptionGroupLocalizationsUpdateInstance.");
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
                path: `/v1/subscriptionGroupLocalizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "PATCH",
                headers: headerParameters,
                query: queryParameters,
                body: SubscriptionGroupLocalizationUpdateRequestToJSON(requestParameters.subscriptionGroupLocalizationUpdateRequest)
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionGroupLocalizationResponseFromJSON(jsonValue));
    }

    /**
     */
    async subscriptionGroupLocalizationsUpdateInstance(requestParameters: SubscriptionGroupLocalizationsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionGroupLocalizationResponse> {
        const response = await this.subscriptionGroupLocalizationsUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }
}

/**
 * @export
 */
export const SubscriptionGroupLocalizationsGetInstanceFieldsSubscriptionGroupLocalizationsEnum = {
    CustomAppName: "customAppName",
    Locale: "locale",
    Name: "name",
    State: "state",
    SubscriptionGroup: "subscriptionGroup"
} as const;
export type SubscriptionGroupLocalizationsGetInstanceFieldsSubscriptionGroupLocalizationsEnum = (typeof SubscriptionGroupLocalizationsGetInstanceFieldsSubscriptionGroupLocalizationsEnum)[keyof typeof SubscriptionGroupLocalizationsGetInstanceFieldsSubscriptionGroupLocalizationsEnum];
/**
 * @export
 */
export const SubscriptionGroupLocalizationsGetInstanceIncludeEnum = {
    SubscriptionGroup: "subscriptionGroup"
} as const;
export type SubscriptionGroupLocalizationsGetInstanceIncludeEnum = (typeof SubscriptionGroupLocalizationsGetInstanceIncludeEnum)[keyof typeof SubscriptionGroupLocalizationsGetInstanceIncludeEnum];
