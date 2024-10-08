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
 * @interface CiWorkflowRelationshipsMacOsVersionData
 */
export interface CiWorkflowRelationshipsMacOsVersionData {
    /**
     *
     * @type {string}
     * @memberof CiWorkflowRelationshipsMacOsVersionData
     */
    type: CiWorkflowRelationshipsMacOsVersionDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof CiWorkflowRelationshipsMacOsVersionData
     */
    id: string;
}
/**
 * @export
 */
export declare const CiWorkflowRelationshipsMacOsVersionDataTypeEnum: {
    readonly CiMacOsVersions: "ciMacOsVersions";
};
export type CiWorkflowRelationshipsMacOsVersionDataTypeEnum = (typeof CiWorkflowRelationshipsMacOsVersionDataTypeEnum)[keyof typeof CiWorkflowRelationshipsMacOsVersionDataTypeEnum];
/**
 * Check if a given object implements the CiWorkflowRelationshipsMacOsVersionData interface.
 */
export declare function instanceOfCiWorkflowRelationshipsMacOsVersionData(value: object): boolean;
export declare function CiWorkflowRelationshipsMacOsVersionDataFromJSON(json: any): CiWorkflowRelationshipsMacOsVersionData;
export declare function CiWorkflowRelationshipsMacOsVersionDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiWorkflowRelationshipsMacOsVersionData;
export declare function CiWorkflowRelationshipsMacOsVersionDataToJSON(value?: CiWorkflowRelationshipsMacOsVersionData | null): any;
