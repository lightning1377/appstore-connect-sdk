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
import type { AlternativeDistributionPackageDelta } from "./AlternativeDistributionPackageDelta";
import type { DocumentLinks } from "./DocumentLinks";
/**
 *
 * @export
 * @interface AlternativeDistributionPackageDeltaResponse
 */
export interface AlternativeDistributionPackageDeltaResponse {
    /**
     *
     * @type {AlternativeDistributionPackageDelta}
     * @memberof AlternativeDistributionPackageDeltaResponse
     */
    data: AlternativeDistributionPackageDelta;
    /**
     *
     * @type {DocumentLinks}
     * @memberof AlternativeDistributionPackageDeltaResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the AlternativeDistributionPackageDeltaResponse interface.
 */
export declare function instanceOfAlternativeDistributionPackageDeltaResponse(value: object): boolean;
export declare function AlternativeDistributionPackageDeltaResponseFromJSON(json: any): AlternativeDistributionPackageDeltaResponse;
export declare function AlternativeDistributionPackageDeltaResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlternativeDistributionPackageDeltaResponse;
export declare function AlternativeDistributionPackageDeltaResponseToJSON(value?: AlternativeDistributionPackageDeltaResponse | null): any;
