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
import type { ErrorResponse, SubscriptionGroupCreateRequest, SubscriptionGroupLocalizationsResponse, SubscriptionGroupResponse, SubscriptionGroupUpdateRequest, SubscriptionsResponse } from "../models";
import { ErrorResponseFromJSON, ErrorResponseToJSON, SubscriptionGroupCreateRequestFromJSON, SubscriptionGroupCreateRequestToJSON, SubscriptionGroupLocalizationsResponseFromJSON, SubscriptionGroupLocalizationsResponseToJSON, SubscriptionGroupResponseFromJSON, SubscriptionGroupResponseToJSON, SubscriptionGroupUpdateRequestFromJSON, SubscriptionGroupUpdateRequestToJSON, SubscriptionsResponseFromJSON, SubscriptionsResponseToJSON } from "../models";

export interface SubscriptionGroupsCreateInstanceRequest {
    subscriptionGroupCreateRequest: SubscriptionGroupCreateRequest;
}

export interface SubscriptionGroupsDeleteInstanceRequest {
    id: string;
}

export interface SubscriptionGroupsGetInstanceRequest {
    id: string;
    fieldsSubscriptionGroups?: Array<SubscriptionGroupsGetInstanceFieldsSubscriptionGroupsEnum>;
    include?: Array<SubscriptionGroupsGetInstanceIncludeEnum>;
    fieldsSubscriptions?: Array<SubscriptionGroupsGetInstanceFieldsSubscriptionsEnum>;
    fieldsSubscriptionGroupLocalizations?: Array<SubscriptionGroupsGetInstanceFieldsSubscriptionGroupLocalizationsEnum>;
    limitSubscriptionGroupLocalizations?: number;
    limitSubscriptions?: number;
}

export interface SubscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelatedRequest {
    id: string;
    fieldsSubscriptionGroups?: Array<SubscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelatedFieldsSubscriptionGroupsEnum>;
    fieldsSubscriptionGroupLocalizations?: Array<SubscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelatedFieldsSubscriptionGroupLocalizationsEnum>;
    limit?: number;
    include?: Array<SubscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelatedIncludeEnum>;
}

export interface SubscriptionGroupsSubscriptionsGetToManyRelatedRequest {
    id: string;
    filterName?: Array<string>;
    filterProductId?: Array<string>;
    filterState?: Array<SubscriptionGroupsSubscriptionsGetToManyRelatedFilterStateEnum>;
    sort?: Array<SubscriptionGroupsSubscriptionsGetToManyRelatedSortEnum>;
    fieldsPromotedPurchases?: Array<SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsPromotedPurchasesEnum>;
    fieldsSubscriptionPromotionalOffers?: Array<SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionPromotionalOffersEnum>;
    fieldsSubscriptionOfferCodes?: Array<SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionOfferCodesEnum>;
    fieldsSubscriptionAppStoreReviewScreenshots?: Array<SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionAppStoreReviewScreenshotsEnum>;
    fieldsSubscriptions?: Array<SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionsEnum>;
    fieldsSubscriptionAvailabilities?: Array<SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionAvailabilitiesEnum>;
    fieldsSubscriptionGroups?: Array<SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionGroupsEnum>;
    fieldsSubscriptionIntroductoryOffers?: Array<SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionIntroductoryOffersEnum>;
    fieldsSubscriptionPrices?: Array<SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionPricesEnum>;
    fieldsSubscriptionLocalizations?: Array<SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionLocalizationsEnum>;
    limit?: number;
    limitSubscriptionLocalizations?: number;
    limitIntroductoryOffers?: number;
    limitPromotionalOffers?: number;
    limitOfferCodes?: number;
    limitPrices?: number;
    include?: Array<SubscriptionGroupsSubscriptionsGetToManyRelatedIncludeEnum>;
}

export interface SubscriptionGroupsUpdateInstanceRequest {
    id: string;
    subscriptionGroupUpdateRequest: SubscriptionGroupUpdateRequest;
}

/**
 *
 */
export class SubscriptionGroupsApi extends runtime.BaseAPI {
    /**
     */
    async subscriptionGroupsCreateInstanceRaw(requestParameters: SubscriptionGroupsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionGroupResponse>> {
        if (requestParameters.subscriptionGroupCreateRequest === null || requestParameters.subscriptionGroupCreateRequest === undefined) {
            throw new runtime.RequiredError("subscriptionGroupCreateRequest", "Required parameter requestParameters.subscriptionGroupCreateRequest was null or undefined when calling subscriptionGroupsCreateInstance.");
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
                path: `/v1/subscriptionGroups`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: SubscriptionGroupCreateRequestToJSON(requestParameters.subscriptionGroupCreateRequest)
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionGroupResponseFromJSON(jsonValue));
    }

    /**
     */
    async subscriptionGroupsCreateInstance(requestParameters: SubscriptionGroupsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionGroupResponse> {
        const response = await this.subscriptionGroupsCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async subscriptionGroupsDeleteInstanceRaw(requestParameters: SubscriptionGroupsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling subscriptionGroupsDeleteInstance.");
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
                path: `/v1/subscriptionGroups/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
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
    async subscriptionGroupsDeleteInstance(requestParameters: SubscriptionGroupsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.subscriptionGroupsDeleteInstanceRaw(requestParameters, initOverrides);
    }

    /**
     */
    async subscriptionGroupsGetInstanceRaw(requestParameters: SubscriptionGroupsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionGroupResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling subscriptionGroupsGetInstance.");
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsSubscriptionGroups) {
            queryParameters["fields[subscriptionGroups]"] = requestParameters.fieldsSubscriptionGroups.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.include) {
            queryParameters["include"] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsSubscriptions) {
            queryParameters["fields[subscriptions]"] = requestParameters.fieldsSubscriptions.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsSubscriptionGroupLocalizations) {
            queryParameters["fields[subscriptionGroupLocalizations]"] = requestParameters.fieldsSubscriptionGroupLocalizations.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limitSubscriptionGroupLocalizations !== undefined) {
            queryParameters["limit[subscriptionGroupLocalizations]"] = requestParameters.limitSubscriptionGroupLocalizations;
        }

        if (requestParameters.limitSubscriptions !== undefined) {
            queryParameters["limit[subscriptions]"] = requestParameters.limitSubscriptions;
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
                path: `/v1/subscriptionGroups/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionGroupResponseFromJSON(jsonValue));
    }

    /**
     */
    async subscriptionGroupsGetInstance(requestParameters: SubscriptionGroupsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionGroupResponse> {
        const response = await this.subscriptionGroupsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async subscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelatedRaw(requestParameters: SubscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionGroupLocalizationsResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling subscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelated.");
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsSubscriptionGroups) {
            queryParameters["fields[subscriptionGroups]"] = requestParameters.fieldsSubscriptionGroups.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsSubscriptionGroupLocalizations) {
            queryParameters["fields[subscriptionGroupLocalizations]"] = requestParameters.fieldsSubscriptionGroupLocalizations.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limit !== undefined) {
            queryParameters["limit"] = requestParameters.limit;
        }

        if (requestParameters.include) {
            queryParameters["include"] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
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
                path: `/v1/subscriptionGroups/{id}/subscriptionGroupLocalizations`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionGroupLocalizationsResponseFromJSON(jsonValue));
    }

    /**
     */
    async subscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelated(requestParameters: SubscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionGroupLocalizationsResponse> {
        const response = await this.subscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async subscriptionGroupsSubscriptionsGetToManyRelatedRaw(requestParameters: SubscriptionGroupsSubscriptionsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionsResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling subscriptionGroupsSubscriptionsGetToManyRelated.");
        }

        const queryParameters: any = {};

        if (requestParameters.filterName) {
            queryParameters["filter[name]"] = requestParameters.filterName.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.filterProductId) {
            queryParameters["filter[productId]"] = requestParameters.filterProductId.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.filterState) {
            queryParameters["filter[state]"] = requestParameters.filterState.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.sort) {
            queryParameters["sort"] = requestParameters.sort.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsPromotedPurchases) {
            queryParameters["fields[promotedPurchases]"] = requestParameters.fieldsPromotedPurchases.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsSubscriptionPromotionalOffers) {
            queryParameters["fields[subscriptionPromotionalOffers]"] = requestParameters.fieldsSubscriptionPromotionalOffers.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsSubscriptionOfferCodes) {
            queryParameters["fields[subscriptionOfferCodes]"] = requestParameters.fieldsSubscriptionOfferCodes.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsSubscriptionAppStoreReviewScreenshots) {
            queryParameters["fields[subscriptionAppStoreReviewScreenshots]"] = requestParameters.fieldsSubscriptionAppStoreReviewScreenshots.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsSubscriptions) {
            queryParameters["fields[subscriptions]"] = requestParameters.fieldsSubscriptions.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsSubscriptionAvailabilities) {
            queryParameters["fields[subscriptionAvailabilities]"] = requestParameters.fieldsSubscriptionAvailabilities.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsSubscriptionGroups) {
            queryParameters["fields[subscriptionGroups]"] = requestParameters.fieldsSubscriptionGroups.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsSubscriptionIntroductoryOffers) {
            queryParameters["fields[subscriptionIntroductoryOffers]"] = requestParameters.fieldsSubscriptionIntroductoryOffers.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsSubscriptionPrices) {
            queryParameters["fields[subscriptionPrices]"] = requestParameters.fieldsSubscriptionPrices.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsSubscriptionLocalizations) {
            queryParameters["fields[subscriptionLocalizations]"] = requestParameters.fieldsSubscriptionLocalizations.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limit !== undefined) {
            queryParameters["limit"] = requestParameters.limit;
        }

        if (requestParameters.limitSubscriptionLocalizations !== undefined) {
            queryParameters["limit[subscriptionLocalizations]"] = requestParameters.limitSubscriptionLocalizations;
        }

        if (requestParameters.limitIntroductoryOffers !== undefined) {
            queryParameters["limit[introductoryOffers]"] = requestParameters.limitIntroductoryOffers;
        }

        if (requestParameters.limitPromotionalOffers !== undefined) {
            queryParameters["limit[promotionalOffers]"] = requestParameters.limitPromotionalOffers;
        }

        if (requestParameters.limitOfferCodes !== undefined) {
            queryParameters["limit[offerCodes]"] = requestParameters.limitOfferCodes;
        }

        if (requestParameters.limitPrices !== undefined) {
            queryParameters["limit[prices]"] = requestParameters.limitPrices;
        }

        if (requestParameters.include) {
            queryParameters["include"] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
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
                path: `/v1/subscriptionGroups/{id}/subscriptions`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionsResponseFromJSON(jsonValue));
    }

    /**
     */
    async subscriptionGroupsSubscriptionsGetToManyRelated(requestParameters: SubscriptionGroupsSubscriptionsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionsResponse> {
        const response = await this.subscriptionGroupsSubscriptionsGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async subscriptionGroupsUpdateInstanceRaw(requestParameters: SubscriptionGroupsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionGroupResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling subscriptionGroupsUpdateInstance.");
        }

        if (requestParameters.subscriptionGroupUpdateRequest === null || requestParameters.subscriptionGroupUpdateRequest === undefined) {
            throw new runtime.RequiredError("subscriptionGroupUpdateRequest", "Required parameter requestParameters.subscriptionGroupUpdateRequest was null or undefined when calling subscriptionGroupsUpdateInstance.");
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
                path: `/v1/subscriptionGroups/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "PATCH",
                headers: headerParameters,
                query: queryParameters,
                body: SubscriptionGroupUpdateRequestToJSON(requestParameters.subscriptionGroupUpdateRequest)
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionGroupResponseFromJSON(jsonValue));
    }

    /**
     */
    async subscriptionGroupsUpdateInstance(requestParameters: SubscriptionGroupsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionGroupResponse> {
        const response = await this.subscriptionGroupsUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }
}

/**
 * @export
 */
export const SubscriptionGroupsGetInstanceFieldsSubscriptionGroupsEnum = {
    App: "app",
    ReferenceName: "referenceName",
    SubscriptionGroupLocalizations: "subscriptionGroupLocalizations",
    Subscriptions: "subscriptions"
} as const;
export type SubscriptionGroupsGetInstanceFieldsSubscriptionGroupsEnum = (typeof SubscriptionGroupsGetInstanceFieldsSubscriptionGroupsEnum)[keyof typeof SubscriptionGroupsGetInstanceFieldsSubscriptionGroupsEnum];
/**
 * @export
 */
export const SubscriptionGroupsGetInstanceIncludeEnum = {
    SubscriptionGroupLocalizations: "subscriptionGroupLocalizations",
    Subscriptions: "subscriptions"
} as const;
export type SubscriptionGroupsGetInstanceIncludeEnum = (typeof SubscriptionGroupsGetInstanceIncludeEnum)[keyof typeof SubscriptionGroupsGetInstanceIncludeEnum];
/**
 * @export
 */
export const SubscriptionGroupsGetInstanceFieldsSubscriptionsEnum = {
    AppStoreReviewScreenshot: "appStoreReviewScreenshot",
    FamilySharable: "familySharable",
    Group: "group",
    GroupLevel: "groupLevel",
    IntroductoryOffers: "introductoryOffers",
    Name: "name",
    OfferCodes: "offerCodes",
    PricePoints: "pricePoints",
    Prices: "prices",
    ProductId: "productId",
    PromotedPurchase: "promotedPurchase",
    PromotionalOffers: "promotionalOffers",
    ReviewNote: "reviewNote",
    State: "state",
    SubscriptionAvailability: "subscriptionAvailability",
    SubscriptionLocalizations: "subscriptionLocalizations",
    SubscriptionPeriod: "subscriptionPeriod"
} as const;
export type SubscriptionGroupsGetInstanceFieldsSubscriptionsEnum = (typeof SubscriptionGroupsGetInstanceFieldsSubscriptionsEnum)[keyof typeof SubscriptionGroupsGetInstanceFieldsSubscriptionsEnum];
/**
 * @export
 */
export const SubscriptionGroupsGetInstanceFieldsSubscriptionGroupLocalizationsEnum = {
    CustomAppName: "customAppName",
    Locale: "locale",
    Name: "name",
    State: "state",
    SubscriptionGroup: "subscriptionGroup"
} as const;
export type SubscriptionGroupsGetInstanceFieldsSubscriptionGroupLocalizationsEnum = (typeof SubscriptionGroupsGetInstanceFieldsSubscriptionGroupLocalizationsEnum)[keyof typeof SubscriptionGroupsGetInstanceFieldsSubscriptionGroupLocalizationsEnum];
/**
 * @export
 */
export const SubscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelatedFieldsSubscriptionGroupsEnum = {
    App: "app",
    ReferenceName: "referenceName",
    SubscriptionGroupLocalizations: "subscriptionGroupLocalizations",
    Subscriptions: "subscriptions"
} as const;
export type SubscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelatedFieldsSubscriptionGroupsEnum = (typeof SubscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelatedFieldsSubscriptionGroupsEnum)[keyof typeof SubscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelatedFieldsSubscriptionGroupsEnum];
/**
 * @export
 */
export const SubscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelatedFieldsSubscriptionGroupLocalizationsEnum = {
    CustomAppName: "customAppName",
    Locale: "locale",
    Name: "name",
    State: "state",
    SubscriptionGroup: "subscriptionGroup"
} as const;
export type SubscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelatedFieldsSubscriptionGroupLocalizationsEnum = (typeof SubscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelatedFieldsSubscriptionGroupLocalizationsEnum)[keyof typeof SubscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelatedFieldsSubscriptionGroupLocalizationsEnum];
/**
 * @export
 */
export const SubscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelatedIncludeEnum = {
    SubscriptionGroup: "subscriptionGroup"
} as const;
export type SubscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelatedIncludeEnum = (typeof SubscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelatedIncludeEnum)[keyof typeof SubscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelatedIncludeEnum];
/**
 * @export
 */
export const SubscriptionGroupsSubscriptionsGetToManyRelatedFilterStateEnum = {
    MissingMetadata: "MISSING_METADATA",
    ReadyToSubmit: "READY_TO_SUBMIT",
    WaitingForReview: "WAITING_FOR_REVIEW",
    InReview: "IN_REVIEW",
    DeveloperActionNeeded: "DEVELOPER_ACTION_NEEDED",
    PendingBinaryApproval: "PENDING_BINARY_APPROVAL",
    Approved: "APPROVED",
    DeveloperRemovedFromSale: "DEVELOPER_REMOVED_FROM_SALE",
    RemovedFromSale: "REMOVED_FROM_SALE",
    Rejected: "REJECTED"
} as const;
export type SubscriptionGroupsSubscriptionsGetToManyRelatedFilterStateEnum = (typeof SubscriptionGroupsSubscriptionsGetToManyRelatedFilterStateEnum)[keyof typeof SubscriptionGroupsSubscriptionsGetToManyRelatedFilterStateEnum];
/**
 * @export
 */
export const SubscriptionGroupsSubscriptionsGetToManyRelatedSortEnum = {
    Name: "name",
    Name: "-name"
} as const;
export type SubscriptionGroupsSubscriptionsGetToManyRelatedSortEnum = (typeof SubscriptionGroupsSubscriptionsGetToManyRelatedSortEnum)[keyof typeof SubscriptionGroupsSubscriptionsGetToManyRelatedSortEnum];
/**
 * @export
 */
export const SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsPromotedPurchasesEnum = {
    App: "app",
    Enabled: "enabled",
    InAppPurchaseV2: "inAppPurchaseV2",
    PromotionImages: "promotionImages",
    State: "state",
    Subscription: "subscription",
    VisibleForAllUsers: "visibleForAllUsers"
} as const;
export type SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsPromotedPurchasesEnum = (typeof SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsPromotedPurchasesEnum)[keyof typeof SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsPromotedPurchasesEnum];
/**
 * @export
 */
export const SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionPromotionalOffersEnum = {
    Duration: "duration",
    Name: "name",
    NumberOfPeriods: "numberOfPeriods",
    OfferCode: "offerCode",
    OfferMode: "offerMode",
    Prices: "prices",
    Subscription: "subscription"
} as const;
export type SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionPromotionalOffersEnum = (typeof SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionPromotionalOffersEnum)[keyof typeof SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionPromotionalOffersEnum];
/**
 * @export
 */
export const SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionOfferCodesEnum = {
    Active: "active",
    CustomCodes: "customCodes",
    CustomerEligibilities: "customerEligibilities",
    Duration: "duration",
    Name: "name",
    NumberOfPeriods: "numberOfPeriods",
    OfferEligibility: "offerEligibility",
    OfferMode: "offerMode",
    OneTimeUseCodes: "oneTimeUseCodes",
    Prices: "prices",
    Subscription: "subscription",
    TotalNumberOfCodes: "totalNumberOfCodes"
} as const;
export type SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionOfferCodesEnum = (typeof SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionOfferCodesEnum)[keyof typeof SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionOfferCodesEnum];
/**
 * @export
 */
export const SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionAppStoreReviewScreenshotsEnum = {
    AssetDeliveryState: "assetDeliveryState",
    AssetToken: "assetToken",
    AssetType: "assetType",
    FileName: "fileName",
    FileSize: "fileSize",
    ImageAsset: "imageAsset",
    SourceFileChecksum: "sourceFileChecksum",
    Subscription: "subscription",
    UploadOperations: "uploadOperations",
    Uploaded: "uploaded"
} as const;
export type SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionAppStoreReviewScreenshotsEnum = (typeof SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionAppStoreReviewScreenshotsEnum)[keyof typeof SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionAppStoreReviewScreenshotsEnum];
/**
 * @export
 */
export const SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionsEnum = {
    AppStoreReviewScreenshot: "appStoreReviewScreenshot",
    FamilySharable: "familySharable",
    Group: "group",
    GroupLevel: "groupLevel",
    IntroductoryOffers: "introductoryOffers",
    Name: "name",
    OfferCodes: "offerCodes",
    PricePoints: "pricePoints",
    Prices: "prices",
    ProductId: "productId",
    PromotedPurchase: "promotedPurchase",
    PromotionalOffers: "promotionalOffers",
    ReviewNote: "reviewNote",
    State: "state",
    SubscriptionAvailability: "subscriptionAvailability",
    SubscriptionLocalizations: "subscriptionLocalizations",
    SubscriptionPeriod: "subscriptionPeriod"
} as const;
export type SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionsEnum = (typeof SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionsEnum)[keyof typeof SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionsEnum];
/**
 * @export
 */
export const SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionAvailabilitiesEnum = {
    AvailableInNewTerritories: "availableInNewTerritories",
    AvailableTerritories: "availableTerritories",
    Subscription: "subscription"
} as const;
export type SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionAvailabilitiesEnum = (typeof SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionAvailabilitiesEnum)[keyof typeof SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionAvailabilitiesEnum];
/**
 * @export
 */
export const SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionGroupsEnum = {
    App: "app",
    ReferenceName: "referenceName",
    SubscriptionGroupLocalizations: "subscriptionGroupLocalizations",
    Subscriptions: "subscriptions"
} as const;
export type SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionGroupsEnum = (typeof SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionGroupsEnum)[keyof typeof SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionGroupsEnum];
/**
 * @export
 */
export const SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionIntroductoryOffersEnum = {
    Duration: "duration",
    EndDate: "endDate",
    NumberOfPeriods: "numberOfPeriods",
    OfferMode: "offerMode",
    StartDate: "startDate",
    Subscription: "subscription",
    SubscriptionPricePoint: "subscriptionPricePoint",
    Territory: "territory"
} as const;
export type SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionIntroductoryOffersEnum = (typeof SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionIntroductoryOffersEnum)[keyof typeof SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionIntroductoryOffersEnum];
/**
 * @export
 */
export const SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionPricesEnum = {
    PreserveCurrentPrice: "preserveCurrentPrice",
    Preserved: "preserved",
    StartDate: "startDate",
    Subscription: "subscription",
    SubscriptionPricePoint: "subscriptionPricePoint",
    Territory: "territory"
} as const;
export type SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionPricesEnum = (typeof SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionPricesEnum)[keyof typeof SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionPricesEnum];
/**
 * @export
 */
export const SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionLocalizationsEnum = {
    Description: "description",
    Locale: "locale",
    Name: "name",
    State: "state",
    Subscription: "subscription"
} as const;
export type SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionLocalizationsEnum = (typeof SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionLocalizationsEnum)[keyof typeof SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionLocalizationsEnum];
/**
 * @export
 */
export const SubscriptionGroupsSubscriptionsGetToManyRelatedIncludeEnum = {
    AppStoreReviewScreenshot: "appStoreReviewScreenshot",
    Group: "group",
    IntroductoryOffers: "introductoryOffers",
    OfferCodes: "offerCodes",
    Prices: "prices",
    PromotedPurchase: "promotedPurchase",
    PromotionalOffers: "promotionalOffers",
    SubscriptionAvailability: "subscriptionAvailability",
    SubscriptionLocalizations: "subscriptionLocalizations"
} as const;
export type SubscriptionGroupsSubscriptionsGetToManyRelatedIncludeEnum = (typeof SubscriptionGroupsSubscriptionsGetToManyRelatedIncludeEnum)[keyof typeof SubscriptionGroupsSubscriptionsGetToManyRelatedIncludeEnum];
