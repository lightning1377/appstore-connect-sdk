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
exports.SubscriptionAvailabilitiesGetInstanceFieldsTerritoriesEnum = exports.SubscriptionAvailabilitiesGetInstanceIncludeEnum = exports.SubscriptionAvailabilitiesGetInstanceFieldsSubscriptionAvailabilitiesEnum = exports.SubscriptionAvailabilitiesAvailableTerritoriesGetToManyRelatedFieldsTerritoriesEnum = exports.SubscriptionAvailabilitiesApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class SubscriptionAvailabilitiesApi extends runtime.BaseAPI {
    /**
     */
    subscriptionAvailabilitiesAvailableTerritoriesGetToManyRelatedRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling subscriptionAvailabilitiesAvailableTerritoriesGetToManyRelated.");
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
                path: `/v1/subscriptionAvailabilities/{id}/availableTerritories`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.TerritoriesResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    subscriptionAvailabilitiesAvailableTerritoriesGetToManyRelated(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.subscriptionAvailabilitiesAvailableTerritoriesGetToManyRelatedRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    subscriptionAvailabilitiesCreateInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.subscriptionAvailabilityCreateRequest === null || requestParameters.subscriptionAvailabilityCreateRequest === undefined) {
                throw new runtime.RequiredError("subscriptionAvailabilityCreateRequest", "Required parameter requestParameters.subscriptionAvailabilityCreateRequest was null or undefined when calling subscriptionAvailabilitiesCreateInstance.");
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
                path: `/v1/subscriptionAvailabilities`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.SubscriptionAvailabilityCreateRequestToJSON)(requestParameters.subscriptionAvailabilityCreateRequest)
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.SubscriptionAvailabilityResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    subscriptionAvailabilitiesCreateInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.subscriptionAvailabilitiesCreateInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    subscriptionAvailabilitiesGetInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling subscriptionAvailabilitiesGetInstance.");
            }
            const queryParameters = {};
            if (requestParameters.fieldsSubscriptionAvailabilities) {
                queryParameters["fields[subscriptionAvailabilities]"] = requestParameters.fieldsSubscriptionAvailabilities.join(runtime.COLLECTION_FORMATS["csv"]);
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
                path: `/v1/subscriptionAvailabilities/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.SubscriptionAvailabilityResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    subscriptionAvailabilitiesGetInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.subscriptionAvailabilitiesGetInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.SubscriptionAvailabilitiesApi = SubscriptionAvailabilitiesApi;
/**
 * @export
 */
exports.SubscriptionAvailabilitiesAvailableTerritoriesGetToManyRelatedFieldsTerritoriesEnum = {
    Currency: "currency"
};
/**
 * @export
 */
exports.SubscriptionAvailabilitiesGetInstanceFieldsSubscriptionAvailabilitiesEnum = {
    AvailableInNewTerritories: "availableInNewTerritories",
    AvailableTerritories: "availableTerritories",
    Subscription: "subscription"
};
/**
 * @export
 */
exports.SubscriptionAvailabilitiesGetInstanceIncludeEnum = {
    AvailableTerritories: "availableTerritories",
    Subscription: "subscription"
};
/**
 * @export
 */
exports.SubscriptionAvailabilitiesGetInstanceFieldsTerritoriesEnum = {
    Currency: "currency"
};
