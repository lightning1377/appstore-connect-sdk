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
import type { TerritoryCode } from "./TerritoryCode";
/**
 *
 * @export
 * @interface CustomerReviewAttributes
 */
export interface CustomerReviewAttributes {
    /**
     *
     * @type {number}
     * @memberof CustomerReviewAttributes
     */
    rating?: number;
    /**
     *
     * @type {string}
     * @memberof CustomerReviewAttributes
     */
    title?: string;
    /**
     *
     * @type {string}
     * @memberof CustomerReviewAttributes
     */
    body?: string;
    /**
     *
     * @type {string}
     * @memberof CustomerReviewAttributes
     */
    reviewerNickname?: string;
    /**
     *
     * @type {Date}
     * @memberof CustomerReviewAttributes
     */
    createdDate?: Date;
    /**
     *
     * @type {TerritoryCode}
     * @memberof CustomerReviewAttributes
     */
    territory?: TerritoryCode;
}
/**
 * Check if a given object implements the CustomerReviewAttributes interface.
 */
export declare function instanceOfCustomerReviewAttributes(value: object): boolean;
export declare function CustomerReviewAttributesFromJSON(json: any): CustomerReviewAttributes;
export declare function CustomerReviewAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerReviewAttributes;
export declare function CustomerReviewAttributesToJSON(value?: CustomerReviewAttributes | null): any;
