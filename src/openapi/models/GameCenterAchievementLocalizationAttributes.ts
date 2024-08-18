/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
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

import { exists, mapValues } from "../runtime";
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
export function instanceOfGameCenterAchievementLocalizationAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterAchievementLocalizationAttributesFromJSON(json: any): GameCenterAchievementLocalizationAttributes {
    return GameCenterAchievementLocalizationAttributesFromJSONTyped(json, false);
}

export function GameCenterAchievementLocalizationAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementLocalizationAttributes {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        locale: !exists(json, "locale") ? undefined : json["locale"],
        name: !exists(json, "name") ? undefined : json["name"],
        beforeEarnedDescription: !exists(json, "beforeEarnedDescription") ? undefined : json["beforeEarnedDescription"],
        afterEarnedDescription: !exists(json, "afterEarnedDescription") ? undefined : json["afterEarnedDescription"]
    };
}

export function GameCenterAchievementLocalizationAttributesToJSON(value?: GameCenterAchievementLocalizationAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        locale: value.locale,
        name: value.name,
        beforeEarnedDescription: value.beforeEarnedDescription,
        afterEarnedDescription: value.afterEarnedDescription
    };
}
