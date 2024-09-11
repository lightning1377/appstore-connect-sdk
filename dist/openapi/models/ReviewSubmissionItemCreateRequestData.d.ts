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
import type { ReviewSubmissionItemCreateRequestDataRelationships } from "./ReviewSubmissionItemCreateRequestDataRelationships";
/**
 *
 * @export
 * @interface ReviewSubmissionItemCreateRequestData
 */
export interface ReviewSubmissionItemCreateRequestData {
    /**
     *
     * @type {string}
     * @memberof ReviewSubmissionItemCreateRequestData
     */
    type: ReviewSubmissionItemCreateRequestDataTypeEnum;
    /**
     *
     * @type {ReviewSubmissionItemCreateRequestDataRelationships}
     * @memberof ReviewSubmissionItemCreateRequestData
     */
    relationships: ReviewSubmissionItemCreateRequestDataRelationships;
}
/**
 * @export
 */
export declare const ReviewSubmissionItemCreateRequestDataTypeEnum: {
    readonly ReviewSubmissionItems: "reviewSubmissionItems";
};
export type ReviewSubmissionItemCreateRequestDataTypeEnum = (typeof ReviewSubmissionItemCreateRequestDataTypeEnum)[keyof typeof ReviewSubmissionItemCreateRequestDataTypeEnum];
/**
 * Check if a given object implements the ReviewSubmissionItemCreateRequestData interface.
 */
export declare function instanceOfReviewSubmissionItemCreateRequestData(value: object): boolean;
export declare function ReviewSubmissionItemCreateRequestDataFromJSON(json: any): ReviewSubmissionItemCreateRequestData;
export declare function ReviewSubmissionItemCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReviewSubmissionItemCreateRequestData;
export declare function ReviewSubmissionItemCreateRequestDataToJSON(value?: ReviewSubmissionItemCreateRequestData | null): any;
