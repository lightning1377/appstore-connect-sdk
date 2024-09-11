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
 * @interface AppInfoLocalizationAttributes
 */
export interface AppInfoLocalizationAttributes {
    /**
     *
     * @type {string}
     * @memberof AppInfoLocalizationAttributes
     */
    locale?: string;
    /**
     *
     * @type {string}
     * @memberof AppInfoLocalizationAttributes
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof AppInfoLocalizationAttributes
     */
    subtitle?: string;
    /**
     *
     * @type {string}
     * @memberof AppInfoLocalizationAttributes
     */
    privacyPolicyUrl?: string;
    /**
     *
     * @type {string}
     * @memberof AppInfoLocalizationAttributes
     */
    privacyChoicesUrl?: string;
    /**
     *
     * @type {string}
     * @memberof AppInfoLocalizationAttributes
     */
    privacyPolicyText?: string;
}
/**
 * Check if a given object implements the AppInfoLocalizationAttributes interface.
 */
export declare function instanceOfAppInfoLocalizationAttributes(value: object): boolean;
export declare function AppInfoLocalizationAttributesFromJSON(json: any): AppInfoLocalizationAttributes;
export declare function AppInfoLocalizationAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppInfoLocalizationAttributes;
export declare function AppInfoLocalizationAttributesToJSON(value?: AppInfoLocalizationAttributes | null): any;
