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
import type { CertificateCreateRequestData } from "./CertificateCreateRequestData";
/**
 *
 * @export
 * @interface CertificateCreateRequest
 */
export interface CertificateCreateRequest {
    /**
     *
     * @type {CertificateCreateRequestData}
     * @memberof CertificateCreateRequest
     */
    data: CertificateCreateRequestData;
}
/**
 * Check if a given object implements the CertificateCreateRequest interface.
 */
export declare function instanceOfCertificateCreateRequest(value: object): boolean;
export declare function CertificateCreateRequestFromJSON(json: any): CertificateCreateRequest;
export declare function CertificateCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CertificateCreateRequest;
export declare function CertificateCreateRequestToJSON(value?: CertificateCreateRequest | null): any;
