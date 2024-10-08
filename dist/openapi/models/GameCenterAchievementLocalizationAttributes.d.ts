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
 * @interface GameCenterAchievementLocalizationAttributes
 */
export interface GameCenterAchievementLocalizationAttributes {
    /**
     *
     * @type {string}
     * @memberof GameCenterAchievementLocalizationAttributes
     */
    locale?: string;
    /**
     *
     * @type {string}
     * @memberof GameCenterAchievementLocalizationAttributes
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof GameCenterAchievementLocalizationAttributes
     */
    beforeEarnedDescription?: string;
    /**
     *
     * @type {string}
     * @memberof GameCenterAchievementLocalizationAttributes
     */
    afterEarnedDescription?: string;
}
/**
 * Check if a given object implements the GameCenterAchievementLocalizationAttributes interface.
 */
export declare function instanceOfGameCenterAchievementLocalizationAttributes(value: object): boolean;
export declare function GameCenterAchievementLocalizationAttributesFromJSON(json: any): GameCenterAchievementLocalizationAttributes;
export declare function GameCenterAchievementLocalizationAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementLocalizationAttributes;
export declare function GameCenterAchievementLocalizationAttributesToJSON(value?: GameCenterAchievementLocalizationAttributes | null): any;
