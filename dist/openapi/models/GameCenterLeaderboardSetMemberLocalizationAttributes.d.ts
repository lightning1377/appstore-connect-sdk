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
 * @interface GameCenterLeaderboardSetMemberLocalizationAttributes
 */
export interface GameCenterLeaderboardSetMemberLocalizationAttributes {
    /**
     *
     * @type {string}
     * @memberof GameCenterLeaderboardSetMemberLocalizationAttributes
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof GameCenterLeaderboardSetMemberLocalizationAttributes
     */
    locale?: string;
}
/**
 * Check if a given object implements the GameCenterLeaderboardSetMemberLocalizationAttributes interface.
 */
export declare function instanceOfGameCenterLeaderboardSetMemberLocalizationAttributes(value: object): boolean;
export declare function GameCenterLeaderboardSetMemberLocalizationAttributesFromJSON(json: any): GameCenterLeaderboardSetMemberLocalizationAttributes;
export declare function GameCenterLeaderboardSetMemberLocalizationAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetMemberLocalizationAttributes;
export declare function GameCenterLeaderboardSetMemberLocalizationAttributesToJSON(value?: GameCenterLeaderboardSetMemberLocalizationAttributes | null): any;
