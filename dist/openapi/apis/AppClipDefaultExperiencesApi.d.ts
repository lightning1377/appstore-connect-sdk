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
import type { AppClipAppStoreReviewDetailResponse, AppClipDefaultExperienceCreateRequest, AppClipDefaultExperienceLocalizationsResponse, AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageRequest, AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageResponse, AppClipDefaultExperienceResponse, AppClipDefaultExperienceUpdateRequest, AppStoreVersionResponse } from "../models";
export interface AppClipDefaultExperiencesAppClipAppStoreReviewDetailGetToOneRelatedRequest {
    id: string;
    fieldsAppClipAppStoreReviewDetails?: Array<AppClipDefaultExperiencesAppClipAppStoreReviewDetailGetToOneRelatedFieldsAppClipAppStoreReviewDetailsEnum>;
    fieldsAppClipDefaultExperiences?: Array<AppClipDefaultExperiencesAppClipAppStoreReviewDetailGetToOneRelatedFieldsAppClipDefaultExperiencesEnum>;
    include?: Array<AppClipDefaultExperiencesAppClipAppStoreReviewDetailGetToOneRelatedIncludeEnum>;
}
export interface AppClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelatedRequest {
    id: string;
    filterLocale?: Array<string>;
    fieldsAppClipDefaultExperiences?: Array<AppClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelatedFieldsAppClipDefaultExperiencesEnum>;
    fieldsAppClipDefaultExperienceLocalizations?: Array<AppClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelatedFieldsAppClipDefaultExperienceLocalizationsEnum>;
    fieldsAppClipHeaderImages?: Array<AppClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelatedFieldsAppClipHeaderImagesEnum>;
    limit?: number;
    include?: Array<AppClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelatedIncludeEnum>;
}
export interface AppClipDefaultExperiencesCreateInstanceRequest {
    appClipDefaultExperienceCreateRequest: AppClipDefaultExperienceCreateRequest;
}
export interface AppClipDefaultExperiencesDeleteInstanceRequest {
    id: string;
}
export interface AppClipDefaultExperiencesGetInstanceRequest {
    id: string;
    fieldsAppClipDefaultExperiences?: Array<AppClipDefaultExperiencesGetInstanceFieldsAppClipDefaultExperiencesEnum>;
    include?: Array<AppClipDefaultExperiencesGetInstanceIncludeEnum>;
    fieldsAppClipAppStoreReviewDetails?: Array<AppClipDefaultExperiencesGetInstanceFieldsAppClipAppStoreReviewDetailsEnum>;
    fieldsAppStoreVersions?: Array<AppClipDefaultExperiencesGetInstanceFieldsAppStoreVersionsEnum>;
    fieldsAppClipDefaultExperienceLocalizations?: Array<AppClipDefaultExperiencesGetInstanceFieldsAppClipDefaultExperienceLocalizationsEnum>;
    limitAppClipDefaultExperienceLocalizations?: number;
}
export interface AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedRequest {
    id: string;
    fieldsAgeRatingDeclarations?: Array<AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAgeRatingDeclarationsEnum>;
    fieldsAppStoreReviewDetails?: Array<AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAppStoreReviewDetailsEnum>;
    fieldsAppStoreVersionLocalizations?: Array<AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAppStoreVersionLocalizationsEnum>;
    fieldsAppStoreVersionExperiments?: Array<AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAppStoreVersionExperimentsEnum>;
    fieldsAppStoreVersionSubmissions?: Array<AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAppStoreVersionSubmissionsEnum>;
    fieldsAlternativeDistributionPackages?: Array<AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAlternativeDistributionPackagesEnum>;
    fieldsAppStoreVersions?: Array<AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAppStoreVersionsEnum>;
    fieldsApps?: Array<AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAppsEnum>;
    fieldsRoutingAppCoverages?: Array<AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsRoutingAppCoveragesEnum>;
    fieldsAppClipDefaultExperiences?: Array<AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAppClipDefaultExperiencesEnum>;
    fieldsAppStoreVersionPhasedReleases?: Array<AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAppStoreVersionPhasedReleasesEnum>;
    fieldsBuilds?: Array<AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsBuildsEnum>;
    limitAppStoreVersionLocalizations?: number;
    limitAppStoreVersionExperiments?: number;
    limitAppStoreVersionExperimentsV2?: number;
    include?: Array<AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedIncludeEnum>;
}
export interface AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelationshipRequest {
    id: string;
}
export interface AppClipDefaultExperiencesReleaseWithAppStoreVersionUpdateToOneRelationshipRequest {
    id: string;
    appClipDefaultExperienceReleaseWithAppStoreVersionLinkageRequest: AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageRequest;
}
export interface AppClipDefaultExperiencesUpdateInstanceRequest {
    id: string;
    appClipDefaultExperienceUpdateRequest: AppClipDefaultExperienceUpdateRequest;
}
/**
 *
 */
export declare class AppClipDefaultExperiencesApi extends runtime.BaseAPI {
    /**
     */
    appClipDefaultExperiencesAppClipAppStoreReviewDetailGetToOneRelatedRaw(requestParameters: AppClipDefaultExperiencesAppClipAppStoreReviewDetailGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppClipAppStoreReviewDetailResponse>>;
    /**
     */
    appClipDefaultExperiencesAppClipAppStoreReviewDetailGetToOneRelated(requestParameters: AppClipDefaultExperiencesAppClipAppStoreReviewDetailGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppClipAppStoreReviewDetailResponse>;
    /**
     */
    appClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelatedRaw(requestParameters: AppClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppClipDefaultExperienceLocalizationsResponse>>;
    /**
     */
    appClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelated(requestParameters: AppClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppClipDefaultExperienceLocalizationsResponse>;
    /**
     */
    appClipDefaultExperiencesCreateInstanceRaw(requestParameters: AppClipDefaultExperiencesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppClipDefaultExperienceResponse>>;
    /**
     */
    appClipDefaultExperiencesCreateInstance(requestParameters: AppClipDefaultExperiencesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppClipDefaultExperienceResponse>;
    /**
     */
    appClipDefaultExperiencesDeleteInstanceRaw(requestParameters: AppClipDefaultExperiencesDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    appClipDefaultExperiencesDeleteInstance(requestParameters: AppClipDefaultExperiencesDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    appClipDefaultExperiencesGetInstanceRaw(requestParameters: AppClipDefaultExperiencesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppClipDefaultExperienceResponse>>;
    /**
     */
    appClipDefaultExperiencesGetInstance(requestParameters: AppClipDefaultExperiencesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppClipDefaultExperienceResponse>;
    /**
     */
    appClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedRaw(requestParameters: AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppStoreVersionResponse>>;
    /**
     */
    appClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelated(requestParameters: AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppStoreVersionResponse>;
    /**
     */
    appClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelationshipRaw(requestParameters: AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelationshipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageResponse>>;
    /**
     */
    appClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelationship(requestParameters: AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelationshipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppClipDefaultExperienceReleaseWithAppStoreVersionLinkageResponse>;
    /**
     */
    appClipDefaultExperiencesReleaseWithAppStoreVersionUpdateToOneRelationshipRaw(requestParameters: AppClipDefaultExperiencesReleaseWithAppStoreVersionUpdateToOneRelationshipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    appClipDefaultExperiencesReleaseWithAppStoreVersionUpdateToOneRelationship(requestParameters: AppClipDefaultExperiencesReleaseWithAppStoreVersionUpdateToOneRelationshipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    appClipDefaultExperiencesUpdateInstanceRaw(requestParameters: AppClipDefaultExperiencesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppClipDefaultExperienceResponse>>;
    /**
     */
    appClipDefaultExperiencesUpdateInstance(requestParameters: AppClipDefaultExperiencesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppClipDefaultExperienceResponse>;
}
/**
 * @export
 */
export declare const AppClipDefaultExperiencesAppClipAppStoreReviewDetailGetToOneRelatedFieldsAppClipAppStoreReviewDetailsEnum: {
    readonly AppClipDefaultExperience: "appClipDefaultExperience";
    readonly InvocationUrls: "invocationUrls";
};
export type AppClipDefaultExperiencesAppClipAppStoreReviewDetailGetToOneRelatedFieldsAppClipAppStoreReviewDetailsEnum = (typeof AppClipDefaultExperiencesAppClipAppStoreReviewDetailGetToOneRelatedFieldsAppClipAppStoreReviewDetailsEnum)[keyof typeof AppClipDefaultExperiencesAppClipAppStoreReviewDetailGetToOneRelatedFieldsAppClipAppStoreReviewDetailsEnum];
/**
 * @export
 */
export declare const AppClipDefaultExperiencesAppClipAppStoreReviewDetailGetToOneRelatedFieldsAppClipDefaultExperiencesEnum: {
    readonly Action: "action";
    readonly AppClip: "appClip";
    readonly AppClipAppStoreReviewDetail: "appClipAppStoreReviewDetail";
    readonly AppClipDefaultExperienceLocalizations: "appClipDefaultExperienceLocalizations";
    readonly AppClipDefaultExperienceTemplate: "appClipDefaultExperienceTemplate";
    readonly ReleaseWithAppStoreVersion: "releaseWithAppStoreVersion";
};
export type AppClipDefaultExperiencesAppClipAppStoreReviewDetailGetToOneRelatedFieldsAppClipDefaultExperiencesEnum = (typeof AppClipDefaultExperiencesAppClipAppStoreReviewDetailGetToOneRelatedFieldsAppClipDefaultExperiencesEnum)[keyof typeof AppClipDefaultExperiencesAppClipAppStoreReviewDetailGetToOneRelatedFieldsAppClipDefaultExperiencesEnum];
/**
 * @export
 */
export declare const AppClipDefaultExperiencesAppClipAppStoreReviewDetailGetToOneRelatedIncludeEnum: {
    readonly AppClipDefaultExperience: "appClipDefaultExperience";
};
export type AppClipDefaultExperiencesAppClipAppStoreReviewDetailGetToOneRelatedIncludeEnum = (typeof AppClipDefaultExperiencesAppClipAppStoreReviewDetailGetToOneRelatedIncludeEnum)[keyof typeof AppClipDefaultExperiencesAppClipAppStoreReviewDetailGetToOneRelatedIncludeEnum];
/**
 * @export
 */
export declare const AppClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelatedFieldsAppClipDefaultExperiencesEnum: {
    readonly Action: "action";
    readonly AppClip: "appClip";
    readonly AppClipAppStoreReviewDetail: "appClipAppStoreReviewDetail";
    readonly AppClipDefaultExperienceLocalizations: "appClipDefaultExperienceLocalizations";
    readonly AppClipDefaultExperienceTemplate: "appClipDefaultExperienceTemplate";
    readonly ReleaseWithAppStoreVersion: "releaseWithAppStoreVersion";
};
export type AppClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelatedFieldsAppClipDefaultExperiencesEnum = (typeof AppClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelatedFieldsAppClipDefaultExperiencesEnum)[keyof typeof AppClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelatedFieldsAppClipDefaultExperiencesEnum];
/**
 * @export
 */
export declare const AppClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelatedFieldsAppClipDefaultExperienceLocalizationsEnum: {
    readonly AppClipDefaultExperience: "appClipDefaultExperience";
    readonly AppClipHeaderImage: "appClipHeaderImage";
    readonly Locale: "locale";
    readonly Subtitle: "subtitle";
};
export type AppClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelatedFieldsAppClipDefaultExperienceLocalizationsEnum = (typeof AppClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelatedFieldsAppClipDefaultExperienceLocalizationsEnum)[keyof typeof AppClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelatedFieldsAppClipDefaultExperienceLocalizationsEnum];
/**
 * @export
 */
export declare const AppClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelatedFieldsAppClipHeaderImagesEnum: {
    readonly AppClipDefaultExperienceLocalization: "appClipDefaultExperienceLocalization";
    readonly AssetDeliveryState: "assetDeliveryState";
    readonly FileName: "fileName";
    readonly FileSize: "fileSize";
    readonly ImageAsset: "imageAsset";
    readonly SourceFileChecksum: "sourceFileChecksum";
    readonly UploadOperations: "uploadOperations";
    readonly Uploaded: "uploaded";
};
export type AppClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelatedFieldsAppClipHeaderImagesEnum = (typeof AppClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelatedFieldsAppClipHeaderImagesEnum)[keyof typeof AppClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelatedFieldsAppClipHeaderImagesEnum];
/**
 * @export
 */
export declare const AppClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelatedIncludeEnum: {
    readonly AppClipDefaultExperience: "appClipDefaultExperience";
    readonly AppClipHeaderImage: "appClipHeaderImage";
};
export type AppClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelatedIncludeEnum = (typeof AppClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelatedIncludeEnum)[keyof typeof AppClipDefaultExperiencesAppClipDefaultExperienceLocalizationsGetToManyRelatedIncludeEnum];
/**
 * @export
 */
export declare const AppClipDefaultExperiencesGetInstanceFieldsAppClipDefaultExperiencesEnum: {
    readonly Action: "action";
    readonly AppClip: "appClip";
    readonly AppClipAppStoreReviewDetail: "appClipAppStoreReviewDetail";
    readonly AppClipDefaultExperienceLocalizations: "appClipDefaultExperienceLocalizations";
    readonly AppClipDefaultExperienceTemplate: "appClipDefaultExperienceTemplate";
    readonly ReleaseWithAppStoreVersion: "releaseWithAppStoreVersion";
};
export type AppClipDefaultExperiencesGetInstanceFieldsAppClipDefaultExperiencesEnum = (typeof AppClipDefaultExperiencesGetInstanceFieldsAppClipDefaultExperiencesEnum)[keyof typeof AppClipDefaultExperiencesGetInstanceFieldsAppClipDefaultExperiencesEnum];
/**
 * @export
 */
export declare const AppClipDefaultExperiencesGetInstanceIncludeEnum: {
    readonly AppClip: "appClip";
    readonly AppClipAppStoreReviewDetail: "appClipAppStoreReviewDetail";
    readonly AppClipDefaultExperienceLocalizations: "appClipDefaultExperienceLocalizations";
    readonly ReleaseWithAppStoreVersion: "releaseWithAppStoreVersion";
};
export type AppClipDefaultExperiencesGetInstanceIncludeEnum = (typeof AppClipDefaultExperiencesGetInstanceIncludeEnum)[keyof typeof AppClipDefaultExperiencesGetInstanceIncludeEnum];
/**
 * @export
 */
export declare const AppClipDefaultExperiencesGetInstanceFieldsAppClipAppStoreReviewDetailsEnum: {
    readonly AppClipDefaultExperience: "appClipDefaultExperience";
    readonly InvocationUrls: "invocationUrls";
};
export type AppClipDefaultExperiencesGetInstanceFieldsAppClipAppStoreReviewDetailsEnum = (typeof AppClipDefaultExperiencesGetInstanceFieldsAppClipAppStoreReviewDetailsEnum)[keyof typeof AppClipDefaultExperiencesGetInstanceFieldsAppClipAppStoreReviewDetailsEnum];
/**
 * @export
 */
export declare const AppClipDefaultExperiencesGetInstanceFieldsAppStoreVersionsEnum: {
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
export type AppClipDefaultExperiencesGetInstanceFieldsAppStoreVersionsEnum = (typeof AppClipDefaultExperiencesGetInstanceFieldsAppStoreVersionsEnum)[keyof typeof AppClipDefaultExperiencesGetInstanceFieldsAppStoreVersionsEnum];
/**
 * @export
 */
export declare const AppClipDefaultExperiencesGetInstanceFieldsAppClipDefaultExperienceLocalizationsEnum: {
    readonly AppClipDefaultExperience: "appClipDefaultExperience";
    readonly AppClipHeaderImage: "appClipHeaderImage";
    readonly Locale: "locale";
    readonly Subtitle: "subtitle";
};
export type AppClipDefaultExperiencesGetInstanceFieldsAppClipDefaultExperienceLocalizationsEnum = (typeof AppClipDefaultExperiencesGetInstanceFieldsAppClipDefaultExperienceLocalizationsEnum)[keyof typeof AppClipDefaultExperiencesGetInstanceFieldsAppClipDefaultExperienceLocalizationsEnum];
/**
 * @export
 */
export declare const AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAgeRatingDeclarationsEnum: {
    readonly AgeRatingOverride: "ageRatingOverride";
    readonly AlcoholTobaccoOrDrugUseOrReferences: "alcoholTobaccoOrDrugUseOrReferences";
    readonly Contests: "contests";
    readonly Gambling: "gambling";
    readonly GamblingAndContests: "gamblingAndContests";
    readonly GamblingSimulated: "gamblingSimulated";
    readonly HorrorOrFearThemes: "horrorOrFearThemes";
    readonly KidsAgeBand: "kidsAgeBand";
    readonly MatureOrSuggestiveThemes: "matureOrSuggestiveThemes";
    readonly MedicalOrTreatmentInformation: "medicalOrTreatmentInformation";
    readonly ProfanityOrCrudeHumor: "profanityOrCrudeHumor";
    readonly SeventeenPlus: "seventeenPlus";
    readonly SexualContentGraphicAndNudity: "sexualContentGraphicAndNudity";
    readonly SexualContentOrNudity: "sexualContentOrNudity";
    readonly UnrestrictedWebAccess: "unrestrictedWebAccess";
    readonly ViolenceCartoonOrFantasy: "violenceCartoonOrFantasy";
    readonly ViolenceRealistic: "violenceRealistic";
    readonly ViolenceRealisticProlongedGraphicOrSadistic: "violenceRealisticProlongedGraphicOrSadistic";
};
export type AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAgeRatingDeclarationsEnum = (typeof AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAgeRatingDeclarationsEnum)[keyof typeof AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAgeRatingDeclarationsEnum];
/**
 * @export
 */
export declare const AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAppStoreReviewDetailsEnum: {
    readonly AppStoreReviewAttachments: "appStoreReviewAttachments";
    readonly AppStoreVersion: "appStoreVersion";
    readonly ContactEmail: "contactEmail";
    readonly ContactFirstName: "contactFirstName";
    readonly ContactLastName: "contactLastName";
    readonly ContactPhone: "contactPhone";
    readonly DemoAccountName: "demoAccountName";
    readonly DemoAccountPassword: "demoAccountPassword";
    readonly DemoAccountRequired: "demoAccountRequired";
    readonly Notes: "notes";
};
export type AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAppStoreReviewDetailsEnum = (typeof AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAppStoreReviewDetailsEnum)[keyof typeof AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAppStoreReviewDetailsEnum];
/**
 * @export
 */
export declare const AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAppStoreVersionLocalizationsEnum: {
    readonly AppPreviewSets: "appPreviewSets";
    readonly AppScreenshotSets: "appScreenshotSets";
    readonly AppStoreVersion: "appStoreVersion";
    readonly Description: "description";
    readonly Keywords: "keywords";
    readonly Locale: "locale";
    readonly MarketingUrl: "marketingUrl";
    readonly PromotionalText: "promotionalText";
    readonly SupportUrl: "supportUrl";
    readonly WhatsNew: "whatsNew";
};
export type AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAppStoreVersionLocalizationsEnum = (typeof AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAppStoreVersionLocalizationsEnum)[keyof typeof AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAppStoreVersionLocalizationsEnum];
/**
 * @export
 */
export declare const AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAppStoreVersionExperimentsEnum: {
    readonly App: "app";
    readonly AppStoreVersion: "appStoreVersion";
    readonly AppStoreVersionExperimentTreatments: "appStoreVersionExperimentTreatments";
    readonly ControlVersions: "controlVersions";
    readonly EndDate: "endDate";
    readonly LatestControlVersion: "latestControlVersion";
    readonly Name: "name";
    readonly Platform: "platform";
    readonly ReviewRequired: "reviewRequired";
    readonly StartDate: "startDate";
    readonly Started: "started";
    readonly State: "state";
    readonly TrafficProportion: "trafficProportion";
};
export type AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAppStoreVersionExperimentsEnum = (typeof AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAppStoreVersionExperimentsEnum)[keyof typeof AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAppStoreVersionExperimentsEnum];
/**
 * @export
 */
export declare const AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAppStoreVersionSubmissionsEnum: {
    readonly AppStoreVersion: "appStoreVersion";
};
export type AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAppStoreVersionSubmissionsEnum = (typeof AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAppStoreVersionSubmissionsEnum)[keyof typeof AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAppStoreVersionSubmissionsEnum];
/**
 * @export
 */
export declare const AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAlternativeDistributionPackagesEnum: {
    readonly AppStoreVersion: "appStoreVersion";
    readonly Versions: "versions";
};
export type AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAlternativeDistributionPackagesEnum = (typeof AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAlternativeDistributionPackagesEnum)[keyof typeof AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAlternativeDistributionPackagesEnum];
/**
 * @export
 */
export declare const AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAppStoreVersionsEnum: {
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
export type AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAppStoreVersionsEnum = (typeof AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAppStoreVersionsEnum)[keyof typeof AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAppStoreVersionsEnum];
/**
 * @export
 */
export declare const AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAppsEnum: {
    readonly AlternativeDistributionKey: "alternativeDistributionKey";
    readonly AnalyticsReportRequests: "analyticsReportRequests";
    readonly AppAvailability: "appAvailability";
    readonly AppClips: "appClips";
    readonly AppCustomProductPages: "appCustomProductPages";
    readonly AppEncryptionDeclarations: "appEncryptionDeclarations";
    readonly AppEvents: "appEvents";
    readonly AppInfos: "appInfos";
    readonly AppPricePoints: "appPricePoints";
    readonly AppPriceSchedule: "appPriceSchedule";
    readonly AppStoreVersionExperimentsV2: "appStoreVersionExperimentsV2";
    readonly AppStoreVersions: "appStoreVersions";
    readonly BetaAppLocalizations: "betaAppLocalizations";
    readonly BetaAppReviewDetail: "betaAppReviewDetail";
    readonly BetaGroups: "betaGroups";
    readonly BetaLicenseAgreement: "betaLicenseAgreement";
    readonly BetaTesters: "betaTesters";
    readonly Builds: "builds";
    readonly BundleId: "bundleId";
    readonly CiProduct: "ciProduct";
    readonly ContentRightsDeclaration: "contentRightsDeclaration";
    readonly CustomerReviews: "customerReviews";
    readonly EndUserLicenseAgreement: "endUserLicenseAgreement";
    readonly GameCenterDetail: "gameCenterDetail";
    readonly GameCenterEnabledVersions: "gameCenterEnabledVersions";
    readonly InAppPurchases: "inAppPurchases";
    readonly InAppPurchasesV2: "inAppPurchasesV2";
    readonly IsOrEverWasMadeForKids: "isOrEverWasMadeForKids";
    readonly MarketplaceSearchDetail: "marketplaceSearchDetail";
    readonly Name: "name";
    readonly PerfPowerMetrics: "perfPowerMetrics";
    readonly PreOrder: "preOrder";
    readonly PreReleaseVersions: "preReleaseVersions";
    readonly PrimaryLocale: "primaryLocale";
    readonly PromotedPurchases: "promotedPurchases";
    readonly ReviewSubmissions: "reviewSubmissions";
    readonly Sku: "sku";
    readonly SubscriptionGracePeriod: "subscriptionGracePeriod";
    readonly SubscriptionGroups: "subscriptionGroups";
    readonly SubscriptionStatusUrl: "subscriptionStatusUrl";
    readonly SubscriptionStatusUrlForSandbox: "subscriptionStatusUrlForSandbox";
    readonly SubscriptionStatusUrlVersion: "subscriptionStatusUrlVersion";
    readonly SubscriptionStatusUrlVersionForSandbox: "subscriptionStatusUrlVersionForSandbox";
};
export type AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAppsEnum = (typeof AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAppsEnum)[keyof typeof AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAppsEnum];
/**
 * @export
 */
export declare const AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsRoutingAppCoveragesEnum: {
    readonly AppStoreVersion: "appStoreVersion";
    readonly AssetDeliveryState: "assetDeliveryState";
    readonly FileName: "fileName";
    readonly FileSize: "fileSize";
    readonly SourceFileChecksum: "sourceFileChecksum";
    readonly UploadOperations: "uploadOperations";
    readonly Uploaded: "uploaded";
};
export type AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsRoutingAppCoveragesEnum = (typeof AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsRoutingAppCoveragesEnum)[keyof typeof AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsRoutingAppCoveragesEnum];
/**
 * @export
 */
export declare const AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAppClipDefaultExperiencesEnum: {
    readonly Action: "action";
    readonly AppClip: "appClip";
    readonly AppClipAppStoreReviewDetail: "appClipAppStoreReviewDetail";
    readonly AppClipDefaultExperienceLocalizations: "appClipDefaultExperienceLocalizations";
    readonly AppClipDefaultExperienceTemplate: "appClipDefaultExperienceTemplate";
    readonly ReleaseWithAppStoreVersion: "releaseWithAppStoreVersion";
};
export type AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAppClipDefaultExperiencesEnum = (typeof AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAppClipDefaultExperiencesEnum)[keyof typeof AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAppClipDefaultExperiencesEnum];
/**
 * @export
 */
export declare const AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAppStoreVersionPhasedReleasesEnum: {
    readonly AppStoreVersion: "appStoreVersion";
    readonly CurrentDayNumber: "currentDayNumber";
    readonly PhasedReleaseState: "phasedReleaseState";
    readonly StartDate: "startDate";
    readonly TotalPauseDuration: "totalPauseDuration";
};
export type AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAppStoreVersionPhasedReleasesEnum = (typeof AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAppStoreVersionPhasedReleasesEnum)[keyof typeof AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsAppStoreVersionPhasedReleasesEnum];
/**
 * @export
 */
export declare const AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsBuildsEnum: {
    readonly App: "app";
    readonly AppEncryptionDeclaration: "appEncryptionDeclaration";
    readonly AppStoreVersion: "appStoreVersion";
    readonly BetaAppReviewSubmission: "betaAppReviewSubmission";
    readonly BetaBuildLocalizations: "betaBuildLocalizations";
    readonly BetaGroups: "betaGroups";
    readonly BuildAudienceType: "buildAudienceType";
    readonly BuildBetaDetail: "buildBetaDetail";
    readonly BuildBundles: "buildBundles";
    readonly ComputedMinMacOsVersion: "computedMinMacOsVersion";
    readonly DiagnosticSignatures: "diagnosticSignatures";
    readonly ExpirationDate: "expirationDate";
    readonly Expired: "expired";
    readonly IconAssetToken: "iconAssetToken";
    readonly Icons: "icons";
    readonly IndividualTesters: "individualTesters";
    readonly LsMinimumSystemVersion: "lsMinimumSystemVersion";
    readonly MinOsVersion: "minOsVersion";
    readonly PerfPowerMetrics: "perfPowerMetrics";
    readonly PreReleaseVersion: "preReleaseVersion";
    readonly ProcessingState: "processingState";
    readonly UploadedDate: "uploadedDate";
    readonly UsesNonExemptEncryption: "usesNonExemptEncryption";
    readonly Version: "version";
};
export type AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsBuildsEnum = (typeof AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsBuildsEnum)[keyof typeof AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedFieldsBuildsEnum];
/**
 * @export
 */
export declare const AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedIncludeEnum: {
    readonly AgeRatingDeclaration: "ageRatingDeclaration";
    readonly AlternativeDistributionPackage: "alternativeDistributionPackage";
    readonly App: "app";
    readonly AppClipDefaultExperience: "appClipDefaultExperience";
    readonly AppStoreReviewDetail: "appStoreReviewDetail";
    readonly AppStoreVersionExperiments: "appStoreVersionExperiments";
    readonly AppStoreVersionExperimentsV2: "appStoreVersionExperimentsV2";
    readonly AppStoreVersionLocalizations: "appStoreVersionLocalizations";
    readonly AppStoreVersionPhasedRelease: "appStoreVersionPhasedRelease";
    readonly AppStoreVersionSubmission: "appStoreVersionSubmission";
    readonly Build: "build";
    readonly RoutingAppCoverage: "routingAppCoverage";
};
export type AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedIncludeEnum = (typeof AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedIncludeEnum)[keyof typeof AppClipDefaultExperiencesReleaseWithAppStoreVersionGetToOneRelatedIncludeEnum];
