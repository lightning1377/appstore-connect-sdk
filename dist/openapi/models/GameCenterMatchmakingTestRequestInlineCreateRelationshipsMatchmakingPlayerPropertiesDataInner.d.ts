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
 * @interface GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesDataInner
 */
export interface GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesDataInner {
    /**
     *
     * @type {string}
     * @memberof GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesDataInner
     */
    type: GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesDataInnerTypeEnum;
    /**
     *
     * @type {string}
     * @memberof GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesDataInner
     */
    id: string;
}
/**
 * @export
 */
export declare const GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesDataInnerTypeEnum: {
    readonly GameCenterMatchmakingTestPlayerProperties: "gameCenterMatchmakingTestPlayerProperties";
};
export type GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesDataInnerTypeEnum = (typeof GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesDataInnerTypeEnum)[keyof typeof GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesDataInnerTypeEnum];
/**
 * Check if a given object implements the GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesDataInner interface.
 */
export declare function instanceOfGameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesDataInner(value: object): boolean;
export declare function GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesDataInnerFromJSON(json: any): GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesDataInner;
export declare function GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesDataInner;
export declare function GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesDataInnerToJSON(value?: GameCenterMatchmakingTestRequestInlineCreateRelationshipsMatchmakingPlayerPropertiesDataInner | null): any;
