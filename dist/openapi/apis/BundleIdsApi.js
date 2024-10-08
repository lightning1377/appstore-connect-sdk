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
exports.BundleIdsProfilesGetToManyRelatedFieldsProfilesEnum = exports.BundleIdsGetInstanceFieldsAppsEnum = exports.BundleIdsGetInstanceFieldsProfilesEnum = exports.BundleIdsGetInstanceFieldsBundleIdCapabilitiesEnum = exports.BundleIdsGetInstanceIncludeEnum = exports.BundleIdsGetInstanceFieldsBundleIdsEnum = exports.BundleIdsGetCollectionFieldsAppsEnum = exports.BundleIdsGetCollectionFieldsProfilesEnum = exports.BundleIdsGetCollectionFieldsBundleIdCapabilitiesEnum = exports.BundleIdsGetCollectionIncludeEnum = exports.BundleIdsGetCollectionFieldsBundleIdsEnum = exports.BundleIdsGetCollectionSortEnum = exports.BundleIdsGetCollectionFilterPlatformEnum = exports.BundleIdsBundleIdCapabilitiesGetToManyRelatedFieldsBundleIdCapabilitiesEnum = exports.BundleIdsAppGetToOneRelatedFieldsAppsEnum = exports.BundleIdsApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class BundleIdsApi extends runtime.BaseAPI {
    /**
     */
    bundleIdsAppGetToOneRelatedRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling bundleIdsAppGetToOneRelated.");
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
                path: `/v1/bundleIds/{id}/app`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AppWithoutIncludesResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    bundleIdsAppGetToOneRelated(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.bundleIdsAppGetToOneRelatedRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    bundleIdsBundleIdCapabilitiesGetToManyRelatedRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling bundleIdsBundleIdCapabilitiesGetToManyRelated.");
            }
            const queryParameters = {};
            if (requestParameters.fieldsBundleIdCapabilities) {
                queryParameters["fields[bundleIdCapabilities]"] = requestParameters.fieldsBundleIdCapabilities.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.limit !== undefined) {
                queryParameters["limit"] = requestParameters.limit;
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
                path: `/v1/bundleIds/{id}/bundleIdCapabilities`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.BundleIdCapabilitiesWithoutIncludesResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    bundleIdsBundleIdCapabilitiesGetToManyRelated(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.bundleIdsBundleIdCapabilitiesGetToManyRelatedRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    bundleIdsCreateInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.bundleIdCreateRequest === null || requestParameters.bundleIdCreateRequest === undefined) {
                throw new runtime.RequiredError("bundleIdCreateRequest", "Required parameter requestParameters.bundleIdCreateRequest was null or undefined when calling bundleIdsCreateInstance.");
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
                path: `/v1/bundleIds`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.BundleIdCreateRequestToJSON)(requestParameters.bundleIdCreateRequest)
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.BundleIdResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    bundleIdsCreateInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.bundleIdsCreateInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    bundleIdsDeleteInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling bundleIdsDeleteInstance.");
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
                path: `/v1/bundleIds/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "DELETE",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     */
    bundleIdsDeleteInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.bundleIdsDeleteInstanceRaw(requestParameters, initOverrides);
        });
    }
    /**
     */
    bundleIdsGetCollectionRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.filterIdentifier) {
                queryParameters["filter[identifier]"] = requestParameters.filterIdentifier.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.filterName) {
                queryParameters["filter[name]"] = requestParameters.filterName.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.filterPlatform) {
                queryParameters["filter[platform]"] = requestParameters.filterPlatform.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.filterSeedId) {
                queryParameters["filter[seedId]"] = requestParameters.filterSeedId.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.filterId) {
                queryParameters["filter[id]"] = requestParameters.filterId.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.sort) {
                queryParameters["sort"] = requestParameters.sort.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsBundleIds) {
                queryParameters["fields[bundleIds]"] = requestParameters.fieldsBundleIds.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.limit !== undefined) {
                queryParameters["limit"] = requestParameters.limit;
            }
            if (requestParameters.include) {
                queryParameters["include"] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsBundleIdCapabilities) {
                queryParameters["fields[bundleIdCapabilities]"] = requestParameters.fieldsBundleIdCapabilities.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsProfiles) {
                queryParameters["fields[profiles]"] = requestParameters.fieldsProfiles.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsApps) {
                queryParameters["fields[apps]"] = requestParameters.fieldsApps.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.limitBundleIdCapabilities !== undefined) {
                queryParameters["limit[bundleIdCapabilities]"] = requestParameters.limitBundleIdCapabilities;
            }
            if (requestParameters.limitProfiles !== undefined) {
                queryParameters["limit[profiles]"] = requestParameters.limitProfiles;
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
                path: `/v1/bundleIds`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.BundleIdsResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    bundleIdsGetCollection() {
        return __awaiter(this, arguments, void 0, function* (requestParameters = {}, initOverrides) {
            const response = yield this.bundleIdsGetCollectionRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    bundleIdsGetInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling bundleIdsGetInstance.");
            }
            const queryParameters = {};
            if (requestParameters.fieldsBundleIds) {
                queryParameters["fields[bundleIds]"] = requestParameters.fieldsBundleIds.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.include) {
                queryParameters["include"] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsBundleIdCapabilities) {
                queryParameters["fields[bundleIdCapabilities]"] = requestParameters.fieldsBundleIdCapabilities.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsProfiles) {
                queryParameters["fields[profiles]"] = requestParameters.fieldsProfiles.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsApps) {
                queryParameters["fields[apps]"] = requestParameters.fieldsApps.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.limitBundleIdCapabilities !== undefined) {
                queryParameters["limit[bundleIdCapabilities]"] = requestParameters.limitBundleIdCapabilities;
            }
            if (requestParameters.limitProfiles !== undefined) {
                queryParameters["limit[profiles]"] = requestParameters.limitProfiles;
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
                path: `/v1/bundleIds/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.BundleIdResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    bundleIdsGetInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.bundleIdsGetInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    bundleIdsProfilesGetToManyRelatedRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling bundleIdsProfilesGetToManyRelated.");
            }
            const queryParameters = {};
            if (requestParameters.fieldsProfiles) {
                queryParameters["fields[profiles]"] = requestParameters.fieldsProfiles.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.limit !== undefined) {
                queryParameters["limit"] = requestParameters.limit;
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
                path: `/v1/bundleIds/{id}/profiles`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.ProfilesWithoutIncludesResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    bundleIdsProfilesGetToManyRelated(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.bundleIdsProfilesGetToManyRelatedRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    bundleIdsUpdateInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling bundleIdsUpdateInstance.");
            }
            if (requestParameters.bundleIdUpdateRequest === null || requestParameters.bundleIdUpdateRequest === undefined) {
                throw new runtime.RequiredError("bundleIdUpdateRequest", "Required parameter requestParameters.bundleIdUpdateRequest was null or undefined when calling bundleIdsUpdateInstance.");
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
                path: `/v1/bundleIds/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "PATCH",
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.BundleIdUpdateRequestToJSON)(requestParameters.bundleIdUpdateRequest)
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.BundleIdResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    bundleIdsUpdateInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.bundleIdsUpdateInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.BundleIdsApi = BundleIdsApi;
/**
 * @export
 */
exports.BundleIdsAppGetToOneRelatedFieldsAppsEnum = {
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
exports.BundleIdsBundleIdCapabilitiesGetToManyRelatedFieldsBundleIdCapabilitiesEnum = {
    BundleId: "bundleId",
    CapabilityType: "capabilityType",
    Settings: "settings"
};
/**
 * @export
 */
exports.BundleIdsGetCollectionFilterPlatformEnum = {
    Ios: "IOS",
    MacOs: "MAC_OS"
};
/**
 * @export
 */
exports.BundleIdsGetCollectionSortEnum = {
    Id: "id",
    Id: "-id",
    Identifier: "identifier",
    Identifier: "-identifier",
    Name: "name",
    Name: "-name",
    Platform: "platform",
    Platform: "-platform",
    SeedId: "seedId",
    SeedId: "-seedId"
};
/**
 * @export
 */
exports.BundleIdsGetCollectionFieldsBundleIdsEnum = {
    App: "app",
    BundleIdCapabilities: "bundleIdCapabilities",
    Identifier: "identifier",
    Name: "name",
    Platform: "platform",
    Profiles: "profiles",
    SeedId: "seedId"
};
/**
 * @export
 */
exports.BundleIdsGetCollectionIncludeEnum = {
    App: "app",
    BundleIdCapabilities: "bundleIdCapabilities",
    Profiles: "profiles"
};
/**
 * @export
 */
exports.BundleIdsGetCollectionFieldsBundleIdCapabilitiesEnum = {
    BundleId: "bundleId",
    CapabilityType: "capabilityType",
    Settings: "settings"
};
/**
 * @export
 */
exports.BundleIdsGetCollectionFieldsProfilesEnum = {
    BundleId: "bundleId",
    Certificates: "certificates",
    CreatedDate: "createdDate",
    Devices: "devices",
    ExpirationDate: "expirationDate",
    Name: "name",
    Platform: "platform",
    ProfileContent: "profileContent",
    ProfileState: "profileState",
    ProfileType: "profileType",
    Uuid: "uuid"
};
/**
 * @export
 */
exports.BundleIdsGetCollectionFieldsAppsEnum = {
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
exports.BundleIdsGetInstanceFieldsBundleIdsEnum = {
    App: "app",
    BundleIdCapabilities: "bundleIdCapabilities",
    Identifier: "identifier",
    Name: "name",
    Platform: "platform",
    Profiles: "profiles",
    SeedId: "seedId"
};
/**
 * @export
 */
exports.BundleIdsGetInstanceIncludeEnum = {
    App: "app",
    BundleIdCapabilities: "bundleIdCapabilities",
    Profiles: "profiles"
};
/**
 * @export
 */
exports.BundleIdsGetInstanceFieldsBundleIdCapabilitiesEnum = {
    BundleId: "bundleId",
    CapabilityType: "capabilityType",
    Settings: "settings"
};
/**
 * @export
 */
exports.BundleIdsGetInstanceFieldsProfilesEnum = {
    BundleId: "bundleId",
    Certificates: "certificates",
    CreatedDate: "createdDate",
    Devices: "devices",
    ExpirationDate: "expirationDate",
    Name: "name",
    Platform: "platform",
    ProfileContent: "profileContent",
    ProfileState: "profileState",
    ProfileType: "profileType",
    Uuid: "uuid"
};
/**
 * @export
 */
exports.BundleIdsGetInstanceFieldsAppsEnum = {
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
exports.BundleIdsProfilesGetToManyRelatedFieldsProfilesEnum = {
    BundleId: "bundleId",
    Certificates: "certificates",
    CreatedDate: "createdDate",
    Devices: "devices",
    ExpirationDate: "expirationDate",
    Name: "name",
    Platform: "platform",
    ProfileContent: "profileContent",
    ProfileState: "profileState",
    ProfileType: "profileType",
    Uuid: "uuid"
};
