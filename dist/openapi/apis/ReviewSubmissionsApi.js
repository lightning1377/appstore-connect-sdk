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
exports.ReviewSubmissionsItemsGetToManyRelatedIncludeEnum = exports.ReviewSubmissionsItemsGetToManyRelatedFieldsAppEventsEnum = exports.ReviewSubmissionsItemsGetToManyRelatedFieldsAppCustomProductPageVersionsEnum = exports.ReviewSubmissionsItemsGetToManyRelatedFieldsAppStoreVersionsEnum = exports.ReviewSubmissionsItemsGetToManyRelatedFieldsReviewSubmissionItemsEnum = exports.ReviewSubmissionsItemsGetToManyRelatedFieldsAppStoreVersionExperimentsEnum = exports.ReviewSubmissionsGetInstanceFieldsReviewSubmissionItemsEnum = exports.ReviewSubmissionsGetInstanceIncludeEnum = exports.ReviewSubmissionsGetInstanceFieldsReviewSubmissionsEnum = exports.ReviewSubmissionsGetCollectionFieldsReviewSubmissionItemsEnum = exports.ReviewSubmissionsGetCollectionIncludeEnum = exports.ReviewSubmissionsGetCollectionFieldsReviewSubmissionsEnum = exports.ReviewSubmissionsGetCollectionFilterStateEnum = exports.ReviewSubmissionsGetCollectionFilterPlatformEnum = exports.ReviewSubmissionsApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class ReviewSubmissionsApi extends runtime.BaseAPI {
    /**
     */
    reviewSubmissionsCreateInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.reviewSubmissionCreateRequest === null || requestParameters.reviewSubmissionCreateRequest === undefined) {
                throw new runtime.RequiredError("reviewSubmissionCreateRequest", "Required parameter requestParameters.reviewSubmissionCreateRequest was null or undefined when calling reviewSubmissionsCreateInstance.");
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
                path: `/v1/reviewSubmissions`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.ReviewSubmissionCreateRequestToJSON)(requestParameters.reviewSubmissionCreateRequest)
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.ReviewSubmissionResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    reviewSubmissionsCreateInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.reviewSubmissionsCreateInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    reviewSubmissionsGetCollectionRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.filterApp === null || requestParameters.filterApp === undefined) {
                throw new runtime.RequiredError("filterApp", "Required parameter requestParameters.filterApp was null or undefined when calling reviewSubmissionsGetCollection.");
            }
            const queryParameters = {};
            if (requestParameters.filterPlatform) {
                queryParameters["filter[platform]"] = requestParameters.filterPlatform.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.filterState) {
                queryParameters["filter[state]"] = requestParameters.filterState.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.filterApp) {
                queryParameters["filter[app]"] = requestParameters.filterApp.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsReviewSubmissions) {
                queryParameters["fields[reviewSubmissions]"] = requestParameters.fieldsReviewSubmissions.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.limit !== undefined) {
                queryParameters["limit"] = requestParameters.limit;
            }
            if (requestParameters.include) {
                queryParameters["include"] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsReviewSubmissionItems) {
                queryParameters["fields[reviewSubmissionItems]"] = requestParameters.fieldsReviewSubmissionItems.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.limitItems !== undefined) {
                queryParameters["limit[items]"] = requestParameters.limitItems;
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
                path: `/v1/reviewSubmissions`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.ReviewSubmissionsResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    reviewSubmissionsGetCollection(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.reviewSubmissionsGetCollectionRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    reviewSubmissionsGetInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling reviewSubmissionsGetInstance.");
            }
            const queryParameters = {};
            if (requestParameters.fieldsReviewSubmissions) {
                queryParameters["fields[reviewSubmissions]"] = requestParameters.fieldsReviewSubmissions.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.include) {
                queryParameters["include"] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsReviewSubmissionItems) {
                queryParameters["fields[reviewSubmissionItems]"] = requestParameters.fieldsReviewSubmissionItems.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.limitItems !== undefined) {
                queryParameters["limit[items]"] = requestParameters.limitItems;
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
                path: `/v1/reviewSubmissions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.ReviewSubmissionResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    reviewSubmissionsGetInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.reviewSubmissionsGetInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    reviewSubmissionsItemsGetToManyRelatedRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling reviewSubmissionsItemsGetToManyRelated.");
            }
            const queryParameters = {};
            if (requestParameters.fieldsAppStoreVersionExperiments) {
                queryParameters["fields[appStoreVersionExperiments]"] = requestParameters.fieldsAppStoreVersionExperiments.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsReviewSubmissionItems) {
                queryParameters["fields[reviewSubmissionItems]"] = requestParameters.fieldsReviewSubmissionItems.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsAppStoreVersions) {
                queryParameters["fields[appStoreVersions]"] = requestParameters.fieldsAppStoreVersions.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsAppCustomProductPageVersions) {
                queryParameters["fields[appCustomProductPageVersions]"] = requestParameters.fieldsAppCustomProductPageVersions.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsAppEvents) {
                queryParameters["fields[appEvents]"] = requestParameters.fieldsAppEvents.join(runtime.COLLECTION_FORMATS["csv"]);
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
                path: `/v1/reviewSubmissions/{id}/items`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.ReviewSubmissionItemsResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    reviewSubmissionsItemsGetToManyRelated(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.reviewSubmissionsItemsGetToManyRelatedRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    reviewSubmissionsUpdateInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling reviewSubmissionsUpdateInstance.");
            }
            if (requestParameters.reviewSubmissionUpdateRequest === null || requestParameters.reviewSubmissionUpdateRequest === undefined) {
                throw new runtime.RequiredError("reviewSubmissionUpdateRequest", "Required parameter requestParameters.reviewSubmissionUpdateRequest was null or undefined when calling reviewSubmissionsUpdateInstance.");
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
                path: `/v1/reviewSubmissions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "PATCH",
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.ReviewSubmissionUpdateRequestToJSON)(requestParameters.reviewSubmissionUpdateRequest)
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.ReviewSubmissionResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    reviewSubmissionsUpdateInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.reviewSubmissionsUpdateInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.ReviewSubmissionsApi = ReviewSubmissionsApi;
/**
 * @export
 */
exports.ReviewSubmissionsGetCollectionFilterPlatformEnum = {
    Ios: "IOS",
    MacOs: "MAC_OS",
    TvOs: "TV_OS",
    VisionOs: "VISION_OS"
};
/**
 * @export
 */
exports.ReviewSubmissionsGetCollectionFilterStateEnum = {
    ReadyForReview: "READY_FOR_REVIEW",
    WaitingForReview: "WAITING_FOR_REVIEW",
    InReview: "IN_REVIEW",
    UnresolvedIssues: "UNRESOLVED_ISSUES",
    Canceling: "CANCELING",
    Completing: "COMPLETING",
    Complete: "COMPLETE"
};
/**
 * @export
 */
exports.ReviewSubmissionsGetCollectionFieldsReviewSubmissionsEnum = {
    App: "app",
    AppStoreVersionForReview: "appStoreVersionForReview",
    Canceled: "canceled",
    Items: "items",
    LastUpdatedByActor: "lastUpdatedByActor",
    Platform: "platform",
    State: "state",
    Submitted: "submitted",
    SubmittedByActor: "submittedByActor",
    SubmittedDate: "submittedDate"
};
/**
 * @export
 */
exports.ReviewSubmissionsGetCollectionIncludeEnum = {
    App: "app",
    AppStoreVersionForReview: "appStoreVersionForReview",
    Items: "items",
    LastUpdatedByActor: "lastUpdatedByActor",
    SubmittedByActor: "submittedByActor"
};
/**
 * @export
 */
exports.ReviewSubmissionsGetCollectionFieldsReviewSubmissionItemsEnum = {
    AppCustomProductPageVersion: "appCustomProductPageVersion",
    AppEvent: "appEvent",
    AppStoreVersion: "appStoreVersion",
    AppStoreVersionExperiment: "appStoreVersionExperiment",
    AppStoreVersionExperimentV2: "appStoreVersionExperimentV2",
    Removed: "removed",
    Resolved: "resolved",
    ReviewSubmission: "reviewSubmission",
    State: "state"
};
/**
 * @export
 */
exports.ReviewSubmissionsGetInstanceFieldsReviewSubmissionsEnum = {
    App: "app",
    AppStoreVersionForReview: "appStoreVersionForReview",
    Canceled: "canceled",
    Items: "items",
    LastUpdatedByActor: "lastUpdatedByActor",
    Platform: "platform",
    State: "state",
    Submitted: "submitted",
    SubmittedByActor: "submittedByActor",
    SubmittedDate: "submittedDate"
};
/**
 * @export
 */
exports.ReviewSubmissionsGetInstanceIncludeEnum = {
    App: "app",
    AppStoreVersionForReview: "appStoreVersionForReview",
    Items: "items",
    LastUpdatedByActor: "lastUpdatedByActor",
    SubmittedByActor: "submittedByActor"
};
/**
 * @export
 */
exports.ReviewSubmissionsGetInstanceFieldsReviewSubmissionItemsEnum = {
    AppCustomProductPageVersion: "appCustomProductPageVersion",
    AppEvent: "appEvent",
    AppStoreVersion: "appStoreVersion",
    AppStoreVersionExperiment: "appStoreVersionExperiment",
    AppStoreVersionExperimentV2: "appStoreVersionExperimentV2",
    Removed: "removed",
    Resolved: "resolved",
    ReviewSubmission: "reviewSubmission",
    State: "state"
};
/**
 * @export
 */
exports.ReviewSubmissionsItemsGetToManyRelatedFieldsAppStoreVersionExperimentsEnum = {
    App: "app",
    AppStoreVersion: "appStoreVersion",
    AppStoreVersionExperimentTreatments: "appStoreVersionExperimentTreatments",
    ControlVersions: "controlVersions",
    EndDate: "endDate",
    LatestControlVersion: "latestControlVersion",
    Name: "name",
    Platform: "platform",
    ReviewRequired: "reviewRequired",
    StartDate: "startDate",
    Started: "started",
    State: "state",
    TrafficProportion: "trafficProportion"
};
/**
 * @export
 */
exports.ReviewSubmissionsItemsGetToManyRelatedFieldsReviewSubmissionItemsEnum = {
    AppCustomProductPageVersion: "appCustomProductPageVersion",
    AppEvent: "appEvent",
    AppStoreVersion: "appStoreVersion",
    AppStoreVersionExperiment: "appStoreVersionExperiment",
    AppStoreVersionExperimentV2: "appStoreVersionExperimentV2",
    Removed: "removed",
    Resolved: "resolved",
    ReviewSubmission: "reviewSubmission",
    State: "state"
};
/**
 * @export
 */
exports.ReviewSubmissionsItemsGetToManyRelatedFieldsAppStoreVersionsEnum = {
    AgeRatingDeclaration: "ageRatingDeclaration",
    AlternativeDistributionPackage: "alternativeDistributionPackage",
    App: "app",
    AppClipDefaultExperience: "appClipDefaultExperience",
    AppStoreReviewDetail: "appStoreReviewDetail",
    AppStoreState: "appStoreState",
    AppStoreVersionExperiments: "appStoreVersionExperiments",
    AppStoreVersionExperimentsV2: "appStoreVersionExperimentsV2",
    AppStoreVersionLocalizations: "appStoreVersionLocalizations",
    AppStoreVersionPhasedRelease: "appStoreVersionPhasedRelease",
    AppStoreVersionSubmission: "appStoreVersionSubmission",
    AppVersionState: "appVersionState",
    Build: "build",
    Copyright: "copyright",
    CreatedDate: "createdDate",
    CustomerReviews: "customerReviews",
    Downloadable: "downloadable",
    EarliestReleaseDate: "earliestReleaseDate",
    Platform: "platform",
    ReleaseType: "releaseType",
    ReviewType: "reviewType",
    RoutingAppCoverage: "routingAppCoverage",
    VersionString: "versionString"
};
/**
 * @export
 */
exports.ReviewSubmissionsItemsGetToManyRelatedFieldsAppCustomProductPageVersionsEnum = {
    AppCustomProductPage: "appCustomProductPage",
    AppCustomProductPageLocalizations: "appCustomProductPageLocalizations",
    DeepLink: "deepLink",
    State: "state",
    Version: "version"
};
/**
 * @export
 */
exports.ReviewSubmissionsItemsGetToManyRelatedFieldsAppEventsEnum = {
    App: "app",
    ArchivedTerritorySchedules: "archivedTerritorySchedules",
    Badge: "badge",
    DeepLink: "deepLink",
    EventState: "eventState",
    Localizations: "localizations",
    PrimaryLocale: "primaryLocale",
    Priority: "priority",
    PurchaseRequirement: "purchaseRequirement",
    Purpose: "purpose",
    ReferenceName: "referenceName",
    TerritorySchedules: "territorySchedules"
};
/**
 * @export
 */
exports.ReviewSubmissionsItemsGetToManyRelatedIncludeEnum = {
    AppCustomProductPageVersion: "appCustomProductPageVersion",
    AppEvent: "appEvent",
    AppStoreVersion: "appStoreVersion",
    AppStoreVersionExperiment: "appStoreVersionExperiment",
    AppStoreVersionExperimentV2: "appStoreVersionExperimentV2"
};
