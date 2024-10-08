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
import type { AppPreOrder } from "./AppPreOrder";
import type { DocumentLinks } from "./DocumentLinks";
/**
 *
 * @export
 * @interface AppPreOrderWithoutIncludesResponse
 */
export interface AppPreOrderWithoutIncludesResponse {
    /**
     *
     * @type {AppPreOrder}
     * @memberof AppPreOrderWithoutIncludesResponse
     * @deprecated
     */
    data: AppPreOrder;
    /**
     *
     * @type {DocumentLinks}
     * @memberof AppPreOrderWithoutIncludesResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the AppPreOrderWithoutIncludesResponse interface.
 */
export declare function instanceOfAppPreOrderWithoutIncludesResponse(value: object): boolean;
export declare function AppPreOrderWithoutIncludesResponseFromJSON(json: any): AppPreOrderWithoutIncludesResponse;
export declare function AppPreOrderWithoutIncludesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreOrderWithoutIncludesResponse;
export declare function AppPreOrderWithoutIncludesResponseToJSON(value?: AppPreOrderWithoutIncludesResponse | null): any;
