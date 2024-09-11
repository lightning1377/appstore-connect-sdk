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
exports.InAppPurchasePriceSchedulesManualPricesGetToManyRelatedIncludeEnum = exports.InAppPurchasePriceSchedulesManualPricesGetToManyRelatedFieldsTerritoriesEnum = exports.InAppPurchasePriceSchedulesManualPricesGetToManyRelatedFieldsInAppPurchasePricesEnum = exports.InAppPurchasePriceSchedulesManualPricesGetToManyRelatedFieldsInAppPurchasePricePointsEnum = exports.InAppPurchasePriceSchedulesGetInstanceFieldsTerritoriesEnum = exports.InAppPurchasePriceSchedulesGetInstanceFieldsInAppPurchasePricesEnum = exports.InAppPurchasePriceSchedulesGetInstanceIncludeEnum = exports.InAppPurchasePriceSchedulesGetInstanceFieldsInAppPurchasePriceSchedulesEnum = exports.InAppPurchasePriceSchedulesBaseTerritoryGetToOneRelatedFieldsTerritoriesEnum = exports.InAppPurchasePriceSchedulesAutomaticPricesGetToManyRelatedIncludeEnum = exports.InAppPurchasePriceSchedulesAutomaticPricesGetToManyRelatedFieldsTerritoriesEnum = exports.InAppPurchasePriceSchedulesAutomaticPricesGetToManyRelatedFieldsInAppPurchasePricesEnum = exports.InAppPurchasePriceSchedulesAutomaticPricesGetToManyRelatedFieldsInAppPurchasePricePointsEnum = exports.InAppPurchasePriceSchedulesApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class InAppPurchasePriceSchedulesApi extends runtime.BaseAPI {
    /**
     */
    inAppPurchasePriceSchedulesAutomaticPricesGetToManyRelatedRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling inAppPurchasePriceSchedulesAutomaticPricesGetToManyRelated.");
            }
            const queryParameters = {};
            if (requestParameters.filterTerritory) {
                queryParameters["filter[territory]"] = requestParameters.filterTerritory.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsInAppPurchasePricePoints) {
                queryParameters["fields[inAppPurchasePricePoints]"] = requestParameters.fieldsInAppPurchasePricePoints.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsInAppPurchasePrices) {
                queryParameters["fields[inAppPurchasePrices]"] = requestParameters.fieldsInAppPurchasePrices.join(runtime.COLLECTION_FORMATS["csv"]);
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
                path: `/v1/inAppPurchasePriceSchedules/{id}/automaticPrices`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.InAppPurchasePricesResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    inAppPurchasePriceSchedulesAutomaticPricesGetToManyRelated(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.inAppPurchasePriceSchedulesAutomaticPricesGetToManyRelatedRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    inAppPurchasePriceSchedulesBaseTerritoryGetToOneRelatedRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling inAppPurchasePriceSchedulesBaseTerritoryGetToOneRelated.");
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
                path: `/v1/inAppPurchasePriceSchedules/{id}/baseTerritory`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.TerritoryResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    inAppPurchasePriceSchedulesBaseTerritoryGetToOneRelated(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.inAppPurchasePriceSchedulesBaseTerritoryGetToOneRelatedRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    inAppPurchasePriceSchedulesCreateInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.inAppPurchasePriceScheduleCreateRequest === null || requestParameters.inAppPurchasePriceScheduleCreateRequest === undefined) {
                throw new runtime.RequiredError("inAppPurchasePriceScheduleCreateRequest", "Required parameter requestParameters.inAppPurchasePriceScheduleCreateRequest was null or undefined when calling inAppPurchasePriceSchedulesCreateInstance.");
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
                path: `/v1/inAppPurchasePriceSchedules`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.InAppPurchasePriceScheduleCreateRequestToJSON)(requestParameters.inAppPurchasePriceScheduleCreateRequest)
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.InAppPurchasePriceScheduleResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    inAppPurchasePriceSchedulesCreateInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.inAppPurchasePriceSchedulesCreateInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    inAppPurchasePriceSchedulesGetInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling inAppPurchasePriceSchedulesGetInstance.");
            }
            const queryParameters = {};
            if (requestParameters.fieldsInAppPurchasePriceSchedules) {
                queryParameters["fields[inAppPurchasePriceSchedules]"] = requestParameters.fieldsInAppPurchasePriceSchedules.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.include) {
                queryParameters["include"] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsInAppPurchasePrices) {
                queryParameters["fields[inAppPurchasePrices]"] = requestParameters.fieldsInAppPurchasePrices.join(runtime.COLLECTION_FORMATS["csv"]);
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
                path: `/v1/inAppPurchasePriceSchedules/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.InAppPurchasePriceScheduleResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    inAppPurchasePriceSchedulesGetInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.inAppPurchasePriceSchedulesGetInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    inAppPurchasePriceSchedulesManualPricesGetToManyRelatedRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling inAppPurchasePriceSchedulesManualPricesGetToManyRelated.");
            }
            const queryParameters = {};
            if (requestParameters.filterTerritory) {
                queryParameters["filter[territory]"] = requestParameters.filterTerritory.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsInAppPurchasePricePoints) {
                queryParameters["fields[inAppPurchasePricePoints]"] = requestParameters.fieldsInAppPurchasePricePoints.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsInAppPurchasePrices) {
                queryParameters["fields[inAppPurchasePrices]"] = requestParameters.fieldsInAppPurchasePrices.join(runtime.COLLECTION_FORMATS["csv"]);
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
                path: `/v1/inAppPurchasePriceSchedules/{id}/manualPrices`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.InAppPurchasePricesResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    inAppPurchasePriceSchedulesManualPricesGetToManyRelated(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.inAppPurchasePriceSchedulesManualPricesGetToManyRelatedRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.InAppPurchasePriceSchedulesApi = InAppPurchasePriceSchedulesApi;
/**
 * @export
 */
exports.InAppPurchasePriceSchedulesAutomaticPricesGetToManyRelatedFieldsInAppPurchasePricePointsEnum = {
    CustomerPrice: "customerPrice",
    InAppPurchaseV2: "inAppPurchaseV2",
    Proceeds: "proceeds",
    Territory: "territory"
};
/**
 * @export
 */
exports.InAppPurchasePriceSchedulesAutomaticPricesGetToManyRelatedFieldsInAppPurchasePricesEnum = {
    EndDate: "endDate",
    InAppPurchasePricePoint: "inAppPurchasePricePoint",
    InAppPurchaseV2: "inAppPurchaseV2",
    Manual: "manual",
    StartDate: "startDate",
    Territory: "territory"
};
/**
 * @export
 */
exports.InAppPurchasePriceSchedulesAutomaticPricesGetToManyRelatedFieldsTerritoriesEnum = {
    Currency: "currency"
};
/**
 * @export
 */
exports.InAppPurchasePriceSchedulesAutomaticPricesGetToManyRelatedIncludeEnum = {
    InAppPurchasePricePoint: "inAppPurchasePricePoint",
    Territory: "territory"
};
/**
 * @export
 */
exports.InAppPurchasePriceSchedulesBaseTerritoryGetToOneRelatedFieldsTerritoriesEnum = {
    Currency: "currency"
};
/**
 * @export
 */
exports.InAppPurchasePriceSchedulesGetInstanceFieldsInAppPurchasePriceSchedulesEnum = {
    AutomaticPrices: "automaticPrices",
    BaseTerritory: "baseTerritory",
    InAppPurchase: "inAppPurchase",
    ManualPrices: "manualPrices"
};
/**
 * @export
 */
exports.InAppPurchasePriceSchedulesGetInstanceIncludeEnum = {
    AutomaticPrices: "automaticPrices",
    BaseTerritory: "baseTerritory",
    InAppPurchase: "inAppPurchase",
    ManualPrices: "manualPrices"
};
/**
 * @export
 */
exports.InAppPurchasePriceSchedulesGetInstanceFieldsInAppPurchasePricesEnum = {
    EndDate: "endDate",
    InAppPurchasePricePoint: "inAppPurchasePricePoint",
    InAppPurchaseV2: "inAppPurchaseV2",
    Manual: "manual",
    StartDate: "startDate",
    Territory: "territory"
};
/**
 * @export
 */
exports.InAppPurchasePriceSchedulesGetInstanceFieldsTerritoriesEnum = {
    Currency: "currency"
};
/**
 * @export
 */
exports.InAppPurchasePriceSchedulesManualPricesGetToManyRelatedFieldsInAppPurchasePricePointsEnum = {
    CustomerPrice: "customerPrice",
    InAppPurchaseV2: "inAppPurchaseV2",
    Proceeds: "proceeds",
    Territory: "territory"
};
/**
 * @export
 */
exports.InAppPurchasePriceSchedulesManualPricesGetToManyRelatedFieldsInAppPurchasePricesEnum = {
    EndDate: "endDate",
    InAppPurchasePricePoint: "inAppPurchasePricePoint",
    InAppPurchaseV2: "inAppPurchaseV2",
    Manual: "manual",
    StartDate: "startDate",
    Territory: "territory"
};
/**
 * @export
 */
exports.InAppPurchasePriceSchedulesManualPricesGetToManyRelatedFieldsTerritoriesEnum = {
    Currency: "currency"
};
/**
 * @export
 */
exports.InAppPurchasePriceSchedulesManualPricesGetToManyRelatedIncludeEnum = {
    InAppPurchasePricePoint: "inAppPurchasePricePoint",
    Territory: "territory"
};
