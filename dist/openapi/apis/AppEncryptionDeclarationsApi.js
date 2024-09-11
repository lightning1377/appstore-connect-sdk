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
exports.AppEncryptionDeclarationsGetInstanceFieldsAppsEnum = exports.AppEncryptionDeclarationsGetInstanceFieldsAppEncryptionDeclarationDocumentsEnum = exports.AppEncryptionDeclarationsGetInstanceIncludeEnum = exports.AppEncryptionDeclarationsGetInstanceFieldsAppEncryptionDeclarationsEnum = exports.AppEncryptionDeclarationsGetCollectionFieldsAppsEnum = exports.AppEncryptionDeclarationsGetCollectionFieldsAppEncryptionDeclarationDocumentsEnum = exports.AppEncryptionDeclarationsGetCollectionIncludeEnum = exports.AppEncryptionDeclarationsGetCollectionFieldsAppEncryptionDeclarationsEnum = exports.AppEncryptionDeclarationsGetCollectionFilterPlatformEnum = exports.AppEncryptionDeclarationsAppGetToOneRelatedFieldsAppsEnum = exports.AppEncryptionDeclarationsAppEncryptionDeclarationDocumentGetToOneRelatedFieldsAppEncryptionDeclarationDocumentsEnum = exports.AppEncryptionDeclarationsApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class AppEncryptionDeclarationsApi extends runtime.BaseAPI {
    /**
     */
    appEncryptionDeclarationsAppEncryptionDeclarationDocumentGetToOneRelatedRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling appEncryptionDeclarationsAppEncryptionDeclarationDocumentGetToOneRelated.");
            }
            const queryParameters = {};
            if (requestParameters.fieldsAppEncryptionDeclarationDocuments) {
                queryParameters["fields[appEncryptionDeclarationDocuments]"] = requestParameters.fieldsAppEncryptionDeclarationDocuments.join(runtime.COLLECTION_FORMATS["csv"]);
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
                path: `/v1/appEncryptionDeclarations/{id}/appEncryptionDeclarationDocument`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AppEncryptionDeclarationDocumentResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    appEncryptionDeclarationsAppEncryptionDeclarationDocumentGetToOneRelated(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.appEncryptionDeclarationsAppEncryptionDeclarationDocumentGetToOneRelatedRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    appEncryptionDeclarationsAppGetToOneRelatedRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling appEncryptionDeclarationsAppGetToOneRelated.");
            }
            const queryParameters = {};
            if (requestParameters.fieldsApps) {
                queryParameters["fields[apps]"] = requestParameters.fieldsApps.join(runtime.COLLECTION_FORMATS["csv"]);
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
                path: `/v1/appEncryptionDeclarations/{id}/app`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AppWithoutIncludesResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    appEncryptionDeclarationsAppGetToOneRelated(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.appEncryptionDeclarationsAppGetToOneRelatedRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    appEncryptionDeclarationsBuildsCreateToManyRelationshipRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling appEncryptionDeclarationsBuildsCreateToManyRelationship.");
            }
            if (requestParameters.appEncryptionDeclarationBuildsLinkagesRequest === null || requestParameters.appEncryptionDeclarationBuildsLinkagesRequest === undefined) {
                throw new runtime.RequiredError("appEncryptionDeclarationBuildsLinkagesRequest", "Required parameter requestParameters.appEncryptionDeclarationBuildsLinkagesRequest was null or undefined when calling appEncryptionDeclarationsBuildsCreateToManyRelationship.");
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
                path: `/v1/appEncryptionDeclarations/{id}/relationships/builds`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.AppEncryptionDeclarationBuildsLinkagesRequestToJSON)(requestParameters.appEncryptionDeclarationBuildsLinkagesRequest)
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     */
    appEncryptionDeclarationsBuildsCreateToManyRelationship(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.appEncryptionDeclarationsBuildsCreateToManyRelationshipRaw(requestParameters, initOverrides);
        });
    }
    /**
     */
    appEncryptionDeclarationsGetCollectionRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.filterPlatform) {
                queryParameters["filter[platform]"] = requestParameters.filterPlatform.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.filterApp) {
                queryParameters["filter[app]"] = requestParameters.filterApp.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.filterBuilds) {
                queryParameters["filter[builds]"] = requestParameters.filterBuilds.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsAppEncryptionDeclarations) {
                queryParameters["fields[appEncryptionDeclarations]"] = requestParameters.fieldsAppEncryptionDeclarations.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.limit !== undefined) {
                queryParameters["limit"] = requestParameters.limit;
            }
            if (requestParameters.include) {
                queryParameters["include"] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsAppEncryptionDeclarationDocuments) {
                queryParameters["fields[appEncryptionDeclarationDocuments]"] = requestParameters.fieldsAppEncryptionDeclarationDocuments.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsApps) {
                queryParameters["fields[apps]"] = requestParameters.fieldsApps.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.limitBuilds !== undefined) {
                queryParameters["limit[builds]"] = requestParameters.limitBuilds;
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
                path: `/v1/appEncryptionDeclarations`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AppEncryptionDeclarationsResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    appEncryptionDeclarationsGetCollection() {
        return __awaiter(this, arguments, void 0, function* (requestParameters = {}, initOverrides) {
            const response = yield this.appEncryptionDeclarationsGetCollectionRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    appEncryptionDeclarationsGetInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling appEncryptionDeclarationsGetInstance.");
            }
            const queryParameters = {};
            if (requestParameters.fieldsAppEncryptionDeclarations) {
                queryParameters["fields[appEncryptionDeclarations]"] = requestParameters.fieldsAppEncryptionDeclarations.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.include) {
                queryParameters["include"] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsAppEncryptionDeclarationDocuments) {
                queryParameters["fields[appEncryptionDeclarationDocuments]"] = requestParameters.fieldsAppEncryptionDeclarationDocuments.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsApps) {
                queryParameters["fields[apps]"] = requestParameters.fieldsApps.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.limitBuilds !== undefined) {
                queryParameters["limit[builds]"] = requestParameters.limitBuilds;
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
                path: `/v1/appEncryptionDeclarations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AppEncryptionDeclarationResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    appEncryptionDeclarationsGetInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.appEncryptionDeclarationsGetInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.AppEncryptionDeclarationsApi = AppEncryptionDeclarationsApi;
/**
 * @export
 */
exports.AppEncryptionDeclarationsAppEncryptionDeclarationDocumentGetToOneRelatedFieldsAppEncryptionDeclarationDocumentsEnum = {
    AppEncryptionDeclaration: "appEncryptionDeclaration",
    AssetDeliveryState: "assetDeliveryState",
    AssetToken: "assetToken",
    DownloadUrl: "downloadUrl",
    FileName: "fileName",
    FileSize: "fileSize",
    SourceFileChecksum: "sourceFileChecksum",
    UploadOperations: "uploadOperations",
    Uploaded: "uploaded"
};
/**
 * @export
 */
exports.AppEncryptionDeclarationsAppGetToOneRelatedFieldsAppsEnum = {
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
};
/**
 * @export
 */
exports.AppEncryptionDeclarationsGetCollectionFilterPlatformEnum = {
    Ios: "IOS",
    MacOs: "MAC_OS",
    TvOs: "TV_OS",
    VisionOs: "VISION_OS"
};
/**
 * @export
 */
exports.AppEncryptionDeclarationsGetCollectionFieldsAppEncryptionDeclarationsEnum = {
    App: "app",
    AppDescription: "appDescription",
    AppEncryptionDeclarationDocument: "appEncryptionDeclarationDocument",
    AppEncryptionDeclarationState: "appEncryptionDeclarationState",
    AvailableOnFrenchStore: "availableOnFrenchStore",
    Builds: "builds",
    CodeValue: "codeValue",
    ContainsProprietaryCryptography: "containsProprietaryCryptography",
    ContainsThirdPartyCryptography: "containsThirdPartyCryptography",
    CreatedDate: "createdDate",
    DocumentName: "documentName",
    DocumentType: "documentType",
    DocumentUrl: "documentUrl",
    Exempt: "exempt",
    Platform: "platform",
    UploadedDate: "uploadedDate",
    UsesEncryption: "usesEncryption"
};
/**
 * @export
 */
exports.AppEncryptionDeclarationsGetCollectionIncludeEnum = {
    App: "app",
    AppEncryptionDeclarationDocument: "appEncryptionDeclarationDocument",
    Builds: "builds"
};
/**
 * @export
 */
exports.AppEncryptionDeclarationsGetCollectionFieldsAppEncryptionDeclarationDocumentsEnum = {
    AppEncryptionDeclaration: "appEncryptionDeclaration",
    AssetDeliveryState: "assetDeliveryState",
    AssetToken: "assetToken",
    DownloadUrl: "downloadUrl",
    FileName: "fileName",
    FileSize: "fileSize",
    SourceFileChecksum: "sourceFileChecksum",
    UploadOperations: "uploadOperations",
    Uploaded: "uploaded"
};
/**
 * @export
 */
exports.AppEncryptionDeclarationsGetCollectionFieldsAppsEnum = {
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
};
/**
 * @export
 */
exports.AppEncryptionDeclarationsGetInstanceFieldsAppEncryptionDeclarationsEnum = {
    App: "app",
    AppDescription: "appDescription",
    AppEncryptionDeclarationDocument: "appEncryptionDeclarationDocument",
    AppEncryptionDeclarationState: "appEncryptionDeclarationState",
    AvailableOnFrenchStore: "availableOnFrenchStore",
    Builds: "builds",
    CodeValue: "codeValue",
    ContainsProprietaryCryptography: "containsProprietaryCryptography",
    ContainsThirdPartyCryptography: "containsThirdPartyCryptography",
    CreatedDate: "createdDate",
    DocumentName: "documentName",
    DocumentType: "documentType",
    DocumentUrl: "documentUrl",
    Exempt: "exempt",
    Platform: "platform",
    UploadedDate: "uploadedDate",
    UsesEncryption: "usesEncryption"
};
/**
 * @export
 */
exports.AppEncryptionDeclarationsGetInstanceIncludeEnum = {
    App: "app",
    AppEncryptionDeclarationDocument: "appEncryptionDeclarationDocument",
    Builds: "builds"
};
/**
 * @export
 */
exports.AppEncryptionDeclarationsGetInstanceFieldsAppEncryptionDeclarationDocumentsEnum = {
    AppEncryptionDeclaration: "appEncryptionDeclaration",
    AssetDeliveryState: "assetDeliveryState",
    AssetToken: "assetToken",
    DownloadUrl: "downloadUrl",
    FileName: "fileName",
    FileSize: "fileSize",
    SourceFileChecksum: "sourceFileChecksum",
    UploadOperations: "uploadOperations",
    Uploaded: "uploaded"
};
/**
 * @export
 */
exports.AppEncryptionDeclarationsGetInstanceFieldsAppsEnum = {
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
};
