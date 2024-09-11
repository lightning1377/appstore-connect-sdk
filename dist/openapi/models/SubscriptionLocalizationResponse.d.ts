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
import type { Subscription } from "./Subscription";
import type { SubscriptionLocalization } from "./SubscriptionLocalization";
/**
 *
 * @export
 * @interface SubscriptionLocalizationResponse
 */
export interface SubscriptionLocalizationResponse {
    /**
     *
     * @type {SubscriptionLocalization}
     * @memberof SubscriptionLocalizationResponse
     */
    data: SubscriptionLocalization;
    /**
     *
     * @type {Array<Subscription>}
     * @memberof SubscriptionLocalizationResponse
     */
    included?: Array<Subscription>;
    /**
     *
     * @type {DocumentLinks}
     * @memberof SubscriptionLocalizationResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the SubscriptionLocalizationResponse interface.
 */
export declare function instanceOfSubscriptionLocalizationResponse(value: object): boolean;
export declare function SubscriptionLocalizationResponseFromJSON(json: any): SubscriptionLocalizationResponse;
export declare function SubscriptionLocalizationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionLocalizationResponse;
export declare function SubscriptionLocalizationResponseToJSON(value?: SubscriptionLocalizationResponse | null): any;
