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
import type { CiMacOsVersionsResponse, CiXcodeVersionResponse, CiXcodeVersionsResponse } from "../models";
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
export declare class CiXcodeVersionsApi extends runtime.BaseAPI {
    /**
     */
    ciXcodeVersionsGetCollectionRaw(requestParameters: CiXcodeVersionsGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CiXcodeVersionsResponse>>;
    /**
     */
    ciXcodeVersionsGetCollection(requestParameters?: CiXcodeVersionsGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CiXcodeVersionsResponse>;
    /**
     */
    ciXcodeVersionsGetInstanceRaw(requestParameters: CiXcodeVersionsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CiXcodeVersionResponse>>;
    /**
     */
    ciXcodeVersionsGetInstance(requestParameters: CiXcodeVersionsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CiXcodeVersionResponse>;
    /**
     */
    ciXcodeVersionsMacOsVersionsGetToManyRelatedRaw(requestParameters: CiXcodeVersionsMacOsVersionsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CiMacOsVersionsResponse>>;
    /**
     */
    ciXcodeVersionsMacOsVersionsGetToManyRelated(requestParameters: CiXcodeVersionsMacOsVersionsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CiMacOsVersionsResponse>;
}
/**
 * @export
 */
export declare const CiXcodeVersionsGetCollectionFieldsCiXcodeVersionsEnum: {
    readonly MacOsVersions: "macOsVersions";
    readonly Name: "name";
    readonly TestDestinations: "testDestinations";
    readonly Version: "version";
};
export type CiXcodeVersionsGetCollectionFieldsCiXcodeVersionsEnum = (typeof CiXcodeVersionsGetCollectionFieldsCiXcodeVersionsEnum)[keyof typeof CiXcodeVersionsGetCollectionFieldsCiXcodeVersionsEnum];
/**
 * @export
 */
export declare const CiXcodeVersionsGetCollectionIncludeEnum: {
    readonly MacOsVersions: "macOsVersions";
};
export type CiXcodeVersionsGetCollectionIncludeEnum = (typeof CiXcodeVersionsGetCollectionIncludeEnum)[keyof typeof CiXcodeVersionsGetCollectionIncludeEnum];
/**
 * @export
 */
export declare const CiXcodeVersionsGetCollectionFieldsCiMacOsVersionsEnum: {
    readonly Name: "name";
    readonly Version: "version";
    readonly XcodeVersions: "xcodeVersions";
};
export type CiXcodeVersionsGetCollectionFieldsCiMacOsVersionsEnum = (typeof CiXcodeVersionsGetCollectionFieldsCiMacOsVersionsEnum)[keyof typeof CiXcodeVersionsGetCollectionFieldsCiMacOsVersionsEnum];
/**
 * @export
 */
export declare const CiXcodeVersionsGetInstanceFieldsCiXcodeVersionsEnum: {
    readonly MacOsVersions: "macOsVersions";
    readonly Name: "name";
    readonly TestDestinations: "testDestinations";
    readonly Version: "version";
};
export type CiXcodeVersionsGetInstanceFieldsCiXcodeVersionsEnum = (typeof CiXcodeVersionsGetInstanceFieldsCiXcodeVersionsEnum)[keyof typeof CiXcodeVersionsGetInstanceFieldsCiXcodeVersionsEnum];
/**
 * @export
 */
export declare const CiXcodeVersionsGetInstanceIncludeEnum: {
    readonly MacOsVersions: "macOsVersions";
};
export type CiXcodeVersionsGetInstanceIncludeEnum = (typeof CiXcodeVersionsGetInstanceIncludeEnum)[keyof typeof CiXcodeVersionsGetInstanceIncludeEnum];
/**
 * @export
 */
export declare const CiXcodeVersionsGetInstanceFieldsCiMacOsVersionsEnum: {
    readonly Name: "name";
    readonly Version: "version";
    readonly XcodeVersions: "xcodeVersions";
};
export type CiXcodeVersionsGetInstanceFieldsCiMacOsVersionsEnum = (typeof CiXcodeVersionsGetInstanceFieldsCiMacOsVersionsEnum)[keyof typeof CiXcodeVersionsGetInstanceFieldsCiMacOsVersionsEnum];
/**
 * @export
 */
export declare const CiXcodeVersionsMacOsVersionsGetToManyRelatedFieldsCiXcodeVersionsEnum: {
    readonly MacOsVersions: "macOsVersions";
    readonly Name: "name";
    readonly TestDestinations: "testDestinations";
    readonly Version: "version";
};
export type CiXcodeVersionsMacOsVersionsGetToManyRelatedFieldsCiXcodeVersionsEnum = (typeof CiXcodeVersionsMacOsVersionsGetToManyRelatedFieldsCiXcodeVersionsEnum)[keyof typeof CiXcodeVersionsMacOsVersionsGetToManyRelatedFieldsCiXcodeVersionsEnum];
/**
 * @export
 */
export declare const CiXcodeVersionsMacOsVersionsGetToManyRelatedFieldsCiMacOsVersionsEnum: {
    readonly Name: "name";
    readonly Version: "version";
    readonly XcodeVersions: "xcodeVersions";
};
export type CiXcodeVersionsMacOsVersionsGetToManyRelatedFieldsCiMacOsVersionsEnum = (typeof CiXcodeVersionsMacOsVersionsGetToManyRelatedFieldsCiMacOsVersionsEnum)[keyof typeof CiXcodeVersionsMacOsVersionsGetToManyRelatedFieldsCiMacOsVersionsEnum];
/**
 * @export
 */
export declare const CiXcodeVersionsMacOsVersionsGetToManyRelatedIncludeEnum: {
    readonly XcodeVersions: "xcodeVersions";
};
export type CiXcodeVersionsMacOsVersionsGetToManyRelatedIncludeEnum = (typeof CiXcodeVersionsMacOsVersionsGetToManyRelatedIncludeEnum)[keyof typeof CiXcodeVersionsMacOsVersionsGetToManyRelatedIncludeEnum];
