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
import type { AppCustomProductPageVersionInlineCreateAttributes } from "./AppCustomProductPageVersionInlineCreateAttributes";
import type { AppCustomProductPageVersionInlineCreateRelationships } from "./AppCustomProductPageVersionInlineCreateRelationships";
/**
 *
 * @export
 * @interface AppCustomProductPageVersionInlineCreate
 */
export interface AppCustomProductPageVersionInlineCreate {
    /**
     *
     * @type {string}
     * @memberof AppCustomProductPageVersionInlineCreate
     */
    type: AppCustomProductPageVersionInlineCreateTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppCustomProductPageVersionInlineCreate
     */
    id?: string;
    /**
     *
     * @type {AppCustomProductPageVersionInlineCreateAttributes}
     * @memberof AppCustomProductPageVersionInlineCreate
     */
    attributes?: AppCustomProductPageVersionInlineCreateAttributes;
    /**
     *
     * @type {AppCustomProductPageVersionInlineCreateRelationships}
     * @memberof AppCustomProductPageVersionInlineCreate
     */
    relationships?: AppCustomProductPageVersionInlineCreateRelationships;
}
/**
 * @export
 */
export declare const AppCustomProductPageVersionInlineCreateTypeEnum: {
    readonly AppCustomProductPageVersions: "appCustomProductPageVersions";
};
export type AppCustomProductPageVersionInlineCreateTypeEnum = (typeof AppCustomProductPageVersionInlineCreateTypeEnum)[keyof typeof AppCustomProductPageVersionInlineCreateTypeEnum];
/**
 * Check if a given object implements the AppCustomProductPageVersionInlineCreate interface.
 */
export declare function instanceOfAppCustomProductPageVersionInlineCreate(value: object): boolean;
export declare function AppCustomProductPageVersionInlineCreateFromJSON(json: any): AppCustomProductPageVersionInlineCreate;
export declare function AppCustomProductPageVersionInlineCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageVersionInlineCreate;
export declare function AppCustomProductPageVersionInlineCreateToJSON(value?: AppCustomProductPageVersionInlineCreate | null): any;
