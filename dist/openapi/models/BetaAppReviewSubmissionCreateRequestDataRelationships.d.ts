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
import type { BetaAppReviewSubmissionCreateRequestDataRelationshipsBuild } from "./BetaAppReviewSubmissionCreateRequestDataRelationshipsBuild";
/**
 *
 * @export
 * @interface BetaAppReviewSubmissionCreateRequestDataRelationships
 */
export interface BetaAppReviewSubmissionCreateRequestDataRelationships {
    /**
     *
     * @type {BetaAppReviewSubmissionCreateRequestDataRelationshipsBuild}
     * @memberof BetaAppReviewSubmissionCreateRequestDataRelationships
     */
    build: BetaAppReviewSubmissionCreateRequestDataRelationshipsBuild;
}
/**
 * Check if a given object implements the BetaAppReviewSubmissionCreateRequestDataRelationships interface.
 */
export declare function instanceOfBetaAppReviewSubmissionCreateRequestDataRelationships(value: object): boolean;
export declare function BetaAppReviewSubmissionCreateRequestDataRelationshipsFromJSON(json: any): BetaAppReviewSubmissionCreateRequestDataRelationships;
export declare function BetaAppReviewSubmissionCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppReviewSubmissionCreateRequestDataRelationships;
export declare function BetaAppReviewSubmissionCreateRequestDataRelationshipsToJSON(value?: BetaAppReviewSubmissionCreateRequestDataRelationships | null): any;
