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
import type { CiWorkflowRelationshipsMacOsVersionData } from "./CiWorkflowRelationshipsMacOsVersionData";
/**
 *
 * @export
 * @interface CiWorkflowUpdateRequestDataRelationshipsMacOsVersion
 */
export interface CiWorkflowUpdateRequestDataRelationshipsMacOsVersion {
    /**
     *
     * @type {CiWorkflowRelationshipsMacOsVersionData}
     * @memberof CiWorkflowUpdateRequestDataRelationshipsMacOsVersion
     */
    data?: CiWorkflowRelationshipsMacOsVersionData;
}
/**
 * Check if a given object implements the CiWorkflowUpdateRequestDataRelationshipsMacOsVersion interface.
 */
export declare function instanceOfCiWorkflowUpdateRequestDataRelationshipsMacOsVersion(value: object): boolean;
export declare function CiWorkflowUpdateRequestDataRelationshipsMacOsVersionFromJSON(json: any): CiWorkflowUpdateRequestDataRelationshipsMacOsVersion;
export declare function CiWorkflowUpdateRequestDataRelationshipsMacOsVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiWorkflowUpdateRequestDataRelationshipsMacOsVersion;
export declare function CiWorkflowUpdateRequestDataRelationshipsMacOsVersionToJSON(value?: CiWorkflowUpdateRequestDataRelationshipsMacOsVersion | null): any;
