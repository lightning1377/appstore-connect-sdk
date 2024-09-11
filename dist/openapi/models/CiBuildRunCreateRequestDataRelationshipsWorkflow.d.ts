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
import type { CiBuildRunRelationshipsWorkflowData } from "./CiBuildRunRelationshipsWorkflowData";
/**
 *
 * @export
 * @interface CiBuildRunCreateRequestDataRelationshipsWorkflow
 */
export interface CiBuildRunCreateRequestDataRelationshipsWorkflow {
    /**
     *
     * @type {CiBuildRunRelationshipsWorkflowData}
     * @memberof CiBuildRunCreateRequestDataRelationshipsWorkflow
     */
    data?: CiBuildRunRelationshipsWorkflowData;
}
/**
 * Check if a given object implements the CiBuildRunCreateRequestDataRelationshipsWorkflow interface.
 */
export declare function instanceOfCiBuildRunCreateRequestDataRelationshipsWorkflow(value: object): boolean;
export declare function CiBuildRunCreateRequestDataRelationshipsWorkflowFromJSON(json: any): CiBuildRunCreateRequestDataRelationshipsWorkflow;
export declare function CiBuildRunCreateRequestDataRelationshipsWorkflowFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiBuildRunCreateRequestDataRelationshipsWorkflow;
export declare function CiBuildRunCreateRequestDataRelationshipsWorkflowToJSON(value?: CiBuildRunCreateRequestDataRelationshipsWorkflow | null): any;
