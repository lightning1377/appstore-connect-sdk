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
 * @interface BetaBuildLocalizationUpdateRequestDataAttributes
 */
export interface BetaBuildLocalizationUpdateRequestDataAttributes {
    /**
     *
     * @type {string}
     * @memberof BetaBuildLocalizationUpdateRequestDataAttributes
     */
    whatsNew?: string;
}
/**
 * Check if a given object implements the BetaBuildLocalizationUpdateRequestDataAttributes interface.
 */
export declare function instanceOfBetaBuildLocalizationUpdateRequestDataAttributes(value: object): boolean;
export declare function BetaBuildLocalizationUpdateRequestDataAttributesFromJSON(json: any): BetaBuildLocalizationUpdateRequestDataAttributes;
export declare function BetaBuildLocalizationUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaBuildLocalizationUpdateRequestDataAttributes;
export declare function BetaBuildLocalizationUpdateRequestDataAttributesToJSON(value?: BetaBuildLocalizationUpdateRequestDataAttributes | null): any;
