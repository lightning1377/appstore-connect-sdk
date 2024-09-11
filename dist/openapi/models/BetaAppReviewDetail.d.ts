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
import type { AppPreOrderRelationships } from "./AppPreOrderRelationships";
import type { AppStoreReviewDetailAttributes } from "./AppStoreReviewDetailAttributes";
import type { ResourceLinks } from "./ResourceLinks";
/**
 *
 * @export
 * @interface BetaAppReviewDetail
 */
export interface BetaAppReviewDetail {
    /**
     *
     * @type {string}
     * @memberof BetaAppReviewDetail
     */
    type: BetaAppReviewDetailTypeEnum;
    /**
     *
     * @type {string}
     * @memberof BetaAppReviewDetail
     */
    id: string;
    /**
     *
     * @type {AppStoreReviewDetailAttributes}
     * @memberof BetaAppReviewDetail
     */
    attributes?: AppStoreReviewDetailAttributes;
    /**
     *
     * @type {AppPreOrderRelationships}
     * @memberof BetaAppReviewDetail
     */
    relationships?: AppPreOrderRelationships;
    /**
     *
     * @type {ResourceLinks}
     * @memberof BetaAppReviewDetail
     */
    links?: ResourceLinks;
}
/**
 * @export
 */
export declare const BetaAppReviewDetailTypeEnum: {
    readonly BetaAppReviewDetails: "betaAppReviewDetails";
};
export type BetaAppReviewDetailTypeEnum = (typeof BetaAppReviewDetailTypeEnum)[keyof typeof BetaAppReviewDetailTypeEnum];
/**
 * Check if a given object implements the BetaAppReviewDetail interface.
 */
export declare function instanceOfBetaAppReviewDetail(value: object): boolean;
export declare function BetaAppReviewDetailFromJSON(json: any): BetaAppReviewDetail;
export declare function BetaAppReviewDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppReviewDetail;
export declare function BetaAppReviewDetailToJSON(value?: BetaAppReviewDetail | null): any;
