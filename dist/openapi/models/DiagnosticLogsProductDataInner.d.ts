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
import type { DiagnosticLogsProductDataInnerDiagnosticInsightsInner } from "./DiagnosticLogsProductDataInnerDiagnosticInsightsInner";
import type { DiagnosticLogsProductDataInnerDiagnosticLogsInner } from "./DiagnosticLogsProductDataInnerDiagnosticLogsInner";
/**
 *
 * @export
 * @interface DiagnosticLogsProductDataInner
 */
export interface DiagnosticLogsProductDataInner {
    /**
     *
     * @type {string}
     * @memberof DiagnosticLogsProductDataInner
     */
    signatureId?: string;
    /**
     *
     * @type {Array<DiagnosticLogsProductDataInnerDiagnosticInsightsInner>}
     * @memberof DiagnosticLogsProductDataInner
     */
    diagnosticInsights?: Array<DiagnosticLogsProductDataInnerDiagnosticInsightsInner>;
    /**
     *
     * @type {Array<DiagnosticLogsProductDataInnerDiagnosticLogsInner>}
     * @memberof DiagnosticLogsProductDataInner
     */
    diagnosticLogs?: Array<DiagnosticLogsProductDataInnerDiagnosticLogsInner>;
}
/**
 * Check if a given object implements the DiagnosticLogsProductDataInner interface.
 */
export declare function instanceOfDiagnosticLogsProductDataInner(value: object): boolean;
export declare function DiagnosticLogsProductDataInnerFromJSON(json: any): DiagnosticLogsProductDataInner;
export declare function DiagnosticLogsProductDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiagnosticLogsProductDataInner;
export declare function DiagnosticLogsProductDataInnerToJSON(value?: DiagnosticLogsProductDataInner | null): any;
