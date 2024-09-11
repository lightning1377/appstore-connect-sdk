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
import type { EndUserLicenseAgreementUpdateRequestDataRelationshipsTerritories } from "./EndUserLicenseAgreementUpdateRequestDataRelationshipsTerritories";
/**
 *
 * @export
 * @interface EndUserLicenseAgreementUpdateRequestDataRelationships
 */
export interface EndUserLicenseAgreementUpdateRequestDataRelationships {
    /**
     *
     * @type {EndUserLicenseAgreementUpdateRequestDataRelationshipsTerritories}
     * @memberof EndUserLicenseAgreementUpdateRequestDataRelationships
     */
    territories?: EndUserLicenseAgreementUpdateRequestDataRelationshipsTerritories;
}
/**
 * Check if a given object implements the EndUserLicenseAgreementUpdateRequestDataRelationships interface.
 */
export declare function instanceOfEndUserLicenseAgreementUpdateRequestDataRelationships(value: object): boolean;
export declare function EndUserLicenseAgreementUpdateRequestDataRelationshipsFromJSON(json: any): EndUserLicenseAgreementUpdateRequestDataRelationships;
export declare function EndUserLicenseAgreementUpdateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): EndUserLicenseAgreementUpdateRequestDataRelationships;
export declare function EndUserLicenseAgreementUpdateRequestDataRelationshipsToJSON(value?: EndUserLicenseAgreementUpdateRequestDataRelationships | null): any;
