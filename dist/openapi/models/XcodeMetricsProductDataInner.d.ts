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
import type { XcodeMetricsProductDataInnerMetricCategoriesInner } from "./XcodeMetricsProductDataInnerMetricCategoriesInner";
/**
 *
 * @export
 * @interface XcodeMetricsProductDataInner
 */
export interface XcodeMetricsProductDataInner {
    /**
     *
     * @type {string}
     * @memberof XcodeMetricsProductDataInner
     */
    platform?: string;
    /**
     *
     * @type {Array<XcodeMetricsProductDataInnerMetricCategoriesInner>}
     * @memberof XcodeMetricsProductDataInner
     */
    metricCategories?: Array<XcodeMetricsProductDataInnerMetricCategoriesInner>;
}
/**
 * Check if a given object implements the XcodeMetricsProductDataInner interface.
 */
export declare function instanceOfXcodeMetricsProductDataInner(value: object): boolean;
export declare function XcodeMetricsProductDataInnerFromJSON(json: any): XcodeMetricsProductDataInner;
export declare function XcodeMetricsProductDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): XcodeMetricsProductDataInner;
export declare function XcodeMetricsProductDataInnerToJSON(value?: XcodeMetricsProductDataInner | null): any;
