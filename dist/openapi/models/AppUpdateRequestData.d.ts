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
import type { AppUpdateRequestDataAttributes } from "./AppUpdateRequestDataAttributes";
/**
 *
 * @export
 * @interface AppUpdateRequestData
 */
export interface AppUpdateRequestData {
    /**
     *
     * @type {string}
     * @memberof AppUpdateRequestData
     */
    type: AppUpdateRequestDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppUpdateRequestData
     */
    id: string;
    /**
     *
     * @type {AppUpdateRequestDataAttributes}
     * @memberof AppUpdateRequestData
     */
    attributes?: AppUpdateRequestDataAttributes;
}
/**
 * @export
 */
export declare const AppUpdateRequestDataTypeEnum: {
    readonly Apps: "apps";
};
export type AppUpdateRequestDataTypeEnum = (typeof AppUpdateRequestDataTypeEnum)[keyof typeof AppUpdateRequestDataTypeEnum];
/**
 * Check if a given object implements the AppUpdateRequestData interface.
 */
export declare function instanceOfAppUpdateRequestData(value: object): boolean;
export declare function AppUpdateRequestDataFromJSON(json: any): AppUpdateRequestData;
export declare function AppUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppUpdateRequestData;
export declare function AppUpdateRequestDataToJSON(value?: AppUpdateRequestData | null): any;
