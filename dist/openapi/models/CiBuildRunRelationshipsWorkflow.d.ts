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
import type { AlternativeDistributionPackageVersionRelationshipsVariantsLinks } from "./AlternativeDistributionPackageVersionRelationshipsVariantsLinks";
import type { CiBuildRunRelationshipsWorkflowData } from "./CiBuildRunRelationshipsWorkflowData";
/**
 *
 * @export
 * @interface CiBuildRunRelationshipsWorkflow
 */
export interface CiBuildRunRelationshipsWorkflow {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof CiBuildRunRelationshipsWorkflow
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {CiBuildRunRelationshipsWorkflowData}
     * @memberof CiBuildRunRelationshipsWorkflow
     */
    data?: CiBuildRunRelationshipsWorkflowData;
}
/**
 * Check if a given object implements the CiBuildRunRelationshipsWorkflow interface.
 */
export declare function instanceOfCiBuildRunRelationshipsWorkflow(value: object): boolean;
export declare function CiBuildRunRelationshipsWorkflowFromJSON(json: any): CiBuildRunRelationshipsWorkflow;
export declare function CiBuildRunRelationshipsWorkflowFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiBuildRunRelationshipsWorkflow;
export declare function CiBuildRunRelationshipsWorkflowToJSON(value?: CiBuildRunRelationshipsWorkflow | null): any;
