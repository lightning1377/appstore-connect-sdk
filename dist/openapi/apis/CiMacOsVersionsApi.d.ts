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
import type { CiMacOsVersionResponse, CiMacOsVersionsResponse, CiXcodeVersionsResponse } from "../models";
export interface CiMacOsVersionsGetCollectionRequest {
    fieldsCiMacOsVersions?: Array<CiMacOsVersionsGetCollectionFieldsCiMacOsVersionsEnum>;
    limit?: number;
    include?: Array<CiMacOsVersionsGetCollectionIncludeEnum>;
    fieldsCiXcodeVersions?: Array<CiMacOsVersionsGetCollectionFieldsCiXcodeVersionsEnum>;
    limitXcodeVersions?: number;
}
export interface CiMacOsVersionsGetInstanceRequest {
    id: string;
    fieldsCiMacOsVersions?: Array<CiMacOsVersionsGetInstanceFieldsCiMacOsVersionsEnum>;
    include?: Array<CiMacOsVersionsGetInstanceIncludeEnum>;
    fieldsCiXcodeVersions?: Array<CiMacOsVersionsGetInstanceFieldsCiXcodeVersionsEnum>;
    limitXcodeVersions?: number;
}
export interface CiMacOsVersionsXcodeVersionsGetToManyRelatedRequest {
    id: string;
    fieldsCiXcodeVersions?: Array<CiMacOsVersionsXcodeVersionsGetToManyRelatedFieldsCiXcodeVersionsEnum>;
    fieldsCiMacOsVersions?: Array<CiMacOsVersionsXcodeVersionsGetToManyRelatedFieldsCiMacOsVersionsEnum>;
    limit?: number;
    limitMacOsVersions?: number;
    include?: Array<CiMacOsVersionsXcodeVersionsGetToManyRelatedIncludeEnum>;
}
/**
 *
 */
export declare class CiMacOsVersionsApi extends runtime.BaseAPI {
    /**
     */
    ciMacOsVersionsGetCollectionRaw(requestParameters: CiMacOsVersionsGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CiMacOsVersionsResponse>>;
    /**
     */
    ciMacOsVersionsGetCollection(requestParameters?: CiMacOsVersionsGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CiMacOsVersionsResponse>;
    /**
     */
    ciMacOsVersionsGetInstanceRaw(requestParameters: CiMacOsVersionsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CiMacOsVersionResponse>>;
    /**
     */
    ciMacOsVersionsGetInstance(requestParameters: CiMacOsVersionsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CiMacOsVersionResponse>;
    /**
     */
    ciMacOsVersionsXcodeVersionsGetToManyRelatedRaw(requestParameters: CiMacOsVersionsXcodeVersionsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CiXcodeVersionsResponse>>;
    /**
     */
    ciMacOsVersionsXcodeVersionsGetToManyRelated(requestParameters: CiMacOsVersionsXcodeVersionsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CiXcodeVersionsResponse>;
}
/**
 * @export
 */
export declare const CiMacOsVersionsGetCollectionFieldsCiMacOsVersionsEnum: {
    readonly Name: "name";
    readonly Version: "version";
    readonly XcodeVersions: "xcodeVersions";
};
export type CiMacOsVersionsGetCollectionFieldsCiMacOsVersionsEnum = (typeof CiMacOsVersionsGetCollectionFieldsCiMacOsVersionsEnum)[keyof typeof CiMacOsVersionsGetCollectionFieldsCiMacOsVersionsEnum];
/**
 * @export
 */
export declare const CiMacOsVersionsGetCollectionIncludeEnum: {
    readonly XcodeVersions: "xcodeVersions";
};
export type CiMacOsVersionsGetCollectionIncludeEnum = (typeof CiMacOsVersionsGetCollectionIncludeEnum)[keyof typeof CiMacOsVersionsGetCollectionIncludeEnum];
/**
 * @export
 */
export declare const CiMacOsVersionsGetCollectionFieldsCiXcodeVersionsEnum: {
    readonly MacOsVersions: "macOsVersions";
    readonly Name: "name";
    readonly TestDestinations: "testDestinations";
    readonly Version: "version";
};
export type CiMacOsVersionsGetCollectionFieldsCiXcodeVersionsEnum = (typeof CiMacOsVersionsGetCollectionFieldsCiXcodeVersionsEnum)[keyof typeof CiMacOsVersionsGetCollectionFieldsCiXcodeVersionsEnum];
/**
 * @export
 */
export declare const CiMacOsVersionsGetInstanceFieldsCiMacOsVersionsEnum: {
    readonly Name: "name";
    readonly Version: "version";
    readonly XcodeVersions: "xcodeVersions";
};
export type CiMacOsVersionsGetInstanceFieldsCiMacOsVersionsEnum = (typeof CiMacOsVersionsGetInstanceFieldsCiMacOsVersionsEnum)[keyof typeof CiMacOsVersionsGetInstanceFieldsCiMacOsVersionsEnum];
/**
 * @export
 */
export declare const CiMacOsVersionsGetInstanceIncludeEnum: {
    readonly XcodeVersions: "xcodeVersions";
};
export type CiMacOsVersionsGetInstanceIncludeEnum = (typeof CiMacOsVersionsGetInstanceIncludeEnum)[keyof typeof CiMacOsVersionsGetInstanceIncludeEnum];
/**
 * @export
 */
export declare const CiMacOsVersionsGetInstanceFieldsCiXcodeVersionsEnum: {
    readonly MacOsVersions: "macOsVersions";
    readonly Name: "name";
    readonly TestDestinations: "testDestinations";
    readonly Version: "version";
};
export type CiMacOsVersionsGetInstanceFieldsCiXcodeVersionsEnum = (typeof CiMacOsVersionsGetInstanceFieldsCiXcodeVersionsEnum)[keyof typeof CiMacOsVersionsGetInstanceFieldsCiXcodeVersionsEnum];
/**
 * @export
 */
export declare const CiMacOsVersionsXcodeVersionsGetToManyRelatedFieldsCiXcodeVersionsEnum: {
    readonly MacOsVersions: "macOsVersions";
    readonly Name: "name";
    readonly TestDestinations: "testDestinations";
    readonly Version: "version";
};
export type CiMacOsVersionsXcodeVersionsGetToManyRelatedFieldsCiXcodeVersionsEnum = (typeof CiMacOsVersionsXcodeVersionsGetToManyRelatedFieldsCiXcodeVersionsEnum)[keyof typeof CiMacOsVersionsXcodeVersionsGetToManyRelatedFieldsCiXcodeVersionsEnum];
/**
 * @export
 */
export declare const CiMacOsVersionsXcodeVersionsGetToManyRelatedFieldsCiMacOsVersionsEnum: {
    readonly Name: "name";
    readonly Version: "version";
    readonly XcodeVersions: "xcodeVersions";
};
export type CiMacOsVersionsXcodeVersionsGetToManyRelatedFieldsCiMacOsVersionsEnum = (typeof CiMacOsVersionsXcodeVersionsGetToManyRelatedFieldsCiMacOsVersionsEnum)[keyof typeof CiMacOsVersionsXcodeVersionsGetToManyRelatedFieldsCiMacOsVersionsEnum];
/**
 * @export
 */
export declare const CiMacOsVersionsXcodeVersionsGetToManyRelatedIncludeEnum: {
    readonly MacOsVersions: "macOsVersions";
};
export type CiMacOsVersionsXcodeVersionsGetToManyRelatedIncludeEnum = (typeof CiMacOsVersionsXcodeVersionsGetToManyRelatedIncludeEnum)[keyof typeof CiMacOsVersionsXcodeVersionsGetToManyRelatedIncludeEnum];
