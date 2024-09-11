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
import type { DocumentLinks } from "./DocumentLinks";
import type { EndUserLicenseAgreement } from "./EndUserLicenseAgreement";
/**
 *
 * @export
 * @interface EndUserLicenseAgreementWithoutIncludesResponse
 */
export interface EndUserLicenseAgreementWithoutIncludesResponse {
    /**
     *
     * @type {EndUserLicenseAgreement}
     * @memberof EndUserLicenseAgreementWithoutIncludesResponse
     */
    data: EndUserLicenseAgreement;
    /**
     *
     * @type {DocumentLinks}
     * @memberof EndUserLicenseAgreementWithoutIncludesResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the EndUserLicenseAgreementWithoutIncludesResponse interface.
 */
export declare function instanceOfEndUserLicenseAgreementWithoutIncludesResponse(value: object): boolean;
export declare function EndUserLicenseAgreementWithoutIncludesResponseFromJSON(json: any): EndUserLicenseAgreementWithoutIncludesResponse;
export declare function EndUserLicenseAgreementWithoutIncludesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EndUserLicenseAgreementWithoutIncludesResponse;
export declare function EndUserLicenseAgreementWithoutIncludesResponseToJSON(value?: EndUserLicenseAgreementWithoutIncludesResponse | null): any;
