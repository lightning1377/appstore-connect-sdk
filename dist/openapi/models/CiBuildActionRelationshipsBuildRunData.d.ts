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
 * @interface CiBuildActionRelationshipsBuildRunData
 */
export interface CiBuildActionRelationshipsBuildRunData {
    /**
     *
     * @type {string}
     * @memberof CiBuildActionRelationshipsBuildRunData
     */
    type: CiBuildActionRelationshipsBuildRunDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof CiBuildActionRelationshipsBuildRunData
     */
    id: string;
}
/**
 * @export
 */
export declare const CiBuildActionRelationshipsBuildRunDataTypeEnum: {
    readonly CiBuildRuns: "ciBuildRuns";
};
export type CiBuildActionRelationshipsBuildRunDataTypeEnum = (typeof CiBuildActionRelationshipsBuildRunDataTypeEnum)[keyof typeof CiBuildActionRelationshipsBuildRunDataTypeEnum];
/**
 * Check if a given object implements the CiBuildActionRelationshipsBuildRunData interface.
 */
export declare function instanceOfCiBuildActionRelationshipsBuildRunData(value: object): boolean;
export declare function CiBuildActionRelationshipsBuildRunDataFromJSON(json: any): CiBuildActionRelationshipsBuildRunData;
export declare function CiBuildActionRelationshipsBuildRunDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiBuildActionRelationshipsBuildRunData;
export declare function CiBuildActionRelationshipsBuildRunDataToJSON(value?: CiBuildActionRelationshipsBuildRunData | null): any;
