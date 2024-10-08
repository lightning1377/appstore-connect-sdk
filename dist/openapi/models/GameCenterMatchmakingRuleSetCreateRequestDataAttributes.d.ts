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
 * @interface GameCenterMatchmakingRuleSetCreateRequestDataAttributes
 */
export interface GameCenterMatchmakingRuleSetCreateRequestDataAttributes {
    /**
     *
     * @type {string}
     * @memberof GameCenterMatchmakingRuleSetCreateRequestDataAttributes
     */
    referenceName: string;
    /**
     *
     * @type {number}
     * @memberof GameCenterMatchmakingRuleSetCreateRequestDataAttributes
     */
    ruleLanguageVersion: number;
    /**
     *
     * @type {number}
     * @memberof GameCenterMatchmakingRuleSetCreateRequestDataAttributes
     */
    minPlayers: number;
    /**
     *
     * @type {number}
     * @memberof GameCenterMatchmakingRuleSetCreateRequestDataAttributes
     */
    maxPlayers: number;
}
/**
 * Check if a given object implements the GameCenterMatchmakingRuleSetCreateRequestDataAttributes interface.
 */
export declare function instanceOfGameCenterMatchmakingRuleSetCreateRequestDataAttributes(value: object): boolean;
export declare function GameCenterMatchmakingRuleSetCreateRequestDataAttributesFromJSON(json: any): GameCenterMatchmakingRuleSetCreateRequestDataAttributes;
export declare function GameCenterMatchmakingRuleSetCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingRuleSetCreateRequestDataAttributes;
export declare function GameCenterMatchmakingRuleSetCreateRequestDataAttributesToJSON(value?: GameCenterMatchmakingRuleSetCreateRequestDataAttributes | null): any;
