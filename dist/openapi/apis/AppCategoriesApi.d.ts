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
import type { AppCategoriesResponse, AppCategoriesWithoutIncludesResponse, AppCategoryResponse, AppCategoryWithoutIncludesResponse } from "../models";
export interface AppCategoriesGetCollectionRequest {
    filterPlatforms?: Array<AppCategoriesGetCollectionFilterPlatformsEnum>;
    existsParent?: boolean;
    fieldsAppCategories?: Array<AppCategoriesGetCollectionFieldsAppCategoriesEnum>;
    limit?: number;
    include?: Array<AppCategoriesGetCollectionIncludeEnum>;
    limitSubcategories?: number;
}
export interface AppCategoriesGetInstanceRequest {
    id: string;
    fieldsAppCategories?: Array<AppCategoriesGetInstanceFieldsAppCategoriesEnum>;
    include?: Array<AppCategoriesGetInstanceIncludeEnum>;
    limitSubcategories?: number;
}
export interface AppCategoriesParentGetToOneRelatedRequest {
    id: string;
    fieldsAppCategories?: Array<AppCategoriesParentGetToOneRelatedFieldsAppCategoriesEnum>;
}
export interface AppCategoriesSubcategoriesGetToManyRelatedRequest {
    id: string;
    fieldsAppCategories?: Array<AppCategoriesSubcategoriesGetToManyRelatedFieldsAppCategoriesEnum>;
    limit?: number;
}
/**
 *
 */
export declare class AppCategoriesApi extends runtime.BaseAPI {
    /**
     */
    appCategoriesGetCollectionRaw(requestParameters: AppCategoriesGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppCategoriesResponse>>;
    /**
     */
    appCategoriesGetCollection(requestParameters?: AppCategoriesGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppCategoriesResponse>;
    /**
     */
    appCategoriesGetInstanceRaw(requestParameters: AppCategoriesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppCategoryResponse>>;
    /**
     */
    appCategoriesGetInstance(requestParameters: AppCategoriesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppCategoryResponse>;
    /**
     */
    appCategoriesParentGetToOneRelatedRaw(requestParameters: AppCategoriesParentGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppCategoryWithoutIncludesResponse>>;
    /**
     */
    appCategoriesParentGetToOneRelated(requestParameters: AppCategoriesParentGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppCategoryWithoutIncludesResponse>;
    /**
     */
    appCategoriesSubcategoriesGetToManyRelatedRaw(requestParameters: AppCategoriesSubcategoriesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppCategoriesWithoutIncludesResponse>>;
    /**
     */
    appCategoriesSubcategoriesGetToManyRelated(requestParameters: AppCategoriesSubcategoriesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppCategoriesWithoutIncludesResponse>;
}
/**
 * @export
 */
export declare const AppCategoriesGetCollectionFilterPlatformsEnum: {
    readonly Ios: "IOS";
    readonly MacOs: "MAC_OS";
    readonly TvOs: "TV_OS";
    readonly VisionOs: "VISION_OS";
};
export type AppCategoriesGetCollectionFilterPlatformsEnum = (typeof AppCategoriesGetCollectionFilterPlatformsEnum)[keyof typeof AppCategoriesGetCollectionFilterPlatformsEnum];
/**
 * @export
 */
export declare const AppCategoriesGetCollectionFieldsAppCategoriesEnum: {
    readonly Parent: "parent";
    readonly Platforms: "platforms";
    readonly Subcategories: "subcategories";
};
export type AppCategoriesGetCollectionFieldsAppCategoriesEnum = (typeof AppCategoriesGetCollectionFieldsAppCategoriesEnum)[keyof typeof AppCategoriesGetCollectionFieldsAppCategoriesEnum];
/**
 * @export
 */
export declare const AppCategoriesGetCollectionIncludeEnum: {
    readonly Parent: "parent";
    readonly Subcategories: "subcategories";
};
export type AppCategoriesGetCollectionIncludeEnum = (typeof AppCategoriesGetCollectionIncludeEnum)[keyof typeof AppCategoriesGetCollectionIncludeEnum];
/**
 * @export
 */
export declare const AppCategoriesGetInstanceFieldsAppCategoriesEnum: {
    readonly Parent: "parent";
    readonly Platforms: "platforms";
    readonly Subcategories: "subcategories";
};
export type AppCategoriesGetInstanceFieldsAppCategoriesEnum = (typeof AppCategoriesGetInstanceFieldsAppCategoriesEnum)[keyof typeof AppCategoriesGetInstanceFieldsAppCategoriesEnum];
/**
 * @export
 */
export declare const AppCategoriesGetInstanceIncludeEnum: {
    readonly Parent: "parent";
    readonly Subcategories: "subcategories";
};
export type AppCategoriesGetInstanceIncludeEnum = (typeof AppCategoriesGetInstanceIncludeEnum)[keyof typeof AppCategoriesGetInstanceIncludeEnum];
/**
 * @export
 */
export declare const AppCategoriesParentGetToOneRelatedFieldsAppCategoriesEnum: {
    readonly Parent: "parent";
    readonly Platforms: "platforms";
    readonly Subcategories: "subcategories";
};
export type AppCategoriesParentGetToOneRelatedFieldsAppCategoriesEnum = (typeof AppCategoriesParentGetToOneRelatedFieldsAppCategoriesEnum)[keyof typeof AppCategoriesParentGetToOneRelatedFieldsAppCategoriesEnum];
/**
 * @export
 */
export declare const AppCategoriesSubcategoriesGetToManyRelatedFieldsAppCategoriesEnum: {
    readonly Parent: "parent";
    readonly Platforms: "platforms";
    readonly Subcategories: "subcategories";
};
export type AppCategoriesSubcategoriesGetToManyRelatedFieldsAppCategoriesEnum = (typeof AppCategoriesSubcategoriesGetToManyRelatedFieldsAppCategoriesEnum)[keyof typeof AppCategoriesSubcategoriesGetToManyRelatedFieldsAppCategoriesEnum];
