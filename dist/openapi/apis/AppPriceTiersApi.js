"use strict";
/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.2
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
exports.AppPriceTiersPricePointsGetToManyRelatedIncludeEnum = exports.AppPriceTiersPricePointsGetToManyRelatedFieldsTerritoriesEnum = exports.AppPriceTiersPricePointsGetToManyRelatedFieldsAppPricePointsEnum = exports.AppPriceTiersPricePointsGetToManyRelatedFieldsAppPriceTiersEnum = exports.AppPriceTiersGetInstanceFieldsAppPricePointsEnum = exports.AppPriceTiersGetInstanceIncludeEnum = exports.AppPriceTiersGetInstanceFieldsAppPriceTiersEnum = exports.AppPriceTiersGetCollectionFieldsAppPricePointsEnum = exports.AppPriceTiersGetCollectionIncludeEnum = exports.AppPriceTiersGetCollectionFieldsAppPriceTiersEnum = exports.AppPriceTiersApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class AppPriceTiersApi extends runtime.BaseAPI {
    /**
     */
    appPriceTiersGetCollectionRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.filterId) {
                queryParameters['filter[id]'] = requestParameters.filterId.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsAppPriceTiers) {
                queryParameters['fields[appPriceTiers]'] = requestParameters.fieldsAppPriceTiers.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.limit !== undefined) {
                queryParameters['limit'] = requestParameters.limit;
            }
            if (requestParameters.include) {
                queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsAppPricePoints) {
                queryParameters['fields[appPricePoints]'] = requestParameters.fieldsAppPricePoints.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.limitPricePoints !== undefined) {
                queryParameters['limit[pricePoints]'] = requestParameters.limitPricePoints;
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
                path: `/v1/appPriceTiers`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AppPriceTiersResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    appPriceTiersGetCollection() {
        return __awaiter(this, arguments, void 0, function* (requestParameters = {}, initOverrides) {
            const response = yield this.appPriceTiersGetCollectionRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    appPriceTiersGetInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling appPriceTiersGetInstance.');
            }
            const queryParameters = {};
            if (requestParameters.fieldsAppPriceTiers) {
                queryParameters['fields[appPriceTiers]'] = requestParameters.fieldsAppPriceTiers.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.include) {
                queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsAppPricePoints) {
                queryParameters['fields[appPricePoints]'] = requestParameters.fieldsAppPricePoints.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.limitPricePoints !== undefined) {
                queryParameters['limit[pricePoints]'] = requestParameters.limitPricePoints;
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
                path: `/v1/appPriceTiers/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AppPriceTierResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    appPriceTiersGetInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.appPriceTiersGetInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    appPriceTiersPricePointsGetToManyRelatedRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling appPriceTiersPricePointsGetToManyRelated.');
            }
            const queryParameters = {};
            if (requestParameters.filterTerritory) {
                queryParameters['filter[territory]'] = requestParameters.filterTerritory.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsAppPriceTiers) {
                queryParameters['fields[appPriceTiers]'] = requestParameters.fieldsAppPriceTiers.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsAppPricePoints) {
                queryParameters['fields[appPricePoints]'] = requestParameters.fieldsAppPricePoints.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsTerritories) {
                queryParameters['fields[territories]'] = requestParameters.fieldsTerritories.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.limit !== undefined) {
                queryParameters['limit'] = requestParameters.limit;
            }
            if (requestParameters.include) {
                queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
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
                path: `/v1/appPriceTiers/{id}/pricePoints`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AppPricePointsResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    appPriceTiersPricePointsGetToManyRelated(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.appPriceTiersPricePointsGetToManyRelatedRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.AppPriceTiersApi = AppPriceTiersApi;
/**
 * @export
 */
exports.AppPriceTiersGetCollectionFieldsAppPriceTiersEnum = {
    PricePoints: 'pricePoints'
};
/**
 * @export
 */
exports.AppPriceTiersGetCollectionIncludeEnum = {
    PricePoints: 'pricePoints'
};
/**
 * @export
 */
exports.AppPriceTiersGetCollectionFieldsAppPricePointsEnum = {
    CustomerPrice: 'customerPrice',
    PriceTier: 'priceTier',
    Proceeds: 'proceeds',
    Territory: 'territory'
};
/**
 * @export
 */
exports.AppPriceTiersGetInstanceFieldsAppPriceTiersEnum = {
    PricePoints: 'pricePoints'
};
/**
 * @export
 */
exports.AppPriceTiersGetInstanceIncludeEnum = {
    PricePoints: 'pricePoints'
};
/**
 * @export
 */
exports.AppPriceTiersGetInstanceFieldsAppPricePointsEnum = {
    CustomerPrice: 'customerPrice',
    PriceTier: 'priceTier',
    Proceeds: 'proceeds',
    Territory: 'territory'
};
/**
 * @export
 */
exports.AppPriceTiersPricePointsGetToManyRelatedFieldsAppPriceTiersEnum = {
    PricePoints: 'pricePoints'
};
/**
 * @export
 */
exports.AppPriceTiersPricePointsGetToManyRelatedFieldsAppPricePointsEnum = {
    CustomerPrice: 'customerPrice',
    PriceTier: 'priceTier',
    Proceeds: 'proceeds',
    Territory: 'territory'
};
/**
 * @export
 */
exports.AppPriceTiersPricePointsGetToManyRelatedFieldsTerritoriesEnum = {
    Currency: 'currency'
};
/**
 * @export
 */
exports.AppPriceTiersPricePointsGetToManyRelatedIncludeEnum = {
    PriceTier: 'priceTier',
    Territory: 'territory'
};
