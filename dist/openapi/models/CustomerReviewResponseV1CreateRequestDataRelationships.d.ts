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
import type { CustomerReviewResponseV1CreateRequestDataRelationshipsReview } from "./CustomerReviewResponseV1CreateRequestDataRelationshipsReview";
/**
 *
 * @export
 * @interface CustomerReviewResponseV1CreateRequestDataRelationships
 */
export interface CustomerReviewResponseV1CreateRequestDataRelationships {
    /**
     *
     * @type {CustomerReviewResponseV1CreateRequestDataRelationshipsReview}
     * @memberof CustomerReviewResponseV1CreateRequestDataRelationships
     */
    review: CustomerReviewResponseV1CreateRequestDataRelationshipsReview;
}
/**
 * Check if a given object implements the CustomerReviewResponseV1CreateRequestDataRelationships interface.
 */
export declare function instanceOfCustomerReviewResponseV1CreateRequestDataRelationships(value: object): boolean;
export declare function CustomerReviewResponseV1CreateRequestDataRelationshipsFromJSON(json: any): CustomerReviewResponseV1CreateRequestDataRelationships;
export declare function CustomerReviewResponseV1CreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerReviewResponseV1CreateRequestDataRelationships;
export declare function CustomerReviewResponseV1CreateRequestDataRelationshipsToJSON(value?: CustomerReviewResponseV1CreateRequestDataRelationships | null): any;
