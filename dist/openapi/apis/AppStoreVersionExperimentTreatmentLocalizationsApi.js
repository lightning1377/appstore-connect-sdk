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
exports.AppStoreVersionExperimentTreatmentLocalizationsGetInstanceFieldsAppPreviewSetsEnum = exports.AppStoreVersionExperimentTreatmentLocalizationsGetInstanceFieldsAppScreenshotSetsEnum = exports.AppStoreVersionExperimentTreatmentLocalizationsGetInstanceIncludeEnum = exports.AppStoreVersionExperimentTreatmentLocalizationsGetInstanceFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum = exports.AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedIncludeEnum = exports.AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppStoreVersionLocalizationsEnum = exports.AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppScreenshotsEnum = exports.AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum = exports.AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum = exports.AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppScreenshotSetsEnum = exports.AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedFilterScreenshotDisplayTypeEnum = exports.AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedIncludeEnum = exports.AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppStoreVersionLocalizationsEnum = exports.AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppPreviewSetsEnum = exports.AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppPreviewsEnum = exports.AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum = exports.AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum = exports.AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedFilterPreviewTypeEnum = exports.AppStoreVersionExperimentTreatmentLocalizationsApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class AppStoreVersionExperimentTreatmentLocalizationsApi extends runtime.BaseAPI {
    /**
     */
    appStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling appStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelated.");
            }
            const queryParameters = {};
            if (requestParameters.filterPreviewType) {
                queryParameters["filter[previewType]"] = requestParameters.filterPreviewType.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.filterAppCustomProductPageLocalization) {
                queryParameters["filter[appCustomProductPageLocalization]"] = requestParameters.filterAppCustomProductPageLocalization.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.filterAppStoreVersionLocalization) {
                queryParameters["filter[appStoreVersionLocalization]"] = requestParameters.filterAppStoreVersionLocalization.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsAppCustomProductPageLocalizations) {
                queryParameters["fields[appCustomProductPageLocalizations]"] = requestParameters.fieldsAppCustomProductPageLocalizations.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsAppStoreVersionExperimentTreatmentLocalizations) {
                queryParameters["fields[appStoreVersionExperimentTreatmentLocalizations]"] = requestParameters.fieldsAppStoreVersionExperimentTreatmentLocalizations.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsAppPreviews) {
                queryParameters["fields[appPreviews]"] = requestParameters.fieldsAppPreviews.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsAppPreviewSets) {
                queryParameters["fields[appPreviewSets]"] = requestParameters.fieldsAppPreviewSets.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsAppStoreVersionLocalizations) {
                queryParameters["fields[appStoreVersionLocalizations]"] = requestParameters.fieldsAppStoreVersionLocalizations.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.limit !== undefined) {
                queryParameters["limit"] = requestParameters.limit;
            }
            if (requestParameters.limitAppPreviews !== undefined) {
                queryParameters["limit[appPreviews]"] = requestParameters.limitAppPreviews;
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
                path: `/v1/appStoreVersionExperimentTreatmentLocalizations/{id}/appPreviewSets`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AppPreviewSetsResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    appStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelated(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.appStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    appStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling appStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelated.");
            }
            const queryParameters = {};
            if (requestParameters.filterScreenshotDisplayType) {
                queryParameters["filter[screenshotDisplayType]"] = requestParameters.filterScreenshotDisplayType.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.filterAppCustomProductPageLocalization) {
                queryParameters["filter[appCustomProductPageLocalization]"] = requestParameters.filterAppCustomProductPageLocalization.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.filterAppStoreVersionLocalization) {
                queryParameters["filter[appStoreVersionLocalization]"] = requestParameters.filterAppStoreVersionLocalization.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsAppScreenshotSets) {
                queryParameters["fields[appScreenshotSets]"] = requestParameters.fieldsAppScreenshotSets.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsAppCustomProductPageLocalizations) {
                queryParameters["fields[appCustomProductPageLocalizations]"] = requestParameters.fieldsAppCustomProductPageLocalizations.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsAppStoreVersionExperimentTreatmentLocalizations) {
                queryParameters["fields[appStoreVersionExperimentTreatmentLocalizations]"] = requestParameters.fieldsAppStoreVersionExperimentTreatmentLocalizations.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsAppScreenshots) {
                queryParameters["fields[appScreenshots]"] = requestParameters.fieldsAppScreenshots.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsAppStoreVersionLocalizations) {
                queryParameters["fields[appStoreVersionLocalizations]"] = requestParameters.fieldsAppStoreVersionLocalizations.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.limit !== undefined) {
                queryParameters["limit"] = requestParameters.limit;
            }
            if (requestParameters.limitAppScreenshots !== undefined) {
                queryParameters["limit[appScreenshots]"] = requestParameters.limitAppScreenshots;
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
                path: `/v1/appStoreVersionExperimentTreatmentLocalizations/{id}/appScreenshotSets`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AppScreenshotSetsResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    appStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelated(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.appStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    appStoreVersionExperimentTreatmentLocalizationsCreateInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.appStoreVersionExperimentTreatmentLocalizationCreateRequest === null || requestParameters.appStoreVersionExperimentTreatmentLocalizationCreateRequest === undefined) {
                throw new runtime.RequiredError("appStoreVersionExperimentTreatmentLocalizationCreateRequest", "Required parameter requestParameters.appStoreVersionExperimentTreatmentLocalizationCreateRequest was null or undefined when calling appStoreVersionExperimentTreatmentLocalizationsCreateInstance.");
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
                path: `/v1/appStoreVersionExperimentTreatmentLocalizations`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.AppStoreVersionExperimentTreatmentLocalizationCreateRequestToJSON)(requestParameters.appStoreVersionExperimentTreatmentLocalizationCreateRequest)
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AppStoreVersionExperimentTreatmentLocalizationResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    appStoreVersionExperimentTreatmentLocalizationsCreateInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.appStoreVersionExperimentTreatmentLocalizationsCreateInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    appStoreVersionExperimentTreatmentLocalizationsDeleteInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling appStoreVersionExperimentTreatmentLocalizationsDeleteInstance.");
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
                path: `/v1/appStoreVersionExperimentTreatmentLocalizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "DELETE",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     */
    appStoreVersionExperimentTreatmentLocalizationsDeleteInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.appStoreVersionExperimentTreatmentLocalizationsDeleteInstanceRaw(requestParameters, initOverrides);
        });
    }
    /**
     */
    appStoreVersionExperimentTreatmentLocalizationsGetInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError("id", "Required parameter requestParameters.id was null or undefined when calling appStoreVersionExperimentTreatmentLocalizationsGetInstance.");
            }
            const queryParameters = {};
            if (requestParameters.fieldsAppStoreVersionExperimentTreatmentLocalizations) {
                queryParameters["fields[appStoreVersionExperimentTreatmentLocalizations]"] = requestParameters.fieldsAppStoreVersionExperimentTreatmentLocalizations.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.include) {
                queryParameters["include"] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsAppScreenshotSets) {
                queryParameters["fields[appScreenshotSets]"] = requestParameters.fieldsAppScreenshotSets.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsAppPreviewSets) {
                queryParameters["fields[appPreviewSets]"] = requestParameters.fieldsAppPreviewSets.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.limitAppPreviewSets !== undefined) {
                queryParameters["limit[appPreviewSets]"] = requestParameters.limitAppPreviewSets;
            }
            if (requestParameters.limitAppScreenshotSets !== undefined) {
                queryParameters["limit[appScreenshotSets]"] = requestParameters.limitAppScreenshotSets;
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
                path: `/v1/appStoreVersionExperimentTreatmentLocalizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: "GET",
                headers: headerParameters,
                query: queryParameters
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AppStoreVersionExperimentTreatmentLocalizationResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    appStoreVersionExperimentTreatmentLocalizationsGetInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.appStoreVersionExperimentTreatmentLocalizationsGetInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.AppStoreVersionExperimentTreatmentLocalizationsApi = AppStoreVersionExperimentTreatmentLocalizationsApi;
/**
 * @export
 */
exports.AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedFilterPreviewTypeEnum = {
    Iphone67: "IPHONE_67",
    Iphone61: "IPHONE_61",
    Iphone65: "IPHONE_65",
    Iphone58: "IPHONE_58",
    Iphone55: "IPHONE_55",
    Iphone47: "IPHONE_47",
    Iphone40: "IPHONE_40",
    Iphone35: "IPHONE_35",
    IpadPro3Gen129: "IPAD_PRO_3GEN_129",
    IpadPro3Gen11: "IPAD_PRO_3GEN_11",
    IpadPro129: "IPAD_PRO_129",
    Ipad105: "IPAD_105",
    Ipad97: "IPAD_97",
    Desktop: "DESKTOP",
    AppleTv: "APPLE_TV",
    AppleVisionPro: "APPLE_VISION_PRO"
};
/**
 * @export
 */
exports.AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum = {
    AppCustomProductPageVersion: "appCustomProductPageVersion",
    AppPreviewSets: "appPreviewSets",
    AppScreenshotSets: "appScreenshotSets",
    Locale: "locale",
    PromotionalText: "promotionalText"
};
/**
 * @export
 */
exports.AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum = {
    AppPreviewSets: "appPreviewSets",
    AppScreenshotSets: "appScreenshotSets",
    AppStoreVersionExperimentTreatment: "appStoreVersionExperimentTreatment",
    Locale: "locale"
};
/**
 * @export
 */
exports.AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppPreviewsEnum = {
    AppPreviewSet: "appPreviewSet",
    AssetDeliveryState: "assetDeliveryState",
    FileName: "fileName",
    FileSize: "fileSize",
    MimeType: "mimeType",
    PreviewFrameTimeCode: "previewFrameTimeCode",
    PreviewImage: "previewImage",
    SourceFileChecksum: "sourceFileChecksum",
    UploadOperations: "uploadOperations",
    Uploaded: "uploaded",
    VideoUrl: "videoUrl"
};
/**
 * @export
 */
exports.AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppPreviewSetsEnum = {
    AppCustomProductPageLocalization: "appCustomProductPageLocalization",
    AppPreviews: "appPreviews",
    AppStoreVersionExperimentTreatmentLocalization: "appStoreVersionExperimentTreatmentLocalization",
    AppStoreVersionLocalization: "appStoreVersionLocalization",
    PreviewType: "previewType"
};
/**
 * @export
 */
exports.AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppStoreVersionLocalizationsEnum = {
    AppPreviewSets: "appPreviewSets",
    AppScreenshotSets: "appScreenshotSets",
    AppStoreVersion: "appStoreVersion",
    Description: "description",
    Keywords: "keywords",
    Locale: "locale",
    MarketingUrl: "marketingUrl",
    PromotionalText: "promotionalText",
    SupportUrl: "supportUrl",
    WhatsNew: "whatsNew"
};
/**
 * @export
 */
exports.AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedIncludeEnum = {
    AppCustomProductPageLocalization: "appCustomProductPageLocalization",
    AppPreviews: "appPreviews",
    AppStoreVersionExperimentTreatmentLocalization: "appStoreVersionExperimentTreatmentLocalization",
    AppStoreVersionLocalization: "appStoreVersionLocalization"
};
/**
 * @export
 */
exports.AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedFilterScreenshotDisplayTypeEnum = {
    AppIphone67: "APP_IPHONE_67",
    AppIphone61: "APP_IPHONE_61",
    AppIphone65: "APP_IPHONE_65",
    AppIphone58: "APP_IPHONE_58",
    AppIphone55: "APP_IPHONE_55",
    AppIphone47: "APP_IPHONE_47",
    AppIphone40: "APP_IPHONE_40",
    AppIphone35: "APP_IPHONE_35",
    AppIpadPro3Gen129: "APP_IPAD_PRO_3GEN_129",
    AppIpadPro3Gen11: "APP_IPAD_PRO_3GEN_11",
    AppIpadPro129: "APP_IPAD_PRO_129",
    AppIpad105: "APP_IPAD_105",
    AppIpad97: "APP_IPAD_97",
    AppDesktop: "APP_DESKTOP",
    AppWatchUltra: "APP_WATCH_ULTRA",
    AppWatchSeries7: "APP_WATCH_SERIES_7",
    AppWatchSeries4: "APP_WATCH_SERIES_4",
    AppWatchSeries3: "APP_WATCH_SERIES_3",
    AppAppleTv: "APP_APPLE_TV",
    AppAppleVisionPro: "APP_APPLE_VISION_PRO",
    ImessageAppIphone67: "IMESSAGE_APP_IPHONE_67",
    ImessageAppIphone61: "IMESSAGE_APP_IPHONE_61",
    ImessageAppIphone65: "IMESSAGE_APP_IPHONE_65",
    ImessageAppIphone58: "IMESSAGE_APP_IPHONE_58",
    ImessageAppIphone55: "IMESSAGE_APP_IPHONE_55",
    ImessageAppIphone47: "IMESSAGE_APP_IPHONE_47",
    ImessageAppIphone40: "IMESSAGE_APP_IPHONE_40",
    ImessageAppIpadPro3Gen129: "IMESSAGE_APP_IPAD_PRO_3GEN_129",
    ImessageAppIpadPro3Gen11: "IMESSAGE_APP_IPAD_PRO_3GEN_11",
    ImessageAppIpadPro129: "IMESSAGE_APP_IPAD_PRO_129",
    ImessageAppIpad105: "IMESSAGE_APP_IPAD_105",
    ImessageAppIpad97: "IMESSAGE_APP_IPAD_97"
};
/**
 * @export
 */
exports.AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppScreenshotSetsEnum = {
    AppCustomProductPageLocalization: "appCustomProductPageLocalization",
    AppScreenshots: "appScreenshots",
    AppStoreVersionExperimentTreatmentLocalization: "appStoreVersionExperimentTreatmentLocalization",
    AppStoreVersionLocalization: "appStoreVersionLocalization",
    ScreenshotDisplayType: "screenshotDisplayType"
};
/**
 * @export
 */
exports.AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum = {
    AppCustomProductPageVersion: "appCustomProductPageVersion",
    AppPreviewSets: "appPreviewSets",
    AppScreenshotSets: "appScreenshotSets",
    Locale: "locale",
    PromotionalText: "promotionalText"
};
/**
 * @export
 */
exports.AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum = {
    AppPreviewSets: "appPreviewSets",
    AppScreenshotSets: "appScreenshotSets",
    AppStoreVersionExperimentTreatment: "appStoreVersionExperimentTreatment",
    Locale: "locale"
};
/**
 * @export
 */
exports.AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppScreenshotsEnum = {
    AppScreenshotSet: "appScreenshotSet",
    AssetDeliveryState: "assetDeliveryState",
    AssetToken: "assetToken",
    AssetType: "assetType",
    FileName: "fileName",
    FileSize: "fileSize",
    ImageAsset: "imageAsset",
    SourceFileChecksum: "sourceFileChecksum",
    UploadOperations: "uploadOperations",
    Uploaded: "uploaded"
};
/**
 * @export
 */
exports.AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppStoreVersionLocalizationsEnum = {
    AppPreviewSets: "appPreviewSets",
    AppScreenshotSets: "appScreenshotSets",
    AppStoreVersion: "appStoreVersion",
    Description: "description",
    Keywords: "keywords",
    Locale: "locale",
    MarketingUrl: "marketingUrl",
    PromotionalText: "promotionalText",
    SupportUrl: "supportUrl",
    WhatsNew: "whatsNew"
};
/**
 * @export
 */
exports.AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedIncludeEnum = {
    AppCustomProductPageLocalization: "appCustomProductPageLocalization",
    AppScreenshots: "appScreenshots",
    AppStoreVersionExperimentTreatmentLocalization: "appStoreVersionExperimentTreatmentLocalization",
    AppStoreVersionLocalization: "appStoreVersionLocalization"
};
/**
 * @export
 */
exports.AppStoreVersionExperimentTreatmentLocalizationsGetInstanceFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum = {
    AppPreviewSets: "appPreviewSets",
    AppScreenshotSets: "appScreenshotSets",
    AppStoreVersionExperimentTreatment: "appStoreVersionExperimentTreatment",
    Locale: "locale"
};
/**
 * @export
 */
exports.AppStoreVersionExperimentTreatmentLocalizationsGetInstanceIncludeEnum = {
    AppPreviewSets: "appPreviewSets",
    AppScreenshotSets: "appScreenshotSets",
    AppStoreVersionExperimentTreatment: "appStoreVersionExperimentTreatment"
};
/**
 * @export
 */
exports.AppStoreVersionExperimentTreatmentLocalizationsGetInstanceFieldsAppScreenshotSetsEnum = {
    AppCustomProductPageLocalization: "appCustomProductPageLocalization",
    AppScreenshots: "appScreenshots",
    AppStoreVersionExperimentTreatmentLocalization: "appStoreVersionExperimentTreatmentLocalization",
    AppStoreVersionLocalization: "appStoreVersionLocalization",
    ScreenshotDisplayType: "screenshotDisplayType"
};
/**
 * @export
 */
exports.AppStoreVersionExperimentTreatmentLocalizationsGetInstanceFieldsAppPreviewSetsEnum = {
    AppCustomProductPageLocalization: "appCustomProductPageLocalization",
    AppPreviews: "appPreviews",
    AppStoreVersionExperimentTreatmentLocalization: "appStoreVersionExperimentTreatmentLocalization",
    AppStoreVersionLocalization: "appStoreVersionLocalization",
    PreviewType: "previewType"
};
