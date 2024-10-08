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
import type { BundleIdWithoutIncludesResponse, CertificatesWithoutIncludesResponse, DevicesWithoutIncludesResponse, ErrorResponse, ProfileCreateRequest, ProfileResponse, ProfilesResponse } from "../models";
import { BundleIdWithoutIncludesResponseFromJSON, BundleIdWithoutIncludesResponseToJSON, CertificatesWithoutIncludesResponseFromJSON, CertificatesWithoutIncludesResponseToJSON, DevicesWithoutIncludesResponseFromJSON, DevicesWithoutIncludesResponseToJSON, ErrorResponseFromJSON, ErrorResponseToJSON, ProfileCreateRequestFromJSON, ProfileCreateRequestToJSON, ProfileResponseFromJSON, ProfileResponseToJSON, ProfilesResponseFromJSON, ProfilesResponseToJSON } from "../models";

export interface ProfilesBundleIdGetToOneRelatedRequest {
    id: string;
    fieldsBundleIds?: Array<ProfilesBundleIdGetToOneRelatedFieldsBundleIdsEnum>;
}

export interface ProfilesCertificatesGetToManyRelatedRequest {
    id: string;
    fieldsCertificates?: Array<ProfilesCertificatesGetToManyRelatedFieldsCertificatesEnum>;
    limit?: number;
}

export interface ProfilesCreateInstanceRequest {
    profileCreateRequest: ProfileCreateRequest;
}

export interface ProfilesDeleteInstanceRequest {
    id: string;
}

export interface ProfilesDevicesGetToManyRelatedRequest {
    id: string;
    fieldsDevices?: Array<ProfilesDevicesGetToManyRelatedFieldsDevicesEnum>;
    limit?: number;
}

export interface ProfilesGetCollectionRequest {
    filterName?: Array<string>;
    filterProfileState?: Array<ProfilesGetCollectionFilterProfileStateEnum>;
    filterProfileType?: Array<ProfilesGetCollectionFilterProfileTypeEnum>;
    filterId?: Array<string>;
    sort?: Array<ProfilesGetCollectionSortEnum>;
    fieldsProfiles?: Array<ProfilesGetCollectionFieldsProfilesEnum>;
    limit?: number;
    include?: Array<ProfilesGetCollectionIncludeEnum>;
    fieldsCertificates?: Array<ProfilesGetCollectionFieldsCertificatesEnum>;
    fieldsDevices?: Array<ProfilesGetCollectionFieldsDevicesEnum>;
    fieldsBundleIds?: Array<ProfilesGetCollectionFieldsBundleIdsEnum>;
    limitCertificates?: number;
    limitDevices?: number;
}

export interface ProfilesGetInstanceRequest {
    id: string;
    fieldsProfiles?: Array<ProfilesGetInstanceFieldsProfilesEnum>;
    include?: Array<ProfilesGetInstanceIncludeEnum>;
    fieldsCertificates?: Array<ProfilesGetInstanceFieldsCertificatesEnum>;
    fieldsDevices?: Array<ProfilesGetInstanceFieldsDevicesEnum>;
    fieldsBundleIds?: Array<ProfilesGetInstanceFieldsBundleIdsEnum>;
    limitCertificates?: number;
    limitDevices?: number;
}

/**
 *
 */
export class ProfilesApi extends runtime.BaseAPI {
    /**
     */
    async profilesBundleIdGetToOneRelatedRaw(requestParameters: ProfilesBundleIdGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BundleIdWithoutIncludesResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling profilesBundleIdGetToOneRelated.");
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsBundleIds) {
            queryParameters["fields[bundleIds]"] = requestParameters.fieldsBundleIds.join(runtime.COLLECTION_FORMATS["csv"]);
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
                path: `/v1/profiles/{id}/bundleId`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => BundleIdWithoutIncludesResponseFromJSON(jsonValue));
    }

    /**
     */
    async profilesBundleIdGetToOneRelated(requestParameters: ProfilesBundleIdGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BundleIdWithoutIncludesResponse> {
        const response = await this.profilesBundleIdGetToOneRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async profilesCertificatesGetToManyRelatedRaw(requestParameters: ProfilesCertificatesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CertificatesWithoutIncludesResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling profilesCertificatesGetToManyRelated.");
        }

        const queryParameters: any = {};

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
                path: `/v1/profiles/{id}/certificates`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => CertificatesWithoutIncludesResponseFromJSON(jsonValue));
    }

    /**
     */
    async profilesCertificatesGetToManyRelated(requestParameters: ProfilesCertificatesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CertificatesWithoutIncludesResponse> {
        const response = await this.profilesCertificatesGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async profilesCreateInstanceRaw(requestParameters: ProfilesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProfileResponse>> {
        if (requestParameters.profileCreateRequest === null || requestParameters.profileCreateRequest === undefined) {
            throw new runtime.RequiredError("profileCreateRequest", "Required parameter requestParameters.profileCreateRequest was null or undefined when calling profilesCreateInstance.");
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
                path: `/v1/profiles`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: ProfileCreateRequestToJSON(requestParameters.profileCreateRequest)
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ProfileResponseFromJSON(jsonValue));
    }

    /**
     */
    async profilesCreateInstance(requestParameters: ProfilesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProfileResponse> {
        const response = await this.profilesCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async profilesDeleteInstanceRaw(requestParameters: ProfilesDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling profilesDeleteInstance.");
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
                path: `/v1/profiles/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
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
    async profilesDeleteInstance(requestParameters: ProfilesDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.profilesDeleteInstanceRaw(requestParameters, initOverrides);
    }

    /**
     */
    async profilesDevicesGetToManyRelatedRaw(requestParameters: ProfilesDevicesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DevicesWithoutIncludesResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling profilesDevicesGetToManyRelated.");
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsDevices) {
            queryParameters["fields[devices]"] = requestParameters.fieldsDevices.join(runtime.COLLECTION_FORMATS["csv"]);
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
                path: `/v1/profiles/{id}/devices`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => DevicesWithoutIncludesResponseFromJSON(jsonValue));
    }

    /**
     */
    async profilesDevicesGetToManyRelated(requestParameters: ProfilesDevicesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DevicesWithoutIncludesResponse> {
        const response = await this.profilesDevicesGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async profilesGetCollectionRaw(requestParameters: ProfilesGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProfilesResponse>> {
        const queryParameters: any = {};

        if (requestParameters.filterName) {
            queryParameters["filter[name]"] = requestParameters.filterName.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.filterProfileState) {
            queryParameters["filter[profileState]"] = requestParameters.filterProfileState.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.filterProfileType) {
            queryParameters["filter[profileType]"] = requestParameters.filterProfileType.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.filterId) {
            queryParameters["filter[id]"] = requestParameters.filterId.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.sort) {
            queryParameters["sort"] = requestParameters.sort.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsProfiles) {
            queryParameters["fields[profiles]"] = requestParameters.fieldsProfiles.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limit !== undefined) {
            queryParameters["limit"] = requestParameters.limit;
        }

        if (requestParameters.include) {
            queryParameters["include"] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsCertificates) {
            queryParameters["fields[certificates]"] = requestParameters.fieldsCertificates.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsDevices) {
            queryParameters["fields[devices]"] = requestParameters.fieldsDevices.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsBundleIds) {
            queryParameters["fields[bundleIds]"] = requestParameters.fieldsBundleIds.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limitCertificates !== undefined) {
            queryParameters["limit[certificates]"] = requestParameters.limitCertificates;
        }

        if (requestParameters.limitDevices !== undefined) {
            queryParameters["limit[devices]"] = requestParameters.limitDevices;
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
                path: `/v1/profiles`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ProfilesResponseFromJSON(jsonValue));
    }

    /**
     */
    async profilesGetCollection(requestParameters: ProfilesGetCollectionRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProfilesResponse> {
        const response = await this.profilesGetCollectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async profilesGetInstanceRaw(requestParameters: ProfilesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProfileResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling profilesGetInstance.");
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsProfiles) {
            queryParameters["fields[profiles]"] = requestParameters.fieldsProfiles.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.include) {
            queryParameters["include"] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsCertificates) {
            queryParameters["fields[certificates]"] = requestParameters.fieldsCertificates.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsDevices) {
            queryParameters["fields[devices]"] = requestParameters.fieldsDevices.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsBundleIds) {
            queryParameters["fields[bundleIds]"] = requestParameters.fieldsBundleIds.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limitCertificates !== undefined) {
            queryParameters["limit[certificates]"] = requestParameters.limitCertificates;
        }

        if (requestParameters.limitDevices !== undefined) {
            queryParameters["limit[devices]"] = requestParameters.limitDevices;
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
                path: `/v1/profiles/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ProfileResponseFromJSON(jsonValue));
    }

    /**
     */
    async profilesGetInstance(requestParameters: ProfilesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProfileResponse> {
        const response = await this.profilesGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }
}

/**
 * @export
 */
export const ProfilesBundleIdGetToOneRelatedFieldsBundleIdsEnum = {
    App: "app",
    BundleIdCapabilities: "bundleIdCapabilities",
    Identifier: "identifier",
    Name: "name",
    Platform: "platform",
    Profiles: "profiles",
    SeedId: "seedId"
} as const;
export type ProfilesBundleIdGetToOneRelatedFieldsBundleIdsEnum = (typeof ProfilesBundleIdGetToOneRelatedFieldsBundleIdsEnum)[keyof typeof ProfilesBundleIdGetToOneRelatedFieldsBundleIdsEnum];
/**
 * @export
 */
export const ProfilesCertificatesGetToManyRelatedFieldsCertificatesEnum = {
    CertificateContent: "certificateContent",
    CertificateType: "certificateType",
    CsrContent: "csrContent",
    DisplayName: "displayName",
    ExpirationDate: "expirationDate",
    Name: "name",
    Platform: "platform",
    SerialNumber: "serialNumber"
} as const;
export type ProfilesCertificatesGetToManyRelatedFieldsCertificatesEnum = (typeof ProfilesCertificatesGetToManyRelatedFieldsCertificatesEnum)[keyof typeof ProfilesCertificatesGetToManyRelatedFieldsCertificatesEnum];
/**
 * @export
 */
export const ProfilesDevicesGetToManyRelatedFieldsDevicesEnum = {
    AddedDate: "addedDate",
    DeviceClass: "deviceClass",
    Model: "model",
    Name: "name",
    Platform: "platform",
    Status: "status",
    Udid: "udid"
} as const;
export type ProfilesDevicesGetToManyRelatedFieldsDevicesEnum = (typeof ProfilesDevicesGetToManyRelatedFieldsDevicesEnum)[keyof typeof ProfilesDevicesGetToManyRelatedFieldsDevicesEnum];
/**
 * @export
 */
export const ProfilesGetCollectionFilterProfileStateEnum = {
    Active: "ACTIVE",
    Invalid: "INVALID"
} as const;
export type ProfilesGetCollectionFilterProfileStateEnum = (typeof ProfilesGetCollectionFilterProfileStateEnum)[keyof typeof ProfilesGetCollectionFilterProfileStateEnum];
/**
 * @export
 */
export const ProfilesGetCollectionFilterProfileTypeEnum = {
    IosAppDevelopment: "IOS_APP_DEVELOPMENT",
    IosAppStore: "IOS_APP_STORE",
    IosAppAdhoc: "IOS_APP_ADHOC",
    IosAppInhouse: "IOS_APP_INHOUSE",
    MacAppDevelopment: "MAC_APP_DEVELOPMENT",
    MacAppStore: "MAC_APP_STORE",
    MacAppDirect: "MAC_APP_DIRECT",
    TvosAppDevelopment: "TVOS_APP_DEVELOPMENT",
    TvosAppStore: "TVOS_APP_STORE",
    TvosAppAdhoc: "TVOS_APP_ADHOC",
    TvosAppInhouse: "TVOS_APP_INHOUSE",
    MacCatalystAppDevelopment: "MAC_CATALYST_APP_DEVELOPMENT",
    MacCatalystAppStore: "MAC_CATALYST_APP_STORE",
    MacCatalystAppDirect: "MAC_CATALYST_APP_DIRECT"
} as const;
export type ProfilesGetCollectionFilterProfileTypeEnum = (typeof ProfilesGetCollectionFilterProfileTypeEnum)[keyof typeof ProfilesGetCollectionFilterProfileTypeEnum];
/**
 * @export
 */
export const ProfilesGetCollectionSortEnum = {
    Id: "id",
    Id: "-id",
    Name: "name",
    Name: "-name",
    ProfileState: "profileState",
    ProfileState: "-profileState",
    ProfileType: "profileType",
    ProfileType: "-profileType"
} as const;
export type ProfilesGetCollectionSortEnum = (typeof ProfilesGetCollectionSortEnum)[keyof typeof ProfilesGetCollectionSortEnum];
/**
 * @export
 */
export const ProfilesGetCollectionFieldsProfilesEnum = {
    BundleId: "bundleId",
    Certificates: "certificates",
    CreatedDate: "createdDate",
    Devices: "devices",
    ExpirationDate: "expirationDate",
    Name: "name",
    Platform: "platform",
    ProfileContent: "profileContent",
    ProfileState: "profileState",
    ProfileType: "profileType",
    Uuid: "uuid"
} as const;
export type ProfilesGetCollectionFieldsProfilesEnum = (typeof ProfilesGetCollectionFieldsProfilesEnum)[keyof typeof ProfilesGetCollectionFieldsProfilesEnum];
/**
 * @export
 */
export const ProfilesGetCollectionIncludeEnum = {
    BundleId: "bundleId",
    Certificates: "certificates",
    Devices: "devices"
} as const;
export type ProfilesGetCollectionIncludeEnum = (typeof ProfilesGetCollectionIncludeEnum)[keyof typeof ProfilesGetCollectionIncludeEnum];
/**
 * @export
 */
export const ProfilesGetCollectionFieldsCertificatesEnum = {
    CertificateContent: "certificateContent",
    CertificateType: "certificateType",
    CsrContent: "csrContent",
    DisplayName: "displayName",
    ExpirationDate: "expirationDate",
    Name: "name",
    Platform: "platform",
    SerialNumber: "serialNumber"
} as const;
export type ProfilesGetCollectionFieldsCertificatesEnum = (typeof ProfilesGetCollectionFieldsCertificatesEnum)[keyof typeof ProfilesGetCollectionFieldsCertificatesEnum];
/**
 * @export
 */
export const ProfilesGetCollectionFieldsDevicesEnum = {
    AddedDate: "addedDate",
    DeviceClass: "deviceClass",
    Model: "model",
    Name: "name",
    Platform: "platform",
    Status: "status",
    Udid: "udid"
} as const;
export type ProfilesGetCollectionFieldsDevicesEnum = (typeof ProfilesGetCollectionFieldsDevicesEnum)[keyof typeof ProfilesGetCollectionFieldsDevicesEnum];
/**
 * @export
 */
export const ProfilesGetCollectionFieldsBundleIdsEnum = {
    App: "app",
    BundleIdCapabilities: "bundleIdCapabilities",
    Identifier: "identifier",
    Name: "name",
    Platform: "platform",
    Profiles: "profiles",
    SeedId: "seedId"
} as const;
export type ProfilesGetCollectionFieldsBundleIdsEnum = (typeof ProfilesGetCollectionFieldsBundleIdsEnum)[keyof typeof ProfilesGetCollectionFieldsBundleIdsEnum];
/**
 * @export
 */
export const ProfilesGetInstanceFieldsProfilesEnum = {
    BundleId: "bundleId",
    Certificates: "certificates",
    CreatedDate: "createdDate",
    Devices: "devices",
    ExpirationDate: "expirationDate",
    Name: "name",
    Platform: "platform",
    ProfileContent: "profileContent",
    ProfileState: "profileState",
    ProfileType: "profileType",
    Uuid: "uuid"
} as const;
export type ProfilesGetInstanceFieldsProfilesEnum = (typeof ProfilesGetInstanceFieldsProfilesEnum)[keyof typeof ProfilesGetInstanceFieldsProfilesEnum];
/**
 * @export
 */
export const ProfilesGetInstanceIncludeEnum = {
    BundleId: "bundleId",
    Certificates: "certificates",
    Devices: "devices"
} as const;
export type ProfilesGetInstanceIncludeEnum = (typeof ProfilesGetInstanceIncludeEnum)[keyof typeof ProfilesGetInstanceIncludeEnum];
/**
 * @export
 */
export const ProfilesGetInstanceFieldsCertificatesEnum = {
    CertificateContent: "certificateContent",
    CertificateType: "certificateType",
    CsrContent: "csrContent",
    DisplayName: "displayName",
    ExpirationDate: "expirationDate",
    Name: "name",
    Platform: "platform",
    SerialNumber: "serialNumber"
} as const;
export type ProfilesGetInstanceFieldsCertificatesEnum = (typeof ProfilesGetInstanceFieldsCertificatesEnum)[keyof typeof ProfilesGetInstanceFieldsCertificatesEnum];
/**
 * @export
 */
export const ProfilesGetInstanceFieldsDevicesEnum = {
    AddedDate: "addedDate",
    DeviceClass: "deviceClass",
    Model: "model",
    Name: "name",
    Platform: "platform",
    Status: "status",
    Udid: "udid"
} as const;
export type ProfilesGetInstanceFieldsDevicesEnum = (typeof ProfilesGetInstanceFieldsDevicesEnum)[keyof typeof ProfilesGetInstanceFieldsDevicesEnum];
/**
 * @export
 */
export const ProfilesGetInstanceFieldsBundleIdsEnum = {
    App: "app",
    BundleIdCapabilities: "bundleIdCapabilities",
    Identifier: "identifier",
    Name: "name",
    Platform: "platform",
    Profiles: "profiles",
    SeedId: "seedId"
} as const;
export type ProfilesGetInstanceFieldsBundleIdsEnum = (typeof ProfilesGetInstanceFieldsBundleIdsEnum)[keyof typeof ProfilesGetInstanceFieldsBundleIdsEnum];
