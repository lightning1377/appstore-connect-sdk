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
import type { SubscriptionGroup } from "./SubscriptionGroup";
import type { SubscriptionGroupLocalization } from "./SubscriptionGroupLocalization";
/**
 *
 * @export
 * @interface SubscriptionGroupLocalizationsResponse
 */
export interface SubscriptionGroupLocalizationsResponse {
    /**
     *
     * @type {Array<SubscriptionGroupLocalization>}
     * @memberof SubscriptionGroupLocalizationsResponse
     */
    data: Array<SubscriptionGroupLocalization>;
    /**
     *
     * @type {Array<SubscriptionGroup>}
     * @memberof SubscriptionGroupLocalizationsResponse
     */
    included?: Array<SubscriptionGroup>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof SubscriptionGroupLocalizationsResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof SubscriptionGroupLocalizationsResponse
     */
    meta?: PagingInformation;
}
/**
 * Check if a given object implements the SubscriptionGroupLocalizationsResponse interface.
 */
export declare function instanceOfSubscriptionGroupLocalizationsResponse(value: object): boolean;
export declare function SubscriptionGroupLocalizationsResponseFromJSON(json: any): SubscriptionGroupLocalizationsResponse;
export declare function SubscriptionGroupLocalizationsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionGroupLocalizationsResponse;
export declare function SubscriptionGroupLocalizationsResponseToJSON(value?: SubscriptionGroupLocalizationsResponse | null): any;
