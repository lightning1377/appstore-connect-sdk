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
import type { AppCustomProductPageLocalizationUpdateRequestDataAttributes } from "./AppCustomProductPageLocalizationUpdateRequestDataAttributes";
/**
 *
 * @export
 * @interface AppCustomProductPageLocalizationUpdateRequestData
 */
export interface AppCustomProductPageLocalizationUpdateRequestData {
    /**
     *
     * @type {string}
     * @memberof AppCustomProductPageLocalizationUpdateRequestData
     */
    type: AppCustomProductPageLocalizationUpdateRequestDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppCustomProductPageLocalizationUpdateRequestData
     */
    id: string;
    /**
     *
     * @type {AppCustomProductPageLocalizationUpdateRequestDataAttributes}
     * @memberof AppCustomProductPageLocalizationUpdateRequestData
     */
    attributes?: AppCustomProductPageLocalizationUpdateRequestDataAttributes;
}
/**
 * @export
 */
export declare const AppCustomProductPageLocalizationUpdateRequestDataTypeEnum: {
    readonly AppCustomProductPageLocalizations: "appCustomProductPageLocalizations";
};
export type AppCustomProductPageLocalizationUpdateRequestDataTypeEnum = (typeof AppCustomProductPageLocalizationUpdateRequestDataTypeEnum)[keyof typeof AppCustomProductPageLocalizationUpdateRequestDataTypeEnum];
/**
 * Check if a given object implements the AppCustomProductPageLocalizationUpdateRequestData interface.
 */
export declare function instanceOfAppCustomProductPageLocalizationUpdateRequestData(value: object): boolean;
export declare function AppCustomProductPageLocalizationUpdateRequestDataFromJSON(json: any): AppCustomProductPageLocalizationUpdateRequestData;
export declare function AppCustomProductPageLocalizationUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageLocalizationUpdateRequestData;
export declare function AppCustomProductPageLocalizationUpdateRequestDataToJSON(value?: AppCustomProductPageLocalizationUpdateRequestData | null): any;
