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
import type { ResourceLinks } from "./ResourceLinks";
/**
 *
 * @export
 * @interface DiagnosticLog
 */
export interface DiagnosticLog {
    /**
     *
     * @type {string}
     * @memberof DiagnosticLog
     */
    type: DiagnosticLogTypeEnum;
    /**
     *
     * @type {string}
     * @memberof DiagnosticLog
     */
    id: string;
    /**
     *
     * @type {ResourceLinks}
     * @memberof DiagnosticLog
     */
    links?: ResourceLinks;
}
/**
 * @export
 */
export declare const DiagnosticLogTypeEnum: {
    readonly DiagnosticLogs: "diagnosticLogs";
};
export type DiagnosticLogTypeEnum = (typeof DiagnosticLogTypeEnum)[keyof typeof DiagnosticLogTypeEnum];
/**
 * Check if a given object implements the DiagnosticLog interface.
 */
export declare function instanceOfDiagnosticLog(value: object): boolean;
export declare function DiagnosticLogFromJSON(json: any): DiagnosticLog;
export declare function DiagnosticLogFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiagnosticLog;
export declare function DiagnosticLogToJSON(value?: DiagnosticLog | null): any;
