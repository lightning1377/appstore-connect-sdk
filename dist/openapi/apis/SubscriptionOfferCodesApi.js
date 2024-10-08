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
exports.SubscriptionOfferCodesPricesGetToManyRelatedIncludeEnum = exports.SubscriptionOfferCodesPricesGetToManyRelatedFieldsSubscriptionOfferCodePricesEnum = exports.SubscriptionOfferCodesPricesGetToManyRelatedFieldsTerritoriesEnum = exports.SubscriptionOfferCodesPricesGetToManyRelatedFieldsSubscriptionPricePointsEnum = exports.SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedIncludeEnum = exports.SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedFieldsSubscriptionOfferCodeOneTimeUseCodesEnum = exports.SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedFieldsSubscriptionOfferCodesEnum = exports.SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodePricesEnum = exports.SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodeOneTimeUseCodesEnum = exports.SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodeCustomCodesEnum = exports.SubscriptionOfferCodesGetInstanceIncludeEnum = exports.SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodesEnum = exports.SubscriptionOfferCodesCustomCodesGetToManyRelatedIncludeEnum = exports.SubscriptionOfferCodesCustomCodesGetToManyRelatedFieldsSubscriptionOfferCodesEnum = exports.SubscriptionOfferCodesCustomCodesGetToManyRelatedFieldsSubscriptionOfferCodeCustomCodesEnum = exports.SubscriptionOfferCodesApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class SubscriptionOfferCodesApi extends runtime.BaseAPI {
    /**
     */
    subscriptionOfferCodesCreateInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.subscriptionOfferCodeCreateRequest === null || requestParameters.subscriptionOfferCodeCreateRequest === undefined) {
                throw new runtime.RequiredError("subscriptionOfferCodeCreateRequest", "Required parameter requestParameters.subscriptionOfferCodeCreateRequest was null or undefined when calling subscriptionOfferCodesCreateInstance.");
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
                path: `/v1/subscriptionOfferCodes`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.SubscriptionOfferCodeCreateRequestToJSON)(requestParameters.subscriptionOfferCodeCreateRequest)
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.SubscriptionOfferCodeResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    subscriptionOfferCodesCreateInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.subscriptionOfferCodesCreateInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    subscriptionOfferCodesCustomCodesGetToManyRelatedRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling subscriptionOfferCodesCustomCodesGetToManyRelated.");
            }
            const queryParameters = {};
            if (requestParameters.fieldsSubscriptionOfferCodeCustomCodes) {
                queryParameters["fields[subscriptionOfferCodeCustomCodes]"] = requestParameters.fieldsSubscriptionOfferCodeCustomCodes.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsSubscriptionOfferCodes) {
                queryParameters["fields[subscriptionOfferCodes]"] = requestParameters.fieldsSubscriptionOfferCodes.join(runtime.COLLECTION_FORMATS["csv"]);
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
                path: `/v1/subscriptionOfferCodes/{id}/customCodes`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.SubscriptionOfferCodeCustomCodesResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    subscriptionOfferCodesCustomCodesGetToManyRelated(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.subscriptionOfferCodesCustomCodesGetToManyRelatedRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    subscriptionOfferCodesGetInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling subscriptionOfferCodesGetInstance.");
            }
            const queryParameters = {};
            if (requestParameters.fieldsSubscriptionOfferCodes) {
                queryParameters["fields[subscriptionOfferCodes]"] = requestParameters.fieldsSubscriptionOfferCodes.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.include) {
                queryParameters["include"] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsSubscriptionOfferCodeCustomCodes) {
                queryParameters["fields[subscriptionOfferCodeCustomCodes]"] = requestParameters.fieldsSubscriptionOfferCodeCustomCodes.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsSubscriptionOfferCodeOneTimeUseCodes) {
                queryParameters["fields[subscriptionOfferCodeOneTimeUseCodes]"] = requestParameters.fieldsSubscriptionOfferCodeOneTimeUseCodes.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsSubscriptionOfferCodePrices) {
                queryParameters["fields[subscriptionOfferCodePrices]"] = requestParameters.fieldsSubscriptionOfferCodePrices.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.limitCustomCodes !== undefined) {
                queryParameters["limit[customCodes]"] = requestParameters.limitCustomCodes;
            }
            if (requestParameters.limitOneTimeUseCodes !== undefined) {
                queryParameters["limit[oneTimeUseCodes]"] = requestParameters.limitOneTimeUseCodes;
            }
            if (requestParameters.limitPrices !== undefined) {
                queryParameters["limit[prices]"] = requestParameters.limitPrices;
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
                path: `/v1/subscriptionOfferCodes/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.SubscriptionOfferCodeResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    subscriptionOfferCodesGetInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.subscriptionOfferCodesGetInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    subscriptionOfferCodesOneTimeUseCodesGetToManyRelatedRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling subscriptionOfferCodesOneTimeUseCodesGetToManyRelated.");
            }
            const queryParameters = {};
            if (requestParameters.fieldsSubscriptionOfferCodes) {
                queryParameters["fields[subscriptionOfferCodes]"] = requestParameters.fieldsSubscriptionOfferCodes.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsSubscriptionOfferCodeOneTimeUseCodes) {
                queryParameters["fields[subscriptionOfferCodeOneTimeUseCodes]"] = requestParameters.fieldsSubscriptionOfferCodeOneTimeUseCodes.join(runtime.COLLECTION_FORMATS["csv"]);
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
                path: `/v1/subscriptionOfferCodes/{id}/oneTimeUseCodes`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.SubscriptionOfferCodeOneTimeUseCodesResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    subscriptionOfferCodesOneTimeUseCodesGetToManyRelated(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.subscriptionOfferCodesOneTimeUseCodesGetToManyRelatedRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    subscriptionOfferCodesPricesGetToManyRelatedRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling subscriptionOfferCodesPricesGetToManyRelated.");
            }
            const queryParameters = {};
            if (requestParameters.filterTerritory) {
                queryParameters["filter[territory]"] = requestParameters.filterTerritory.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsSubscriptionPricePoints) {
                queryParameters["fields[subscriptionPricePoints]"] = requestParameters.fieldsSubscriptionPricePoints.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsTerritories) {
                queryParameters["fields[territories]"] = requestParameters.fieldsTerritories.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsSubscriptionOfferCodePrices) {
                queryParameters["fields[subscriptionOfferCodePrices]"] = requestParameters.fieldsSubscriptionOfferCodePrices.join(runtime.COLLECTION_FORMATS["csv"]);
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
                path: `/v1/subscriptionOfferCodes/{id}/prices`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.SubscriptionOfferCodePricesResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    subscriptionOfferCodesPricesGetToManyRelated(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.subscriptionOfferCodesPricesGetToManyRelatedRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    subscriptionOfferCodesUpdateInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling subscriptionOfferCodesUpdateInstance.");
            }
            if (requestParameters.subscriptionOfferCodeUpdateRequest === null || requestParameters.subscriptionOfferCodeUpdateRequest === undefined) {
                throw new runtime.RequiredError("subscriptionOfferCodeUpdateRequest", "Required parameter requestParameters.subscriptionOfferCodeUpdateRequest was null or undefined when calling subscriptionOfferCodesUpdateInstance.");
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
                path: `/v1/subscriptionOfferCodes/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "PATCH",
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.SubscriptionOfferCodeUpdateRequestToJSON)(requestParameters.subscriptionOfferCodeUpdateRequest)
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.SubscriptionOfferCodeResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    subscriptionOfferCodesUpdateInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.subscriptionOfferCodesUpdateInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.SubscriptionOfferCodesApi = SubscriptionOfferCodesApi;
/**
 * @export
 */
exports.SubscriptionOfferCodesCustomCodesGetToManyRelatedFieldsSubscriptionOfferCodeCustomCodesEnum = {
    Active: "active",
    CreatedDate: "createdDate",
    CustomCode: "customCode",
    ExpirationDate: "expirationDate",
    NumberOfCodes: "numberOfCodes",
    OfferCode: "offerCode"
};
/**
 * @export
 */
exports.SubscriptionOfferCodesCustomCodesGetToManyRelatedFieldsSubscriptionOfferCodesEnum = {
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
exports.SubscriptionOfferCodesCustomCodesGetToManyRelatedIncludeEnum = {
    OfferCode: "offerCode"
};
/**
 * @export
 */
exports.SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodesEnum = {
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
exports.SubscriptionOfferCodesGetInstanceIncludeEnum = {
    CustomCodes: "customCodes",
    OneTimeUseCodes: "oneTimeUseCodes",
    Prices: "prices",
    Subscription: "subscription"
};
/**
 * @export
 */
exports.SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodeCustomCodesEnum = {
    Active: "active",
    CreatedDate: "createdDate",
    CustomCode: "customCode",
    ExpirationDate: "expirationDate",
    NumberOfCodes: "numberOfCodes",
    OfferCode: "offerCode"
};
/**
 * @export
 */
exports.SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodeOneTimeUseCodesEnum = {
    Active: "active",
    CreatedDate: "createdDate",
    ExpirationDate: "expirationDate",
    NumberOfCodes: "numberOfCodes",
    OfferCode: "offerCode",
    Values: "values"
};
/**
 * @export
 */
exports.SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodePricesEnum = {
    SubscriptionPricePoint: "subscriptionPricePoint",
    Territory: "territory"
};
/**
 * @export
 */
exports.SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedFieldsSubscriptionOfferCodesEnum = {
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
exports.SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedFieldsSubscriptionOfferCodeOneTimeUseCodesEnum = {
    Active: "active",
    CreatedDate: "createdDate",
    ExpirationDate: "expirationDate",
    NumberOfCodes: "numberOfCodes",
    OfferCode: "offerCode",
    Values: "values"
};
/**
 * @export
 */
exports.SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedIncludeEnum = {
    OfferCode: "offerCode"
};
/**
 * @export
 */
exports.SubscriptionOfferCodesPricesGetToManyRelatedFieldsSubscriptionPricePointsEnum = {
    CustomerPrice: "customerPrice",
    Equalizations: "equalizations",
    Proceeds: "proceeds",
    ProceedsYear2: "proceedsYear2",
    Subscription: "subscription",
    Territory: "territory"
};
/**
 * @export
 */
exports.SubscriptionOfferCodesPricesGetToManyRelatedFieldsTerritoriesEnum = {
    Currency: "currency"
};
/**
 * @export
 */
exports.SubscriptionOfferCodesPricesGetToManyRelatedFieldsSubscriptionOfferCodePricesEnum = {
    SubscriptionPricePoint: "subscriptionPricePoint",
    Territory: "territory"
};
/**
 * @export
 */
exports.SubscriptionOfferCodesPricesGetToManyRelatedIncludeEnum = {
    SubscriptionPricePoint: "subscriptionPricePoint",
    Territory: "territory"
};
