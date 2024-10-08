"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionGroupsSubscriptionsGetToManyRelatedIncludeEnum = exports.SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionLocalizationsEnum = exports.SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionPricesEnum = exports.SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionIntroductoryOffersEnum = exports.SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionGroupsEnum = exports.SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionAvailabilitiesEnum = exports.SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionsEnum = exports.SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionAppStoreReviewScreenshotsEnum = exports.SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionOfferCodesEnum = exports.SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionPromotionalOffersEnum = exports.SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsPromotedPurchasesEnum = exports.SubscriptionGroupsSubscriptionsGetToManyRelatedSortEnum = exports.SubscriptionGroupsSubscriptionsGetToManyRelatedFilterStateEnum = exports.SubscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelatedIncludeEnum = exports.SubscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelatedFieldsSubscriptionGroupLocalizationsEnum = exports.SubscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelatedFieldsSubscriptionGroupsEnum = exports.SubscriptionGroupsGetInstanceFieldsSubscriptionGroupLocalizationsEnum = exports.SubscriptionGroupsGetInstanceFieldsSubscriptionsEnum = exports.SubscriptionGroupsGetInstanceIncludeEnum = exports.SubscriptionGroupsGetInstanceFieldsSubscriptionGroupsEnum = exports.SubscriptionGroupsApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class SubscriptionGroupsApi extends runtime.BaseAPI {
    /**
     */
    subscriptionGroupsCreateInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.subscriptionGroupCreateRequest === null || requestParameters.subscriptionGroupCreateRequest === undefined) {
                throw new runtime.RequiredError("subscriptionGroupCreateRequest", "Required parameter requestParameters.subscriptionGroupCreateRequest was null or undefined when calling subscriptionGroupsCreateInstance.");
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters["Content-Type"] = "application/json";
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("itc-bearer-token", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/v1/subscriptionGroups`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.SubscriptionGroupCreateRequestToJSON)(requestParameters.subscriptionGroupCreateRequest)
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.SubscriptionGroupResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    subscriptionGroupsCreateInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.subscriptionGroupsCreateInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    subscriptionGroupsDeleteInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling subscriptionGroupsDeleteInstance.");
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("itc-bearer-token", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/v1/subscriptionGroups/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "DELETE",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     */
    subscriptionGroupsDeleteInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.subscriptionGroupsDeleteInstanceRaw(requestParameters, initOverrides);
        });
    }
    /**
     */
    subscriptionGroupsGetInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling subscriptionGroupsGetInstance.");
            }
            const queryParameters = {};
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
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("itc-bearer-token", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/v1/subscriptionGroups/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.SubscriptionGroupResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    subscriptionGroupsGetInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.subscriptionGroupsGetInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    subscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelatedRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling subscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelated.");
            }
            const queryParameters = {};
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
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("itc-bearer-token", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/v1/subscriptionGroups/{id}/subscriptionGroupLocalizations`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.SubscriptionGroupLocalizationsResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    subscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelated(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.subscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelatedRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    subscriptionGroupsSubscriptionsGetToManyRelatedRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling subscriptionGroupsSubscriptionsGetToManyRelated.");
            }
            const queryParameters = {};
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
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("itc-bearer-token", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/v1/subscriptionGroups/{id}/subscriptions`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.SubscriptionsResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    subscriptionGroupsSubscriptionsGetToManyRelated(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.subscriptionGroupsSubscriptionsGetToManyRelatedRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    subscriptionGroupsUpdateInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling subscriptionGroupsUpdateInstance.");
            }
            if (requestParameters.subscriptionGroupUpdateRequest === null || requestParameters.subscriptionGroupUpdateRequest === undefined) {
                throw new runtime.RequiredError("subscriptionGroupUpdateRequest", "Required parameter requestParameters.subscriptionGroupUpdateRequest was null or undefined when calling subscriptionGroupsUpdateInstance.");
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters["Content-Type"] = "application/json";
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("itc-bearer-token", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/v1/subscriptionGroups/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "PATCH",
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.SubscriptionGroupUpdateRequestToJSON)(requestParameters.subscriptionGroupUpdateRequest)
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.SubscriptionGroupResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    subscriptionGroupsUpdateInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.subscriptionGroupsUpdateInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.SubscriptionGroupsApi = SubscriptionGroupsApi;
/**
 * @export
 */
exports.SubscriptionGroupsGetInstanceFieldsSubscriptionGroupsEnum = {
    App: "app",
    ReferenceName: "referenceName",
    SubscriptionGroupLocalizations: "subscriptionGroupLocalizations",
    Subscriptions: "subscriptions"
};
/**
 * @export
 */
exports.SubscriptionGroupsGetInstanceIncludeEnum = {
    SubscriptionGroupLocalizations: "subscriptionGroupLocalizations",
    Subscriptions: "subscriptions"
};
/**
 * @export
 */
exports.SubscriptionGroupsGetInstanceFieldsSubscriptionsEnum = {
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
};
/**
 * @export
 */
exports.SubscriptionGroupsGetInstanceFieldsSubscriptionGroupLocalizationsEnum = {
    CustomAppName: "customAppName",
    Locale: "locale",
    Name: "name",
    State: "state",
    SubscriptionGroup: "subscriptionGroup"
};
/**
 * @export
 */
exports.SubscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelatedFieldsSubscriptionGroupsEnum = {
    App: "app",
    ReferenceName: "referenceName",
    SubscriptionGroupLocalizations: "subscriptionGroupLocalizations",
    Subscriptions: "subscriptions"
};
/**
 * @export
 */
exports.SubscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelatedFieldsSubscriptionGroupLocalizationsEnum = {
    CustomAppName: "customAppName",
    Locale: "locale",
    Name: "name",
    State: "state",
    SubscriptionGroup: "subscriptionGroup"
};
/**
 * @export
 */
exports.SubscriptionGroupsSubscriptionGroupLocalizationsGetToManyRelatedIncludeEnum = {
    SubscriptionGroup: "subscriptionGroup"
};
/**
 * @export
 */
exports.SubscriptionGroupsSubscriptionsGetToManyRelatedFilterStateEnum = {
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
};
/**
 * @export
 */
exports.SubscriptionGroupsSubscriptionsGetToManyRelatedSortEnum = {
    Name: "name",
    Name: "-name"
};
/**
 * @export
 */
exports.SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsPromotedPurchasesEnum = {
    App: "app",
    Enabled: "enabled",
    InAppPurchaseV2: "inAppPurchaseV2",
    PromotionImages: "promotionImages",
    State: "state",
    Subscription: "subscription",
    VisibleForAllUsers: "visibleForAllUsers"
};
/**
 * @export
 */
exports.SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionPromotionalOffersEnum = {
    Duration: "duration",
    Name: "name",
    NumberOfPeriods: "numberOfPeriods",
    OfferCode: "offerCode",
    OfferMode: "offerMode",
    Prices: "prices",
    Subscription: "subscription"
};
/**
 * @export
 */
exports.SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionOfferCodesEnum = {
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
};
/**
 * @export
 */
exports.SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionAppStoreReviewScreenshotsEnum = {
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
};
/**
 * @export
 */
exports.SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionsEnum = {
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
};
/**
 * @export
 */
exports.SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionAvailabilitiesEnum = {
    AvailableInNewTerritories: "availableInNewTerritories",
    AvailableTerritories: "availableTerritories",
    Subscription: "subscription"
};
/**
 * @export
 */
exports.SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionGroupsEnum = {
    App: "app",
    ReferenceName: "referenceName",
    SubscriptionGroupLocalizations: "subscriptionGroupLocalizations",
    Subscriptions: "subscriptions"
};
/**
 * @export
 */
exports.SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionIntroductoryOffersEnum = {
    Duration: "duration",
    EndDate: "endDate",
    NumberOfPeriods: "numberOfPeriods",
    OfferMode: "offerMode",
    StartDate: "startDate",
    Subscription: "subscription",
    SubscriptionPricePoint: "subscriptionPricePoint",
    Territory: "territory"
};
/**
 * @export
 */
exports.SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionPricesEnum = {
    PreserveCurrentPrice: "preserveCurrentPrice",
    Preserved: "preserved",
    StartDate: "startDate",
    Subscription: "subscription",
    SubscriptionPricePoint: "subscriptionPricePoint",
    Territory: "territory"
};
/**
 * @export
 */
exports.SubscriptionGroupsSubscriptionsGetToManyRelatedFieldsSubscriptionLocalizationsEnum = {
    Description: "description",
    Locale: "locale",
    Name: "name",
    State: "state",
    Subscription: "subscription"
};
/**
 * @export
 */
exports.SubscriptionGroupsSubscriptionsGetToManyRelatedIncludeEnum = {
    AppStoreReviewScreenshot: "appStoreReviewScreenshot",
    Group: "group",
    IntroductoryOffers: "introductoryOffers",
    OfferCodes: "offerCodes",
    Prices: "prices",
    PromotedPurchase: "promotedPurchase",
    PromotionalOffers: "promotionalOffers",
    SubscriptionAvailability: "subscriptionAvailability",
    SubscriptionLocalizations: "subscriptionLocalizations"
};
