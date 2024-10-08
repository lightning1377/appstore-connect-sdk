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
import type { AppCustomProductPageLocalizationAttributes } from "./AppCustomProductPageLocalizationAttributes";
import type { AppCustomProductPageLocalizationRelationships } from "./AppCustomProductPageLocalizationRelationships";
import type { ResourceLinks } from "./ResourceLinks";
/**
 *
 * @export
 * @interface AppCustomProductPageLocalization
 */
export interface AppCustomProductPageLocalization {
    /**
     *
     * @type {string}
     * @memberof AppCustomProductPageLocalization
     */
    type: AppCustomProductPageLocalizationTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppCustomProductPageLocalization
     */
    id: string;
    /**
     *
     * @type {AppCustomProductPageLocalizationAttributes}
     * @memberof AppCustomProductPageLocalization
     */
    attributes?: AppCustomProductPageLocalizationAttributes;
    /**
     *
     * @type {AppCustomProductPageLocalizationRelationships}
     * @memberof AppCustomProductPageLocalization
     */
    relationships?: AppCustomProductPageLocalizationRelationships;
    /**
     *
     * @type {ResourceLinks}
     * @memberof AppCustomProductPageLocalization
     */
    links?: ResourceLinks;
}
/**
 * @export
 */
export declare const AppCustomProductPageLocalizationTypeEnum: {
    readonly AppCustomProductPageLocalizations: "appCustomProductPageLocalizations";
};
export type AppCustomProductPageLocalizationTypeEnum = (typeof AppCustomProductPageLocalizationTypeEnum)[keyof typeof AppCustomProductPageLocalizationTypeEnum];
/**
 * Check if a given object implements the AppCustomProductPageLocalization interface.
 */
export declare function instanceOfAppCustomProductPageLocalization(value: object): boolean;
export declare function AppCustomProductPageLocalizationFromJSON(json: any): AppCustomProductPageLocalization;
export declare function AppCustomProductPageLocalizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageLocalization;
export declare function AppCustomProductPageLocalizationToJSON(value?: AppCustomProductPageLocalization | null): any;
