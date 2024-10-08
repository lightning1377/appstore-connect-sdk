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
import type { DocumentLinks } from "./DocumentLinks";
import type { SubscriptionOfferCode } from "./SubscriptionOfferCode";
import type { SubscriptionOfferCodesResponseIncludedInner } from "./SubscriptionOfferCodesResponseIncludedInner";
/**
 *
 * @export
 * @interface SubscriptionOfferCodeResponse
 */
export interface SubscriptionOfferCodeResponse {
    /**
     *
     * @type {SubscriptionOfferCode}
     * @memberof SubscriptionOfferCodeResponse
     */
    data: SubscriptionOfferCode;
    /**
     *
     * @type {Array<SubscriptionOfferCodesResponseIncludedInner>}
     * @memberof SubscriptionOfferCodeResponse
     */
    included?: Array<SubscriptionOfferCodesResponseIncludedInner>;
    /**
     *
     * @type {DocumentLinks}
     * @memberof SubscriptionOfferCodeResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the SubscriptionOfferCodeResponse interface.
 */
export declare function instanceOfSubscriptionOfferCodeResponse(value: object): boolean;
export declare function SubscriptionOfferCodeResponseFromJSON(json: any): SubscriptionOfferCodeResponse;
export declare function SubscriptionOfferCodeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeResponse;
export declare function SubscriptionOfferCodeResponseToJSON(value?: SubscriptionOfferCodeResponse | null): any;
