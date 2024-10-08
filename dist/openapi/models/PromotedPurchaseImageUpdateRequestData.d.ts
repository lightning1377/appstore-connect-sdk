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
import type { AppClipAdvancedExperienceImageUpdateRequestDataAttributes } from "./AppClipAdvancedExperienceImageUpdateRequestDataAttributes";
/**
 *
 * @export
 * @interface PromotedPurchaseImageUpdateRequestData
 */
export interface PromotedPurchaseImageUpdateRequestData {
    /**
     *
     * @type {string}
     * @memberof PromotedPurchaseImageUpdateRequestData
     */
    type: PromotedPurchaseImageUpdateRequestDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof PromotedPurchaseImageUpdateRequestData
     */
    id: string;
    /**
     *
     * @type {AppClipAdvancedExperienceImageUpdateRequestDataAttributes}
     * @memberof PromotedPurchaseImageUpdateRequestData
     */
    attributes?: AppClipAdvancedExperienceImageUpdateRequestDataAttributes;
}
/**
 * @export
 */
export declare const PromotedPurchaseImageUpdateRequestDataTypeEnum: {
    readonly PromotedPurchaseImages: "promotedPurchaseImages";
};
export type PromotedPurchaseImageUpdateRequestDataTypeEnum = (typeof PromotedPurchaseImageUpdateRequestDataTypeEnum)[keyof typeof PromotedPurchaseImageUpdateRequestDataTypeEnum];
/**
 * Check if a given object implements the PromotedPurchaseImageUpdateRequestData interface.
 */
export declare function instanceOfPromotedPurchaseImageUpdateRequestData(value: object): boolean;
export declare function PromotedPurchaseImageUpdateRequestDataFromJSON(json: any): PromotedPurchaseImageUpdateRequestData;
export declare function PromotedPurchaseImageUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchaseImageUpdateRequestData;
export declare function PromotedPurchaseImageUpdateRequestDataToJSON(value?: PromotedPurchaseImageUpdateRequestData | null): any;
