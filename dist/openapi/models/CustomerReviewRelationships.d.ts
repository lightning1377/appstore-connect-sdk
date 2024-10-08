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
import type { CustomerReviewRelationshipsResponse } from "./CustomerReviewRelationshipsResponse";
/**
 *
 * @export
 * @interface CustomerReviewRelationships
 */
export interface CustomerReviewRelationships {
    /**
     *
     * @type {CustomerReviewRelationshipsResponse}
     * @memberof CustomerReviewRelationships
     */
    response?: CustomerReviewRelationshipsResponse;
}
/**
 * Check if a given object implements the CustomerReviewRelationships interface.
 */
export declare function instanceOfCustomerReviewRelationships(value: object): boolean;
export declare function CustomerReviewRelationshipsFromJSON(json: any): CustomerReviewRelationships;
export declare function CustomerReviewRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerReviewRelationships;
export declare function CustomerReviewRelationshipsToJSON(value?: CustomerReviewRelationships | null): any;
