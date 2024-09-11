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
 * @interface AppStoreVersionLocalizationUpdateRequestDataAttributes
 */
export interface AppStoreVersionLocalizationUpdateRequestDataAttributes {
    /**
     *
     * @type {string}
     * @memberof AppStoreVersionLocalizationUpdateRequestDataAttributes
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof AppStoreVersionLocalizationUpdateRequestDataAttributes
     */
    keywords?: string;
    /**
     *
     * @type {string}
     * @memberof AppStoreVersionLocalizationUpdateRequestDataAttributes
     */
    marketingUrl?: string;
    /**
     *
     * @type {string}
     * @memberof AppStoreVersionLocalizationUpdateRequestDataAttributes
     */
    promotionalText?: string;
    /**
     *
     * @type {string}
     * @memberof AppStoreVersionLocalizationUpdateRequestDataAttributes
     */
    supportUrl?: string;
    /**
     *
     * @type {string}
     * @memberof AppStoreVersionLocalizationUpdateRequestDataAttributes
     */
    whatsNew?: string;
}
/**
 * Check if a given object implements the AppStoreVersionLocalizationUpdateRequestDataAttributes interface.
 */
export declare function instanceOfAppStoreVersionLocalizationUpdateRequestDataAttributes(value: object): boolean;
export declare function AppStoreVersionLocalizationUpdateRequestDataAttributesFromJSON(json: any): AppStoreVersionLocalizationUpdateRequestDataAttributes;
export declare function AppStoreVersionLocalizationUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionLocalizationUpdateRequestDataAttributes;
export declare function AppStoreVersionLocalizationUpdateRequestDataAttributesToJSON(value?: AppStoreVersionLocalizationUpdateRequestDataAttributes | null): any;
