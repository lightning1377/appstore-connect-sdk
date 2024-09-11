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
import type { AlternativeDistributionPackageVersionRelationshipsVariantsLinks } from "./AlternativeDistributionPackageVersionRelationshipsVariantsLinks";
import type { BuildRelationshipsBuildBetaDetailData } from "./BuildRelationshipsBuildBetaDetailData";
/**
 *
 * @export
 * @interface BuildRelationshipsBuildBetaDetail
 */
export interface BuildRelationshipsBuildBetaDetail {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof BuildRelationshipsBuildBetaDetail
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {BuildRelationshipsBuildBetaDetailData}
     * @memberof BuildRelationshipsBuildBetaDetail
     */
    data?: BuildRelationshipsBuildBetaDetailData;
}
/**
 * Check if a given object implements the BuildRelationshipsBuildBetaDetail interface.
 */
export declare function instanceOfBuildRelationshipsBuildBetaDetail(value: object): boolean;
export declare function BuildRelationshipsBuildBetaDetailFromJSON(json: any): BuildRelationshipsBuildBetaDetail;
export declare function BuildRelationshipsBuildBetaDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildRelationshipsBuildBetaDetail;
export declare function BuildRelationshipsBuildBetaDetailToJSON(value?: BuildRelationshipsBuildBetaDetail | null): any;
