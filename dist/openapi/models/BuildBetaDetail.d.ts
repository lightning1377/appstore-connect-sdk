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
import type { BetaAppReviewSubmissionRelationships } from "./BetaAppReviewSubmissionRelationships";
import type { BuildBetaDetailAttributes } from "./BuildBetaDetailAttributes";
import type { ResourceLinks } from "./ResourceLinks";
/**
 *
 * @export
 * @interface BuildBetaDetail
 */
export interface BuildBetaDetail {
    /**
     *
     * @type {string}
     * @memberof BuildBetaDetail
     */
    type: BuildBetaDetailTypeEnum;
    /**
     *
     * @type {string}
     * @memberof BuildBetaDetail
     */
    id: string;
    /**
     *
     * @type {BuildBetaDetailAttributes}
     * @memberof BuildBetaDetail
     */
    attributes?: BuildBetaDetailAttributes;
    /**
     *
     * @type {BetaAppReviewSubmissionRelationships}
     * @memberof BuildBetaDetail
     */
    relationships?: BetaAppReviewSubmissionRelationships;
    /**
     *
     * @type {ResourceLinks}
     * @memberof BuildBetaDetail
     */
    links?: ResourceLinks;
}
/**
 * @export
 */
export declare const BuildBetaDetailTypeEnum: {
    readonly BuildBetaDetails: "buildBetaDetails";
};
export type BuildBetaDetailTypeEnum = (typeof BuildBetaDetailTypeEnum)[keyof typeof BuildBetaDetailTypeEnum];
/**
 * Check if a given object implements the BuildBetaDetail interface.
 */
export declare function instanceOfBuildBetaDetail(value: object): boolean;
export declare function BuildBetaDetailFromJSON(json: any): BuildBetaDetail;
export declare function BuildBetaDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildBetaDetail;
export declare function BuildBetaDetailToJSON(value?: BuildBetaDetail | null): any;
