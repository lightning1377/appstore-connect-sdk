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
import type { AppCustomProductPageVersionAttributes } from "./AppCustomProductPageVersionAttributes";
import type { AppCustomProductPageVersionRelationships } from "./AppCustomProductPageVersionRelationships";
import type { ResourceLinks } from "./ResourceLinks";
/**
 *
 * @export
 * @interface AppCustomProductPageVersion
 */
export interface AppCustomProductPageVersion {
    /**
     *
     * @type {string}
     * @memberof AppCustomProductPageVersion
     */
    type: AppCustomProductPageVersionTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppCustomProductPageVersion
     */
    id: string;
    /**
     *
     * @type {AppCustomProductPageVersionAttributes}
     * @memberof AppCustomProductPageVersion
     */
    attributes?: AppCustomProductPageVersionAttributes;
    /**
     *
     * @type {AppCustomProductPageVersionRelationships}
     * @memberof AppCustomProductPageVersion
     */
    relationships?: AppCustomProductPageVersionRelationships;
    /**
     *
     * @type {ResourceLinks}
     * @memberof AppCustomProductPageVersion
     */
    links?: ResourceLinks;
}
/**
 * @export
 */
export declare const AppCustomProductPageVersionTypeEnum: {
    readonly AppCustomProductPageVersions: "appCustomProductPageVersions";
};
export type AppCustomProductPageVersionTypeEnum = (typeof AppCustomProductPageVersionTypeEnum)[keyof typeof AppCustomProductPageVersionTypeEnum];
/**
 * Check if a given object implements the AppCustomProductPageVersion interface.
 */
export declare function instanceOfAppCustomProductPageVersion(value: object): boolean;
export declare function AppCustomProductPageVersionFromJSON(json: any): AppCustomProductPageVersion;
export declare function AppCustomProductPageVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageVersion;
export declare function AppCustomProductPageVersionToJSON(value?: AppCustomProductPageVersion | null): any;
