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
import type { AnalyticsReportRequestCreateRequestDataRelationships } from "./AnalyticsReportRequestCreateRequestDataRelationships";
import type { ReviewSubmissionCreateRequestDataAttributes } from "./ReviewSubmissionCreateRequestDataAttributes";
/**
 *
 * @export
 * @interface ReviewSubmissionCreateRequestData
 */
export interface ReviewSubmissionCreateRequestData {
    /**
     *
     * @type {string}
     * @memberof ReviewSubmissionCreateRequestData
     */
    type: ReviewSubmissionCreateRequestDataTypeEnum;
    /**
     *
     * @type {ReviewSubmissionCreateRequestDataAttributes}
     * @memberof ReviewSubmissionCreateRequestData
     */
    attributes: ReviewSubmissionCreateRequestDataAttributes;
    /**
     *
     * @type {AnalyticsReportRequestCreateRequestDataRelationships}
     * @memberof ReviewSubmissionCreateRequestData
     */
    relationships: AnalyticsReportRequestCreateRequestDataRelationships;
}
/**
 * @export
 */
export declare const ReviewSubmissionCreateRequestDataTypeEnum: {
    readonly ReviewSubmissions: "reviewSubmissions";
};
export type ReviewSubmissionCreateRequestDataTypeEnum = (typeof ReviewSubmissionCreateRequestDataTypeEnum)[keyof typeof ReviewSubmissionCreateRequestDataTypeEnum];
/**
 * Check if a given object implements the ReviewSubmissionCreateRequestData interface.
 */
export declare function instanceOfReviewSubmissionCreateRequestData(value: object): boolean;
export declare function ReviewSubmissionCreateRequestDataFromJSON(json: any): ReviewSubmissionCreateRequestData;
export declare function ReviewSubmissionCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReviewSubmissionCreateRequestData;
export declare function ReviewSubmissionCreateRequestDataToJSON(value?: ReviewSubmissionCreateRequestData | null): any;
