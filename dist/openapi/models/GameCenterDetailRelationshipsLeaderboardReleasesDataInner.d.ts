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
 * @interface GameCenterDetailRelationshipsLeaderboardReleasesDataInner
 */
export interface GameCenterDetailRelationshipsLeaderboardReleasesDataInner {
    /**
     *
     * @type {string}
     * @memberof GameCenterDetailRelationshipsLeaderboardReleasesDataInner
     */
    type: GameCenterDetailRelationshipsLeaderboardReleasesDataInnerTypeEnum;
    /**
     *
     * @type {string}
     * @memberof GameCenterDetailRelationshipsLeaderboardReleasesDataInner
     */
    id: string;
}
/**
 * @export
 */
export declare const GameCenterDetailRelationshipsLeaderboardReleasesDataInnerTypeEnum: {
    readonly GameCenterLeaderboardReleases: "gameCenterLeaderboardReleases";
};
export type GameCenterDetailRelationshipsLeaderboardReleasesDataInnerTypeEnum = (typeof GameCenterDetailRelationshipsLeaderboardReleasesDataInnerTypeEnum)[keyof typeof GameCenterDetailRelationshipsLeaderboardReleasesDataInnerTypeEnum];
/**
 * Check if a given object implements the GameCenterDetailRelationshipsLeaderboardReleasesDataInner interface.
 */
export declare function instanceOfGameCenterDetailRelationshipsLeaderboardReleasesDataInner(value: object): boolean;
export declare function GameCenterDetailRelationshipsLeaderboardReleasesDataInnerFromJSON(json: any): GameCenterDetailRelationshipsLeaderboardReleasesDataInner;
export declare function GameCenterDetailRelationshipsLeaderboardReleasesDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterDetailRelationshipsLeaderboardReleasesDataInner;
export declare function GameCenterDetailRelationshipsLeaderboardReleasesDataInnerToJSON(value?: GameCenterDetailRelationshipsLeaderboardReleasesDataInner | null): any;
