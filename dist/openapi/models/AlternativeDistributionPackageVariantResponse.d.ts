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
import type { AlternativeDistributionPackageVariant } from "./AlternativeDistributionPackageVariant";
import type { DocumentLinks } from "./DocumentLinks";
/**
 *
 * @export
 * @interface AlternativeDistributionPackageVariantResponse
 */
export interface AlternativeDistributionPackageVariantResponse {
    /**
     *
     * @type {AlternativeDistributionPackageVariant}
     * @memberof AlternativeDistributionPackageVariantResponse
     */
    data: AlternativeDistributionPackageVariant;
    /**
     *
     * @type {DocumentLinks}
     * @memberof AlternativeDistributionPackageVariantResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the AlternativeDistributionPackageVariantResponse interface.
 */
export declare function instanceOfAlternativeDistributionPackageVariantResponse(value: object): boolean;
export declare function AlternativeDistributionPackageVariantResponseFromJSON(json: any): AlternativeDistributionPackageVariantResponse;
export declare function AlternativeDistributionPackageVariantResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlternativeDistributionPackageVariantResponse;
export declare function AlternativeDistributionPackageVariantResponseToJSON(value?: AlternativeDistributionPackageVariantResponse | null): any;
