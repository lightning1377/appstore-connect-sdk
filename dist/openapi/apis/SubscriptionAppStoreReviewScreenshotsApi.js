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
exports.SubscriptionAppStoreReviewScreenshotsGetInstanceIncludeEnum = exports.SubscriptionAppStoreReviewScreenshotsGetInstanceFieldsSubscriptionAppStoreReviewScreenshotsEnum = exports.SubscriptionAppStoreReviewScreenshotsApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class SubscriptionAppStoreReviewScreenshotsApi extends runtime.BaseAPI {
    /**
     */
    subscriptionAppStoreReviewScreenshotsCreateInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.subscriptionAppStoreReviewScreenshotCreateRequest === null || requestParameters.subscriptionAppStoreReviewScreenshotCreateRequest === undefined) {
                throw new runtime.RequiredError("subscriptionAppStoreReviewScreenshotCreateRequest", "Required parameter requestParameters.subscriptionAppStoreReviewScreenshotCreateRequest was null or undefined when calling subscriptionAppStoreReviewScreenshotsCreateInstance.");
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
                path: `/v1/subscriptionAppStoreReviewScreenshots`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.SubscriptionAppStoreReviewScreenshotCreateRequestToJSON)(requestParameters.subscriptionAppStoreReviewScreenshotCreateRequest)
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.SubscriptionAppStoreReviewScreenshotResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    subscriptionAppStoreReviewScreenshotsCreateInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.subscriptionAppStoreReviewScreenshotsCreateInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    subscriptionAppStoreReviewScreenshotsDeleteInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling subscriptionAppStoreReviewScreenshotsDeleteInstance.");
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
                path: `/v1/subscriptionAppStoreReviewScreenshots/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "DELETE",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     */
    subscriptionAppStoreReviewScreenshotsDeleteInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.subscriptionAppStoreReviewScreenshotsDeleteInstanceRaw(requestParameters, initOverrides);
        });
    }
    /**
     */
    subscriptionAppStoreReviewScreenshotsGetInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling subscriptionAppStoreReviewScreenshotsGetInstance.");
            }
            const queryParameters = {};
            if (requestParameters.fieldsSubscriptionAppStoreReviewScreenshots) {
                queryParameters["fields[subscriptionAppStoreReviewScreenshots]"] = requestParameters.fieldsSubscriptionAppStoreReviewScreenshots.join(runtime.COLLECTION_FORMATS["csv"]);
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
                path: `/v1/subscriptionAppStoreReviewScreenshots/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.SubscriptionAppStoreReviewScreenshotResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    subscriptionAppStoreReviewScreenshotsGetInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.subscriptionAppStoreReviewScreenshotsGetInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    subscriptionAppStoreReviewScreenshotsUpdateInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling subscriptionAppStoreReviewScreenshotsUpdateInstance.");
            }
            if (requestParameters.subscriptionAppStoreReviewScreenshotUpdateRequest === null || requestParameters.subscriptionAppStoreReviewScreenshotUpdateRequest === undefined) {
                throw new runtime.RequiredError("subscriptionAppStoreReviewScreenshotUpdateRequest", "Required parameter requestParameters.subscriptionAppStoreReviewScreenshotUpdateRequest was null or undefined when calling subscriptionAppStoreReviewScreenshotsUpdateInstance.");
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
                path: `/v1/subscriptionAppStoreReviewScreenshots/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "PATCH",
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.SubscriptionAppStoreReviewScreenshotUpdateRequestToJSON)(requestParameters.subscriptionAppStoreReviewScreenshotUpdateRequest)
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.SubscriptionAppStoreReviewScreenshotResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    subscriptionAppStoreReviewScreenshotsUpdateInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.subscriptionAppStoreReviewScreenshotsUpdateInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.SubscriptionAppStoreReviewScreenshotsApi = SubscriptionAppStoreReviewScreenshotsApi;
/**
 * @export
 */
exports.SubscriptionAppStoreReviewScreenshotsGetInstanceFieldsSubscriptionAppStoreReviewScreenshotsEnum = {
    AssetDeliveryState: "assetDeliveryState",
    AssetToken: "assetToken",
    AssetType: "assetType",
    FileName: "fileName",
    FileSize: "fileSize",
    ImageAsset: "imageAsset",
    SourceFileChecksum: "sourceFileChecksum",
    Subscription: "subscription",
    UploadOperations: "uploadOperations",
    Uploaded: "uploaded"
};
/**
 * @export
 */
exports.SubscriptionAppStoreReviewScreenshotsGetInstanceIncludeEnum = {
    Subscription: "subscription"
};
