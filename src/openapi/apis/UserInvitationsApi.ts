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
import type { AppsWithoutIncludesResponse, ErrorResponse, UserInvitationCreateRequest, UserInvitationResponse, UserInvitationsResponse } from "../models";
import { AppsWithoutIncludesResponseFromJSON, AppsWithoutIncludesResponseToJSON, ErrorResponseFromJSON, ErrorResponseToJSON, UserInvitationCreateRequestFromJSON, UserInvitationCreateRequestToJSON, UserInvitationResponseFromJSON, UserInvitationResponseToJSON, UserInvitationsResponseFromJSON, UserInvitationsResponseToJSON } from "../models";

export interface UserInvitationsCreateInstanceRequest {
    userInvitationCreateRequest: UserInvitationCreateRequest;
}

export interface UserInvitationsDeleteInstanceRequest {
    id: string;
}

export interface UserInvitationsGetCollectionRequest {
    filterEmail?: Array<string>;
    filterRoles?: Array<UserInvitationsGetCollectionFilterRolesEnum>;
    filterVisibleApps?: Array<string>;
    sort?: Array<UserInvitationsGetCollectionSortEnum>;
    fieldsUserInvitations?: Array<UserInvitationsGetCollectionFieldsUserInvitationsEnum>;
    limit?: number;
    include?: Array<UserInvitationsGetCollectionIncludeEnum>;
    fieldsApps?: Array<UserInvitationsGetCollectionFieldsAppsEnum>;
    limitVisibleApps?: number;
}

export interface UserInvitationsGetInstanceRequest {
    id: string;
    fieldsUserInvitations?: Array<UserInvitationsGetInstanceFieldsUserInvitationsEnum>;
    include?: Array<UserInvitationsGetInstanceIncludeEnum>;
    fieldsApps?: Array<UserInvitationsGetInstanceFieldsAppsEnum>;
    limitVisibleApps?: number;
}

export interface UserInvitationsVisibleAppsGetToManyRelatedRequest {
    id: string;
    fieldsApps?: Array<UserInvitationsVisibleAppsGetToManyRelatedFieldsAppsEnum>;
    limit?: number;
}

/**
 *
 */
export class UserInvitationsApi extends runtime.BaseAPI {
    /**
     */
    async userInvitationsCreateInstanceRaw(requestParameters: UserInvitationsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserInvitationResponse>> {
        if (requestParameters.userInvitationCreateRequest === null || requestParameters.userInvitationCreateRequest === undefined) {
            throw new runtime.RequiredError("userInvitationCreateRequest", "Required parameter requestParameters.userInvitationCreateRequest was null or undefined when calling userInvitationsCreateInstance.");
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
                path: `/v1/userInvitations`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: UserInvitationCreateRequestToJSON(requestParameters.userInvitationCreateRequest)
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => UserInvitationResponseFromJSON(jsonValue));
    }

    /**
     */
    async userInvitationsCreateInstance(requestParameters: UserInvitationsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserInvitationResponse> {
        const response = await this.userInvitationsCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async userInvitationsDeleteInstanceRaw(requestParameters: UserInvitationsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling userInvitationsDeleteInstance.");
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
                path: `/v1/userInvitations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
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
    async userInvitationsDeleteInstance(requestParameters: UserInvitationsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.userInvitationsDeleteInstanceRaw(requestParameters, initOverrides);
    }

    /**
     */
    async userInvitationsGetCollectionRaw(requestParameters: UserInvitationsGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserInvitationsResponse>> {
        const queryParameters: any = {};

        if (requestParameters.filterEmail) {
            queryParameters["filter[email]"] = requestParameters.filterEmail.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.filterRoles) {
            queryParameters["filter[roles]"] = requestParameters.filterRoles.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.filterVisibleApps) {
            queryParameters["filter[visibleApps]"] = requestParameters.filterVisibleApps.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.sort) {
            queryParameters["sort"] = requestParameters.sort.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsUserInvitations) {
            queryParameters["fields[userInvitations]"] = requestParameters.fieldsUserInvitations.join(runtime.COLLECTION_FORMATS["csv"]);
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

        if (requestParameters.limitVisibleApps !== undefined) {
            queryParameters["limit[visibleApps]"] = requestParameters.limitVisibleApps;
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
                path: `/v1/userInvitations`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => UserInvitationsResponseFromJSON(jsonValue));
    }

    /**
     */
    async userInvitationsGetCollection(requestParameters: UserInvitationsGetCollectionRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserInvitationsResponse> {
        const response = await this.userInvitationsGetCollectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async userInvitationsGetInstanceRaw(requestParameters: UserInvitationsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserInvitationResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling userInvitationsGetInstance.");
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsUserInvitations) {
            queryParameters["fields[userInvitations]"] = requestParameters.fieldsUserInvitations.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.include) {
            queryParameters["include"] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsApps) {
            queryParameters["fields[apps]"] = requestParameters.fieldsApps.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limitVisibleApps !== undefined) {
            queryParameters["limit[visibleApps]"] = requestParameters.limitVisibleApps;
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
                path: `/v1/userInvitations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => UserInvitationResponseFromJSON(jsonValue));
    }

    /**
     */
    async userInvitationsGetInstance(requestParameters: UserInvitationsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserInvitationResponse> {
        const response = await this.userInvitationsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async userInvitationsVisibleAppsGetToManyRelatedRaw(requestParameters: UserInvitationsVisibleAppsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppsWithoutIncludesResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling userInvitationsVisibleAppsGetToManyRelated.");
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsApps) {
            queryParameters["fields[apps]"] = requestParameters.fieldsApps.join(runtime.COLLECTION_FORMATS["csv"]);
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
                path: `/v1/userInvitations/{id}/visibleApps`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => AppsWithoutIncludesResponseFromJSON(jsonValue));
    }

    /**
     */
    async userInvitationsVisibleAppsGetToManyRelated(requestParameters: UserInvitationsVisibleAppsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppsWithoutIncludesResponse> {
        const response = await this.userInvitationsVisibleAppsGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }
}

/**
 * @export
 */
export const UserInvitationsGetCollectionFilterRolesEnum = {
    Admin: "ADMIN",
    Finance: "FINANCE",
    AccountHolder: "ACCOUNT_HOLDER",
    Sales: "SALES",
    Marketing: "MARKETING",
    AppManager: "APP_MANAGER",
    Developer: "DEVELOPER",
    AccessToReports: "ACCESS_TO_REPORTS",
    CustomerSupport: "CUSTOMER_SUPPORT",
    CreateApps: "CREATE_APPS",
    CloudManagedDeveloperId: "CLOUD_MANAGED_DEVELOPER_ID",
    CloudManagedAppDistribution: "CLOUD_MANAGED_APP_DISTRIBUTION",
    GenerateIndividualKeys: "GENERATE_INDIVIDUAL_KEYS"
} as const;
export type UserInvitationsGetCollectionFilterRolesEnum = (typeof UserInvitationsGetCollectionFilterRolesEnum)[keyof typeof UserInvitationsGetCollectionFilterRolesEnum];
/**
 * @export
 */
export const UserInvitationsGetCollectionSortEnum = {
    Email: "email",
    Email: "-email",
    LastName: "lastName",
    LastName: "-lastName"
} as const;
export type UserInvitationsGetCollectionSortEnum = (typeof UserInvitationsGetCollectionSortEnum)[keyof typeof UserInvitationsGetCollectionSortEnum];
/**
 * @export
 */
export const UserInvitationsGetCollectionFieldsUserInvitationsEnum = {
    AllAppsVisible: "allAppsVisible",
    Email: "email",
    ExpirationDate: "expirationDate",
    FirstName: "firstName",
    LastName: "lastName",
    ProvisioningAllowed: "provisioningAllowed",
    Roles: "roles",
    VisibleApps: "visibleApps"
} as const;
export type UserInvitationsGetCollectionFieldsUserInvitationsEnum = (typeof UserInvitationsGetCollectionFieldsUserInvitationsEnum)[keyof typeof UserInvitationsGetCollectionFieldsUserInvitationsEnum];
/**
 * @export
 */
export const UserInvitationsGetCollectionIncludeEnum = {
    VisibleApps: "visibleApps"
} as const;
export type UserInvitationsGetCollectionIncludeEnum = (typeof UserInvitationsGetCollectionIncludeEnum)[keyof typeof UserInvitationsGetCollectionIncludeEnum];
/**
 * @export
 */
export const UserInvitationsGetCollectionFieldsAppsEnum = {
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
export type UserInvitationsGetCollectionFieldsAppsEnum = (typeof UserInvitationsGetCollectionFieldsAppsEnum)[keyof typeof UserInvitationsGetCollectionFieldsAppsEnum];
/**
 * @export
 */
export const UserInvitationsGetInstanceFieldsUserInvitationsEnum = {
    AllAppsVisible: "allAppsVisible",
    Email: "email",
    ExpirationDate: "expirationDate",
    FirstName: "firstName",
    LastName: "lastName",
    ProvisioningAllowed: "provisioningAllowed",
    Roles: "roles",
    VisibleApps: "visibleApps"
} as const;
export type UserInvitationsGetInstanceFieldsUserInvitationsEnum = (typeof UserInvitationsGetInstanceFieldsUserInvitationsEnum)[keyof typeof UserInvitationsGetInstanceFieldsUserInvitationsEnum];
/**
 * @export
 */
export const UserInvitationsGetInstanceIncludeEnum = {
    VisibleApps: "visibleApps"
} as const;
export type UserInvitationsGetInstanceIncludeEnum = (typeof UserInvitationsGetInstanceIncludeEnum)[keyof typeof UserInvitationsGetInstanceIncludeEnum];
/**
 * @export
 */
export const UserInvitationsGetInstanceFieldsAppsEnum = {
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
export type UserInvitationsGetInstanceFieldsAppsEnum = (typeof UserInvitationsGetInstanceFieldsAppsEnum)[keyof typeof UserInvitationsGetInstanceFieldsAppsEnum];
/**
 * @export
 */
export const UserInvitationsVisibleAppsGetToManyRelatedFieldsAppsEnum = {
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
export type UserInvitationsVisibleAppsGetToManyRelatedFieldsAppsEnum = (typeof UserInvitationsVisibleAppsGetToManyRelatedFieldsAppsEnum)[keyof typeof UserInvitationsVisibleAppsGetToManyRelatedFieldsAppsEnum];
