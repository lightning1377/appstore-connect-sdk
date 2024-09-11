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
 * @interface BetaBuildLocalizationCreateRequestDataAttributes
 */
export interface BetaBuildLocalizationCreateRequestDataAttributes {
    /**
     *
     * @type {string}
     * @memberof BetaBuildLocalizationCreateRequestDataAttributes
     */
    whatsNew?: string;
    /**
     *
     * @type {string}
     * @memberof BetaBuildLocalizationCreateRequestDataAttributes
     */
    locale: string;
}
/**
 * Check if a given object implements the BetaBuildLocalizationCreateRequestDataAttributes interface.
 */
export declare function instanceOfBetaBuildLocalizationCreateRequestDataAttributes(value: object): boolean;
export declare function BetaBuildLocalizationCreateRequestDataAttributesFromJSON(json: any): BetaBuildLocalizationCreateRequestDataAttributes;
export declare function BetaBuildLocalizationCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaBuildLocalizationCreateRequestDataAttributes;
export declare function BetaBuildLocalizationCreateRequestDataAttributesToJSON(value?: BetaBuildLocalizationCreateRequestDataAttributes | null): any;
