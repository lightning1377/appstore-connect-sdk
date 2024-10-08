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
import type { SubscriptionPromotionalOfferCreateRequest, SubscriptionPromotionalOfferPricesResponse, SubscriptionPromotionalOfferResponse, SubscriptionPromotionalOfferUpdateRequest } from "../models";
export interface SubscriptionPromotionalOffersCreateInstanceRequest {
    subscriptionPromotionalOfferCreateRequest: SubscriptionPromotionalOfferCreateRequest;
}
export interface SubscriptionPromotionalOffersDeleteInstanceRequest {
    id: string;
}
export interface SubscriptionPromotionalOffersGetInstanceRequest {
    id: string;
    fieldsSubscriptionPromotionalOffers?: Array<SubscriptionPromotionalOffersGetInstanceFieldsSubscriptionPromotionalOffersEnum>;
    include?: Array<SubscriptionPromotionalOffersGetInstanceIncludeEnum>;
    fieldsSubscriptionPromotionalOfferPrices?: Array<SubscriptionPromotionalOffersGetInstanceFieldsSubscriptionPromotionalOfferPricesEnum>;
    limitPrices?: number;
}
export interface SubscriptionPromotionalOffersPricesGetToManyRelatedRequest {
    id: string;
    filterTerritory?: Array<string>;
    fieldsSubscriptionPricePoints?: Array<SubscriptionPromotionalOffersPricesGetToManyRelatedFieldsSubscriptionPricePointsEnum>;
    fieldsTerritories?: Array<SubscriptionPromotionalOffersPricesGetToManyRelatedFieldsTerritoriesEnum>;
    fieldsSubscriptionPromotionalOfferPrices?: Array<SubscriptionPromotionalOffersPricesGetToManyRelatedFieldsSubscriptionPromotionalOfferPricesEnum>;
    limit?: number;
    include?: Array<SubscriptionPromotionalOffersPricesGetToManyRelatedIncludeEnum>;
}
export interface SubscriptionPromotionalOffersUpdateInstanceRequest {
    id: string;
    subscriptionPromotionalOfferUpdateRequest: SubscriptionPromotionalOfferUpdateRequest;
}
/**
 *
 */
export declare class SubscriptionPromotionalOffersApi extends runtime.BaseAPI {
    /**
     */
    subscriptionPromotionalOffersCreateInstanceRaw(requestParameters: SubscriptionPromotionalOffersCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionPromotionalOfferResponse>>;
    /**
     */
    subscriptionPromotionalOffersCreateInstance(requestParameters: SubscriptionPromotionalOffersCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionPromotionalOfferResponse>;
    /**
     */
    subscriptionPromotionalOffersDeleteInstanceRaw(requestParameters: SubscriptionPromotionalOffersDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    subscriptionPromotionalOffersDeleteInstance(requestParameters: SubscriptionPromotionalOffersDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    subscriptionPromotionalOffersGetInstanceRaw(requestParameters: SubscriptionPromotionalOffersGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionPromotionalOfferResponse>>;
    /**
     */
    subscriptionPromotionalOffersGetInstance(requestParameters: SubscriptionPromotionalOffersGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionPromotionalOfferResponse>;
    /**
     */
    subscriptionPromotionalOffersPricesGetToManyRelatedRaw(requestParameters: SubscriptionPromotionalOffersPricesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionPromotionalOfferPricesResponse>>;
    /**
     */
    subscriptionPromotionalOffersPricesGetToManyRelated(requestParameters: SubscriptionPromotionalOffersPricesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionPromotionalOfferPricesResponse>;
    /**
     */
    subscriptionPromotionalOffersUpdateInstanceRaw(requestParameters: SubscriptionPromotionalOffersUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionPromotionalOfferResponse>>;
    /**
     */
    subscriptionPromotionalOffersUpdateInstance(requestParameters: SubscriptionPromotionalOffersUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionPromotionalOfferResponse>;
}
/**
 * @export
 */
export declare const SubscriptionPromotionalOffersGetInstanceFieldsSubscriptionPromotionalOffersEnum: {
    readonly Duration: "duration";
    readonly Name: "name";
    readonly NumberOfPeriods: "numberOfPeriods";
    readonly OfferCode: "offerCode";
    readonly OfferMode: "offerMode";
    readonly Prices: "prices";
    readonly Subscription: "subscription";
};
export type SubscriptionPromotionalOffersGetInstanceFieldsSubscriptionPromotionalOffersEnum = (typeof SubscriptionPromotionalOffersGetInstanceFieldsSubscriptionPromotionalOffersEnum)[keyof typeof SubscriptionPromotionalOffersGetInstanceFieldsSubscriptionPromotionalOffersEnum];
/**
 * @export
 */
export declare const SubscriptionPromotionalOffersGetInstanceIncludeEnum: {
    readonly Prices: "prices";
    readonly Subscription: "subscription";
};
export type SubscriptionPromotionalOffersGetInstanceIncludeEnum = (typeof SubscriptionPromotionalOffersGetInstanceIncludeEnum)[keyof typeof SubscriptionPromotionalOffersGetInstanceIncludeEnum];
/**
 * @export
 */
export declare const SubscriptionPromotionalOffersGetInstanceFieldsSubscriptionPromotionalOfferPricesEnum: {
    readonly SubscriptionPricePoint: "subscriptionPricePoint";
    readonly Territory: "territory";
};
export type SubscriptionPromotionalOffersGetInstanceFieldsSubscriptionPromotionalOfferPricesEnum = (typeof SubscriptionPromotionalOffersGetInstanceFieldsSubscriptionPromotionalOfferPricesEnum)[keyof typeof SubscriptionPromotionalOffersGetInstanceFieldsSubscriptionPromotionalOfferPricesEnum];
/**
 * @export
 */
export declare const SubscriptionPromotionalOffersPricesGetToManyRelatedFieldsSubscriptionPricePointsEnum: {
    readonly CustomerPrice: "customerPrice";
    readonly Equalizations: "equalizations";
    readonly Proceeds: "proceeds";
    readonly ProceedsYear2: "proceedsYear2";
    readonly Subscription: "subscription";
    readonly Territory: "territory";
};
export type SubscriptionPromotionalOffersPricesGetToManyRelatedFieldsSubscriptionPricePointsEnum = (typeof SubscriptionPromotionalOffersPricesGetToManyRelatedFieldsSubscriptionPricePointsEnum)[keyof typeof SubscriptionPromotionalOffersPricesGetToManyRelatedFieldsSubscriptionPricePointsEnum];
/**
 * @export
 */
export declare const SubscriptionPromotionalOffersPricesGetToManyRelatedFieldsTerritoriesEnum: {
    readonly Currency: "currency";
};
export type SubscriptionPromotionalOffersPricesGetToManyRelatedFieldsTerritoriesEnum = (typeof SubscriptionPromotionalOffersPricesGetToManyRelatedFieldsTerritoriesEnum)[keyof typeof SubscriptionPromotionalOffersPricesGetToManyRelatedFieldsTerritoriesEnum];
/**
 * @export
 */
export declare const SubscriptionPromotionalOffersPricesGetToManyRelatedFieldsSubscriptionPromotionalOfferPricesEnum: {
    readonly SubscriptionPricePoint: "subscriptionPricePoint";
    readonly Territory: "territory";
};
export type SubscriptionPromotionalOffersPricesGetToManyRelatedFieldsSubscriptionPromotionalOfferPricesEnum = (typeof SubscriptionPromotionalOffersPricesGetToManyRelatedFieldsSubscriptionPromotionalOfferPricesEnum)[keyof typeof SubscriptionPromotionalOffersPricesGetToManyRelatedFieldsSubscriptionPromotionalOfferPricesEnum];
/**
 * @export
 */
export declare const SubscriptionPromotionalOffersPricesGetToManyRelatedIncludeEnum: {
    readonly SubscriptionPricePoint: "subscriptionPricePoint";
    readonly Territory: "territory";
};
export type SubscriptionPromotionalOffersPricesGetToManyRelatedIncludeEnum = (typeof SubscriptionPromotionalOffersPricesGetToManyRelatedIncludeEnum)[keyof typeof SubscriptionPromotionalOffersPricesGetToManyRelatedIncludeEnum];
