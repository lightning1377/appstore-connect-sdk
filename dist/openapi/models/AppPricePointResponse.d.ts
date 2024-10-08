/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { AppPricePoint } from './AppPricePoint';
import type { AppPricePointsResponseIncludedInner } from './AppPricePointsResponseIncludedInner';
import type { DocumentLinks } from './DocumentLinks';
/**
 *
 * @export
 * @interface AppPricePointResponse
 */
export interface AppPricePointResponse {
    /**
     *
     * @type {AppPricePoint}
     * @memberof AppPricePointResponse
     * @deprecated
     */
    data: AppPricePoint;
    /**
     *
     * @type {Array<AppPricePointsResponseIncludedInner>}
     * @memberof AppPricePointResponse
     */
    included?: Array<AppPricePointsResponseIncludedInner>;
    /**
     *
     * @type {DocumentLinks}
     * @memberof AppPricePointResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the AppPricePointResponse interface.
 */
export declare function instanceOfAppPricePointResponse(value: object): boolean;
export declare function AppPricePointResponseFromJSON(json: any): AppPricePointResponse;
export declare function AppPricePointResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPricePointResponse;
export declare function AppPricePointResponseToJSON(value?: AppPricePointResponse | null): any;
