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
exports.AnalyticsReportRequestsReportsGetToManyRelatedFieldsAnalyticsReportsEnum = exports.AnalyticsReportRequestsReportsGetToManyRelatedFilterCategoryEnum = exports.AnalyticsReportRequestsGetInstanceFieldsAnalyticsReportsEnum = exports.AnalyticsReportRequestsGetInstanceIncludeEnum = exports.AnalyticsReportRequestsGetInstanceFieldsAnalyticsReportRequestsEnum = exports.AnalyticsReportRequestsApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class AnalyticsReportRequestsApi extends runtime.BaseAPI {
    /**
     */
    analyticsReportRequestsCreateInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.analyticsReportRequestCreateRequest === null || requestParameters.analyticsReportRequestCreateRequest === undefined) {
                throw new runtime.RequiredError("analyticsReportRequestCreateRequest", "Required parameter requestParameters.analyticsReportRequestCreateRequest was null or undefined when calling analyticsReportRequestsCreateInstance.");
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
                path: `/v1/analyticsReportRequests`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.AnalyticsReportRequestCreateRequestToJSON)(requestParameters.analyticsReportRequestCreateRequest)
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AnalyticsReportRequestResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    analyticsReportRequestsCreateInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.analyticsReportRequestsCreateInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    analyticsReportRequestsDeleteInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling analyticsReportRequestsDeleteInstance.");
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
                path: `/v1/analyticsReportRequests/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "DELETE",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     */
    analyticsReportRequestsDeleteInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.analyticsReportRequestsDeleteInstanceRaw(requestParameters, initOverrides);
        });
    }
    /**
     */
    analyticsReportRequestsGetInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling analyticsReportRequestsGetInstance.");
            }
            const queryParameters = {};
            if (requestParameters.fieldsAnalyticsReportRequests) {
                queryParameters["fields[analyticsReportRequests]"] = requestParameters.fieldsAnalyticsReportRequests.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.include) {
                queryParameters["include"] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsAnalyticsReports) {
                queryParameters["fields[analyticsReports]"] = requestParameters.fieldsAnalyticsReports.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.limitReports !== undefined) {
                queryParameters["limit[reports]"] = requestParameters.limitReports;
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
                path: `/v1/analyticsReportRequests/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AnalyticsReportRequestResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    analyticsReportRequestsGetInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.analyticsReportRequestsGetInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    analyticsReportRequestsReportsGetToManyRelatedRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling analyticsReportRequestsReportsGetToManyRelated.");
            }
            const queryParameters = {};
            if (requestParameters.filterCategory) {
                queryParameters["filter[category]"] = requestParameters.filterCategory.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.filterName) {
                queryParameters["filter[name]"] = requestParameters.filterName.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsAnalyticsReports) {
                queryParameters["fields[analyticsReports]"] = requestParameters.fieldsAnalyticsReports.join(runtime.COLLECTION_FORMATS["csv"]);
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
                path: `/v1/analyticsReportRequests/{id}/reports`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AnalyticsReportsResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    analyticsReportRequestsReportsGetToManyRelated(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.analyticsReportRequestsReportsGetToManyRelatedRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.AnalyticsReportRequestsApi = AnalyticsReportRequestsApi;
/**
 * @export
 */
exports.AnalyticsReportRequestsGetInstanceFieldsAnalyticsReportRequestsEnum = {
    AccessType: "accessType",
    App: "app",
    Reports: "reports",
    StoppedDueToInactivity: "stoppedDueToInactivity"
};
/**
 * @export
 */
exports.AnalyticsReportRequestsGetInstanceIncludeEnum = {
    Reports: "reports"
};
/**
 * @export
 */
exports.AnalyticsReportRequestsGetInstanceFieldsAnalyticsReportsEnum = {
    Category: "category",
    Instances: "instances",
    Name: "name"
};
/**
 * @export
 */
exports.AnalyticsReportRequestsReportsGetToManyRelatedFilterCategoryEnum = {
    AppUsage: "APP_USAGE",
    AppStoreEngagement: "APP_STORE_ENGAGEMENT",
    Commerce: "COMMERCE",
    FrameworkUsage: "FRAMEWORK_USAGE",
    Performance: "PERFORMANCE"
};
/**
 * @export
 */
exports.AnalyticsReportRequestsReportsGetToManyRelatedFieldsAnalyticsReportsEnum = {
    Category: "category",
    Instances: "instances",
    Name: "name"
};
