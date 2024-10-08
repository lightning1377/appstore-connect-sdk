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
import type { AppPriceScheduleRelationships } from "./AppPriceScheduleRelationships";
import type { ResourceLinks } from "./ResourceLinks";
/**
 *
 * @export
 * @interface AppPriceSchedule
 */
export interface AppPriceSchedule {
    /**
     *
     * @type {string}
     * @memberof AppPriceSchedule
     */
    type: AppPriceScheduleTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppPriceSchedule
     */
    id: string;
    /**
     *
     * @type {AppPriceScheduleRelationships}
     * @memberof AppPriceSchedule
     */
    relationships?: AppPriceScheduleRelationships;
    /**
     *
     * @type {ResourceLinks}
     * @memberof AppPriceSchedule
     */
    links?: ResourceLinks;
}
/**
 * @export
 */
export declare const AppPriceScheduleTypeEnum: {
    readonly AppPriceSchedules: "appPriceSchedules";
};
export type AppPriceScheduleTypeEnum = (typeof AppPriceScheduleTypeEnum)[keyof typeof AppPriceScheduleTypeEnum];
/**
 * Check if a given object implements the AppPriceSchedule interface.
 */
export declare function instanceOfAppPriceSchedule(value: object): boolean;
export declare function AppPriceScheduleFromJSON(json: any): AppPriceSchedule;
export declare function AppPriceScheduleFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPriceSchedule;
export declare function AppPriceScheduleToJSON(value?: AppPriceSchedule | null): any;
