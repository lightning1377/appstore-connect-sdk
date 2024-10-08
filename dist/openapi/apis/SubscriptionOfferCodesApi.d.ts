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
import type { SubscriptionOfferCodeCreateRequest, SubscriptionOfferCodeCustomCodesResponse, SubscriptionOfferCodeOneTimeUseCodesResponse, SubscriptionOfferCodePricesResponse, SubscriptionOfferCodeResponse, SubscriptionOfferCodeUpdateRequest } from "../models";
export interface SubscriptionOfferCodesCreateInstanceRequest {
    subscriptionOfferCodeCreateRequest: SubscriptionOfferCodeCreateRequest;
}
export interface SubscriptionOfferCodesCustomCodesGetToManyRelatedRequest {
    id: string;
    fieldsSubscriptionOfferCodeCustomCodes?: Array<SubscriptionOfferCodesCustomCodesGetToManyRelatedFieldsSubscriptionOfferCodeCustomCodesEnum>;
    fieldsSubscriptionOfferCodes?: Array<SubscriptionOfferCodesCustomCodesGetToManyRelatedFieldsSubscriptionOfferCodesEnum>;
    limit?: number;
    include?: Array<SubscriptionOfferCodesCustomCodesGetToManyRelatedIncludeEnum>;
}
export interface SubscriptionOfferCodesGetInstanceRequest {
    id: string;
    fieldsSubscriptionOfferCodes?: Array<SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodesEnum>;
    include?: Array<SubscriptionOfferCodesGetInstanceIncludeEnum>;
    fieldsSubscriptionOfferCodeCustomCodes?: Array<SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodeCustomCodesEnum>;
    fieldsSubscriptionOfferCodeOneTimeUseCodes?: Array<SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodeOneTimeUseCodesEnum>;
    fieldsSubscriptionOfferCodePrices?: Array<SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodePricesEnum>;
    limitCustomCodes?: number;
    limitOneTimeUseCodes?: number;
    limitPrices?: number;
}
export interface SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedRequest {
    id: string;
    fieldsSubscriptionOfferCodes?: Array<SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedFieldsSubscriptionOfferCodesEnum>;
    fieldsSubscriptionOfferCodeOneTimeUseCodes?: Array<SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedFieldsSubscriptionOfferCodeOneTimeUseCodesEnum>;
    limit?: number;
    include?: Array<SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedIncludeEnum>;
}
export interface SubscriptionOfferCodesPricesGetToManyRelatedRequest {
    id: string;
    filterTerritory?: Array<string>;
    fieldsSubscriptionPricePoints?: Array<SubscriptionOfferCodesPricesGetToManyRelatedFieldsSubscriptionPricePointsEnum>;
    fieldsTerritories?: Array<SubscriptionOfferCodesPricesGetToManyRelatedFieldsTerritoriesEnum>;
    fieldsSubscriptionOfferCodePrices?: Array<SubscriptionOfferCodesPricesGetToManyRelatedFieldsSubscriptionOfferCodePricesEnum>;
    limit?: number;
    include?: Array<SubscriptionOfferCodesPricesGetToManyRelatedIncludeEnum>;
}
export interface SubscriptionOfferCodesUpdateInstanceRequest {
    id: string;
    subscriptionOfferCodeUpdateRequest: SubscriptionOfferCodeUpdateRequest;
}
/**
 *
 */
export declare class SubscriptionOfferCodesApi extends runtime.BaseAPI {
    /**
     */
    subscriptionOfferCodesCreateInstanceRaw(requestParameters: SubscriptionOfferCodesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionOfferCodeResponse>>;
    /**
     */
    subscriptionOfferCodesCreateInstance(requestParameters: SubscriptionOfferCodesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionOfferCodeResponse>;
    /**
     */
    subscriptionOfferCodesCustomCodesGetToManyRelatedRaw(requestParameters: SubscriptionOfferCodesCustomCodesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionOfferCodeCustomCodesResponse>>;
    /**
     */
    subscriptionOfferCodesCustomCodesGetToManyRelated(requestParameters: SubscriptionOfferCodesCustomCodesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionOfferCodeCustomCodesResponse>;
    /**
     */
    subscriptionOfferCodesGetInstanceRaw(requestParameters: SubscriptionOfferCodesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionOfferCodeResponse>>;
    /**
     */
    subscriptionOfferCodesGetInstance(requestParameters: SubscriptionOfferCodesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionOfferCodeResponse>;
    /**
     */
    subscriptionOfferCodesOneTimeUseCodesGetToManyRelatedRaw(requestParameters: SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionOfferCodeOneTimeUseCodesResponse>>;
    /**
     */
    subscriptionOfferCodesOneTimeUseCodesGetToManyRelated(requestParameters: SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionOfferCodeOneTimeUseCodesResponse>;
    /**
     */
    subscriptionOfferCodesPricesGetToManyRelatedRaw(requestParameters: SubscriptionOfferCodesPricesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionOfferCodePricesResponse>>;
    /**
     */
    subscriptionOfferCodesPricesGetToManyRelated(requestParameters: SubscriptionOfferCodesPricesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionOfferCodePricesResponse>;
    /**
     */
    subscriptionOfferCodesUpdateInstanceRaw(requestParameters: SubscriptionOfferCodesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionOfferCodeResponse>>;
    /**
     */
    subscriptionOfferCodesUpdateInstance(requestParameters: SubscriptionOfferCodesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionOfferCodeResponse>;
}
/**
 * @export
 */
export declare const SubscriptionOfferCodesCustomCodesGetToManyRelatedFieldsSubscriptionOfferCodeCustomCodesEnum: {
    readonly Active: "active";
    readonly CreatedDate: "createdDate";
    readonly CustomCode: "customCode";
    readonly ExpirationDate: "expirationDate";
    readonly NumberOfCodes: "numberOfCodes";
    readonly OfferCode: "offerCode";
};
export type SubscriptionOfferCodesCustomCodesGetToManyRelatedFieldsSubscriptionOfferCodeCustomCodesEnum = (typeof SubscriptionOfferCodesCustomCodesGetToManyRelatedFieldsSubscriptionOfferCodeCustomCodesEnum)[keyof typeof SubscriptionOfferCodesCustomCodesGetToManyRelatedFieldsSubscriptionOfferCodeCustomCodesEnum];
/**
 * @export
 */
export declare const SubscriptionOfferCodesCustomCodesGetToManyRelatedFieldsSubscriptionOfferCodesEnum: {
    readonly Active: "active";
    readonly CustomCodes: "customCodes";
    readonly CustomerEligibilities: "customerEligibilities";
    readonly Duration: "duration";
    readonly Name: "name";
    readonly NumberOfPeriods: "numberOfPeriods";
    readonly OfferEligibility: "offerEligibility";
    readonly OfferMode: "offerMode";
    readonly OneTimeUseCodes: "oneTimeUseCodes";
    readonly Prices: "prices";
    readonly Subscription: "subscription";
    readonly TotalNumberOfCodes: "totalNumberOfCodes";
};
export type SubscriptionOfferCodesCustomCodesGetToManyRelatedFieldsSubscriptionOfferCodesEnum = (typeof SubscriptionOfferCodesCustomCodesGetToManyRelatedFieldsSubscriptionOfferCodesEnum)[keyof typeof SubscriptionOfferCodesCustomCodesGetToManyRelatedFieldsSubscriptionOfferCodesEnum];
/**
 * @export
 */
export declare const SubscriptionOfferCodesCustomCodesGetToManyRelatedIncludeEnum: {
    readonly OfferCode: "offerCode";
};
export type SubscriptionOfferCodesCustomCodesGetToManyRelatedIncludeEnum = (typeof SubscriptionOfferCodesCustomCodesGetToManyRelatedIncludeEnum)[keyof typeof SubscriptionOfferCodesCustomCodesGetToManyRelatedIncludeEnum];
/**
 * @export
 */
export declare const SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodesEnum: {
    readonly Active: "active";
    readonly CustomCodes: "customCodes";
    readonly CustomerEligibilities: "customerEligibilities";
    readonly Duration: "duration";
    readonly Name: "name";
    readonly NumberOfPeriods: "numberOfPeriods";
    readonly OfferEligibility: "offerEligibility";
    readonly OfferMode: "offerMode";
    readonly OneTimeUseCodes: "oneTimeUseCodes";
    readonly Prices: "prices";
    readonly Subscription: "subscription";
    readonly TotalNumberOfCodes: "totalNumberOfCodes";
};
export type SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodesEnum = (typeof SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodesEnum)[keyof typeof SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodesEnum];
/**
 * @export
 */
export declare const SubscriptionOfferCodesGetInstanceIncludeEnum: {
    readonly CustomCodes: "customCodes";
    readonly OneTimeUseCodes: "oneTimeUseCodes";
    readonly Prices: "prices";
    readonly Subscription: "subscription";
};
export type SubscriptionOfferCodesGetInstanceIncludeEnum = (typeof SubscriptionOfferCodesGetInstanceIncludeEnum)[keyof typeof SubscriptionOfferCodesGetInstanceIncludeEnum];
/**
 * @export
 */
export declare const SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodeCustomCodesEnum: {
    readonly Active: "active";
    readonly CreatedDate: "createdDate";
    readonly CustomCode: "customCode";
    readonly ExpirationDate: "expirationDate";
    readonly NumberOfCodes: "numberOfCodes";
    readonly OfferCode: "offerCode";
};
export type SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodeCustomCodesEnum = (typeof SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodeCustomCodesEnum)[keyof typeof SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodeCustomCodesEnum];
/**
 * @export
 */
export declare const SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodeOneTimeUseCodesEnum: {
    readonly Active: "active";
    readonly CreatedDate: "createdDate";
    readonly ExpirationDate: "expirationDate";
    readonly NumberOfCodes: "numberOfCodes";
    readonly OfferCode: "offerCode";
    readonly Values: "values";
};
export type SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodeOneTimeUseCodesEnum = (typeof SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodeOneTimeUseCodesEnum)[keyof typeof SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodeOneTimeUseCodesEnum];
/**
 * @export
 */
export declare const SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodePricesEnum: {
    readonly SubscriptionPricePoint: "subscriptionPricePoint";
    readonly Territory: "territory";
};
export type SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodePricesEnum = (typeof SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodePricesEnum)[keyof typeof SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodePricesEnum];
/**
 * @export
 */
export declare const SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedFieldsSubscriptionOfferCodesEnum: {
    readonly Active: "active";
    readonly CustomCodes: "customCodes";
    readonly CustomerEligibilities: "customerEligibilities";
    readonly Duration: "duration";
    readonly Name: "name";
    readonly NumberOfPeriods: "numberOfPeriods";
    readonly OfferEligibility: "offerEligibility";
    readonly OfferMode: "offerMode";
    readonly OneTimeUseCodes: "oneTimeUseCodes";
    readonly Prices: "prices";
    readonly Subscription: "subscription";
    readonly TotalNumberOfCodes: "totalNumberOfCodes";
};
export type SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedFieldsSubscriptionOfferCodesEnum = (typeof SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedFieldsSubscriptionOfferCodesEnum)[keyof typeof SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedFieldsSubscriptionOfferCodesEnum];
/**
 * @export
 */
export declare const SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedFieldsSubscriptionOfferCodeOneTimeUseCodesEnum: {
    readonly Active: "active";
    readonly CreatedDate: "createdDate";
    readonly ExpirationDate: "expirationDate";
    readonly NumberOfCodes: "numberOfCodes";
    readonly OfferCode: "offerCode";
    readonly Values: "values";
};
export type SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedFieldsSubscriptionOfferCodeOneTimeUseCodesEnum = (typeof SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedFieldsSubscriptionOfferCodeOneTimeUseCodesEnum)[keyof typeof SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedFieldsSubscriptionOfferCodeOneTimeUseCodesEnum];
/**
 * @export
 */
export declare const SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedIncludeEnum: {
    readonly OfferCode: "offerCode";
};
export type SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedIncludeEnum = (typeof SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedIncludeEnum)[keyof typeof SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedIncludeEnum];
/**
 * @export
 */
export declare const SubscriptionOfferCodesPricesGetToManyRelatedFieldsSubscriptionPricePointsEnum: {
    readonly CustomerPrice: "customerPrice";
    readonly Equalizations: "equalizations";
    readonly Proceeds: "proceeds";
    readonly ProceedsYear2: "proceedsYear2";
    readonly Subscription: "subscription";
    readonly Territory: "territory";
};
export type SubscriptionOfferCodesPricesGetToManyRelatedFieldsSubscriptionPricePointsEnum = (typeof SubscriptionOfferCodesPricesGetToManyRelatedFieldsSubscriptionPricePointsEnum)[keyof typeof SubscriptionOfferCodesPricesGetToManyRelatedFieldsSubscriptionPricePointsEnum];
/**
 * @export
 */
export declare const SubscriptionOfferCodesPricesGetToManyRelatedFieldsTerritoriesEnum: {
    readonly Currency: "currency";
};
export type SubscriptionOfferCodesPricesGetToManyRelatedFieldsTerritoriesEnum = (typeof SubscriptionOfferCodesPricesGetToManyRelatedFieldsTerritoriesEnum)[keyof typeof SubscriptionOfferCodesPricesGetToManyRelatedFieldsTerritoriesEnum];
/**
 * @export
 */
export declare const SubscriptionOfferCodesPricesGetToManyRelatedFieldsSubscriptionOfferCodePricesEnum: {
    readonly SubscriptionPricePoint: "subscriptionPricePoint";
    readonly Territory: "territory";
};
export type SubscriptionOfferCodesPricesGetToManyRelatedFieldsSubscriptionOfferCodePricesEnum = (typeof SubscriptionOfferCodesPricesGetToManyRelatedFieldsSubscriptionOfferCodePricesEnum)[keyof typeof SubscriptionOfferCodesPricesGetToManyRelatedFieldsSubscriptionOfferCodePricesEnum];
/**
 * @export
 */
export declare const SubscriptionOfferCodesPricesGetToManyRelatedIncludeEnum: {
    readonly SubscriptionPricePoint: "subscriptionPricePoint";
    readonly Territory: "territory";
};
export type SubscriptionOfferCodesPricesGetToManyRelatedIncludeEnum = (typeof SubscriptionOfferCodesPricesGetToManyRelatedIncludeEnum)[keyof typeof SubscriptionOfferCodesPricesGetToManyRelatedIncludeEnum];
