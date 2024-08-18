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
import type { CiMacOsVersionsResponse, CiXcodeVersionResponse, CiXcodeVersionsResponse, ErrorResponse } from "../models";
import { CiMacOsVersionsResponseFromJSON, CiMacOsVersionsResponseToJSON, CiXcodeVersionResponseFromJSON, CiXcodeVersionResponseToJSON, CiXcodeVersionsResponseFromJSON, CiXcodeVersionsResponseToJSON, ErrorResponseFromJSON, ErrorResponseToJSON } from "../models";

export interface CiXcodeVersionsGetCollectionRequest {
    fieldsCiXcodeVersions?: Array<CiXcodeVersionsGetCollectionFieldsCiXcodeVersionsEnum>;
    limit?: number;
    include?: Array<CiXcodeVersionsGetCollectionIncludeEnum>;
    fieldsCiMacOsVersions?: Array<CiXcodeVersionsGetCollectionFieldsCiMacOsVersionsEnum>;
    limitMacOsVersions?: number;
}

export interface CiXcodeVersionsGetInstanceRequest {
    id: string;
    fieldsCiXcodeVersions?: Array<CiXcodeVersionsGetInstanceFieldsCiXcodeVersionsEnum>;
    include?: Array<CiXcodeVersionsGetInstanceIncludeEnum>;
    fieldsCiMacOsVersions?: Array<CiXcodeVersionsGetInstanceFieldsCiMacOsVersionsEnum>;
    limitMacOsVersions?: number;
}

export interface CiXcodeVersionsMacOsVersionsGetToManyRelatedRequest {
    id: string;
    fieldsCiXcodeVersions?: Array<CiXcodeVersionsMacOsVersionsGetToManyRelatedFieldsCiXcodeVersionsEnum>;
    fieldsCiMacOsVersions?: Array<CiXcodeVersionsMacOsVersionsGetToManyRelatedFieldsCiMacOsVersionsEnum>;
    limit?: number;
    limitXcodeVersions?: number;
    include?: Array<CiXcodeVersionsMacOsVersionsGetToManyRelatedIncludeEnum>;
}

/**
 *
 */
export class CiXcodeVersionsApi extends runtime.BaseAPI {
    /**
     */
    async ciXcodeVersionsGetCollectionRaw(requestParameters: CiXcodeVersionsGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CiXcodeVersionsResponse>> {
        const queryParameters: any = {};

        if (requestParameters.fieldsCiXcodeVersions) {
            queryParameters["fields[ciXcodeVersions]"] = requestParameters.fieldsCiXcodeVersions.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limit !== undefined) {
            queryParameters["limit"] = requestParameters.limit;
        }

        if (requestParameters.include) {
            queryParameters["include"] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsCiMacOsVersions) {
            queryParameters["fields[ciMacOsVersions]"] = requestParameters.fieldsCiMacOsVersions.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limitMacOsVersions !== undefined) {
            queryParameters["limit[macOsVersions]"] = requestParameters.limitMacOsVersions;
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
                path: `/v1/ciXcodeVersions`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => CiXcodeVersionsResponseFromJSON(jsonValue));
    }

    /**
     */
    async ciXcodeVersionsGetCollection(requestParameters: CiXcodeVersionsGetCollectionRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CiXcodeVersionsResponse> {
        const response = await this.ciXcodeVersionsGetCollectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async ciXcodeVersionsGetInstanceRaw(requestParameters: CiXcodeVersionsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CiXcodeVersionResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling ciXcodeVersionsGetInstance.");
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsCiXcodeVersions) {
            queryParameters["fields[ciXcodeVersions]"] = requestParameters.fieldsCiXcodeVersions.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.include) {
            queryParameters["include"] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsCiMacOsVersions) {
            queryParameters["fields[ciMacOsVersions]"] = requestParameters.fieldsCiMacOsVersions.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limitMacOsVersions !== undefined) {
            queryParameters["limit[macOsVersions]"] = requestParameters.limitMacOsVersions;
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
                path: `/v1/ciXcodeVersions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => CiXcodeVersionResponseFromJSON(jsonValue));
    }

    /**
     */
    async ciXcodeVersionsGetInstance(requestParameters: CiXcodeVersionsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CiXcodeVersionResponse> {
        const response = await this.ciXcodeVersionsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async ciXcodeVersionsMacOsVersionsGetToManyRelatedRaw(requestParameters: CiXcodeVersionsMacOsVersionsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CiMacOsVersionsResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling ciXcodeVersionsMacOsVersionsGetToManyRelated.");
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsCiXcodeVersions) {
            queryParameters["fields[ciXcodeVersions]"] = requestParameters.fieldsCiXcodeVersions.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsCiMacOsVersions) {
            queryParameters["fields[ciMacOsVersions]"] = requestParameters.fieldsCiMacOsVersions.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limit !== undefined) {
            queryParameters["limit"] = requestParameters.limit;
        }

        if (requestParameters.limitXcodeVersions !== undefined) {
            queryParameters["limit[xcodeVersions]"] = requestParameters.limitXcodeVersions;
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
                path: `/v1/ciXcodeVersions/{id}/macOsVersions`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => CiMacOsVersionsResponseFromJSON(jsonValue));
    }

    /**
     */
    async ciXcodeVersionsMacOsVersionsGetToManyRelated(requestParameters: CiXcodeVersionsMacOsVersionsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CiMacOsVersionsResponse> {
        const response = await this.ciXcodeVersionsMacOsVersionsGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }
}

/**
 * @export
 */
export const CiXcodeVersionsGetCollectionFieldsCiXcodeVersionsEnum = {
    MacOsVersions: "macOsVersions",
    Name: "name",
    TestDestinations: "testDestinations",
    Version: "version"
} as const;
export type CiXcodeVersionsGetCollectionFieldsCiXcodeVersionsEnum = (typeof CiXcodeVersionsGetCollectionFieldsCiXcodeVersionsEnum)[keyof typeof CiXcodeVersionsGetCollectionFieldsCiXcodeVersionsEnum];
/**
 * @export
 */
export const CiXcodeVersionsGetCollectionIncludeEnum = {
    MacOsVersions: "macOsVersions"
} as const;
export type CiXcodeVersionsGetCollectionIncludeEnum = (typeof CiXcodeVersionsGetCollectionIncludeEnum)[keyof typeof CiXcodeVersionsGetCollectionIncludeEnum];
/**
 * @export
 */
export const CiXcodeVersionsGetCollectionFieldsCiMacOsVersionsEnum = {
    Name: "name",
    Version: "version",
    XcodeVersions: "xcodeVersions"
} as const;
export type CiXcodeVersionsGetCollectionFieldsCiMacOsVersionsEnum = (typeof CiXcodeVersionsGetCollectionFieldsCiMacOsVersionsEnum)[keyof typeof CiXcodeVersionsGetCollectionFieldsCiMacOsVersionsEnum];
/**
 * @export
 */
export const CiXcodeVersionsGetInstanceFieldsCiXcodeVersionsEnum = {
    MacOsVersions: "macOsVersions",
    Name: "name",
    TestDestinations: "testDestinations",
    Version: "version"
} as const;
export type CiXcodeVersionsGetInstanceFieldsCiXcodeVersionsEnum = (typeof CiXcodeVersionsGetInstanceFieldsCiXcodeVersionsEnum)[keyof typeof CiXcodeVersionsGetInstanceFieldsCiXcodeVersionsEnum];
/**
 * @export
 */
export const CiXcodeVersionsGetInstanceIncludeEnum = {
    MacOsVersions: "macOsVersions"
} as const;
export type CiXcodeVersionsGetInstanceIncludeEnum = (typeof CiXcodeVersionsGetInstanceIncludeEnum)[keyof typeof CiXcodeVersionsGetInstanceIncludeEnum];
/**
 * @export
 */
export const CiXcodeVersionsGetInstanceFieldsCiMacOsVersionsEnum = {
    Name: "name",
    Version: "version",
    XcodeVersions: "xcodeVersions"
} as const;
export type CiXcodeVersionsGetInstanceFieldsCiMacOsVersionsEnum = (typeof CiXcodeVersionsGetInstanceFieldsCiMacOsVersionsEnum)[keyof typeof CiXcodeVersionsGetInstanceFieldsCiMacOsVersionsEnum];
/**
 * @export
 */
export const CiXcodeVersionsMacOsVersionsGetToManyRelatedFieldsCiXcodeVersionsEnum = {
    MacOsVersions: "macOsVersions",
    Name: "name",
    TestDestinations: "testDestinations",
    Version: "version"
} as const;
export type CiXcodeVersionsMacOsVersionsGetToManyRelatedFieldsCiXcodeVersionsEnum = (typeof CiXcodeVersionsMacOsVersionsGetToManyRelatedFieldsCiXcodeVersionsEnum)[keyof typeof CiXcodeVersionsMacOsVersionsGetToManyRelatedFieldsCiXcodeVersionsEnum];
/**
 * @export
 */
export const CiXcodeVersionsMacOsVersionsGetToManyRelatedFieldsCiMacOsVersionsEnum = {
    Name: "name",
    Version: "version",
    XcodeVersions: "xcodeVersions"
} as const;
export type CiXcodeVersionsMacOsVersionsGetToManyRelatedFieldsCiMacOsVersionsEnum = (typeof CiXcodeVersionsMacOsVersionsGetToManyRelatedFieldsCiMacOsVersionsEnum)[keyof typeof CiXcodeVersionsMacOsVersionsGetToManyRelatedFieldsCiMacOsVersionsEnum];
/**
 * @export
 */
export const CiXcodeVersionsMacOsVersionsGetToManyRelatedIncludeEnum = {
    XcodeVersions: "xcodeVersions"
} as const;
export type CiXcodeVersionsMacOsVersionsGetToManyRelatedIncludeEnum = (typeof CiXcodeVersionsMacOsVersionsGetToManyRelatedIncludeEnum)[keyof typeof CiXcodeVersionsMacOsVersionsGetToManyRelatedIncludeEnum];
