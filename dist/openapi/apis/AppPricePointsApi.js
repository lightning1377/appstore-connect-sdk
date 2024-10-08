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
exports.AppPricePointsV3GetInstanceIncludeEnum = exports.AppPricePointsV3GetInstanceFieldsAppPricePointsEnum = exports.AppPricePointsV3EqualizationsGetToManyRelatedIncludeEnum = exports.AppPricePointsV3EqualizationsGetToManyRelatedFieldsTerritoriesEnum = exports.AppPricePointsV3EqualizationsGetToManyRelatedFieldsAppsEnum = exports.AppPricePointsV3EqualizationsGetToManyRelatedFieldsAppPricePointsEnum = exports.AppPricePointsApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class AppPricePointsApi extends runtime.BaseAPI {
    /**
     */
    appPricePointsV3EqualizationsGetToManyRelatedRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling appPricePointsV3EqualizationsGetToManyRelated.");
            }
            const queryParameters = {};
            if (requestParameters.filterTerritory) {
                queryParameters["filter[territory]"] = requestParameters.filterTerritory.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsAppPricePoints) {
                queryParameters["fields[appPricePoints]"] = requestParameters.fieldsAppPricePoints.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsApps) {
                queryParameters["fields[apps]"] = requestParameters.fieldsApps.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsTerritories) {
                queryParameters["fields[territories]"] = requestParameters.fieldsTerritories.join(runtime.COLLECTION_FORMATS["csv"]);
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
                path: `/v3/appPricePoints/{id}/equalizations`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AppPricePointsV3ResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    appPricePointsV3EqualizationsGetToManyRelated(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.appPricePointsV3EqualizationsGetToManyRelatedRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    appPricePointsV3GetInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling appPricePointsV3GetInstance.");
            }
            const queryParameters = {};
            if (requestParameters.fieldsAppPricePoints) {
                queryParameters["fields[appPricePoints]"] = requestParameters.fieldsAppPricePoints.join(runtime.COLLECTION_FORMATS["csv"]);
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
                path: `/v3/appPricePoints/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AppPricePointV3ResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    appPricePointsV3GetInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.appPricePointsV3GetInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.AppPricePointsApi = AppPricePointsApi;
/**
 * @export
 */
exports.AppPricePointsV3EqualizationsGetToManyRelatedFieldsAppPricePointsEnum = {
    App: "app",
    CustomerPrice: "customerPrice",
    Equalizations: "equalizations",
    Proceeds: "proceeds",
    Territory: "territory"
};
/**
 * @export
 */
exports.AppPricePointsV3EqualizationsGetToManyRelatedFieldsAppsEnum = {
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
exports.AppPricePointsV3EqualizationsGetToManyRelatedFieldsTerritoriesEnum = {
    Currency: "currency"
};
/**
 * @export
 */
exports.AppPricePointsV3EqualizationsGetToManyRelatedIncludeEnum = {
    App: "app",
    Territory: "territory"
};
/**
 * @export
 */
exports.AppPricePointsV3GetInstanceFieldsAppPricePointsEnum = {
    App: "app",
    CustomerPrice: "customerPrice",
    Equalizations: "equalizations",
    Proceeds: "proceeds",
    Territory: "territory"
};
/**
 * @export
 */
exports.AppPricePointsV3GetInstanceIncludeEnum = {
    App: "app",
    Territory: "territory"
};
