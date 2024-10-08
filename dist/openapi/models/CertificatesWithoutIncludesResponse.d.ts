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
import type { Certificate } from "./Certificate";
import type { PagedDocumentLinks } from "./PagedDocumentLinks";
import type { PagingInformation } from "./PagingInformation";
/**
 *
 * @export
 * @interface CertificatesWithoutIncludesResponse
 */
export interface CertificatesWithoutIncludesResponse {
    /**
     *
     * @type {Array<Certificate>}
     * @memberof CertificatesWithoutIncludesResponse
     */
    data: Array<Certificate>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof CertificatesWithoutIncludesResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof CertificatesWithoutIncludesResponse
     */
    meta?: PagingInformation;
}
/**
 * Check if a given object implements the CertificatesWithoutIncludesResponse interface.
 */
export declare function instanceOfCertificatesWithoutIncludesResponse(value: object): boolean;
export declare function CertificatesWithoutIncludesResponseFromJSON(json: any): CertificatesWithoutIncludesResponse;
export declare function CertificatesWithoutIncludesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CertificatesWithoutIncludesResponse;
export declare function CertificatesWithoutIncludesResponseToJSON(value?: CertificatesWithoutIncludesResponse | null): any;
