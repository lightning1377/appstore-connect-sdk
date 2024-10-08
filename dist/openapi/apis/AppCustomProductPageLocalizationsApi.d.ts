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
import * as runtime from "../runtime";
import type { AppCustomProductPageLocalizationCreateRequest, AppCustomProductPageLocalizationResponse, AppCustomProductPageLocalizationUpdateRequest, AppPreviewSetsResponse, AppScreenshotSetsResponse } from "../models";
export interface AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelatedRequest {
    id: string;
    filterPreviewType?: Array<AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelatedFilterPreviewTypeEnum>;
    filterAppStoreVersionExperimentTreatmentLocalization?: Array<string>;
    filterAppStoreVersionLocalization?: Array<string>;
    fieldsAppCustomProductPageLocalizations?: Array<AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum>;
    fieldsAppStoreVersionExperimentTreatmentLocalizations?: Array<AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum>;
    fieldsAppPreviews?: Array<AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppPreviewsEnum>;
    fieldsAppPreviewSets?: Array<AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppPreviewSetsEnum>;
    fieldsAppStoreVersionLocalizations?: Array<AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppStoreVersionLocalizationsEnum>;
    limit?: number;
    limitAppPreviews?: number;
    include?: Array<AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelatedIncludeEnum>;
}
export interface AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelatedRequest {
    id: string;
    filterScreenshotDisplayType?: Array<AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelatedFilterScreenshotDisplayTypeEnum>;
    filterAppStoreVersionExperimentTreatmentLocalization?: Array<string>;
    filterAppStoreVersionLocalization?: Array<string>;
    fieldsAppScreenshotSets?: Array<AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppScreenshotSetsEnum>;
    fieldsAppCustomProductPageLocalizations?: Array<AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum>;
    fieldsAppStoreVersionExperimentTreatmentLocalizations?: Array<AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum>;
    fieldsAppScreenshots?: Array<AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppScreenshotsEnum>;
    fieldsAppStoreVersionLocalizations?: Array<AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppStoreVersionLocalizationsEnum>;
    limit?: number;
    limitAppScreenshots?: number;
    include?: Array<AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelatedIncludeEnum>;
}
export interface AppCustomProductPageLocalizationsCreateInstanceRequest {
    appCustomProductPageLocalizationCreateRequest: AppCustomProductPageLocalizationCreateRequest;
}
export interface AppCustomProductPageLocalizationsDeleteInstanceRequest {
    id: string;
}
export interface AppCustomProductPageLocalizationsGetInstanceRequest {
    id: string;
    fieldsAppCustomProductPageLocalizations?: Array<AppCustomProductPageLocalizationsGetInstanceFieldsAppCustomProductPageLocalizationsEnum>;
    include?: Array<AppCustomProductPageLocalizationsGetInstanceIncludeEnum>;
    fieldsAppScreenshotSets?: Array<AppCustomProductPageLocalizationsGetInstanceFieldsAppScreenshotSetsEnum>;
    fieldsAppPreviewSets?: Array<AppCustomProductPageLocalizationsGetInstanceFieldsAppPreviewSetsEnum>;
    limitAppPreviewSets?: number;
    limitAppScreenshotSets?: number;
}
export interface AppCustomProductPageLocalizationsUpdateInstanceRequest {
    id: string;
    appCustomProductPageLocalizationUpdateRequest: AppCustomProductPageLocalizationUpdateRequest;
}
/**
 *
 */
export declare class AppCustomProductPageLocalizationsApi extends runtime.BaseAPI {
    /**
     */
    appCustomProductPageLocalizationsAppPreviewSetsGetToManyRelatedRaw(requestParameters: AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppPreviewSetsResponse>>;
    /**
     */
    appCustomProductPageLocalizationsAppPreviewSetsGetToManyRelated(requestParameters: AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppPreviewSetsResponse>;
    /**
     */
    appCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelatedRaw(requestParameters: AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppScreenshotSetsResponse>>;
    /**
     */
    appCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelated(requestParameters: AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppScreenshotSetsResponse>;
    /**
     */
    appCustomProductPageLocalizationsCreateInstanceRaw(requestParameters: AppCustomProductPageLocalizationsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppCustomProductPageLocalizationResponse>>;
    /**
     */
    appCustomProductPageLocalizationsCreateInstance(requestParameters: AppCustomProductPageLocalizationsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppCustomProductPageLocalizationResponse>;
    /**
     */
    appCustomProductPageLocalizationsDeleteInstanceRaw(requestParameters: AppCustomProductPageLocalizationsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    appCustomProductPageLocalizationsDeleteInstance(requestParameters: AppCustomProductPageLocalizationsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    appCustomProductPageLocalizationsGetInstanceRaw(requestParameters: AppCustomProductPageLocalizationsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppCustomProductPageLocalizationResponse>>;
    /**
     */
    appCustomProductPageLocalizationsGetInstance(requestParameters: AppCustomProductPageLocalizationsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppCustomProductPageLocalizationResponse>;
    /**
     */
    appCustomProductPageLocalizationsUpdateInstanceRaw(requestParameters: AppCustomProductPageLocalizationsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppCustomProductPageLocalizationResponse>>;
    /**
     */
    appCustomProductPageLocalizationsUpdateInstance(requestParameters: AppCustomProductPageLocalizationsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppCustomProductPageLocalizationResponse>;
}
/**
 * @export
 */
export declare const AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelatedFilterPreviewTypeEnum: {
    readonly Iphone67: "IPHONE_67";
    readonly Iphone61: "IPHONE_61";
    readonly Iphone65: "IPHONE_65";
    readonly Iphone58: "IPHONE_58";
    readonly Iphone55: "IPHONE_55";
    readonly Iphone47: "IPHONE_47";
    readonly Iphone40: "IPHONE_40";
    readonly Iphone35: "IPHONE_35";
    readonly IpadPro3Gen129: "IPAD_PRO_3GEN_129";
    readonly IpadPro3Gen11: "IPAD_PRO_3GEN_11";
    readonly IpadPro129: "IPAD_PRO_129";
    readonly Ipad105: "IPAD_105";
    readonly Ipad97: "IPAD_97";
    readonly Desktop: "DESKTOP";
    readonly AppleTv: "APPLE_TV";
    readonly AppleVisionPro: "APPLE_VISION_PRO";
};
export type AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelatedFilterPreviewTypeEnum = (typeof AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelatedFilterPreviewTypeEnum)[keyof typeof AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelatedFilterPreviewTypeEnum];
/**
 * @export
 */
export declare const AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum: {
    readonly AppCustomProductPageVersion: "appCustomProductPageVersion";
    readonly AppPreviewSets: "appPreviewSets";
    readonly AppScreenshotSets: "appScreenshotSets";
    readonly Locale: "locale";
    readonly PromotionalText: "promotionalText";
};
export type AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum = (typeof AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum)[keyof typeof AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum];
/**
 * @export
 */
export declare const AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum: {
    readonly AppPreviewSets: "appPreviewSets";
    readonly AppScreenshotSets: "appScreenshotSets";
    readonly AppStoreVersionExperimentTreatment: "appStoreVersionExperimentTreatment";
    readonly Locale: "locale";
};
export type AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum = (typeof AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum)[keyof typeof AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum];
/**
 * @export
 */
export declare const AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppPreviewsEnum: {
    readonly AppPreviewSet: "appPreviewSet";
    readonly AssetDeliveryState: "assetDeliveryState";
    readonly FileName: "fileName";
    readonly FileSize: "fileSize";
    readonly MimeType: "mimeType";
    readonly PreviewFrameTimeCode: "previewFrameTimeCode";
    readonly PreviewImage: "previewImage";
    readonly SourceFileChecksum: "sourceFileChecksum";
    readonly UploadOperations: "uploadOperations";
    readonly Uploaded: "uploaded";
    readonly VideoUrl: "videoUrl";
};
export type AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppPreviewsEnum = (typeof AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppPreviewsEnum)[keyof typeof AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppPreviewsEnum];
/**
 * @export
 */
export declare const AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppPreviewSetsEnum: {
    readonly AppCustomProductPageLocalization: "appCustomProductPageLocalization";
    readonly AppPreviews: "appPreviews";
    readonly AppStoreVersionExperimentTreatmentLocalization: "appStoreVersionExperimentTreatmentLocalization";
    readonly AppStoreVersionLocalization: "appStoreVersionLocalization";
    readonly PreviewType: "previewType";
};
export type AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppPreviewSetsEnum = (typeof AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppPreviewSetsEnum)[keyof typeof AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppPreviewSetsEnum];
/**
 * @export
 */
export declare const AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppStoreVersionLocalizationsEnum: {
    readonly AppPreviewSets: "appPreviewSets";
    readonly AppScreenshotSets: "appScreenshotSets";
    readonly AppStoreVersion: "appStoreVersion";
    readonly Description: "description";
    readonly Keywords: "keywords";
    readonly Locale: "locale";
    readonly MarketingUrl: "marketingUrl";
    readonly PromotionalText: "promotionalText";
    readonly SupportUrl: "supportUrl";
    readonly WhatsNew: "whatsNew";
};
export type AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppStoreVersionLocalizationsEnum = (typeof AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppStoreVersionLocalizationsEnum)[keyof typeof AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppStoreVersionLocalizationsEnum];
/**
 * @export
 */
export declare const AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelatedIncludeEnum: {
    readonly AppCustomProductPageLocalization: "appCustomProductPageLocalization";
    readonly AppPreviews: "appPreviews";
    readonly AppStoreVersionExperimentTreatmentLocalization: "appStoreVersionExperimentTreatmentLocalization";
    readonly AppStoreVersionLocalization: "appStoreVersionLocalization";
};
export type AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelatedIncludeEnum = (typeof AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelatedIncludeEnum)[keyof typeof AppCustomProductPageLocalizationsAppPreviewSetsGetToManyRelatedIncludeEnum];
/**
 * @export
 */
export declare const AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelatedFilterScreenshotDisplayTypeEnum: {
    readonly AppIphone67: "APP_IPHONE_67";
    readonly AppIphone61: "APP_IPHONE_61";
    readonly AppIphone65: "APP_IPHONE_65";
    readonly AppIphone58: "APP_IPHONE_58";
    readonly AppIphone55: "APP_IPHONE_55";
    readonly AppIphone47: "APP_IPHONE_47";
    readonly AppIphone40: "APP_IPHONE_40";
    readonly AppIphone35: "APP_IPHONE_35";
    readonly AppIpadPro3Gen129: "APP_IPAD_PRO_3GEN_129";
    readonly AppIpadPro3Gen11: "APP_IPAD_PRO_3GEN_11";
    readonly AppIpadPro129: "APP_IPAD_PRO_129";
    readonly AppIpad105: "APP_IPAD_105";
    readonly AppIpad97: "APP_IPAD_97";
    readonly AppDesktop: "APP_DESKTOP";
    readonly AppWatchUltra: "APP_WATCH_ULTRA";
    readonly AppWatchSeries7: "APP_WATCH_SERIES_7";
    readonly AppWatchSeries4: "APP_WATCH_SERIES_4";
    readonly AppWatchSeries3: "APP_WATCH_SERIES_3";
    readonly AppAppleTv: "APP_APPLE_TV";
    readonly AppAppleVisionPro: "APP_APPLE_VISION_PRO";
    readonly ImessageAppIphone67: "IMESSAGE_APP_IPHONE_67";
    readonly ImessageAppIphone61: "IMESSAGE_APP_IPHONE_61";
    readonly ImessageAppIphone65: "IMESSAGE_APP_IPHONE_65";
    readonly ImessageAppIphone58: "IMESSAGE_APP_IPHONE_58";
    readonly ImessageAppIphone55: "IMESSAGE_APP_IPHONE_55";
    readonly ImessageAppIphone47: "IMESSAGE_APP_IPHONE_47";
    readonly ImessageAppIphone40: "IMESSAGE_APP_IPHONE_40";
    readonly ImessageAppIpadPro3Gen129: "IMESSAGE_APP_IPAD_PRO_3GEN_129";
    readonly ImessageAppIpadPro3Gen11: "IMESSAGE_APP_IPAD_PRO_3GEN_11";
    readonly ImessageAppIpadPro129: "IMESSAGE_APP_IPAD_PRO_129";
    readonly ImessageAppIpad105: "IMESSAGE_APP_IPAD_105";
    readonly ImessageAppIpad97: "IMESSAGE_APP_IPAD_97";
};
export type AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelatedFilterScreenshotDisplayTypeEnum = (typeof AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelatedFilterScreenshotDisplayTypeEnum)[keyof typeof AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelatedFilterScreenshotDisplayTypeEnum];
/**
 * @export
 */
export declare const AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppScreenshotSetsEnum: {
    readonly AppCustomProductPageLocalization: "appCustomProductPageLocalization";
    readonly AppScreenshots: "appScreenshots";
    readonly AppStoreVersionExperimentTreatmentLocalization: "appStoreVersionExperimentTreatmentLocalization";
    readonly AppStoreVersionLocalization: "appStoreVersionLocalization";
    readonly ScreenshotDisplayType: "screenshotDisplayType";
};
export type AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppScreenshotSetsEnum = (typeof AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppScreenshotSetsEnum)[keyof typeof AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppScreenshotSetsEnum];
/**
 * @export
 */
export declare const AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum: {
    readonly AppCustomProductPageVersion: "appCustomProductPageVersion";
    readonly AppPreviewSets: "appPreviewSets";
    readonly AppScreenshotSets: "appScreenshotSets";
    readonly Locale: "locale";
    readonly PromotionalText: "promotionalText";
};
export type AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum = (typeof AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum)[keyof typeof AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum];
/**
 * @export
 */
export declare const AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum: {
    readonly AppPreviewSets: "appPreviewSets";
    readonly AppScreenshotSets: "appScreenshotSets";
    readonly AppStoreVersionExperimentTreatment: "appStoreVersionExperimentTreatment";
    readonly Locale: "locale";
};
export type AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum = (typeof AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum)[keyof typeof AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum];
/**
 * @export
 */
export declare const AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppScreenshotsEnum: {
    readonly AppScreenshotSet: "appScreenshotSet";
    readonly AssetDeliveryState: "assetDeliveryState";
    readonly AssetToken: "assetToken";
    readonly AssetType: "assetType";
    readonly FileName: "fileName";
    readonly FileSize: "fileSize";
    readonly ImageAsset: "imageAsset";
    readonly SourceFileChecksum: "sourceFileChecksum";
    readonly UploadOperations: "uploadOperations";
    readonly Uploaded: "uploaded";
};
export type AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppScreenshotsEnum = (typeof AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppScreenshotsEnum)[keyof typeof AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppScreenshotsEnum];
/**
 * @export
 */
export declare const AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppStoreVersionLocalizationsEnum: {
    readonly AppPreviewSets: "appPreviewSets";
    readonly AppScreenshotSets: "appScreenshotSets";
    readonly AppStoreVersion: "appStoreVersion";
    readonly Description: "description";
    readonly Keywords: "keywords";
    readonly Locale: "locale";
    readonly MarketingUrl: "marketingUrl";
    readonly PromotionalText: "promotionalText";
    readonly SupportUrl: "supportUrl";
    readonly WhatsNew: "whatsNew";
};
export type AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppStoreVersionLocalizationsEnum = (typeof AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppStoreVersionLocalizationsEnum)[keyof typeof AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppStoreVersionLocalizationsEnum];
/**
 * @export
 */
export declare const AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelatedIncludeEnum: {
    readonly AppCustomProductPageLocalization: "appCustomProductPageLocalization";
    readonly AppScreenshots: "appScreenshots";
    readonly AppStoreVersionExperimentTreatmentLocalization: "appStoreVersionExperimentTreatmentLocalization";
    readonly AppStoreVersionLocalization: "appStoreVersionLocalization";
};
export type AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelatedIncludeEnum = (typeof AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelatedIncludeEnum)[keyof typeof AppCustomProductPageLocalizationsAppScreenshotSetsGetToManyRelatedIncludeEnum];
/**
 * @export
 */
export declare const AppCustomProductPageLocalizationsGetInstanceFieldsAppCustomProductPageLocalizationsEnum: {
    readonly AppCustomProductPageVersion: "appCustomProductPageVersion";
    readonly AppPreviewSets: "appPreviewSets";
    readonly AppScreenshotSets: "appScreenshotSets";
    readonly Locale: "locale";
    readonly PromotionalText: "promotionalText";
};
export type AppCustomProductPageLocalizationsGetInstanceFieldsAppCustomProductPageLocalizationsEnum = (typeof AppCustomProductPageLocalizationsGetInstanceFieldsAppCustomProductPageLocalizationsEnum)[keyof typeof AppCustomProductPageLocalizationsGetInstanceFieldsAppCustomProductPageLocalizationsEnum];
/**
 * @export
 */
export declare const AppCustomProductPageLocalizationsGetInstanceIncludeEnum: {
    readonly AppCustomProductPageVersion: "appCustomProductPageVersion";
    readonly AppPreviewSets: "appPreviewSets";
    readonly AppScreenshotSets: "appScreenshotSets";
};
export type AppCustomProductPageLocalizationsGetInstanceIncludeEnum = (typeof AppCustomProductPageLocalizationsGetInstanceIncludeEnum)[keyof typeof AppCustomProductPageLocalizationsGetInstanceIncludeEnum];
/**
 * @export
 */
export declare const AppCustomProductPageLocalizationsGetInstanceFieldsAppScreenshotSetsEnum: {
    readonly AppCustomProductPageLocalization: "appCustomProductPageLocalization";
    readonly AppScreenshots: "appScreenshots";
    readonly AppStoreVersionExperimentTreatmentLocalization: "appStoreVersionExperimentTreatmentLocalization";
    readonly AppStoreVersionLocalization: "appStoreVersionLocalization";
    readonly ScreenshotDisplayType: "screenshotDisplayType";
};
export type AppCustomProductPageLocalizationsGetInstanceFieldsAppScreenshotSetsEnum = (typeof AppCustomProductPageLocalizationsGetInstanceFieldsAppScreenshotSetsEnum)[keyof typeof AppCustomProductPageLocalizationsGetInstanceFieldsAppScreenshotSetsEnum];
/**
 * @export
 */
export declare const AppCustomProductPageLocalizationsGetInstanceFieldsAppPreviewSetsEnum: {
    readonly AppCustomProductPageLocalization: "appCustomProductPageLocalization";
    readonly AppPreviews: "appPreviews";
    readonly AppStoreVersionExperimentTreatmentLocalization: "appStoreVersionExperimentTreatmentLocalization";
    readonly AppStoreVersionLocalization: "appStoreVersionLocalization";
    readonly PreviewType: "previewType";
};
export type AppCustomProductPageLocalizationsGetInstanceFieldsAppPreviewSetsEnum = (typeof AppCustomProductPageLocalizationsGetInstanceFieldsAppPreviewSetsEnum)[keyof typeof AppCustomProductPageLocalizationsGetInstanceFieldsAppPreviewSetsEnum];
