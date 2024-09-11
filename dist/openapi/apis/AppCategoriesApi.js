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
exports.AppCategoriesSubcategoriesGetToManyRelatedFieldsAppCategoriesEnum = exports.AppCategoriesParentGetToOneRelatedFieldsAppCategoriesEnum = exports.AppCategoriesGetInstanceIncludeEnum = exports.AppCategoriesGetInstanceFieldsAppCategoriesEnum = exports.AppCategoriesGetCollectionIncludeEnum = exports.AppCategoriesGetCollectionFieldsAppCategoriesEnum = exports.AppCategoriesGetCollectionFilterPlatformsEnum = exports.AppCategoriesApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class AppCategoriesApi extends runtime.BaseAPI {
    /**
     */
    appCategoriesGetCollectionRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.filterPlatforms) {
                queryParameters["filter[platforms]"] = requestParameters.filterPlatforms.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.existsParent !== undefined) {
                queryParameters["exists[parent]"] = requestParameters.existsParent;
            }
            if (requestParameters.fieldsAppCategories) {
                queryParameters["fields[appCategories]"] = requestParameters.fieldsAppCategories.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.limit !== undefined) {
                queryParameters["limit"] = requestParameters.limit;
            }
            if (requestParameters.include) {
                queryParameters["include"] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.limitSubcategories !== undefined) {
                queryParameters["limit[subcategories]"] = requestParameters.limitSubcategories;
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
                path: `/v1/appCategories`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AppCategoriesResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    appCategoriesGetCollection() {
        return __awaiter(this, arguments, void 0, function* (requestParameters = {}, initOverrides) {
            const response = yield this.appCategoriesGetCollectionRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    appCategoriesGetInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling appCategoriesGetInstance.");
            }
            const queryParameters = {};
            if (requestParameters.fieldsAppCategories) {
                queryParameters["fields[appCategories]"] = requestParameters.fieldsAppCategories.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.include) {
                queryParameters["include"] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.limitSubcategories !== undefined) {
                queryParameters["limit[subcategories]"] = requestParameters.limitSubcategories;
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
                path: `/v1/appCategories/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AppCategoryResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    appCategoriesGetInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.appCategoriesGetInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    appCategoriesParentGetToOneRelatedRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling appCategoriesParentGetToOneRelated.");
            }
            const queryParameters = {};
            if (requestParameters.fieldsAppCategories) {
                queryParameters["fields[appCategories]"] = requestParameters.fieldsAppCategories.join(runtime.COLLECTION_FORMATS["csv"]);
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
                path: `/v1/appCategories/{id}/parent`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AppCategoryWithoutIncludesResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    appCategoriesParentGetToOneRelated(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.appCategoriesParentGetToOneRelatedRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    appCategoriesSubcategoriesGetToManyRelatedRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling appCategoriesSubcategoriesGetToManyRelated.");
            }
            const queryParameters = {};
            if (requestParameters.fieldsAppCategories) {
                queryParameters["fields[appCategories]"] = requestParameters.fieldsAppCategories.join(runtime.COLLECTION_FORMATS["csv"]);
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
                path: `/v1/appCategories/{id}/subcategories`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AppCategoriesWithoutIncludesResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    appCategoriesSubcategoriesGetToManyRelated(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.appCategoriesSubcategoriesGetToManyRelatedRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.AppCategoriesApi = AppCategoriesApi;
/**
 * @export
 */
exports.AppCategoriesGetCollectionFilterPlatformsEnum = {
    Ios: "IOS",
    MacOs: "MAC_OS",
    TvOs: "TV_OS",
    VisionOs: "VISION_OS"
};
/**
 * @export
 */
exports.AppCategoriesGetCollectionFieldsAppCategoriesEnum = {
    Parent: "parent",
    Platforms: "platforms",
    Subcategories: "subcategories"
};
/**
 * @export
 */
exports.AppCategoriesGetCollectionIncludeEnum = {
    Parent: "parent",
    Subcategories: "subcategories"
};
/**
 * @export
 */
exports.AppCategoriesGetInstanceFieldsAppCategoriesEnum = {
    Parent: "parent",
    Platforms: "platforms",
    Subcategories: "subcategories"
};
/**
 * @export
 */
exports.AppCategoriesGetInstanceIncludeEnum = {
    Parent: "parent",
    Subcategories: "subcategories"
};
/**
 * @export
 */
exports.AppCategoriesParentGetToOneRelatedFieldsAppCategoriesEnum = {
    Parent: "parent",
    Platforms: "platforms",
    Subcategories: "subcategories"
};
/**
 * @export
 */
exports.AppCategoriesSubcategoriesGetToManyRelatedFieldsAppCategoriesEnum = {
    Parent: "parent",
    Platforms: "platforms",
    Subcategories: "subcategories"
};
