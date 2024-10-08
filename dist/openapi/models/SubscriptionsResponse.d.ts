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
import type { PagedDocumentLinks } from "./PagedDocumentLinks";
import type { PagingInformation } from "./PagingInformation";
import type { Subscription } from "./Subscription";
import type { SubscriptionsResponseIncludedInner } from "./SubscriptionsResponseIncludedInner";
/**
 *
 * @export
 * @interface SubscriptionsResponse
 */
export interface SubscriptionsResponse {
    /**
     *
     * @type {Array<Subscription>}
     * @memberof SubscriptionsResponse
     */
    data: Array<Subscription>;
    /**
     *
     * @type {Array<SubscriptionsResponseIncludedInner>}
     * @memberof SubscriptionsResponse
     */
    included?: Array<SubscriptionsResponseIncludedInner>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof SubscriptionsResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof SubscriptionsResponse
     */
    meta?: PagingInformation;
}
/**
 * Check if a given object implements the SubscriptionsResponse interface.
 */
export declare function instanceOfSubscriptionsResponse(value: object): boolean;
export declare function SubscriptionsResponseFromJSON(json: any): SubscriptionsResponse;
export declare function SubscriptionsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionsResponse;
export declare function SubscriptionsResponseToJSON(value?: SubscriptionsResponse | null): any;
