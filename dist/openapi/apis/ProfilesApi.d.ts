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
import type { BundleIdWithoutIncludesResponse, CertificatesWithoutIncludesResponse, DevicesWithoutIncludesResponse, ProfileCreateRequest, ProfileResponse, ProfilesResponse } from "../models";
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
export declare class ProfilesApi extends runtime.BaseAPI {
    /**
     */
    profilesBundleIdGetToOneRelatedRaw(requestParameters: ProfilesBundleIdGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BundleIdWithoutIncludesResponse>>;
    /**
     */
    profilesBundleIdGetToOneRelated(requestParameters: ProfilesBundleIdGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BundleIdWithoutIncludesResponse>;
    /**
     */
    profilesCertificatesGetToManyRelatedRaw(requestParameters: ProfilesCertificatesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CertificatesWithoutIncludesResponse>>;
    /**
     */
    profilesCertificatesGetToManyRelated(requestParameters: ProfilesCertificatesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CertificatesWithoutIncludesResponse>;
    /**
     */
    profilesCreateInstanceRaw(requestParameters: ProfilesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProfileResponse>>;
    /**
     */
    profilesCreateInstance(requestParameters: ProfilesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProfileResponse>;
    /**
     */
    profilesDeleteInstanceRaw(requestParameters: ProfilesDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    profilesDeleteInstance(requestParameters: ProfilesDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    profilesDevicesGetToManyRelatedRaw(requestParameters: ProfilesDevicesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DevicesWithoutIncludesResponse>>;
    /**
     */
    profilesDevicesGetToManyRelated(requestParameters: ProfilesDevicesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DevicesWithoutIncludesResponse>;
    /**
     */
    profilesGetCollectionRaw(requestParameters: ProfilesGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProfilesResponse>>;
    /**
     */
    profilesGetCollection(requestParameters?: ProfilesGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProfilesResponse>;
    /**
     */
    profilesGetInstanceRaw(requestParameters: ProfilesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProfileResponse>>;
    /**
     */
    profilesGetInstance(requestParameters: ProfilesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProfileResponse>;
}
/**
 * @export
 */
export declare const ProfilesBundleIdGetToOneRelatedFieldsBundleIdsEnum: {
    readonly App: "app";
    readonly BundleIdCapabilities: "bundleIdCapabilities";
    readonly Identifier: "identifier";
    readonly Name: "name";
    readonly Platform: "platform";
    readonly Profiles: "profiles";
    readonly SeedId: "seedId";
};
export type ProfilesBundleIdGetToOneRelatedFieldsBundleIdsEnum = (typeof ProfilesBundleIdGetToOneRelatedFieldsBundleIdsEnum)[keyof typeof ProfilesBundleIdGetToOneRelatedFieldsBundleIdsEnum];
/**
 * @export
 */
export declare const ProfilesCertificatesGetToManyRelatedFieldsCertificatesEnum: {
    readonly CertificateContent: "certificateContent";
    readonly CertificateType: "certificateType";
    readonly CsrContent: "csrContent";
    readonly DisplayName: "displayName";
    readonly ExpirationDate: "expirationDate";
    readonly Name: "name";
    readonly Platform: "platform";
    readonly SerialNumber: "serialNumber";
};
export type ProfilesCertificatesGetToManyRelatedFieldsCertificatesEnum = (typeof ProfilesCertificatesGetToManyRelatedFieldsCertificatesEnum)[keyof typeof ProfilesCertificatesGetToManyRelatedFieldsCertificatesEnum];
/**
 * @export
 */
export declare const ProfilesDevicesGetToManyRelatedFieldsDevicesEnum: {
    readonly AddedDate: "addedDate";
    readonly DeviceClass: "deviceClass";
    readonly Model: "model";
    readonly Name: "name";
    readonly Platform: "platform";
    readonly Status: "status";
    readonly Udid: "udid";
};
export type ProfilesDevicesGetToManyRelatedFieldsDevicesEnum = (typeof ProfilesDevicesGetToManyRelatedFieldsDevicesEnum)[keyof typeof ProfilesDevicesGetToManyRelatedFieldsDevicesEnum];
/**
 * @export
 */
export declare const ProfilesGetCollectionFilterProfileStateEnum: {
    readonly Active: "ACTIVE";
    readonly Invalid: "INVALID";
};
export type ProfilesGetCollectionFilterProfileStateEnum = (typeof ProfilesGetCollectionFilterProfileStateEnum)[keyof typeof ProfilesGetCollectionFilterProfileStateEnum];
/**
 * @export
 */
export declare const ProfilesGetCollectionFilterProfileTypeEnum: {
    readonly IosAppDevelopment: "IOS_APP_DEVELOPMENT";
    readonly IosAppStore: "IOS_APP_STORE";
    readonly IosAppAdhoc: "IOS_APP_ADHOC";
    readonly IosAppInhouse: "IOS_APP_INHOUSE";
    readonly MacAppDevelopment: "MAC_APP_DEVELOPMENT";
    readonly MacAppStore: "MAC_APP_STORE";
    readonly MacAppDirect: "MAC_APP_DIRECT";
    readonly TvosAppDevelopment: "TVOS_APP_DEVELOPMENT";
    readonly TvosAppStore: "TVOS_APP_STORE";
    readonly TvosAppAdhoc: "TVOS_APP_ADHOC";
    readonly TvosAppInhouse: "TVOS_APP_INHOUSE";
    readonly MacCatalystAppDevelopment: "MAC_CATALYST_APP_DEVELOPMENT";
    readonly MacCatalystAppStore: "MAC_CATALYST_APP_STORE";
    readonly MacCatalystAppDirect: "MAC_CATALYST_APP_DIRECT";
};
export type ProfilesGetCollectionFilterProfileTypeEnum = (typeof ProfilesGetCollectionFilterProfileTypeEnum)[keyof typeof ProfilesGetCollectionFilterProfileTypeEnum];
/**
 * @export
 */
export declare const ProfilesGetCollectionSortEnum: {
    readonly Id: "-id";
    readonly Name: "-name";
    readonly ProfileState: "-profileState";
    readonly ProfileType: "-profileType";
};
export type ProfilesGetCollectionSortEnum = (typeof ProfilesGetCollectionSortEnum)[keyof typeof ProfilesGetCollectionSortEnum];
/**
 * @export
 */
export declare const ProfilesGetCollectionFieldsProfilesEnum: {
    readonly BundleId: "bundleId";
    readonly Certificates: "certificates";
    readonly CreatedDate: "createdDate";
    readonly Devices: "devices";
    readonly ExpirationDate: "expirationDate";
    readonly Name: "name";
    readonly Platform: "platform";
    readonly ProfileContent: "profileContent";
    readonly ProfileState: "profileState";
    readonly ProfileType: "profileType";
    readonly Uuid: "uuid";
};
export type ProfilesGetCollectionFieldsProfilesEnum = (typeof ProfilesGetCollectionFieldsProfilesEnum)[keyof typeof ProfilesGetCollectionFieldsProfilesEnum];
/**
 * @export
 */
export declare const ProfilesGetCollectionIncludeEnum: {
    readonly BundleId: "bundleId";
    readonly Certificates: "certificates";
    readonly Devices: "devices";
};
export type ProfilesGetCollectionIncludeEnum = (typeof ProfilesGetCollectionIncludeEnum)[keyof typeof ProfilesGetCollectionIncludeEnum];
/**
 * @export
 */
export declare const ProfilesGetCollectionFieldsCertificatesEnum: {
    readonly CertificateContent: "certificateContent";
    readonly CertificateType: "certificateType";
    readonly CsrContent: "csrContent";
    readonly DisplayName: "displayName";
    readonly ExpirationDate: "expirationDate";
    readonly Name: "name";
    readonly Platform: "platform";
    readonly SerialNumber: "serialNumber";
};
export type ProfilesGetCollectionFieldsCertificatesEnum = (typeof ProfilesGetCollectionFieldsCertificatesEnum)[keyof typeof ProfilesGetCollectionFieldsCertificatesEnum];
/**
 * @export
 */
export declare const ProfilesGetCollectionFieldsDevicesEnum: {
    readonly AddedDate: "addedDate";
    readonly DeviceClass: "deviceClass";
    readonly Model: "model";
    readonly Name: "name";
    readonly Platform: "platform";
    readonly Status: "status";
    readonly Udid: "udid";
};
export type ProfilesGetCollectionFieldsDevicesEnum = (typeof ProfilesGetCollectionFieldsDevicesEnum)[keyof typeof ProfilesGetCollectionFieldsDevicesEnum];
/**
 * @export
 */
export declare const ProfilesGetCollectionFieldsBundleIdsEnum: {
    readonly App: "app";
    readonly BundleIdCapabilities: "bundleIdCapabilities";
    readonly Identifier: "identifier";
    readonly Name: "name";
    readonly Platform: "platform";
    readonly Profiles: "profiles";
    readonly SeedId: "seedId";
};
export type ProfilesGetCollectionFieldsBundleIdsEnum = (typeof ProfilesGetCollectionFieldsBundleIdsEnum)[keyof typeof ProfilesGetCollectionFieldsBundleIdsEnum];
/**
 * @export
 */
export declare const ProfilesGetInstanceFieldsProfilesEnum: {
    readonly BundleId: "bundleId";
    readonly Certificates: "certificates";
    readonly CreatedDate: "createdDate";
    readonly Devices: "devices";
    readonly ExpirationDate: "expirationDate";
    readonly Name: "name";
    readonly Platform: "platform";
    readonly ProfileContent: "profileContent";
    readonly ProfileState: "profileState";
    readonly ProfileType: "profileType";
    readonly Uuid: "uuid";
};
export type ProfilesGetInstanceFieldsProfilesEnum = (typeof ProfilesGetInstanceFieldsProfilesEnum)[keyof typeof ProfilesGetInstanceFieldsProfilesEnum];
/**
 * @export
 */
export declare const ProfilesGetInstanceIncludeEnum: {
    readonly BundleId: "bundleId";
    readonly Certificates: "certificates";
    readonly Devices: "devices";
};
export type ProfilesGetInstanceIncludeEnum = (typeof ProfilesGetInstanceIncludeEnum)[keyof typeof ProfilesGetInstanceIncludeEnum];
/**
 * @export
 */
export declare const ProfilesGetInstanceFieldsCertificatesEnum: {
    readonly CertificateContent: "certificateContent";
    readonly CertificateType: "certificateType";
    readonly CsrContent: "csrContent";
    readonly DisplayName: "displayName";
    readonly ExpirationDate: "expirationDate";
    readonly Name: "name";
    readonly Platform: "platform";
    readonly SerialNumber: "serialNumber";
};
export type ProfilesGetInstanceFieldsCertificatesEnum = (typeof ProfilesGetInstanceFieldsCertificatesEnum)[keyof typeof ProfilesGetInstanceFieldsCertificatesEnum];
/**
 * @export
 */
export declare const ProfilesGetInstanceFieldsDevicesEnum: {
    readonly AddedDate: "addedDate";
    readonly DeviceClass: "deviceClass";
    readonly Model: "model";
    readonly Name: "name";
    readonly Platform: "platform";
    readonly Status: "status";
    readonly Udid: "udid";
};
export type ProfilesGetInstanceFieldsDevicesEnum = (typeof ProfilesGetInstanceFieldsDevicesEnum)[keyof typeof ProfilesGetInstanceFieldsDevicesEnum];
/**
 * @export
 */
export declare const ProfilesGetInstanceFieldsBundleIdsEnum: {
    readonly App: "app";
    readonly BundleIdCapabilities: "bundleIdCapabilities";
    readonly Identifier: "identifier";
    readonly Name: "name";
    readonly Platform: "platform";
    readonly Profiles: "profiles";
    readonly SeedId: "seedId";
};
export type ProfilesGetInstanceFieldsBundleIdsEnum = (typeof ProfilesGetInstanceFieldsBundleIdsEnum)[keyof typeof ProfilesGetInstanceFieldsBundleIdsEnum];
