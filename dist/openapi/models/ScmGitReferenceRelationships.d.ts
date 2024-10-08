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
import type { CiWorkflowRelationshipsRepository } from "./CiWorkflowRelationshipsRepository";
/**
 *
 * @export
 * @interface ScmGitReferenceRelationships
 */
export interface ScmGitReferenceRelationships {
    /**
     *
     * @type {CiWorkflowRelationshipsRepository}
     * @memberof ScmGitReferenceRelationships
     */
    repository?: CiWorkflowRelationshipsRepository;
}
/**
 * Check if a given object implements the ScmGitReferenceRelationships interface.
 */
export declare function instanceOfScmGitReferenceRelationships(value: object): boolean;
export declare function ScmGitReferenceRelationshipsFromJSON(json: any): ScmGitReferenceRelationships;
export declare function ScmGitReferenceRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScmGitReferenceRelationships;
export declare function ScmGitReferenceRelationshipsToJSON(value?: ScmGitReferenceRelationships | null): any;
