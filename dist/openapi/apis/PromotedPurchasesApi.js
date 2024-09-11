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
exports.PromotedPurchasesPromotionImagesGetToManyRelatedIncludeEnum = exports.PromotedPurchasesPromotionImagesGetToManyRelatedFieldsPromotedPurchaseImagesEnum = exports.PromotedPurchasesPromotionImagesGetToManyRelatedFieldsPromotedPurchasesEnum = exports.PromotedPurchasesGetInstanceFieldsPromotedPurchaseImagesEnum = exports.PromotedPurchasesGetInstanceIncludeEnum = exports.PromotedPurchasesGetInstanceFieldsPromotedPurchasesEnum = exports.PromotedPurchasesApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class PromotedPurchasesApi extends runtime.BaseAPI {
    /**
     */
    promotedPurchasesCreateInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.promotedPurchaseCreateRequest === null || requestParameters.promotedPurchaseCreateRequest === undefined) {
                throw new runtime.RequiredError("promotedPurchaseCreateRequest", "Required parameter requestParameters.promotedPurchaseCreateRequest was null or undefined when calling promotedPurchasesCreateInstance.");
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
                path: `/v1/promotedPurchases`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.PromotedPurchaseCreateRequestToJSON)(requestParameters.promotedPurchaseCreateRequest)
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.PromotedPurchaseResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    promotedPurchasesCreateInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.promotedPurchasesCreateInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    promotedPurchasesDeleteInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling promotedPurchasesDeleteInstance.");
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
                path: `/v1/promotedPurchases/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "DELETE",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     */
    promotedPurchasesDeleteInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.promotedPurchasesDeleteInstanceRaw(requestParameters, initOverrides);
        });
    }
    /**
     */
    promotedPurchasesGetInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling promotedPurchasesGetInstance.");
            }
            const queryParameters = {};
            if (requestParameters.fieldsPromotedPurchases) {
                queryParameters["fields[promotedPurchases]"] = requestParameters.fieldsPromotedPurchases.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.include) {
                queryParameters["include"] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsPromotedPurchaseImages) {
                queryParameters["fields[promotedPurchaseImages]"] = requestParameters.fieldsPromotedPurchaseImages.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.limitPromotionImages !== undefined) {
                queryParameters["limit[promotionImages]"] = requestParameters.limitPromotionImages;
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
                path: `/v1/promotedPurchases/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.PromotedPurchaseResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    promotedPurchasesGetInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.promotedPurchasesGetInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    promotedPurchasesPromotionImagesGetToManyRelatedRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling promotedPurchasesPromotionImagesGetToManyRelated.");
            }
            const queryParameters = {};
            if (requestParameters.fieldsPromotedPurchases) {
                queryParameters["fields[promotedPurchases]"] = requestParameters.fieldsPromotedPurchases.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsPromotedPurchaseImages) {
                queryParameters["fields[promotedPurchaseImages]"] = requestParameters.fieldsPromotedPurchaseImages.join(runtime.COLLECTION_FORMATS["csv"]);
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
                path: `/v1/promotedPurchases/{id}/promotionImages`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.PromotedPurchaseImagesResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    promotedPurchasesPromotionImagesGetToManyRelated(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.promotedPurchasesPromotionImagesGetToManyRelatedRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    promotedPurchasesUpdateInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling promotedPurchasesUpdateInstance.");
            }
            if (requestParameters.promotedPurchaseUpdateRequest === null || requestParameters.promotedPurchaseUpdateRequest === undefined) {
                throw new runtime.RequiredError("promotedPurchaseUpdateRequest", "Required parameter requestParameters.promotedPurchaseUpdateRequest was null or undefined when calling promotedPurchasesUpdateInstance.");
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
                path: `/v1/promotedPurchases/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "PATCH",
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.PromotedPurchaseUpdateRequestToJSON)(requestParameters.promotedPurchaseUpdateRequest)
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.PromotedPurchaseResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    promotedPurchasesUpdateInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.promotedPurchasesUpdateInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.PromotedPurchasesApi = PromotedPurchasesApi;
/**
 * @export
 */
exports.PromotedPurchasesGetInstanceFieldsPromotedPurchasesEnum = {
    App: "app",
    Enabled: "enabled",
    InAppPurchaseV2: "inAppPurchaseV2",
    PromotionImages: "promotionImages",
    State: "state",
    Subscription: "subscription",
    VisibleForAllUsers: "visibleForAllUsers"
};
/**
 * @export
 */
exports.PromotedPurchasesGetInstanceIncludeEnum = {
    InAppPurchaseV2: "inAppPurchaseV2",
    PromotionImages: "promotionImages",
    Subscription: "subscription"
};
/**
 * @export
 */
exports.PromotedPurchasesGetInstanceFieldsPromotedPurchaseImagesEnum = {
    AssetToken: "assetToken",
    AssetType: "assetType",
    FileName: "fileName",
    FileSize: "fileSize",
    ImageAsset: "imageAsset",
    PromotedPurchase: "promotedPurchase",
    SourceFileChecksum: "sourceFileChecksum",
    State: "state",
    UploadOperations: "uploadOperations",
    Uploaded: "uploaded"
};
/**
 * @export
 */
exports.PromotedPurchasesPromotionImagesGetToManyRelatedFieldsPromotedPurchasesEnum = {
    App: "app",
    Enabled: "enabled",
    InAppPurchaseV2: "inAppPurchaseV2",
    PromotionImages: "promotionImages",
    State: "state",
    Subscription: "subscription",
    VisibleForAllUsers: "visibleForAllUsers"
};
/**
 * @export
 */
exports.PromotedPurchasesPromotionImagesGetToManyRelatedFieldsPromotedPurchaseImagesEnum = {
    AssetToken: "assetToken",
    AssetType: "assetType",
    FileName: "fileName",
    FileSize: "fileSize",
    ImageAsset: "imageAsset",
    PromotedPurchase: "promotedPurchase",
    SourceFileChecksum: "sourceFileChecksum",
    State: "state",
    UploadOperations: "uploadOperations",
    Uploaded: "uploaded"
};
/**
 * @export
 */
exports.PromotedPurchasesPromotionImagesGetToManyRelatedIncludeEnum = {
    PromotedPurchase: "promotedPurchase"
};
