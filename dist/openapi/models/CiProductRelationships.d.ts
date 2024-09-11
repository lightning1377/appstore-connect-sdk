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
import type { AppAvailabilityRelationshipsApp } from "./AppAvailabilityRelationshipsApp";
import type { CiProductRelationshipsBundleId } from "./CiProductRelationshipsBundleId";
import type { CiProductRelationshipsPrimaryRepositories } from "./CiProductRelationshipsPrimaryRepositories";
/**
 *
 * @export
 * @interface CiProductRelationships
 */
export interface CiProductRelationships {
    /**
     *
     * @type {AppAvailabilityRelationshipsApp}
     * @memberof CiProductRelationships
     */
    app?: AppAvailabilityRelationshipsApp;
    /**
     *
     * @type {CiProductRelationshipsBundleId}
     * @memberof CiProductRelationships
     */
    bundleId?: CiProductRelationshipsBundleId;
    /**
     *
     * @type {CiProductRelationshipsPrimaryRepositories}
     * @memberof CiProductRelationships
     */
    primaryRepositories?: CiProductRelationshipsPrimaryRepositories;
}
/**
 * Check if a given object implements the CiProductRelationships interface.
 */
export declare function instanceOfCiProductRelationships(value: object): boolean;
export declare function CiProductRelationshipsFromJSON(json: any): CiProductRelationships;
export declare function CiProductRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiProductRelationships;
export declare function CiProductRelationshipsToJSON(value?: CiProductRelationships | null): any;
