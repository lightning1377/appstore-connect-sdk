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
 */
export declare const CiCompletionStatus: {
    readonly Succeeded: "SUCCEEDED";
    readonly Failed: "FAILED";
    readonly Errored: "ERRORED";
    readonly Canceled: "CANCELED";
    readonly Skipped: "SKIPPED";
};
export type CiCompletionStatus = (typeof CiCompletionStatus)[keyof typeof CiCompletionStatus];
export declare function CiCompletionStatusFromJSON(json: any): CiCompletionStatus;
export declare function CiCompletionStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiCompletionStatus;
export declare function CiCompletionStatusToJSON(value?: CiCompletionStatus | null): any;
