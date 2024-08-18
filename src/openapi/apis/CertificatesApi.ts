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
import type { CertificateCreateRequest, CertificateResponse, CertificatesResponse, ErrorResponse } from "../models";
import { CertificateCreateRequestFromJSON, CertificateCreateRequestToJSON, CertificateResponseFromJSON, CertificateResponseToJSON, CertificatesResponseFromJSON, CertificatesResponseToJSON, ErrorResponseFromJSON, ErrorResponseToJSON } from "../models";

export interface CertificatesCreateInstanceRequest {
    certificateCreateRequest: CertificateCreateRequest;
}

export interface CertificatesDeleteInstanceRequest {
    id: string;
}

export interface CertificatesGetCollectionRequest {
    filterCertificateType?: Array<CertificatesGetCollectionFilterCertificateTypeEnum>;
    filterDisplayName?: Array<string>;
    filterSerialNumber?: Array<string>;
    filterId?: Array<string>;
    sort?: Array<CertificatesGetCollectionSortEnum>;
    fieldsCertificates?: Array<CertificatesGetCollectionFieldsCertificatesEnum>;
    limit?: number;
}

export interface CertificatesGetInstanceRequest {
    id: string;
    fieldsCertificates?: Array<CertificatesGetInstanceFieldsCertificatesEnum>;
}

/**
 *
 */
export class CertificatesApi extends runtime.BaseAPI {
    /**
     */
    async certificatesCreateInstanceRaw(requestParameters: CertificatesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CertificateResponse>> {
        if (requestParameters.certificateCreateRequest === null || requestParameters.certificateCreateRequest === undefined) {
            throw new runtime.RequiredError("certificateCreateRequest", "Required parameter requestParameters.certificateCreateRequest was null or undefined when calling certificatesCreateInstance.");
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
                path: `/v1/certificates`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: CertificateCreateRequestToJSON(requestParameters.certificateCreateRequest)
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => CertificateResponseFromJSON(jsonValue));
    }

    /**
     */
    async certificatesCreateInstance(requestParameters: CertificatesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CertificateResponse> {
        const response = await this.certificatesCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async certificatesDeleteInstanceRaw(requestParameters: CertificatesDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling certificatesDeleteInstance.");
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
                path: `/v1/certificates/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
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
    async certificatesDeleteInstance(requestParameters: CertificatesDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.certificatesDeleteInstanceRaw(requestParameters, initOverrides);
    }

    /**
     */
    async certificatesGetCollectionRaw(requestParameters: CertificatesGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CertificatesResponse>> {
        const queryParameters: any = {};

        if (requestParameters.filterCertificateType) {
            queryParameters["filter[certificateType]"] = requestParameters.filterCertificateType.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.filterDisplayName) {
            queryParameters["filter[displayName]"] = requestParameters.filterDisplayName.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.filterSerialNumber) {
            queryParameters["filter[serialNumber]"] = requestParameters.filterSerialNumber.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.filterId) {
            queryParameters["filter[id]"] = requestParameters.filterId.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.sort) {
            queryParameters["sort"] = requestParameters.sort.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsCertificates) {
            queryParameters["fields[certificates]"] = requestParameters.fieldsCertificates.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limit !== undefined) {
            queryParameters["limit"] = requestParameters.limit;
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
                path: `/v1/certificates`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => CertificatesResponseFromJSON(jsonValue));
    }

    /**
     */
    async certificatesGetCollection(requestParameters: CertificatesGetCollectionRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CertificatesResponse> {
        const response = await this.certificatesGetCollectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async certificatesGetInstanceRaw(requestParameters: CertificatesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CertificateResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling certificatesGetInstance.");
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsCertificates) {
            queryParameters["fields[certificates]"] = requestParameters.fieldsCertificates.join(runtime.COLLECTION_FORMATS["csv"]);
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
                path: `/v1/certificates/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => CertificateResponseFromJSON(jsonValue));
    }

    /**
     */
    async certificatesGetInstance(requestParameters: CertificatesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CertificateResponse> {
        const response = await this.certificatesGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }
}

/**
 * @export
 */
export const CertificatesGetCollectionFilterCertificateTypeEnum = {
    IosDevelopment: "IOS_DEVELOPMENT",
    IosDistribution: "IOS_DISTRIBUTION",
    MacAppDistribution: "MAC_APP_DISTRIBUTION",
    MacInstallerDistribution: "MAC_INSTALLER_DISTRIBUTION",
    MacAppDevelopment: "MAC_APP_DEVELOPMENT",
    DeveloperIdKext: "DEVELOPER_ID_KEXT",
    DeveloperIdApplication: "DEVELOPER_ID_APPLICATION",
    Development: "DEVELOPMENT",
    Distribution: "DISTRIBUTION",
    PassTypeId: "PASS_TYPE_ID",
    PassTypeIdWithNfc: "PASS_TYPE_ID_WITH_NFC"
} as const;
export type CertificatesGetCollectionFilterCertificateTypeEnum = (typeof CertificatesGetCollectionFilterCertificateTypeEnum)[keyof typeof CertificatesGetCollectionFilterCertificateTypeEnum];
/**
 * @export
 */
export const CertificatesGetCollectionSortEnum = {
    CertificateType: "certificateType",
    CertificateType: "-certificateType",
    DisplayName: "displayName",
    DisplayName: "-displayName",
    Id: "id",
    Id: "-id",
    SerialNumber: "serialNumber",
    SerialNumber: "-serialNumber"
} as const;
export type CertificatesGetCollectionSortEnum = (typeof CertificatesGetCollectionSortEnum)[keyof typeof CertificatesGetCollectionSortEnum];
/**
 * @export
 */
export const CertificatesGetCollectionFieldsCertificatesEnum = {
    CertificateContent: "certificateContent",
    CertificateType: "certificateType",
    CsrContent: "csrContent",
    DisplayName: "displayName",
    ExpirationDate: "expirationDate",
    Name: "name",
    Platform: "platform",
    SerialNumber: "serialNumber"
} as const;
export type CertificatesGetCollectionFieldsCertificatesEnum = (typeof CertificatesGetCollectionFieldsCertificatesEnum)[keyof typeof CertificatesGetCollectionFieldsCertificatesEnum];
/**
 * @export
 */
export const CertificatesGetInstanceFieldsCertificatesEnum = {
    CertificateContent: "certificateContent",
    CertificateType: "certificateType",
    CsrContent: "csrContent",
    DisplayName: "displayName",
    ExpirationDate: "expirationDate",
    Name: "name",
    Platform: "platform",
    SerialNumber: "serialNumber"
} as const;
export type CertificatesGetInstanceFieldsCertificatesEnum = (typeof CertificatesGetInstanceFieldsCertificatesEnum)[keyof typeof CertificatesGetInstanceFieldsCertificatesEnum];
