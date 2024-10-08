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
import type { GameCenterEnabledVersionCompatibleVersionsLinkagesRequest, GameCenterEnabledVersionCompatibleVersionsLinkagesResponse, GameCenterEnabledVersionsResponse } from "../models";
export interface GameCenterEnabledVersionsCompatibleVersionsCreateToManyRelationshipRequest {
    id: string;
    gameCenterEnabledVersionCompatibleVersionsLinkagesRequest: GameCenterEnabledVersionCompatibleVersionsLinkagesRequest;
}
export interface GameCenterEnabledVersionsCompatibleVersionsDeleteToManyRelationshipRequest {
    id: string;
    gameCenterEnabledVersionCompatibleVersionsLinkagesRequest: GameCenterEnabledVersionCompatibleVersionsLinkagesRequest;
}
export interface GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedRequest {
    id: string;
    filterPlatform?: Array<GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedFilterPlatformEnum>;
    filterVersionString?: Array<string>;
    filterApp?: Array<string>;
    filterId?: Array<string>;
    sort?: Array<GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedSortEnum>;
    fieldsGameCenterEnabledVersions?: Array<GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedFieldsGameCenterEnabledVersionsEnum>;
    fieldsApps?: Array<GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedFieldsAppsEnum>;
    limit?: number;
    limitCompatibleVersions?: number;
    include?: Array<GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedIncludeEnum>;
}
export interface GameCenterEnabledVersionsCompatibleVersionsGetToManyRelationshipRequest {
    id: string;
    limit?: number;
}
export interface GameCenterEnabledVersionsCompatibleVersionsReplaceToManyRelationshipRequest {
    id: string;
    gameCenterEnabledVersionCompatibleVersionsLinkagesRequest: GameCenterEnabledVersionCompatibleVersionsLinkagesRequest;
}
/**
 *
 */
export declare class GameCenterEnabledVersionsApi extends runtime.BaseAPI {
    /**
     */
    gameCenterEnabledVersionsCompatibleVersionsCreateToManyRelationshipRaw(requestParameters: GameCenterEnabledVersionsCompatibleVersionsCreateToManyRelationshipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    gameCenterEnabledVersionsCompatibleVersionsCreateToManyRelationship(requestParameters: GameCenterEnabledVersionsCompatibleVersionsCreateToManyRelationshipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    gameCenterEnabledVersionsCompatibleVersionsDeleteToManyRelationshipRaw(requestParameters: GameCenterEnabledVersionsCompatibleVersionsDeleteToManyRelationshipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    gameCenterEnabledVersionsCompatibleVersionsDeleteToManyRelationship(requestParameters: GameCenterEnabledVersionsCompatibleVersionsDeleteToManyRelationshipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    gameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedRaw(requestParameters: GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterEnabledVersionsResponse>>;
    /**
     */
    gameCenterEnabledVersionsCompatibleVersionsGetToManyRelated(requestParameters: GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterEnabledVersionsResponse>;
    /**
     */
    gameCenterEnabledVersionsCompatibleVersionsGetToManyRelationshipRaw(requestParameters: GameCenterEnabledVersionsCompatibleVersionsGetToManyRelationshipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterEnabledVersionCompatibleVersionsLinkagesResponse>>;
    /**
     */
    gameCenterEnabledVersionsCompatibleVersionsGetToManyRelationship(requestParameters: GameCenterEnabledVersionsCompatibleVersionsGetToManyRelationshipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterEnabledVersionCompatibleVersionsLinkagesResponse>;
    /**
     */
    gameCenterEnabledVersionsCompatibleVersionsReplaceToManyRelationshipRaw(requestParameters: GameCenterEnabledVersionsCompatibleVersionsReplaceToManyRelationshipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    gameCenterEnabledVersionsCompatibleVersionsReplaceToManyRelationship(requestParameters: GameCenterEnabledVersionsCompatibleVersionsReplaceToManyRelationshipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
/**
 * @export
 */
export declare const GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedFilterPlatformEnum: {
    readonly Ios: "IOS";
    readonly MacOs: "MAC_OS";
    readonly TvOs: "TV_OS";
    readonly VisionOs: "VISION_OS";
};
export type GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedFilterPlatformEnum = (typeof GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedFilterPlatformEnum)[keyof typeof GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedFilterPlatformEnum];
/**
 * @export
 */
export declare const GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedSortEnum: {
    readonly VersionString: "-versionString";
};
export type GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedSortEnum = (typeof GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedSortEnum)[keyof typeof GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedSortEnum];
/**
 * @export
 */
export declare const GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedFieldsGameCenterEnabledVersionsEnum: {
    readonly App: "app";
    readonly CompatibleVersions: "compatibleVersions";
    readonly IconAsset: "iconAsset";
    readonly Platform: "platform";
    readonly VersionString: "versionString";
};
export type GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedFieldsGameCenterEnabledVersionsEnum = (typeof GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedFieldsGameCenterEnabledVersionsEnum)[keyof typeof GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedFieldsGameCenterEnabledVersionsEnum];
/**
 * @export
 */
export declare const GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedFieldsAppsEnum: {
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
export type GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedFieldsAppsEnum = (typeof GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedFieldsAppsEnum)[keyof typeof GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedFieldsAppsEnum];
/**
 * @export
 */
export declare const GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedIncludeEnum: {
    readonly App: "app";
    readonly CompatibleVersions: "compatibleVersions";
};
export type GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedIncludeEnum = (typeof GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedIncludeEnum)[keyof typeof GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedIncludeEnum];
