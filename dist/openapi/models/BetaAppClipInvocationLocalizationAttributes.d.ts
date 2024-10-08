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
 * @interface BetaAppClipInvocationLocalizationAttributes
 */
export interface BetaAppClipInvocationLocalizationAttributes {
    /**
     *
     * @type {string}
     * @memberof BetaAppClipInvocationLocalizationAttributes
     */
    title?: string;
    /**
     *
     * @type {string}
     * @memberof BetaAppClipInvocationLocalizationAttributes
     */
    locale?: string;
}
/**
 * Check if a given object implements the BetaAppClipInvocationLocalizationAttributes interface.
 */
export declare function instanceOfBetaAppClipInvocationLocalizationAttributes(value: object): boolean;
export declare function BetaAppClipInvocationLocalizationAttributesFromJSON(json: any): BetaAppClipInvocationLocalizationAttributes;
export declare function BetaAppClipInvocationLocalizationAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppClipInvocationLocalizationAttributes;
export declare function BetaAppClipInvocationLocalizationAttributesToJSON(value?: BetaAppClipInvocationLocalizationAttributes | null): any;
