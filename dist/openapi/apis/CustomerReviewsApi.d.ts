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
import type { CustomerReviewResponse, CustomerReviewResponseV1Response } from "../models";
export interface CustomerReviewsGetInstanceRequest {
    id: string;
    fieldsCustomerReviews?: Array<CustomerReviewsGetInstanceFieldsCustomerReviewsEnum>;
    include?: Array<CustomerReviewsGetInstanceIncludeEnum>;
    fieldsCustomerReviewResponses?: Array<CustomerReviewsGetInstanceFieldsCustomerReviewResponsesEnum>;
}
export interface CustomerReviewsResponseGetToOneRelatedRequest {
    id: string;
    fieldsCustomerReviews?: Array<CustomerReviewsResponseGetToOneRelatedFieldsCustomerReviewsEnum>;
    fieldsCustomerReviewResponses?: Array<CustomerReviewsResponseGetToOneRelatedFieldsCustomerReviewResponsesEnum>;
    include?: Array<CustomerReviewsResponseGetToOneRelatedIncludeEnum>;
}
/**
 *
 */
export declare class CustomerReviewsApi extends runtime.BaseAPI {
    /**
     */
    customerReviewsGetInstanceRaw(requestParameters: CustomerReviewsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerReviewResponse>>;
    /**
     */
    customerReviewsGetInstance(requestParameters: CustomerReviewsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerReviewResponse>;
    /**
     */
    customerReviewsResponseGetToOneRelatedRaw(requestParameters: CustomerReviewsResponseGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerReviewResponseV1Response>>;
    /**
     */
    customerReviewsResponseGetToOneRelated(requestParameters: CustomerReviewsResponseGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerReviewResponseV1Response>;
}
/**
 * @export
 */
export declare const CustomerReviewsGetInstanceFieldsCustomerReviewsEnum: {
    readonly Body: "body";
    readonly CreatedDate: "createdDate";
    readonly Rating: "rating";
    readonly Response: "response";
    readonly ReviewerNickname: "reviewerNickname";
    readonly Territory: "territory";
    readonly Title: "title";
};
export type CustomerReviewsGetInstanceFieldsCustomerReviewsEnum = (typeof CustomerReviewsGetInstanceFieldsCustomerReviewsEnum)[keyof typeof CustomerReviewsGetInstanceFieldsCustomerReviewsEnum];
/**
 * @export
 */
export declare const CustomerReviewsGetInstanceIncludeEnum: {
    readonly Response: "response";
};
export type CustomerReviewsGetInstanceIncludeEnum = (typeof CustomerReviewsGetInstanceIncludeEnum)[keyof typeof CustomerReviewsGetInstanceIncludeEnum];
/**
 * @export
 */
export declare const CustomerReviewsGetInstanceFieldsCustomerReviewResponsesEnum: {
    readonly LastModifiedDate: "lastModifiedDate";
    readonly ResponseBody: "responseBody";
    readonly Review: "review";
    readonly State: "state";
};
export type CustomerReviewsGetInstanceFieldsCustomerReviewResponsesEnum = (typeof CustomerReviewsGetInstanceFieldsCustomerReviewResponsesEnum)[keyof typeof CustomerReviewsGetInstanceFieldsCustomerReviewResponsesEnum];
/**
 * @export
 */
export declare const CustomerReviewsResponseGetToOneRelatedFieldsCustomerReviewsEnum: {
    readonly Body: "body";
    readonly CreatedDate: "createdDate";
    readonly Rating: "rating";
    readonly Response: "response";
    readonly ReviewerNickname: "reviewerNickname";
    readonly Territory: "territory";
    readonly Title: "title";
};
export type CustomerReviewsResponseGetToOneRelatedFieldsCustomerReviewsEnum = (typeof CustomerReviewsResponseGetToOneRelatedFieldsCustomerReviewsEnum)[keyof typeof CustomerReviewsResponseGetToOneRelatedFieldsCustomerReviewsEnum];
/**
 * @export
 */
export declare const CustomerReviewsResponseGetToOneRelatedFieldsCustomerReviewResponsesEnum: {
    readonly LastModifiedDate: "lastModifiedDate";
    readonly ResponseBody: "responseBody";
    readonly Review: "review";
    readonly State: "state";
};
export type CustomerReviewsResponseGetToOneRelatedFieldsCustomerReviewResponsesEnum = (typeof CustomerReviewsResponseGetToOneRelatedFieldsCustomerReviewResponsesEnum)[keyof typeof CustomerReviewsResponseGetToOneRelatedFieldsCustomerReviewResponsesEnum];
/**
 * @export
 */
export declare const CustomerReviewsResponseGetToOneRelatedIncludeEnum: {
    readonly Review: "review";
};
export type CustomerReviewsResponseGetToOneRelatedIncludeEnum = (typeof CustomerReviewsResponseGetToOneRelatedIncludeEnum)[keyof typeof CustomerReviewsResponseGetToOneRelatedIncludeEnum];
