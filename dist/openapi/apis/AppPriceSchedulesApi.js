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
exports.AppPriceSchedulesManualPricesGetToManyRelatedIncludeEnum = exports.AppPriceSchedulesManualPricesGetToManyRelatedFieldsTerritoriesEnum = exports.AppPriceSchedulesManualPricesGetToManyRelatedFieldsAppPricePointsEnum = exports.AppPriceSchedulesManualPricesGetToManyRelatedFieldsAppPricesEnum = exports.AppPriceSchedulesGetInstanceFieldsTerritoriesEnum = exports.AppPriceSchedulesGetInstanceFieldsAppPricesEnum = exports.AppPriceSchedulesGetInstanceIncludeEnum = exports.AppPriceSchedulesGetInstanceFieldsAppPriceSchedulesEnum = exports.AppPriceSchedulesBaseTerritoryGetToOneRelatedFieldsTerritoriesEnum = exports.AppPriceSchedulesAutomaticPricesGetToManyRelatedIncludeEnum = exports.AppPriceSchedulesAutomaticPricesGetToManyRelatedFieldsTerritoriesEnum = exports.AppPriceSchedulesAutomaticPricesGetToManyRelatedFieldsAppPricePointsEnum = exports.AppPriceSchedulesAutomaticPricesGetToManyRelatedFieldsAppPricesEnum = exports.AppPriceSchedulesApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class AppPriceSchedulesApi extends runtime.BaseAPI {
    /**
     */
    appPriceSchedulesAutomaticPricesGetToManyRelatedRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling appPriceSchedulesAutomaticPricesGetToManyRelated.");
            }
            const queryParameters = {};
            if (requestParameters.filterEndDate) {
                queryParameters["filter[endDate]"] = requestParameters.filterEndDate.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.filterStartDate) {
                queryParameters["filter[startDate]"] = requestParameters.filterStartDate.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.filterTerritory) {
                queryParameters["filter[territory]"] = requestParameters.filterTerritory.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsAppPrices) {
                queryParameters["fields[appPrices]"] = requestParameters.fieldsAppPrices.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsAppPricePoints) {
                queryParameters["fields[appPricePoints]"] = requestParameters.fieldsAppPricePoints.join(runtime.COLLECTION_FORMATS["csv"]);
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
                path: `/v1/appPriceSchedules/{id}/automaticPrices`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AppPricesV2ResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    appPriceSchedulesAutomaticPricesGetToManyRelated(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.appPriceSchedulesAutomaticPricesGetToManyRelatedRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    appPriceSchedulesBaseTerritoryGetToOneRelatedRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling appPriceSchedulesBaseTerritoryGetToOneRelated.");
            }
            const queryParameters = {};
            if (requestParameters.fieldsTerritories) {
                queryParameters["fields[territories]"] = requestParameters.fieldsTerritories.join(runtime.COLLECTION_FORMATS["csv"]);
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
                path: `/v1/appPriceSchedules/{id}/baseTerritory`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.TerritoryResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    appPriceSchedulesBaseTerritoryGetToOneRelated(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.appPriceSchedulesBaseTerritoryGetToOneRelatedRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    appPriceSchedulesCreateInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.appPriceScheduleCreateRequest === null || requestParameters.appPriceScheduleCreateRequest === undefined) {
                throw new runtime.RequiredError("appPriceScheduleCreateRequest", "Required parameter requestParameters.appPriceScheduleCreateRequest was null or undefined when calling appPriceSchedulesCreateInstance.");
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
                path: `/v1/appPriceSchedules`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.AppPriceScheduleCreateRequestToJSON)(requestParameters.appPriceScheduleCreateRequest)
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AppPriceScheduleResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    appPriceSchedulesCreateInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.appPriceSchedulesCreateInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    appPriceSchedulesGetInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling appPriceSchedulesGetInstance.");
            }
            const queryParameters = {};
            if (requestParameters.fieldsAppPriceSchedules) {
                queryParameters["fields[appPriceSchedules]"] = requestParameters.fieldsAppPriceSchedules.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.include) {
                queryParameters["include"] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsAppPrices) {
                queryParameters["fields[appPrices]"] = requestParameters.fieldsAppPrices.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsTerritories) {
                queryParameters["fields[territories]"] = requestParameters.fieldsTerritories.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.limitAutomaticPrices !== undefined) {
                queryParameters["limit[automaticPrices]"] = requestParameters.limitAutomaticPrices;
            }
            if (requestParameters.limitManualPrices !== undefined) {
                queryParameters["limit[manualPrices]"] = requestParameters.limitManualPrices;
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
                path: `/v1/appPriceSchedules/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AppPriceScheduleResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    appPriceSchedulesGetInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.appPriceSchedulesGetInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    appPriceSchedulesManualPricesGetToManyRelatedRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling appPriceSchedulesManualPricesGetToManyRelated.");
            }
            const queryParameters = {};
            if (requestParameters.filterEndDate) {
                queryParameters["filter[endDate]"] = requestParameters.filterEndDate.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.filterStartDate) {
                queryParameters["filter[startDate]"] = requestParameters.filterStartDate.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.filterTerritory) {
                queryParameters["filter[territory]"] = requestParameters.filterTerritory.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsAppPrices) {
                queryParameters["fields[appPrices]"] = requestParameters.fieldsAppPrices.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsAppPricePoints) {
                queryParameters["fields[appPricePoints]"] = requestParameters.fieldsAppPricePoints.join(runtime.COLLECTION_FORMATS["csv"]);
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
                path: `/v1/appPriceSchedules/{id}/manualPrices`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AppPricesV2ResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    appPriceSchedulesManualPricesGetToManyRelated(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.appPriceSchedulesManualPricesGetToManyRelatedRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.AppPriceSchedulesApi = AppPriceSchedulesApi;
/**
 * @export
 */
exports.AppPriceSchedulesAutomaticPricesGetToManyRelatedFieldsAppPricesEnum = {
    AppPricePoint: "appPricePoint",
    EndDate: "endDate",
    Manual: "manual",
    StartDate: "startDate",
    Territory: "territory"
};
/**
 * @export
 */
exports.AppPriceSchedulesAutomaticPricesGetToManyRelatedFieldsAppPricePointsEnum = {
    App: "app",
    CustomerPrice: "customerPrice",
    Equalizations: "equalizations",
    Proceeds: "proceeds",
    Territory: "territory"
};
/**
 * @export
 */
exports.AppPriceSchedulesAutomaticPricesGetToManyRelatedFieldsTerritoriesEnum = {
    Currency: "currency"
};
/**
 * @export
 */
exports.AppPriceSchedulesAutomaticPricesGetToManyRelatedIncludeEnum = {
    AppPricePoint: "appPricePoint",
    Territory: "territory"
};
/**
 * @export
 */
exports.AppPriceSchedulesBaseTerritoryGetToOneRelatedFieldsTerritoriesEnum = {
    Currency: "currency"
};
/**
 * @export
 */
exports.AppPriceSchedulesGetInstanceFieldsAppPriceSchedulesEnum = {
    App: "app",
    AutomaticPrices: "automaticPrices",
    BaseTerritory: "baseTerritory",
    ManualPrices: "manualPrices"
};
/**
 * @export
 */
exports.AppPriceSchedulesGetInstanceIncludeEnum = {
    App: "app",
    AutomaticPrices: "automaticPrices",
    BaseTerritory: "baseTerritory",
    ManualPrices: "manualPrices"
};
/**
 * @export
 */
exports.AppPriceSchedulesGetInstanceFieldsAppPricesEnum = {
    AppPricePoint: "appPricePoint",
    EndDate: "endDate",
    Manual: "manual",
    StartDate: "startDate",
    Territory: "territory"
};
/**
 * @export
 */
exports.AppPriceSchedulesGetInstanceFieldsTerritoriesEnum = {
    Currency: "currency"
};
/**
 * @export
 */
exports.AppPriceSchedulesManualPricesGetToManyRelatedFieldsAppPricesEnum = {
    AppPricePoint: "appPricePoint",
    EndDate: "endDate",
    Manual: "manual",
    StartDate: "startDate",
    Territory: "territory"
};
/**
 * @export
 */
exports.AppPriceSchedulesManualPricesGetToManyRelatedFieldsAppPricePointsEnum = {
    App: "app",
    CustomerPrice: "customerPrice",
    Equalizations: "equalizations",
    Proceeds: "proceeds",
    Territory: "territory"
};
/**
 * @export
 */
exports.AppPriceSchedulesManualPricesGetToManyRelatedFieldsTerritoriesEnum = {
    Currency: "currency"
};
/**
 * @export
 */
exports.AppPriceSchedulesManualPricesGetToManyRelatedIncludeEnum = {
    AppPricePoint: "appPricePoint",
    Territory: "territory"
};
