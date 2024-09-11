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
import type { CiAction } from "./CiAction";
import type { CiBranchStartCondition } from "./CiBranchStartCondition";
import type { CiManualBranchStartCondition } from "./CiManualBranchStartCondition";
import type { CiManualPullRequestStartCondition } from "./CiManualPullRequestStartCondition";
import type { CiManualTagStartCondition } from "./CiManualTagStartCondition";
import type { CiPullRequestStartCondition } from "./CiPullRequestStartCondition";
import type { CiScheduledStartCondition } from "./CiScheduledStartCondition";
import type { CiTagStartCondition } from "./CiTagStartCondition";
/**
 *
 * @export
 * @interface CiWorkflowAttributes
 */
export interface CiWorkflowAttributes {
    /**
     *
     * @type {string}
     * @memberof CiWorkflowAttributes
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof CiWorkflowAttributes
     */
    description?: string;
    /**
     *
     * @type {CiBranchStartCondition}
     * @memberof CiWorkflowAttributes
     */
    branchStartCondition?: CiBranchStartCondition;
    /**
     *
     * @type {CiTagStartCondition}
     * @memberof CiWorkflowAttributes
     */
    tagStartCondition?: CiTagStartCondition;
    /**
     *
     * @type {CiPullRequestStartCondition}
     * @memberof CiWorkflowAttributes
     */
    pullRequestStartCondition?: CiPullRequestStartCondition;
    /**
     *
     * @type {CiScheduledStartCondition}
     * @memberof CiWorkflowAttributes
     */
    scheduledStartCondition?: CiScheduledStartCondition;
    /**
     *
     * @type {CiManualBranchStartCondition}
     * @memberof CiWorkflowAttributes
     */
    manualBranchStartCondition?: CiManualBranchStartCondition;
    /**
     *
     * @type {CiManualTagStartCondition}
     * @memberof CiWorkflowAttributes
     */
    manualTagStartCondition?: CiManualTagStartCondition;
    /**
     *
     * @type {CiManualPullRequestStartCondition}
     * @memberof CiWorkflowAttributes
     */
    manualPullRequestStartCondition?: CiManualPullRequestStartCondition;
    /**
     *
     * @type {Array<CiAction>}
     * @memberof CiWorkflowAttributes
     */
    actions?: Array<CiAction>;
    /**
     *
     * @type {boolean}
     * @memberof CiWorkflowAttributes
     */
    isEnabled?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof CiWorkflowAttributes
     */
    isLockedForEditing?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof CiWorkflowAttributes
     */
    clean?: boolean;
    /**
     *
     * @type {string}
     * @memberof CiWorkflowAttributes
     */
    containerFilePath?: string;
    /**
     *
     * @type {Date}
     * @memberof CiWorkflowAttributes
     */
    lastModifiedDate?: Date;
}
/**
 * Check if a given object implements the CiWorkflowAttributes interface.
 */
export declare function instanceOfCiWorkflowAttributes(value: object): boolean;
export declare function CiWorkflowAttributesFromJSON(json: any): CiWorkflowAttributes;
export declare function CiWorkflowAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiWorkflowAttributes;
export declare function CiWorkflowAttributesToJSON(value?: CiWorkflowAttributes | null): any;
