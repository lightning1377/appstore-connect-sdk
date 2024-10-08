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
 * @interface GameCenterDetailRelationshipsLeaderboardSetReleasesDataInner
 */
export interface GameCenterDetailRelationshipsLeaderboardSetReleasesDataInner {
    /**
     *
     * @type {string}
     * @memberof GameCenterDetailRelationshipsLeaderboardSetReleasesDataInner
     */
    type: GameCenterDetailRelationshipsLeaderboardSetReleasesDataInnerTypeEnum;
    /**
     *
     * @type {string}
     * @memberof GameCenterDetailRelationshipsLeaderboardSetReleasesDataInner
     */
    id: string;
}
/**
 * @export
 */
export declare const GameCenterDetailRelationshipsLeaderboardSetReleasesDataInnerTypeEnum: {
    readonly GameCenterLeaderboardSetReleases: "gameCenterLeaderboardSetReleases";
};
export type GameCenterDetailRelationshipsLeaderboardSetReleasesDataInnerTypeEnum = (typeof GameCenterDetailRelationshipsLeaderboardSetReleasesDataInnerTypeEnum)[keyof typeof GameCenterDetailRelationshipsLeaderboardSetReleasesDataInnerTypeEnum];
/**
 * Check if a given object implements the GameCenterDetailRelationshipsLeaderboardSetReleasesDataInner interface.
 */
export declare function instanceOfGameCenterDetailRelationshipsLeaderboardSetReleasesDataInner(value: object): boolean;
export declare function GameCenterDetailRelationshipsLeaderboardSetReleasesDataInnerFromJSON(json: any): GameCenterDetailRelationshipsLeaderboardSetReleasesDataInner;
export declare function GameCenterDetailRelationshipsLeaderboardSetReleasesDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterDetailRelationshipsLeaderboardSetReleasesDataInner;
export declare function GameCenterDetailRelationshipsLeaderboardSetReleasesDataInnerToJSON(value?: GameCenterDetailRelationshipsLeaderboardSetReleasesDataInner | null): any;
