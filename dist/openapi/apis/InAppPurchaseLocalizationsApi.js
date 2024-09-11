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
exports.InAppPurchaseLocalizationsGetInstanceIncludeEnum = exports.InAppPurchaseLocalizationsGetInstanceFieldsInAppPurchaseLocalizationsEnum = exports.InAppPurchaseLocalizationsApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class InAppPurchaseLocalizationsApi extends runtime.BaseAPI {
    /**
     */
    inAppPurchaseLocalizationsCreateInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.inAppPurchaseLocalizationCreateRequest === null || requestParameters.inAppPurchaseLocalizationCreateRequest === undefined) {
                throw new runtime.RequiredError("inAppPurchaseLocalizationCreateRequest", "Required parameter requestParameters.inAppPurchaseLocalizationCreateRequest was null or undefined when calling inAppPurchaseLocalizationsCreateInstance.");
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
                path: `/v1/inAppPurchaseLocalizations`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.InAppPurchaseLocalizationCreateRequestToJSON)(requestParameters.inAppPurchaseLocalizationCreateRequest)
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.InAppPurchaseLocalizationResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    inAppPurchaseLocalizationsCreateInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.inAppPurchaseLocalizationsCreateInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    inAppPurchaseLocalizationsDeleteInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling inAppPurchaseLocalizationsDeleteInstance.");
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
                path: `/v1/inAppPurchaseLocalizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "DELETE",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     */
    inAppPurchaseLocalizationsDeleteInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.inAppPurchaseLocalizationsDeleteInstanceRaw(requestParameters, initOverrides);
        });
    }
    /**
     */
    inAppPurchaseLocalizationsGetInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling inAppPurchaseLocalizationsGetInstance.");
            }
            const queryParameters = {};
            if (requestParameters.fieldsInAppPurchaseLocalizations) {
                queryParameters["fields[inAppPurchaseLocalizations]"] = requestParameters.fieldsInAppPurchaseLocalizations.join(runtime.COLLECTION_FORMATS["csv"]);
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
                path: `/v1/inAppPurchaseLocalizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.InAppPurchaseLocalizationResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    inAppPurchaseLocalizationsGetInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.inAppPurchaseLocalizationsGetInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    inAppPurchaseLocalizationsUpdateInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling inAppPurchaseLocalizationsUpdateInstance.");
            }
            if (requestParameters.inAppPurchaseLocalizationUpdateRequest === null || requestParameters.inAppPurchaseLocalizationUpdateRequest === undefined) {
                throw new runtime.RequiredError("inAppPurchaseLocalizationUpdateRequest", "Required parameter requestParameters.inAppPurchaseLocalizationUpdateRequest was null or undefined when calling inAppPurchaseLocalizationsUpdateInstance.");
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
                path: `/v1/inAppPurchaseLocalizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "PATCH",
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.InAppPurchaseLocalizationUpdateRequestToJSON)(requestParameters.inAppPurchaseLocalizationUpdateRequest)
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.InAppPurchaseLocalizationResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    inAppPurchaseLocalizationsUpdateInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.inAppPurchaseLocalizationsUpdateInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.InAppPurchaseLocalizationsApi = InAppPurchaseLocalizationsApi;
/**
 * @export
 */
exports.InAppPurchaseLocalizationsGetInstanceFieldsInAppPurchaseLocalizationsEnum = {
    Description: "description",
    InAppPurchaseV2: "inAppPurchaseV2",
    Locale: "locale",
    Name: "name",
    State: "state"
};
/**
 * @export
 */
exports.InAppPurchaseLocalizationsGetInstanceIncludeEnum = {
    InAppPurchaseV2: "inAppPurchaseV2"
};
