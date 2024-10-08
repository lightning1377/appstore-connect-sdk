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
import type { AppClip } from "./AppClip";
import type { AppClipsResponseIncludedInner } from "./AppClipsResponseIncludedInner";
import type { DocumentLinks } from "./DocumentLinks";
/**
 *
 * @export
 * @interface AppClipResponse
 */
export interface AppClipResponse {
    /**
     *
     * @type {AppClip}
     * @memberof AppClipResponse
     */
    data: AppClip;
    /**
     *
     * @type {Array<AppClipsResponseIncludedInner>}
     * @memberof AppClipResponse
     */
    included?: Array<AppClipsResponseIncludedInner>;
    /**
     *
     * @type {DocumentLinks}
     * @memberof AppClipResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the AppClipResponse interface.
 */
export declare function instanceOfAppClipResponse(value: object): boolean;
export declare function AppClipResponseFromJSON(json: any): AppClipResponse;
export declare function AppClipResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipResponse;
export declare function AppClipResponseToJSON(value?: AppClipResponse | null): any;
