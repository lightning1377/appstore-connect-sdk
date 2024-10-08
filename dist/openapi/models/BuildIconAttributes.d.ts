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
import type { IconAssetType } from "./IconAssetType";
import type { ImageAsset } from "./ImageAsset";
/**
 *
 * @export
 * @interface BuildIconAttributes
 */
export interface BuildIconAttributes {
    /**
     *
     * @type {string}
     * @memberof BuildIconAttributes
     */
    name?: string;
    /**
     *
     * @type {ImageAsset}
     * @memberof BuildIconAttributes
     */
    iconAsset?: ImageAsset;
    /**
     *
     * @type {IconAssetType}
     * @memberof BuildIconAttributes
     */
    iconType?: IconAssetType;
}
/**
 * Check if a given object implements the BuildIconAttributes interface.
 */
export declare function instanceOfBuildIconAttributes(value: object): boolean;
export declare function BuildIconAttributesFromJSON(json: any): BuildIconAttributes;
export declare function BuildIconAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildIconAttributes;
export declare function BuildIconAttributesToJSON(value?: BuildIconAttributes | null): any;
