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
import type { CiArtifact } from "./CiArtifact";
import type { DocumentLinks } from "./DocumentLinks";
/**
 *
 * @export
 * @interface CiArtifactResponse
 */
export interface CiArtifactResponse {
    /**
     *
     * @type {CiArtifact}
     * @memberof CiArtifactResponse
     */
    data: CiArtifact;
    /**
     *
     * @type {DocumentLinks}
     * @memberof CiArtifactResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the CiArtifactResponse interface.
 */
export declare function instanceOfCiArtifactResponse(value: object): boolean;
export declare function CiArtifactResponseFromJSON(json: any): CiArtifactResponse;
export declare function CiArtifactResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiArtifactResponse;
export declare function CiArtifactResponseToJSON(value?: CiArtifactResponse | null): any;
