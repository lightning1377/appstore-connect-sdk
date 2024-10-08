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
import type { AppPriceSchedule } from "./AppPriceSchedule";
import type { AppPriceScheduleResponseIncludedInner } from "./AppPriceScheduleResponseIncludedInner";
import type { DocumentLinks } from "./DocumentLinks";
/**
 *
 * @export
 * @interface AppPriceScheduleResponse
 */
export interface AppPriceScheduleResponse {
    /**
     *
     * @type {AppPriceSchedule}
     * @memberof AppPriceScheduleResponse
     */
    data: AppPriceSchedule;
    /**
     *
     * @type {Array<AppPriceScheduleResponseIncludedInner>}
     * @memberof AppPriceScheduleResponse
     */
    included?: Array<AppPriceScheduleResponseIncludedInner>;
    /**
     *
     * @type {DocumentLinks}
     * @memberof AppPriceScheduleResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the AppPriceScheduleResponse interface.
 */
export declare function instanceOfAppPriceScheduleResponse(value: object): boolean;
export declare function AppPriceScheduleResponseFromJSON(json: any): AppPriceScheduleResponse;
export declare function AppPriceScheduleResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPriceScheduleResponse;
export declare function AppPriceScheduleResponseToJSON(value?: AppPriceScheduleResponse | null): any;
