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
 * @interface GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageData
 */
export interface GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageData {
    /**
     *
     * @type {string}
     * @memberof GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageData
     */
    type: GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageData
     */
    id: string;
}
/**
 * @export
 */
export declare const GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageDataTypeEnum: {
    readonly GameCenterAchievementImages: "gameCenterAchievementImages";
};
export type GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageDataTypeEnum = (typeof GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageDataTypeEnum)[keyof typeof GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageDataTypeEnum];
/**
 * Check if a given object implements the GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageData interface.
 */
export declare function instanceOfGameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageData(value: object): boolean;
export declare function GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageDataFromJSON(json: any): GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageData;
export declare function GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageData;
export declare function GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageDataToJSON(value?: GameCenterAchievementLocalizationRelationshipsGameCenterAchievementImageData | null): any;
