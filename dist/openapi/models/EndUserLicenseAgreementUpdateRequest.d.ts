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
import type { EndUserLicenseAgreementUpdateRequestData } from "./EndUserLicenseAgreementUpdateRequestData";
/**
 *
 * @export
 * @interface EndUserLicenseAgreementUpdateRequest
 */
export interface EndUserLicenseAgreementUpdateRequest {
    /**
     *
     * @type {EndUserLicenseAgreementUpdateRequestData}
     * @memberof EndUserLicenseAgreementUpdateRequest
     */
    data: EndUserLicenseAgreementUpdateRequestData;
}
/**
 * Check if a given object implements the EndUserLicenseAgreementUpdateRequest interface.
 */
export declare function instanceOfEndUserLicenseAgreementUpdateRequest(value: object): boolean;
export declare function EndUserLicenseAgreementUpdateRequestFromJSON(json: any): EndUserLicenseAgreementUpdateRequest;
export declare function EndUserLicenseAgreementUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EndUserLicenseAgreementUpdateRequest;
export declare function EndUserLicenseAgreementUpdateRequestToJSON(value?: EndUserLicenseAgreementUpdateRequest | null): any;
