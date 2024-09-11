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
import type { AppCustomProductPage } from "./AppCustomProductPage";
import type { AppCustomProductPagesResponseIncludedInner } from "./AppCustomProductPagesResponseIncludedInner";
import type { DocumentLinks } from "./DocumentLinks";
/**
 *
 * @export
 * @interface AppCustomProductPageResponse
 */
export interface AppCustomProductPageResponse {
    /**
     *
     * @type {AppCustomProductPage}
     * @memberof AppCustomProductPageResponse
     */
    data: AppCustomProductPage;
    /**
     *
     * @type {Array<AppCustomProductPagesResponseIncludedInner>}
     * @memberof AppCustomProductPageResponse
     */
    included?: Array<AppCustomProductPagesResponseIncludedInner>;
    /**
     *
     * @type {DocumentLinks}
     * @memberof AppCustomProductPageResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the AppCustomProductPageResponse interface.
 */
export declare function instanceOfAppCustomProductPageResponse(value: object): boolean;
export declare function AppCustomProductPageResponseFromJSON(json: any): AppCustomProductPageResponse;
export declare function AppCustomProductPageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageResponse;
export declare function AppCustomProductPageResponseToJSON(value?: AppCustomProductPageResponse | null): any;
