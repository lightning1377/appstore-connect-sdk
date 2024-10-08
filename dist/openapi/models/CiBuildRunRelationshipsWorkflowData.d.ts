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
 * @interface CiBuildRunRelationshipsWorkflowData
 */
export interface CiBuildRunRelationshipsWorkflowData {
    /**
     *
     * @type {string}
     * @memberof CiBuildRunRelationshipsWorkflowData
     */
    type: CiBuildRunRelationshipsWorkflowDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof CiBuildRunRelationshipsWorkflowData
     */
    id: string;
}
/**
 * @export
 */
export declare const CiBuildRunRelationshipsWorkflowDataTypeEnum: {
    readonly CiWorkflows: "ciWorkflows";
};
export type CiBuildRunRelationshipsWorkflowDataTypeEnum = (typeof CiBuildRunRelationshipsWorkflowDataTypeEnum)[keyof typeof CiBuildRunRelationshipsWorkflowDataTypeEnum];
/**
 * Check if a given object implements the CiBuildRunRelationshipsWorkflowData interface.
 */
export declare function instanceOfCiBuildRunRelationshipsWorkflowData(value: object): boolean;
export declare function CiBuildRunRelationshipsWorkflowDataFromJSON(json: any): CiBuildRunRelationshipsWorkflowData;
export declare function CiBuildRunRelationshipsWorkflowDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiBuildRunRelationshipsWorkflowData;
export declare function CiBuildRunRelationshipsWorkflowDataToJSON(value?: CiBuildRunRelationshipsWorkflowData | null): any;
