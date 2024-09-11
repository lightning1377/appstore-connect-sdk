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
import type { AppClipAttributes } from "./AppClipAttributes";
import type { AppClipRelationships } from "./AppClipRelationships";
import type { ResourceLinks } from "./ResourceLinks";
/**
 *
 * @export
 * @interface AppClip
 */
export interface AppClip {
    /**
     *
     * @type {string}
     * @memberof AppClip
     */
    type: AppClipTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppClip
     */
    id: string;
    /**
     *
     * @type {AppClipAttributes}
     * @memberof AppClip
     */
    attributes?: AppClipAttributes;
    /**
     *
     * @type {AppClipRelationships}
     * @memberof AppClip
     */
    relationships?: AppClipRelationships;
    /**
     *
     * @type {ResourceLinks}
     * @memberof AppClip
     */
    links?: ResourceLinks;
}
/**
 * @export
 */
export declare const AppClipTypeEnum: {
    readonly AppClips: "appClips";
};
export type AppClipTypeEnum = (typeof AppClipTypeEnum)[keyof typeof AppClipTypeEnum];
/**
 * Check if a given object implements the AppClip interface.
 */
export declare function instanceOfAppClip(value: object): boolean;
export declare function AppClipFromJSON(json: any): AppClip;
export declare function AppClipFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClip;
export declare function AppClipToJSON(value?: AppClip | null): any;
