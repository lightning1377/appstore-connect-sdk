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
import type { DocumentLinks } from "./DocumentLinks";
import type { GameCenterAchievementRelease } from "./GameCenterAchievementRelease";
import type { GameCenterAchievementReleasesResponseIncludedInner } from "./GameCenterAchievementReleasesResponseIncludedInner";
/**
 *
 * @export
 * @interface GameCenterAchievementReleaseResponse
 */
export interface GameCenterAchievementReleaseResponse {
    /**
     *
     * @type {GameCenterAchievementRelease}
     * @memberof GameCenterAchievementReleaseResponse
     */
    data: GameCenterAchievementRelease;
    /**
     *
     * @type {Array<GameCenterAchievementReleasesResponseIncludedInner>}
     * @memberof GameCenterAchievementReleaseResponse
     */
    included?: Array<GameCenterAchievementReleasesResponseIncludedInner>;
    /**
     *
     * @type {DocumentLinks}
     * @memberof GameCenterAchievementReleaseResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the GameCenterAchievementReleaseResponse interface.
 */
export declare function instanceOfGameCenterAchievementReleaseResponse(value: object): boolean;
export declare function GameCenterAchievementReleaseResponseFromJSON(json: any): GameCenterAchievementReleaseResponse;
export declare function GameCenterAchievementReleaseResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementReleaseResponse;
export declare function GameCenterAchievementReleaseResponseToJSON(value?: GameCenterAchievementReleaseResponse | null): any;
