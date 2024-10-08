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
import type { AppPriceV2Attributes } from "./AppPriceV2Attributes";
import type { AppPriceV2Relationships } from "./AppPriceV2Relationships";
import type { ResourceLinks } from "./ResourceLinks";
/**
 *
 * @export
 * @interface AppPriceV2
 */
export interface AppPriceV2 {
    /**
     *
     * @type {string}
     * @memberof AppPriceV2
     */
    type: AppPriceV2TypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppPriceV2
     */
    id: string;
    /**
     *
     * @type {AppPriceV2Attributes}
     * @memberof AppPriceV2
     */
    attributes?: AppPriceV2Attributes;
    /**
     *
     * @type {AppPriceV2Relationships}
     * @memberof AppPriceV2
     */
    relationships?: AppPriceV2Relationships;
    /**
     *
     * @type {ResourceLinks}
     * @memberof AppPriceV2
     */
    links?: ResourceLinks;
}
/**
 * @export
 */
export declare const AppPriceV2TypeEnum: {
    readonly AppPrices: "appPrices";
};
export type AppPriceV2TypeEnum = (typeof AppPriceV2TypeEnum)[keyof typeof AppPriceV2TypeEnum];
/**
 * Check if a given object implements the AppPriceV2 interface.
 */
export declare function instanceOfAppPriceV2(value: object): boolean;
export declare function AppPriceV2FromJSON(json: any): AppPriceV2;
export declare function AppPriceV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPriceV2;
export declare function AppPriceV2ToJSON(value?: AppPriceV2 | null): any;
