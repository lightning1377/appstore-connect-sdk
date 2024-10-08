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
 * @interface GameCenterAchievementUpdateRequestDataAttributes
 */
export interface GameCenterAchievementUpdateRequestDataAttributes {
    /**
     *
     * @type {string}
     * @memberof GameCenterAchievementUpdateRequestDataAttributes
     */
    referenceName?: string;
    /**
     *
     * @type {number}
     * @memberof GameCenterAchievementUpdateRequestDataAttributes
     */
    points?: number;
    /**
     *
     * @type {boolean}
     * @memberof GameCenterAchievementUpdateRequestDataAttributes
     */
    showBeforeEarned?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GameCenterAchievementUpdateRequestDataAttributes
     */
    repeatable?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GameCenterAchievementUpdateRequestDataAttributes
     */
    archived?: boolean;
}
/**
 * Check if a given object implements the GameCenterAchievementUpdateRequestDataAttributes interface.
 */
export declare function instanceOfGameCenterAchievementUpdateRequestDataAttributes(value: object): boolean;
export declare function GameCenterAchievementUpdateRequestDataAttributesFromJSON(json: any): GameCenterAchievementUpdateRequestDataAttributes;
export declare function GameCenterAchievementUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementUpdateRequestDataAttributes;
export declare function GameCenterAchievementUpdateRequestDataAttributesToJSON(value?: GameCenterAchievementUpdateRequestDataAttributes | null): any;
