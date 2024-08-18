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
import type { AppWithoutIncludesResponse, BetaAppReviewDetailResponse, BetaAppReviewDetailUpdateRequest, BetaAppReviewDetailsResponse, ErrorResponse } from "../models";
import { AppWithoutIncludesResponseFromJSON, AppWithoutIncludesResponseToJSON, BetaAppReviewDetailResponseFromJSON, BetaAppReviewDetailResponseToJSON, BetaAppReviewDetailUpdateRequestFromJSON, BetaAppReviewDetailUpdateRequestToJSON, BetaAppReviewDetailsResponseFromJSON, BetaAppReviewDetailsResponseToJSON, ErrorResponseFromJSON, ErrorResponseToJSON } from "../models";

export interface BetaAppReviewDetailsAppGetToOneRelatedRequest {
    id: string;
    fieldsApps?: Array<BetaAppReviewDetailsAppGetToOneRelatedFieldsAppsEnum>;
}

export interface BetaAppReviewDetailsGetCollectionRequest {
    filterApp: Array<string>;
    fieldsBetaAppReviewDetails?: Array<BetaAppReviewDetailsGetCollectionFieldsBetaAppReviewDetailsEnum>;
    limit?: number;
    include?: Array<BetaAppReviewDetailsGetCollectionIncludeEnum>;
    fieldsApps?: Array<BetaAppReviewDetailsGetCollectionFieldsAppsEnum>;
}

export interface BetaAppReviewDetailsGetInstanceRequest {
    id: string;
    fieldsBetaAppReviewDetails?: Array<BetaAppReviewDetailsGetInstanceFieldsBetaAppReviewDetailsEnum>;
    include?: Array<BetaAppReviewDetailsGetInstanceIncludeEnum>;
    fieldsApps?: Array<BetaAppReviewDetailsGetInstanceFieldsAppsEnum>;
}

export interface BetaAppReviewDetailsUpdateInstanceRequest {
    id: string;
    betaAppReviewDetailUpdateRequest: BetaAppReviewDetailUpdateRequest;
}

/**
 *
 */
export class BetaAppReviewDetailsApi extends runtime.BaseAPI {
    /**
     */
    async betaAppReviewDetailsAppGetToOneRelatedRaw(requestParameters: BetaAppReviewDetailsAppGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppWithoutIncludesResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling betaAppReviewDetailsAppGetToOneRelated.");
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsApps) {
            queryParameters["fields[apps]"] = requestParameters.fieldsApps.join(runtime.COLLECTION_FORMATS["csv"]);
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
                path: `/v1/betaAppReviewDetails/{id}/app`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => AppWithoutIncludesResponseFromJSON(jsonValue));
    }

    /**
     */
    async betaAppReviewDetailsAppGetToOneRelated(requestParameters: BetaAppReviewDetailsAppGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppWithoutIncludesResponse> {
        const response = await this.betaAppReviewDetailsAppGetToOneRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async betaAppReviewDetailsGetCollectionRaw(requestParameters: BetaAppReviewDetailsGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BetaAppReviewDetailsResponse>> {
        if (requestParameters.filterApp === null || requestParameters.filterApp === undefined) {
            throw new runtime.RequiredError("filterApp", "Required parameter requestParameters.filterApp was null or undefined when calling betaAppReviewDetailsGetCollection.");
        }

        const queryParameters: any = {};

        if (requestParameters.filterApp) {
            queryParameters["filter[app]"] = requestParameters.filterApp.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsBetaAppReviewDetails) {
            queryParameters["fields[betaAppReviewDetails]"] = requestParameters.fieldsBetaAppReviewDetails.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limit !== undefined) {
            queryParameters["limit"] = requestParameters.limit;
        }

        if (requestParameters.include) {
            queryParameters["include"] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsApps) {
            queryParameters["fields[apps]"] = requestParameters.fieldsApps.join(runtime.COLLECTION_FORMATS["csv"]);
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
                path: `/v1/betaAppReviewDetails`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => BetaAppReviewDetailsResponseFromJSON(jsonValue));
    }

    /**
     */
    async betaAppReviewDetailsGetCollection(requestParameters: BetaAppReviewDetailsGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BetaAppReviewDetailsResponse> {
        const response = await this.betaAppReviewDetailsGetCollectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async betaAppReviewDetailsGetInstanceRaw(requestParameters: BetaAppReviewDetailsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BetaAppReviewDetailResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling betaAppReviewDetailsGetInstance.");
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsBetaAppReviewDetails) {
            queryParameters["fields[betaAppReviewDetails]"] = requestParameters.fieldsBetaAppReviewDetails.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.include) {
            queryParameters["include"] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsApps) {
            queryParameters["fields[apps]"] = requestParameters.fieldsApps.join(runtime.COLLECTION_FORMATS["csv"]);
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
                path: `/v1/betaAppReviewDetails/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => BetaAppReviewDetailResponseFromJSON(jsonValue));
    }

    /**
     */
    async betaAppReviewDetailsGetInstance(requestParameters: BetaAppReviewDetailsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BetaAppReviewDetailResponse> {
        const response = await this.betaAppReviewDetailsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async betaAppReviewDetailsUpdateInstanceRaw(requestParameters: BetaAppReviewDetailsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BetaAppReviewDetailResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling betaAppReviewDetailsUpdateInstance.");
        }

        if (requestParameters.betaAppReviewDetailUpdateRequest === null || requestParameters.betaAppReviewDetailUpdateRequest === undefined) {
            throw new runtime.RequiredError("betaAppReviewDetailUpdateRequest", "Required parameter requestParameters.betaAppReviewDetailUpdateRequest was null or undefined when calling betaAppReviewDetailsUpdateInstance.");
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
                path: `/v1/betaAppReviewDetails/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "PATCH",
                headers: headerParameters,
                query: queryParameters,
                body: BetaAppReviewDetailUpdateRequestToJSON(requestParameters.betaAppReviewDetailUpdateRequest)
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => BetaAppReviewDetailResponseFromJSON(jsonValue));
    }

    /**
     */
    async betaAppReviewDetailsUpdateInstance(requestParameters: BetaAppReviewDetailsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BetaAppReviewDetailResponse> {
        const response = await this.betaAppReviewDetailsUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }
}

/**
 * @export
 */
export const BetaAppReviewDetailsAppGetToOneRelatedFieldsAppsEnum = {
    AlternativeDistributionKey: "alternativeDistributionKey",
    AnalyticsReportRequests: "analyticsReportRequests",
    AppAvailability: "appAvailability",
    AppClips: "appClips",
    AppCustomProductPages: "appCustomProductPages",
    AppEncryptionDeclarations: "appEncryptionDeclarations",
    AppEvents: "appEvents",
    AppInfos: "appInfos",
    AppPricePoints: "appPricePoints",
    AppPriceSchedule: "appPriceSchedule",
    AppStoreVersionExperimentsV2: "appStoreVersionExperimentsV2",
    AppStoreVersions: "appStoreVersions",
    BetaAppLocalizations: "betaAppLocalizations",
    BetaAppReviewDetail: "betaAppReviewDetail",
    BetaGroups: "betaGroups",
    BetaLicenseAgreement: "betaLicenseAgreement",
    BetaTesters: "betaTesters",
    Builds: "builds",
    BundleId: "bundleId",
    CiProduct: "ciProduct",
    ContentRightsDeclaration: "contentRightsDeclaration",
    CustomerReviews: "customerReviews",
    EndUserLicenseAgreement: "endUserLicenseAgreement",
    GameCenterDetail: "gameCenterDetail",
    GameCenterEnabledVersions: "gameCenterEnabledVersions",
    InAppPurchases: "inAppPurchases",
    InAppPurchasesV2: "inAppPurchasesV2",
    IsOrEverWasMadeForKids: "isOrEverWasMadeForKids",
    MarketplaceSearchDetail: "marketplaceSearchDetail",
    Name: "name",
    PerfPowerMetrics: "perfPowerMetrics",
    PreOrder: "preOrder",
    PreReleaseVersions: "preReleaseVersions",
    PrimaryLocale: "primaryLocale",
    PromotedPurchases: "promotedPurchases",
    ReviewSubmissions: "reviewSubmissions",
    Sku: "sku",
    SubscriptionGracePeriod: "subscriptionGracePeriod",
    SubscriptionGroups: "subscriptionGroups",
    SubscriptionStatusUrl: "subscriptionStatusUrl",
    SubscriptionStatusUrlForSandbox: "subscriptionStatusUrlForSandbox",
    SubscriptionStatusUrlVersion: "subscriptionStatusUrlVersion",
    SubscriptionStatusUrlVersionForSandbox: "subscriptionStatusUrlVersionForSandbox"
} as const;
export type BetaAppReviewDetailsAppGetToOneRelatedFieldsAppsEnum = (typeof BetaAppReviewDetailsAppGetToOneRelatedFieldsAppsEnum)[keyof typeof BetaAppReviewDetailsAppGetToOneRelatedFieldsAppsEnum];
/**
 * @export
 */
export const BetaAppReviewDetailsGetCollectionFieldsBetaAppReviewDetailsEnum = {
    App: "app",
    ContactEmail: "contactEmail",
    ContactFirstName: "contactFirstName",
    ContactLastName: "contactLastName",
    ContactPhone: "contactPhone",
    DemoAccountName: "demoAccountName",
    DemoAccountPassword: "demoAccountPassword",
    DemoAccountRequired: "demoAccountRequired",
    Notes: "notes"
} as const;
export type BetaAppReviewDetailsGetCollectionFieldsBetaAppReviewDetailsEnum = (typeof BetaAppReviewDetailsGetCollectionFieldsBetaAppReviewDetailsEnum)[keyof typeof BetaAppReviewDetailsGetCollectionFieldsBetaAppReviewDetailsEnum];
/**
 * @export
 */
export const BetaAppReviewDetailsGetCollectionIncludeEnum = {
    App: "app"
} as const;
export type BetaAppReviewDetailsGetCollectionIncludeEnum = (typeof BetaAppReviewDetailsGetCollectionIncludeEnum)[keyof typeof BetaAppReviewDetailsGetCollectionIncludeEnum];
/**
 * @export
 */
export const BetaAppReviewDetailsGetCollectionFieldsAppsEnum = {
    AlternativeDistributionKey: "alternativeDistributionKey",
    AnalyticsReportRequests: "analyticsReportRequests",
    AppAvailability: "appAvailability",
    AppClips: "appClips",
    AppCustomProductPages: "appCustomProductPages",
    AppEncryptionDeclarations: "appEncryptionDeclarations",
    AppEvents: "appEvents",
    AppInfos: "appInfos",
    AppPricePoints: "appPricePoints",
    AppPriceSchedule: "appPriceSchedule",
    AppStoreVersionExperimentsV2: "appStoreVersionExperimentsV2",
    AppStoreVersions: "appStoreVersions",
    BetaAppLocalizations: "betaAppLocalizations",
    BetaAppReviewDetail: "betaAppReviewDetail",
    BetaGroups: "betaGroups",
    BetaLicenseAgreement: "betaLicenseAgreement",
    BetaTesters: "betaTesters",
    Builds: "builds",
    BundleId: "bundleId",
    CiProduct: "ciProduct",
    ContentRightsDeclaration: "contentRightsDeclaration",
    CustomerReviews: "customerReviews",
    EndUserLicenseAgreement: "endUserLicenseAgreement",
    GameCenterDetail: "gameCenterDetail",
    GameCenterEnabledVersions: "gameCenterEnabledVersions",
    InAppPurchases: "inAppPurchases",
    InAppPurchasesV2: "inAppPurchasesV2",
    IsOrEverWasMadeForKids: "isOrEverWasMadeForKids",
    MarketplaceSearchDetail: "marketplaceSearchDetail",
    Name: "name",
    PerfPowerMetrics: "perfPowerMetrics",
    PreOrder: "preOrder",
    PreReleaseVersions: "preReleaseVersions",
    PrimaryLocale: "primaryLocale",
    PromotedPurchases: "promotedPurchases",
    ReviewSubmissions: "reviewSubmissions",
    Sku: "sku",
    SubscriptionGracePeriod: "subscriptionGracePeriod",
    SubscriptionGroups: "subscriptionGroups",
    SubscriptionStatusUrl: "subscriptionStatusUrl",
    SubscriptionStatusUrlForSandbox: "subscriptionStatusUrlForSandbox",
    SubscriptionStatusUrlVersion: "subscriptionStatusUrlVersion",
    SubscriptionStatusUrlVersionForSandbox: "subscriptionStatusUrlVersionForSandbox"
} as const;
export type BetaAppReviewDetailsGetCollectionFieldsAppsEnum = (typeof BetaAppReviewDetailsGetCollectionFieldsAppsEnum)[keyof typeof BetaAppReviewDetailsGetCollectionFieldsAppsEnum];
/**
 * @export
 */
export const BetaAppReviewDetailsGetInstanceFieldsBetaAppReviewDetailsEnum = {
    App: "app",
    ContactEmail: "contactEmail",
    ContactFirstName: "contactFirstName",
    ContactLastName: "contactLastName",
    ContactPhone: "contactPhone",
    DemoAccountName: "demoAccountName",
    DemoAccountPassword: "demoAccountPassword",
    DemoAccountRequired: "demoAccountRequired",
    Notes: "notes"
} as const;
export type BetaAppReviewDetailsGetInstanceFieldsBetaAppReviewDetailsEnum = (typeof BetaAppReviewDetailsGetInstanceFieldsBetaAppReviewDetailsEnum)[keyof typeof BetaAppReviewDetailsGetInstanceFieldsBetaAppReviewDetailsEnum];
/**
 * @export
 */
export const BetaAppReviewDetailsGetInstanceIncludeEnum = {
    App: "app"
} as const;
export type BetaAppReviewDetailsGetInstanceIncludeEnum = (typeof BetaAppReviewDetailsGetInstanceIncludeEnum)[keyof typeof BetaAppReviewDetailsGetInstanceIncludeEnum];
/**
 * @export
 */
export const BetaAppReviewDetailsGetInstanceFieldsAppsEnum = {
    AlternativeDistributionKey: "alternativeDistributionKey",
    AnalyticsReportRequests: "analyticsReportRequests",
    AppAvailability: "appAvailability",
    AppClips: "appClips",
    AppCustomProductPages: "appCustomProductPages",
    AppEncryptionDeclarations: "appEncryptionDeclarations",
    AppEvents: "appEvents",
    AppInfos: "appInfos",
    AppPricePoints: "appPricePoints",
    AppPriceSchedule: "appPriceSchedule",
    AppStoreVersionExperimentsV2: "appStoreVersionExperimentsV2",
    AppStoreVersions: "appStoreVersions",
    BetaAppLocalizations: "betaAppLocalizations",
    BetaAppReviewDetail: "betaAppReviewDetail",
    BetaGroups: "betaGroups",
    BetaLicenseAgreement: "betaLicenseAgreement",
    BetaTesters: "betaTesters",
    Builds: "builds",
    BundleId: "bundleId",
    CiProduct: "ciProduct",
    ContentRightsDeclaration: "contentRightsDeclaration",
    CustomerReviews: "customerReviews",
    EndUserLicenseAgreement: "endUserLicenseAgreement",
    GameCenterDetail: "gameCenterDetail",
    GameCenterEnabledVersions: "gameCenterEnabledVersions",
    InAppPurchases: "inAppPurchases",
    InAppPurchasesV2: "inAppPurchasesV2",
    IsOrEverWasMadeForKids: "isOrEverWasMadeForKids",
    MarketplaceSearchDetail: "marketplaceSearchDetail",
    Name: "name",
    PerfPowerMetrics: "perfPowerMetrics",
    PreOrder: "preOrder",
    PreReleaseVersions: "preReleaseVersions",
    PrimaryLocale: "primaryLocale",
    PromotedPurchases: "promotedPurchases",
    ReviewSubmissions: "reviewSubmissions",
    Sku: "sku",
    SubscriptionGracePeriod: "subscriptionGracePeriod",
    SubscriptionGroups: "subscriptionGroups",
    SubscriptionStatusUrl: "subscriptionStatusUrl",
    SubscriptionStatusUrlForSandbox: "subscriptionStatusUrlForSandbox",
    SubscriptionStatusUrlVersion: "subscriptionStatusUrlVersion",
    SubscriptionStatusUrlVersionForSandbox: "subscriptionStatusUrlVersionForSandbox"
} as const;
export type BetaAppReviewDetailsGetInstanceFieldsAppsEnum = (typeof BetaAppReviewDetailsGetInstanceFieldsAppsEnum)[keyof typeof BetaAppReviewDetailsGetInstanceFieldsAppsEnum];
