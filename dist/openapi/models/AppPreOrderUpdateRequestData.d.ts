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
import type { AppPreOrderCreateRequestDataAttributes } from "./AppPreOrderCreateRequestDataAttributes";
/**
 *
 * @export
 * @interface AppPreOrderUpdateRequestData
 */
export interface AppPreOrderUpdateRequestData {
    /**
     *
     * @type {string}
     * @memberof AppPreOrderUpdateRequestData
     */
    type: AppPreOrderUpdateRequestDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppPreOrderUpdateRequestData
     */
    id: string;
    /**
     *
     * @type {AppPreOrderCreateRequestDataAttributes}
     * @memberof AppPreOrderUpdateRequestData
     */
    attributes?: AppPreOrderCreateRequestDataAttributes;
}
/**
 * @export
 */
export declare const AppPreOrderUpdateRequestDataTypeEnum: {
    readonly AppPreOrders: "appPreOrders";
};
export type AppPreOrderUpdateRequestDataTypeEnum = (typeof AppPreOrderUpdateRequestDataTypeEnum)[keyof typeof AppPreOrderUpdateRequestDataTypeEnum];
/**
 * Check if a given object implements the AppPreOrderUpdateRequestData interface.
 */
export declare function instanceOfAppPreOrderUpdateRequestData(value: object): boolean;
export declare function AppPreOrderUpdateRequestDataFromJSON(json: any): AppPreOrderUpdateRequestData;
export declare function AppPreOrderUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreOrderUpdateRequestData;
export declare function AppPreOrderUpdateRequestDataToJSON(value?: AppPreOrderUpdateRequestData | null): any;
