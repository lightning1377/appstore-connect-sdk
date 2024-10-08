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
import type { CiMacOsVersionRelationshipsXcodeVersionsDataInner } from "./CiMacOsVersionRelationshipsXcodeVersionsDataInner";
/**
 *
 * @export
 * @interface CiWorkflowRelationshipsXcodeVersion
 */
export interface CiWorkflowRelationshipsXcodeVersion {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof CiWorkflowRelationshipsXcodeVersion
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {CiMacOsVersionRelationshipsXcodeVersionsDataInner}
     * @memberof CiWorkflowRelationshipsXcodeVersion
     */
    data?: CiMacOsVersionRelationshipsXcodeVersionsDataInner;
}
/**
 * Check if a given object implements the CiWorkflowRelationshipsXcodeVersion interface.
 */
export declare function instanceOfCiWorkflowRelationshipsXcodeVersion(value: object): boolean;
export declare function CiWorkflowRelationshipsXcodeVersionFromJSON(json: any): CiWorkflowRelationshipsXcodeVersion;
export declare function CiWorkflowRelationshipsXcodeVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiWorkflowRelationshipsXcodeVersion;
export declare function CiWorkflowRelationshipsXcodeVersionToJSON(value?: CiWorkflowRelationshipsXcodeVersion | null): any;
