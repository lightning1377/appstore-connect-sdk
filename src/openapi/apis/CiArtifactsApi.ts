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
import type { CiArtifactResponse, ErrorResponse } from "../models";
import { CiArtifactResponseFromJSON, CiArtifactResponseToJSON, ErrorResponseFromJSON, ErrorResponseToJSON } from "../models";

export interface CiArtifactsGetInstanceRequest {
    id: string;
    fieldsCiArtifacts?: Array<CiArtifactsGetInstanceFieldsCiArtifactsEnum>;
}

/**
 *
 */
export class CiArtifactsApi extends runtime.BaseAPI {
    /**
     */
    async ciArtifactsGetInstanceRaw(requestParameters: CiArtifactsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CiArtifactResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling ciArtifactsGetInstance.");
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsCiArtifacts) {
            queryParameters["fields[ciArtifacts]"] = requestParameters.fieldsCiArtifacts.join(runtime.COLLECTION_FORMATS["csv"]);
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
                path: `/v1/ciArtifacts/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => CiArtifactResponseFromJSON(jsonValue));
    }

    /**
     */
    async ciArtifactsGetInstance(requestParameters: CiArtifactsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CiArtifactResponse> {
        const response = await this.ciArtifactsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }
}

/**
 * @export
 */
export const CiArtifactsGetInstanceFieldsCiArtifactsEnum = {
    DownloadUrl: "downloadUrl",
    FileName: "fileName",
    FileSize: "fileSize",
    FileType: "fileType"
} as const;
export type CiArtifactsGetInstanceFieldsCiArtifactsEnum = (typeof CiArtifactsGetInstanceFieldsCiArtifactsEnum)[keyof typeof CiArtifactsGetInstanceFieldsCiArtifactsEnum];
