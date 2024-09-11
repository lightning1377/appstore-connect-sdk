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
import type { AppStoreVersionRelationshipsBuild } from "./AppStoreVersionRelationshipsBuild";
/**
 *
 * @export
 * @interface BetaAppReviewSubmissionRelationships
 */
export interface BetaAppReviewSubmissionRelationships {
    /**
     *
     * @type {AppStoreVersionRelationshipsBuild}
     * @memberof BetaAppReviewSubmissionRelationships
     */
    build?: AppStoreVersionRelationshipsBuild;
}
/**
 * Check if a given object implements the BetaAppReviewSubmissionRelationships interface.
 */
export declare function instanceOfBetaAppReviewSubmissionRelationships(value: object): boolean;
export declare function BetaAppReviewSubmissionRelationshipsFromJSON(json: any): BetaAppReviewSubmissionRelationships;
export declare function BetaAppReviewSubmissionRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppReviewSubmissionRelationships;
export declare function BetaAppReviewSubmissionRelationshipsToJSON(value?: BetaAppReviewSubmissionRelationships | null): any;
