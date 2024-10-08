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
import type { App } from "./App";
import type { DocumentLinks } from "./DocumentLinks";
import type { InAppPurchase } from "./InAppPurchase";
/**
 *
 * @export
 * @interface InAppPurchaseResponse
 */
export interface InAppPurchaseResponse {
    /**
     *
     * @type {InAppPurchase}
     * @memberof InAppPurchaseResponse
     * @deprecated
     */
    data: InAppPurchase;
    /**
     *
     * @type {Array<App>}
     * @memberof InAppPurchaseResponse
     */
    included?: Array<App>;
    /**
     *
     * @type {DocumentLinks}
     * @memberof InAppPurchaseResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the InAppPurchaseResponse interface.
 */
export declare function instanceOfInAppPurchaseResponse(value: object): boolean;
export declare function InAppPurchaseResponseFromJSON(json: any): InAppPurchaseResponse;
export declare function InAppPurchaseResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseResponse;
export declare function InAppPurchaseResponseToJSON(value?: InAppPurchaseResponse | null): any;
