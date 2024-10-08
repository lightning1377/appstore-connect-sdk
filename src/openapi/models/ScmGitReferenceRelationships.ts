/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
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

import { exists, mapValues } from "../runtime";
import type { CiWorkflowRelationshipsRepository } from "./CiWorkflowRelationshipsRepository";
import { CiWorkflowRelationshipsRepositoryFromJSON, CiWorkflowRelationshipsRepositoryFromJSONTyped, CiWorkflowRelationshipsRepositoryToJSON } from "./CiWorkflowRelationshipsRepository";

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
export function instanceOfScmGitReferenceRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ScmGitReferenceRelationshipsFromJSON(json: any): ScmGitReferenceRelationships {
    return ScmGitReferenceRelationshipsFromJSONTyped(json, false);
}

export function ScmGitReferenceRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScmGitReferenceRelationships {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        repository: !exists(json, "repository") ? undefined : CiWorkflowRelationshipsRepositoryFromJSON(json["repository"])
    };
}

export function ScmGitReferenceRelationshipsToJSON(value?: ScmGitReferenceRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        repository: CiWorkflowRelationshipsRepositoryToJSON(value.repository)
    };
}
