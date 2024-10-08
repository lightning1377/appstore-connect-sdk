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
import type { CustomerReview } from "./CustomerReview";
import type { CustomerReviewResponseV1 } from "./CustomerReviewResponseV1";
import type { DocumentLinks } from "./DocumentLinks";
/**
 *
 * @export
 * @interface CustomerReviewResponse
 */
export interface CustomerReviewResponse {
    /**
     *
     * @type {CustomerReview}
     * @memberof CustomerReviewResponse
     */
    data: CustomerReview;
    /**
     *
     * @type {Array<CustomerReviewResponseV1>}
     * @memberof CustomerReviewResponse
     */
    included?: Array<CustomerReviewResponseV1>;
    /**
     *
     * @type {DocumentLinks}
     * @memberof CustomerReviewResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the CustomerReviewResponse interface.
 */
export declare function instanceOfCustomerReviewResponse(value: object): boolean;
export declare function CustomerReviewResponseFromJSON(json: any): CustomerReviewResponse;
export declare function CustomerReviewResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerReviewResponse;
export declare function CustomerReviewResponseToJSON(value?: CustomerReviewResponse | null): any;
