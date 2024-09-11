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
import type { AppPriceRelationships } from './AppPriceRelationships';
import type { ResourceLinks } from './ResourceLinks';
/**
 *
 * @export
 * @interface AppPrice
 */
export interface AppPrice {
    /**
     *
     * @type {string}
     * @memberof AppPrice
     */
    type: AppPriceTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppPrice
     */
    id: string;
    /**
     *
     * @type {AppPriceRelationships}
     * @memberof AppPrice
     */
    relationships?: AppPriceRelationships;
    /**
     *
     * @type {ResourceLinks}
     * @memberof AppPrice
     */
    links: ResourceLinks;
}
/**
 * @export
 */
export declare const AppPriceTypeEnum: {
    readonly AppPrices: "appPrices";
};
export type AppPriceTypeEnum = typeof AppPriceTypeEnum[keyof typeof AppPriceTypeEnum];
/**
 * Check if a given object implements the AppPrice interface.
 */
export declare function instanceOfAppPrice(value: object): boolean;
export declare function AppPriceFromJSON(json: any): AppPrice;
export declare function AppPriceFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPrice;
export declare function AppPriceToJSON(value?: AppPrice | null): any;
