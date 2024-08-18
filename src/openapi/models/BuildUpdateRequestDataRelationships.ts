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
import type { BuildUpdateRequestDataRelationshipsAppEncryptionDeclaration } from "./BuildUpdateRequestDataRelationshipsAppEncryptionDeclaration";
import { BuildUpdateRequestDataRelationshipsAppEncryptionDeclarationFromJSON, BuildUpdateRequestDataRelationshipsAppEncryptionDeclarationFromJSONTyped, BuildUpdateRequestDataRelationshipsAppEncryptionDeclarationToJSON } from "./BuildUpdateRequestDataRelationshipsAppEncryptionDeclaration";

/**
 *
 * @export
 * @interface BuildUpdateRequestDataRelationships
 */
export interface BuildUpdateRequestDataRelationships {
    /**
     *
     * @type {BuildUpdateRequestDataRelationshipsAppEncryptionDeclaration}
     * @memberof BuildUpdateRequestDataRelationships
     */
    appEncryptionDeclaration?: BuildUpdateRequestDataRelationshipsAppEncryptionDeclaration;
}

/**
 * Check if a given object implements the BuildUpdateRequestDataRelationships interface.
 */
export function instanceOfBuildUpdateRequestDataRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BuildUpdateRequestDataRelationshipsFromJSON(json: any): BuildUpdateRequestDataRelationships {
    return BuildUpdateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function BuildUpdateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildUpdateRequestDataRelationships {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        appEncryptionDeclaration: !exists(json, "appEncryptionDeclaration") ? undefined : BuildUpdateRequestDataRelationshipsAppEncryptionDeclarationFromJSON(json["appEncryptionDeclaration"])
    };
}

export function BuildUpdateRequestDataRelationshipsToJSON(value?: BuildUpdateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        appEncryptionDeclaration: BuildUpdateRequestDataRelationshipsAppEncryptionDeclarationToJSON(value.appEncryptionDeclaration)
    };
}
