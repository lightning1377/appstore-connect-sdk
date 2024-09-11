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
import type { AnalyticsReportRequestCreateRequestDataRelationships } from "./AnalyticsReportRequestCreateRequestDataRelationships";
import type { AppEventCreateRequestDataAttributes } from "./AppEventCreateRequestDataAttributes";
/**
 *
 * @export
 * @interface AppEventCreateRequestData
 */
export interface AppEventCreateRequestData {
    /**
     *
     * @type {string}
     * @memberof AppEventCreateRequestData
     */
    type: AppEventCreateRequestDataTypeEnum;
    /**
     *
     * @type {AppEventCreateRequestDataAttributes}
     * @memberof AppEventCreateRequestData
     */
    attributes: AppEventCreateRequestDataAttributes;
    /**
     *
     * @type {AnalyticsReportRequestCreateRequestDataRelationships}
     * @memberof AppEventCreateRequestData
     */
    relationships: AnalyticsReportRequestCreateRequestDataRelationships;
}
/**
 * @export
 */
export declare const AppEventCreateRequestDataTypeEnum: {
    readonly AppEvents: "appEvents";
};
export type AppEventCreateRequestDataTypeEnum = (typeof AppEventCreateRequestDataTypeEnum)[keyof typeof AppEventCreateRequestDataTypeEnum];
/**
 * Check if a given object implements the AppEventCreateRequestData interface.
 */
export declare function instanceOfAppEventCreateRequestData(value: object): boolean;
export declare function AppEventCreateRequestDataFromJSON(json: any): AppEventCreateRequestData;
export declare function AppEventCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventCreateRequestData;
export declare function AppEventCreateRequestDataToJSON(value?: AppEventCreateRequestData | null): any;
