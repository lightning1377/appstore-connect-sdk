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
exports.InAppPurchaseAvailabilitiesGetInstanceFieldsTerritoriesEnum = exports.InAppPurchaseAvailabilitiesGetInstanceIncludeEnum = exports.InAppPurchaseAvailabilitiesGetInstanceFieldsInAppPurchaseAvailabilitiesEnum = exports.InAppPurchaseAvailabilitiesAvailableTerritoriesGetToManyRelatedFieldsTerritoriesEnum = exports.InAppPurchaseAvailabilitiesApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class InAppPurchaseAvailabilitiesApi extends runtime.BaseAPI {
    /**
     */
    inAppPurchaseAvailabilitiesAvailableTerritoriesGetToManyRelatedRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling inAppPurchaseAvailabilitiesAvailableTerritoriesGetToManyRelated.");
            }
            const queryParameters = {};
            if (requestParameters.fieldsTerritories) {
                queryParameters["fields[territories]"] = requestParameters.fieldsTerritories.join(runtime.COLLECTION_FORMATS["csv"]);
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
                path: `/v1/inAppPurchaseAvailabilities/{id}/availableTerritories`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.TerritoriesResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    inAppPurchaseAvailabilitiesAvailableTerritoriesGetToManyRelated(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.inAppPurchaseAvailabilitiesAvailableTerritoriesGetToManyRelatedRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    inAppPurchaseAvailabilitiesCreateInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.inAppPurchaseAvailabilityCreateRequest === null || requestParameters.inAppPurchaseAvailabilityCreateRequest === undefined) {
                throw new runtime.RequiredError("inAppPurchaseAvailabilityCreateRequest", "Required parameter requestParameters.inAppPurchaseAvailabilityCreateRequest was null or undefined when calling inAppPurchaseAvailabilitiesCreateInstance.");
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
                path: `/v1/inAppPurchaseAvailabilities`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.InAppPurchaseAvailabilityCreateRequestToJSON)(requestParameters.inAppPurchaseAvailabilityCreateRequest)
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.InAppPurchaseAvailabilityResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    inAppPurchaseAvailabilitiesCreateInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.inAppPurchaseAvailabilitiesCreateInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    inAppPurchaseAvailabilitiesGetInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling inAppPurchaseAvailabilitiesGetInstance.");
            }
            const queryParameters = {};
            if (requestParameters.fieldsInAppPurchaseAvailabilities) {
                queryParameters["fields[inAppPurchaseAvailabilities]"] = requestParameters.fieldsInAppPurchaseAvailabilities.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.include) {
                queryParameters["include"] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsTerritories) {
                queryParameters["fields[territories]"] = requestParameters.fieldsTerritories.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.limitAvailableTerritories !== undefined) {
                queryParameters["limit[availableTerritories]"] = requestParameters.limitAvailableTerritories;
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
                path: `/v1/inAppPurchaseAvailabilities/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.InAppPurchaseAvailabilityResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    inAppPurchaseAvailabilitiesGetInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.inAppPurchaseAvailabilitiesGetInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.InAppPurchaseAvailabilitiesApi = InAppPurchaseAvailabilitiesApi;
/**
 * @export
 */
exports.InAppPurchaseAvailabilitiesAvailableTerritoriesGetToManyRelatedFieldsTerritoriesEnum = {
    Currency: "currency"
};
/**
 * @export
 */
exports.InAppPurchaseAvailabilitiesGetInstanceFieldsInAppPurchaseAvailabilitiesEnum = {
    AvailableInNewTerritories: "availableInNewTerritories",
    AvailableTerritories: "availableTerritories",
    InAppPurchase: "inAppPurchase"
};
/**
 * @export
 */
exports.InAppPurchaseAvailabilitiesGetInstanceIncludeEnum = {
    AvailableTerritories: "availableTerritories"
};
/**
 * @export
 */
exports.InAppPurchaseAvailabilitiesGetInstanceFieldsTerritoriesEnum = {
    Currency: "currency"
};
