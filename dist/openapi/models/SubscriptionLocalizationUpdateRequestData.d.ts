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
import type { InAppPurchaseLocalizationUpdateRequestDataAttributes } from "./InAppPurchaseLocalizationUpdateRequestDataAttributes";
/**
 *
 * @export
 * @interface SubscriptionLocalizationUpdateRequestData
 */
export interface SubscriptionLocalizationUpdateRequestData {
    /**
     *
     * @type {string}
     * @memberof SubscriptionLocalizationUpdateRequestData
     */
    type: SubscriptionLocalizationUpdateRequestDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof SubscriptionLocalizationUpdateRequestData
     */
    id: string;
    /**
     *
     * @type {InAppPurchaseLocalizationUpdateRequestDataAttributes}
     * @memberof SubscriptionLocalizationUpdateRequestData
     */
    attributes?: InAppPurchaseLocalizationUpdateRequestDataAttributes;
}
/**
 * @export
 */
export declare const SubscriptionLocalizationUpdateRequestDataTypeEnum: {
    readonly SubscriptionLocalizations: "subscriptionLocalizations";
};
export type SubscriptionLocalizationUpdateRequestDataTypeEnum = (typeof SubscriptionLocalizationUpdateRequestDataTypeEnum)[keyof typeof SubscriptionLocalizationUpdateRequestDataTypeEnum];
/**
 * Check if a given object implements the SubscriptionLocalizationUpdateRequestData interface.
 */
export declare function instanceOfSubscriptionLocalizationUpdateRequestData(value: object): boolean;
export declare function SubscriptionLocalizationUpdateRequestDataFromJSON(json: any): SubscriptionLocalizationUpdateRequestData;
export declare function SubscriptionLocalizationUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionLocalizationUpdateRequestData;
export declare function SubscriptionLocalizationUpdateRequestDataToJSON(value?: SubscriptionLocalizationUpdateRequestData | null): any;
