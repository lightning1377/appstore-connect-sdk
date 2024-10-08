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
import type { ImageAsset } from "./ImageAsset";
import type { Platform } from "./Platform";
/**
 *
 * @export
 * @interface GameCenterEnabledVersionAttributes
 */
export interface GameCenterEnabledVersionAttributes {
    /**
     *
     * @type {Platform}
     * @memberof GameCenterEnabledVersionAttributes
     */
    platform?: Platform;
    /**
     *
     * @type {string}
     * @memberof GameCenterEnabledVersionAttributes
     */
    versionString?: string;
    /**
     *
     * @type {ImageAsset}
     * @memberof GameCenterEnabledVersionAttributes
     */
    iconAsset?: ImageAsset;
}
/**
 * Check if a given object implements the GameCenterEnabledVersionAttributes interface.
 */
export declare function instanceOfGameCenterEnabledVersionAttributes(value: object): boolean;
export declare function GameCenterEnabledVersionAttributesFromJSON(json: any): GameCenterEnabledVersionAttributes;
export declare function GameCenterEnabledVersionAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterEnabledVersionAttributes;
export declare function GameCenterEnabledVersionAttributesToJSON(value?: GameCenterEnabledVersionAttributes | null): any;
