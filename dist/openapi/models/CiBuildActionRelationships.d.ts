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
import type { CiBuildActionRelationshipsBuildRun } from "./CiBuildActionRelationshipsBuildRun";
/**
 *
 * @export
 * @interface CiBuildActionRelationships
 */
export interface CiBuildActionRelationships {
    /**
     *
     * @type {CiBuildActionRelationshipsBuildRun}
     * @memberof CiBuildActionRelationships
     */
    buildRun?: CiBuildActionRelationshipsBuildRun;
}
/**
 * Check if a given object implements the CiBuildActionRelationships interface.
 */
export declare function instanceOfCiBuildActionRelationships(value: object): boolean;
export declare function CiBuildActionRelationshipsFromJSON(json: any): CiBuildActionRelationships;
export declare function CiBuildActionRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiBuildActionRelationships;
export declare function CiBuildActionRelationshipsToJSON(value?: CiBuildActionRelationships | null): any;
