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
/**
 *
 * @export
 */
export declare const BundleIdPlatform: {
    readonly Ios: "IOS";
    readonly MacOs: "MAC_OS";
};
export type BundleIdPlatform = (typeof BundleIdPlatform)[keyof typeof BundleIdPlatform];
export declare function BundleIdPlatformFromJSON(json: any): BundleIdPlatform;
export declare function BundleIdPlatformFromJSONTyped(json: any, ignoreDiscriminator: boolean): BundleIdPlatform;
export declare function BundleIdPlatformToJSON(value?: BundleIdPlatform | null): any;
