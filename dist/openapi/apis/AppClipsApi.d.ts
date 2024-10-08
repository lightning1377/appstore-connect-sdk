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
import type { AppClipAdvancedExperiencesResponse, AppClipDefaultExperiencesResponse, AppClipResponse } from "../models";
export interface AppClipsAppClipAdvancedExperiencesGetToManyRelatedRequest {
    id: string;
    filterAction?: Array<AppClipsAppClipAdvancedExperiencesGetToManyRelatedFilterActionEnum>;
    filterPlaceStatus?: Array<AppClipsAppClipAdvancedExperiencesGetToManyRelatedFilterPlaceStatusEnum>;
    filterStatus?: Array<AppClipsAppClipAdvancedExperiencesGetToManyRelatedFilterStatusEnum>;
    fieldsAppClipAdvancedExperiences?: Array<AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipAdvancedExperiencesEnum>;
    fieldsAppClips?: Array<AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipsEnum>;
    fieldsAppClipAdvancedExperienceImages?: Array<AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipAdvancedExperienceImagesEnum>;
    fieldsAppClipAdvancedExperienceLocalizations?: Array<AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipAdvancedExperienceLocalizationsEnum>;
    limit?: number;
    limitLocalizations?: number;
    include?: Array<AppClipsAppClipAdvancedExperiencesGetToManyRelatedIncludeEnum>;
}
export interface AppClipsAppClipDefaultExperiencesGetToManyRelatedRequest {
    id: string;
    existsReleaseWithAppStoreVersion?: boolean;
    fieldsAppClips?: Array<AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipsEnum>;
    fieldsAppClipAppStoreReviewDetails?: Array<AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipAppStoreReviewDetailsEnum>;
    fieldsAppStoreVersions?: Array<AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppStoreVersionsEnum>;
    fieldsAppClipDefaultExperiences?: Array<AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipDefaultExperiencesEnum>;
    fieldsAppClipDefaultExperienceLocalizations?: Array<AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipDefaultExperienceLocalizationsEnum>;
    limit?: number;
    limitAppClipDefaultExperienceLocalizations?: number;
    include?: Array<AppClipsAppClipDefaultExperiencesGetToManyRelatedIncludeEnum>;
}
export interface AppClipsGetInstanceRequest {
    id: string;
    fieldsAppClips?: Array<AppClipsGetInstanceFieldsAppClipsEnum>;
    include?: Array<AppClipsGetInstanceIncludeEnum>;
    fieldsAppClipAdvancedExperiences?: Array<AppClipsGetInstanceFieldsAppClipAdvancedExperiencesEnum>;
    fieldsAppClipDefaultExperiences?: Array<AppClipsGetInstanceFieldsAppClipDefaultExperiencesEnum>;
    limitAppClipDefaultExperiences?: number;
}
/**
 *
 */
export declare class AppClipsApi extends runtime.BaseAPI {
    /**
     */
    appClipsAppClipAdvancedExperiencesGetToManyRelatedRaw(requestParameters: AppClipsAppClipAdvancedExperiencesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppClipAdvancedExperiencesResponse>>;
    /**
     */
    appClipsAppClipAdvancedExperiencesGetToManyRelated(requestParameters: AppClipsAppClipAdvancedExperiencesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppClipAdvancedExperiencesResponse>;
    /**
     */
    appClipsAppClipDefaultExperiencesGetToManyRelatedRaw(requestParameters: AppClipsAppClipDefaultExperiencesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppClipDefaultExperiencesResponse>>;
    /**
     */
    appClipsAppClipDefaultExperiencesGetToManyRelated(requestParameters: AppClipsAppClipDefaultExperiencesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppClipDefaultExperiencesResponse>;
    /**
     */
    appClipsGetInstanceRaw(requestParameters: AppClipsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppClipResponse>>;
    /**
     */
    appClipsGetInstance(requestParameters: AppClipsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppClipResponse>;
}
/**
 * @export
 */
export declare const AppClipsAppClipAdvancedExperiencesGetToManyRelatedFilterActionEnum: {
    readonly Open: "OPEN";
    readonly View: "VIEW";
    readonly Play: "PLAY";
};
export type AppClipsAppClipAdvancedExperiencesGetToManyRelatedFilterActionEnum = (typeof AppClipsAppClipAdvancedExperiencesGetToManyRelatedFilterActionEnum)[keyof typeof AppClipsAppClipAdvancedExperiencesGetToManyRelatedFilterActionEnum];
/**
 * @export
 */
export declare const AppClipsAppClipAdvancedExperiencesGetToManyRelatedFilterPlaceStatusEnum: {
    readonly Pending: "PENDING";
    readonly Matched: "MATCHED";
    readonly NoMatch: "NO_MATCH";
};
export type AppClipsAppClipAdvancedExperiencesGetToManyRelatedFilterPlaceStatusEnum = (typeof AppClipsAppClipAdvancedExperiencesGetToManyRelatedFilterPlaceStatusEnum)[keyof typeof AppClipsAppClipAdvancedExperiencesGetToManyRelatedFilterPlaceStatusEnum];
/**
 * @export
 */
export declare const AppClipsAppClipAdvancedExperiencesGetToManyRelatedFilterStatusEnum: {
    readonly Received: "RECEIVED";
    readonly Deactivated: "DEACTIVATED";
    readonly AppTransferInProgress: "APP_TRANSFER_IN_PROGRESS";
};
export type AppClipsAppClipAdvancedExperiencesGetToManyRelatedFilterStatusEnum = (typeof AppClipsAppClipAdvancedExperiencesGetToManyRelatedFilterStatusEnum)[keyof typeof AppClipsAppClipAdvancedExperiencesGetToManyRelatedFilterStatusEnum];
/**
 * @export
 */
export declare const AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipAdvancedExperiencesEnum: {
    readonly Action: "action";
    readonly AppClip: "appClip";
    readonly BusinessCategory: "businessCategory";
    readonly DefaultLanguage: "defaultLanguage";
    readonly HeaderImage: "headerImage";
    readonly IsPoweredBy: "isPoweredBy";
    readonly Link: "link";
    readonly Localizations: "localizations";
    readonly Place: "place";
    readonly PlaceStatus: "placeStatus";
    readonly Removed: "removed";
    readonly Status: "status";
    readonly Version: "version";
};
export type AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipAdvancedExperiencesEnum = (typeof AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipAdvancedExperiencesEnum)[keyof typeof AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipAdvancedExperiencesEnum];
/**
 * @export
 */
export declare const AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipsEnum: {
    readonly App: "app";
    readonly AppClipAdvancedExperiences: "appClipAdvancedExperiences";
    readonly AppClipDefaultExperiences: "appClipDefaultExperiences";
    readonly BundleId: "bundleId";
};
export type AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipsEnum = (typeof AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipsEnum)[keyof typeof AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipsEnum];
/**
 * @export
 */
export declare const AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipAdvancedExperienceImagesEnum: {
    readonly AssetDeliveryState: "assetDeliveryState";
    readonly FileName: "fileName";
    readonly FileSize: "fileSize";
    readonly ImageAsset: "imageAsset";
    readonly SourceFileChecksum: "sourceFileChecksum";
    readonly UploadOperations: "uploadOperations";
    readonly Uploaded: "uploaded";
};
export type AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipAdvancedExperienceImagesEnum = (typeof AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipAdvancedExperienceImagesEnum)[keyof typeof AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipAdvancedExperienceImagesEnum];
/**
 * @export
 */
export declare const AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipAdvancedExperienceLocalizationsEnum: {
    readonly Language: "language";
    readonly Subtitle: "subtitle";
    readonly Title: "title";
};
export type AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipAdvancedExperienceLocalizationsEnum = (typeof AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipAdvancedExperienceLocalizationsEnum)[keyof typeof AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipAdvancedExperienceLocalizationsEnum];
/**
 * @export
 */
export declare const AppClipsAppClipAdvancedExperiencesGetToManyRelatedIncludeEnum: {
    readonly AppClip: "appClip";
    readonly HeaderImage: "headerImage";
    readonly Localizations: "localizations";
};
export type AppClipsAppClipAdvancedExperiencesGetToManyRelatedIncludeEnum = (typeof AppClipsAppClipAdvancedExperiencesGetToManyRelatedIncludeEnum)[keyof typeof AppClipsAppClipAdvancedExperiencesGetToManyRelatedIncludeEnum];
/**
 * @export
 */
export declare const AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipsEnum: {
    readonly App: "app";
    readonly AppClipAdvancedExperiences: "appClipAdvancedExperiences";
    readonly AppClipDefaultExperiences: "appClipDefaultExperiences";
    readonly BundleId: "bundleId";
};
export type AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipsEnum = (typeof AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipsEnum)[keyof typeof AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipsEnum];
/**
 * @export
 */
export declare const AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipAppStoreReviewDetailsEnum: {
    readonly AppClipDefaultExperience: "appClipDefaultExperience";
    readonly InvocationUrls: "invocationUrls";
};
export type AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipAppStoreReviewDetailsEnum = (typeof AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipAppStoreReviewDetailsEnum)[keyof typeof AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipAppStoreReviewDetailsEnum];
/**
 * @export
 */
export declare const AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppStoreVersionsEnum: {
    readonly AgeRatingDeclaration: "ageRatingDeclaration";
    readonly AlternativeDistributionPackage: "alternativeDistributionPackage";
    readonly App: "app";
    readonly AppClipDefaultExperience: "appClipDefaultExperience";
    readonly AppStoreReviewDetail: "appStoreReviewDetail";
    readonly AppStoreState: "appStoreState";
    readonly AppStoreVersionExperiments: "appStoreVersionExperiments";
    readonly AppStoreVersionExperimentsV2: "appStoreVersionExperimentsV2";
    readonly AppStoreVersionLocalizations: "appStoreVersionLocalizations";
    readonly AppStoreVersionPhasedRelease: "appStoreVersionPhasedRelease";
    readonly AppStoreVersionSubmission: "appStoreVersionSubmission";
    readonly AppVersionState: "appVersionState";
    readonly Build: "build";
    readonly Copyright: "copyright";
    readonly CreatedDate: "createdDate";
    readonly CustomerReviews: "customerReviews";
    readonly Downloadable: "downloadable";
    readonly EarliestReleaseDate: "earliestReleaseDate";
    readonly Platform: "platform";
    readonly ReleaseType: "releaseType";
    readonly ReviewType: "reviewType";
    readonly RoutingAppCoverage: "routingAppCoverage";
    readonly VersionString: "versionString";
};
export type AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppStoreVersionsEnum = (typeof AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppStoreVersionsEnum)[keyof typeof AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppStoreVersionsEnum];
/**
 * @export
 */
export declare const AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipDefaultExperiencesEnum: {
    readonly Action: "action";
    readonly AppClip: "appClip";
    readonly AppClipAppStoreReviewDetail: "appClipAppStoreReviewDetail";
    readonly AppClipDefaultExperienceLocalizations: "appClipDefaultExperienceLocalizations";
    readonly AppClipDefaultExperienceTemplate: "appClipDefaultExperienceTemplate";
    readonly ReleaseWithAppStoreVersion: "releaseWithAppStoreVersion";
};
export type AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipDefaultExperiencesEnum = (typeof AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipDefaultExperiencesEnum)[keyof typeof AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipDefaultExperiencesEnum];
/**
 * @export
 */
export declare const AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipDefaultExperienceLocalizationsEnum: {
    readonly AppClipDefaultExperience: "appClipDefaultExperience";
    readonly AppClipHeaderImage: "appClipHeaderImage";
    readonly Locale: "locale";
    readonly Subtitle: "subtitle";
};
export type AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipDefaultExperienceLocalizationsEnum = (typeof AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipDefaultExperienceLocalizationsEnum)[keyof typeof AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipDefaultExperienceLocalizationsEnum];
/**
 * @export
 */
export declare const AppClipsAppClipDefaultExperiencesGetToManyRelatedIncludeEnum: {
    readonly AppClip: "appClip";
    readonly AppClipAppStoreReviewDetail: "appClipAppStoreReviewDetail";
    readonly AppClipDefaultExperienceLocalizations: "appClipDefaultExperienceLocalizations";
    readonly ReleaseWithAppStoreVersion: "releaseWithAppStoreVersion";
};
export type AppClipsAppClipDefaultExperiencesGetToManyRelatedIncludeEnum = (typeof AppClipsAppClipDefaultExperiencesGetToManyRelatedIncludeEnum)[keyof typeof AppClipsAppClipDefaultExperiencesGetToManyRelatedIncludeEnum];
/**
 * @export
 */
export declare const AppClipsGetInstanceFieldsAppClipsEnum: {
    readonly App: "app";
    readonly AppClipAdvancedExperiences: "appClipAdvancedExperiences";
    readonly AppClipDefaultExperiences: "appClipDefaultExperiences";
    readonly BundleId: "bundleId";
};
export type AppClipsGetInstanceFieldsAppClipsEnum = (typeof AppClipsGetInstanceFieldsAppClipsEnum)[keyof typeof AppClipsGetInstanceFieldsAppClipsEnum];
/**
 * @export
 */
export declare const AppClipsGetInstanceIncludeEnum: {
    readonly App: "app";
    readonly AppClipDefaultExperiences: "appClipDefaultExperiences";
};
export type AppClipsGetInstanceIncludeEnum = (typeof AppClipsGetInstanceIncludeEnum)[keyof typeof AppClipsGetInstanceIncludeEnum];
/**
 * @export
 */
export declare const AppClipsGetInstanceFieldsAppClipAdvancedExperiencesEnum: {
    readonly Action: "action";
    readonly AppClip: "appClip";
    readonly BusinessCategory: "businessCategory";
    readonly DefaultLanguage: "defaultLanguage";
    readonly HeaderImage: "headerImage";
    readonly IsPoweredBy: "isPoweredBy";
    readonly Link: "link";
    readonly Localizations: "localizations";
    readonly Place: "place";
    readonly PlaceStatus: "placeStatus";
    readonly Removed: "removed";
    readonly Status: "status";
    readonly Version: "version";
};
export type AppClipsGetInstanceFieldsAppClipAdvancedExperiencesEnum = (typeof AppClipsGetInstanceFieldsAppClipAdvancedExperiencesEnum)[keyof typeof AppClipsGetInstanceFieldsAppClipAdvancedExperiencesEnum];
/**
 * @export
 */
export declare const AppClipsGetInstanceFieldsAppClipDefaultExperiencesEnum: {
    readonly Action: "action";
    readonly AppClip: "appClip";
    readonly AppClipAppStoreReviewDetail: "appClipAppStoreReviewDetail";
    readonly AppClipDefaultExperienceLocalizations: "appClipDefaultExperienceLocalizations";
    readonly AppClipDefaultExperienceTemplate: "appClipDefaultExperienceTemplate";
    readonly ReleaseWithAppStoreVersion: "releaseWithAppStoreVersion";
};
export type AppClipsGetInstanceFieldsAppClipDefaultExperiencesEnum = (typeof AppClipsGetInstanceFieldsAppClipDefaultExperiencesEnum)[keyof typeof AppClipsGetInstanceFieldsAppClipDefaultExperiencesEnum];
