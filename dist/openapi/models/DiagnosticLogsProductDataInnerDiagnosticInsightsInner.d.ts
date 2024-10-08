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
/**
 *
 * @export
 * @interface DiagnosticLogsProductDataInnerDiagnosticInsightsInner
 */
export interface DiagnosticLogsProductDataInnerDiagnosticInsightsInner {
    /**
     *
     * @type {string}
     * @memberof DiagnosticLogsProductDataInnerDiagnosticInsightsInner
     */
    insightsURL?: string;
    /**
     *
     * @type {string}
     * @memberof DiagnosticLogsProductDataInnerDiagnosticInsightsInner
     */
    insightsCategory?: string;
    /**
     *
     * @type {string}
     * @memberof DiagnosticLogsProductDataInnerDiagnosticInsightsInner
     */
    insightsString?: string;
}
/**
 * Check if a given object implements the DiagnosticLogsProductDataInnerDiagnosticInsightsInner interface.
 */
export declare function instanceOfDiagnosticLogsProductDataInnerDiagnosticInsightsInner(value: object): boolean;
export declare function DiagnosticLogsProductDataInnerDiagnosticInsightsInnerFromJSON(json: any): DiagnosticLogsProductDataInnerDiagnosticInsightsInner;
export declare function DiagnosticLogsProductDataInnerDiagnosticInsightsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiagnosticLogsProductDataInnerDiagnosticInsightsInner;
export declare function DiagnosticLogsProductDataInnerDiagnosticInsightsInnerToJSON(value?: DiagnosticLogsProductDataInnerDiagnosticInsightsInner | null): any;
