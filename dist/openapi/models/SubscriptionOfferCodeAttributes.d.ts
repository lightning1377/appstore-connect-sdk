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
import type { SubscriptionCustomerEligibility } from "./SubscriptionCustomerEligibility";
import type { SubscriptionOfferDuration } from "./SubscriptionOfferDuration";
import type { SubscriptionOfferEligibility } from "./SubscriptionOfferEligibility";
import type { SubscriptionOfferMode } from "./SubscriptionOfferMode";
/**
 *
 * @export
 * @interface SubscriptionOfferCodeAttributes
 */
export interface SubscriptionOfferCodeAttributes {
    /**
     *
     * @type {string}
     * @memberof SubscriptionOfferCodeAttributes
     */
    name?: string;
    /**
     *
     * @type {Array<SubscriptionCustomerEligibility>}
     * @memberof SubscriptionOfferCodeAttributes
     */
    customerEligibilities?: Array<SubscriptionCustomerEligibility>;
    /**
     *
     * @type {SubscriptionOfferEligibility}
     * @memberof SubscriptionOfferCodeAttributes
     */
    offerEligibility?: SubscriptionOfferEligibility;
    /**
     *
     * @type {SubscriptionOfferDuration}
     * @memberof SubscriptionOfferCodeAttributes
     */
    duration?: SubscriptionOfferDuration;
    /**
     *
     * @type {SubscriptionOfferMode}
     * @memberof SubscriptionOfferCodeAttributes
     */
    offerMode?: SubscriptionOfferMode;
    /**
     *
     * @type {number}
     * @memberof SubscriptionOfferCodeAttributes
     */
    numberOfPeriods?: number;
    /**
     *
     * @type {number}
     * @memberof SubscriptionOfferCodeAttributes
     */
    totalNumberOfCodes?: number;
    /**
     *
     * @type {boolean}
     * @memberof SubscriptionOfferCodeAttributes
     */
    active?: boolean;
}
/**
 * Check if a given object implements the SubscriptionOfferCodeAttributes interface.
 */
export declare function instanceOfSubscriptionOfferCodeAttributes(value: object): boolean;
export declare function SubscriptionOfferCodeAttributesFromJSON(json: any): SubscriptionOfferCodeAttributes;
export declare function SubscriptionOfferCodeAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeAttributes;
export declare function SubscriptionOfferCodeAttributesToJSON(value?: SubscriptionOfferCodeAttributes | null): any;
