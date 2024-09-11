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
import type { CiBuildRunAttributesSourceCommit } from "./CiBuildRunAttributesSourceCommit";
import type { CiCompletionStatus } from "./CiCompletionStatus";
import type { CiExecutionProgress } from "./CiExecutionProgress";
import type { CiIssueCounts } from "./CiIssueCounts";
/**
 *
 * @export
 * @interface CiBuildRunAttributes
 */
export interface CiBuildRunAttributes {
    /**
     *
     * @type {number}
     * @memberof CiBuildRunAttributes
     */
    number?: number;
    /**
     *
     * @type {Date}
     * @memberof CiBuildRunAttributes
     */
    createdDate?: Date;
    /**
     *
     * @type {Date}
     * @memberof CiBuildRunAttributes
     */
    startedDate?: Date;
    /**
     *
     * @type {Date}
     * @memberof CiBuildRunAttributes
     */
    finishedDate?: Date;
    /**
     *
     * @type {CiBuildRunAttributesSourceCommit}
     * @memberof CiBuildRunAttributes
     */
    sourceCommit?: CiBuildRunAttributesSourceCommit;
    /**
     *
     * @type {CiBuildRunAttributesSourceCommit}
     * @memberof CiBuildRunAttributes
     */
    destinationCommit?: CiBuildRunAttributesSourceCommit;
    /**
     *
     * @type {boolean}
     * @memberof CiBuildRunAttributes
     */
    isPullRequestBuild?: boolean;
    /**
     *
     * @type {CiIssueCounts}
     * @memberof CiBuildRunAttributes
     */
    issueCounts?: CiIssueCounts;
    /**
     *
     * @type {CiExecutionProgress}
     * @memberof CiBuildRunAttributes
     */
    executionProgress?: CiExecutionProgress;
    /**
     *
     * @type {CiCompletionStatus}
     * @memberof CiBuildRunAttributes
     */
    completionStatus?: CiCompletionStatus;
    /**
     *
     * @type {string}
     * @memberof CiBuildRunAttributes
     */
    startReason?: CiBuildRunAttributesStartReasonEnum;
    /**
     *
     * @type {string}
     * @memberof CiBuildRunAttributes
     */
    cancelReason?: CiBuildRunAttributesCancelReasonEnum;
}
/**
 * @export
 */
export declare const CiBuildRunAttributesStartReasonEnum: {
    readonly GitRefChange: "GIT_REF_CHANGE";
    readonly Manual: "MANUAL";
    readonly ManualRebuild: "MANUAL_REBUILD";
    readonly PullRequestOpen: "PULL_REQUEST_OPEN";
    readonly PullRequestUpdate: "PULL_REQUEST_UPDATE";
    readonly Schedule: "SCHEDULE";
};
export type CiBuildRunAttributesStartReasonEnum = (typeof CiBuildRunAttributesStartReasonEnum)[keyof typeof CiBuildRunAttributesStartReasonEnum];
/**
 * @export
 */
export declare const CiBuildRunAttributesCancelReasonEnum: {
    readonly AutomaticallyByNewerBuild: "AUTOMATICALLY_BY_NEWER_BUILD";
    readonly ManuallyByUser: "MANUALLY_BY_USER";
};
export type CiBuildRunAttributesCancelReasonEnum = (typeof CiBuildRunAttributesCancelReasonEnum)[keyof typeof CiBuildRunAttributesCancelReasonEnum];
/**
 * Check if a given object implements the CiBuildRunAttributes interface.
 */
export declare function instanceOfCiBuildRunAttributes(value: object): boolean;
export declare function CiBuildRunAttributesFromJSON(json: any): CiBuildRunAttributes;
export declare function CiBuildRunAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiBuildRunAttributes;
export declare function CiBuildRunAttributesToJSON(value?: CiBuildRunAttributes | null): any;
