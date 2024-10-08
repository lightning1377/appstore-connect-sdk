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
 * @interface GameCenterAchievementLocalizationCreateRequestDataAttributes
 */
export interface GameCenterAchievementLocalizationCreateRequestDataAttributes {
    /**
     *
     * @type {string}
     * @memberof GameCenterAchievementLocalizationCreateRequestDataAttributes
     */
    locale: string;
    /**
     *
     * @type {string}
     * @memberof GameCenterAchievementLocalizationCreateRequestDataAttributes
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof GameCenterAchievementLocalizationCreateRequestDataAttributes
     */
    beforeEarnedDescription: string;
    /**
     *
     * @type {string}
     * @memberof GameCenterAchievementLocalizationCreateRequestDataAttributes
     */
    afterEarnedDescription: string;
}
/**
 * Check if a given object implements the GameCenterAchievementLocalizationCreateRequestDataAttributes interface.
 */
export declare function instanceOfGameCenterAchievementLocalizationCreateRequestDataAttributes(value: object): boolean;
export declare function GameCenterAchievementLocalizationCreateRequestDataAttributesFromJSON(json: any): GameCenterAchievementLocalizationCreateRequestDataAttributes;
export declare function GameCenterAchievementLocalizationCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementLocalizationCreateRequestDataAttributes;
export declare function GameCenterAchievementLocalizationCreateRequestDataAttributesToJSON(value?: GameCenterAchievementLocalizationCreateRequestDataAttributes | null): any;
