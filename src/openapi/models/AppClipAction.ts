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

/**
 *
 * @export
 */
export const AppClipAction = {
    Open: "OPEN",
    View: "VIEW",
    Play: "PLAY"
} as const;
export type AppClipAction = (typeof AppClipAction)[keyof typeof AppClipAction];

export function AppClipActionFromJSON(json: any): AppClipAction {
    return AppClipActionFromJSONTyped(json, false);
}

export function AppClipActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAction {
    return json as AppClipAction;
}

export function AppClipActionToJSON(value?: AppClipAction | null): any {
    return value as any;
}
