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
import type { AppEventLocalization } from "./AppEventLocalization";
import type { AppEventVideoClip } from "./AppEventVideoClip";
import type { DocumentLinks } from "./DocumentLinks";
/**
 *
 * @export
 * @interface AppEventVideoClipResponse
 */
export interface AppEventVideoClipResponse {
    /**
     *
     * @type {AppEventVideoClip}
     * @memberof AppEventVideoClipResponse
     */
    data: AppEventVideoClip;
    /**
     *
     * @type {Array<AppEventLocalization>}
     * @memberof AppEventVideoClipResponse
     */
    included?: Array<AppEventLocalization>;
    /**
     *
     * @type {DocumentLinks}
     * @memberof AppEventVideoClipResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the AppEventVideoClipResponse interface.
 */
export declare function instanceOfAppEventVideoClipResponse(value: object): boolean;
export declare function AppEventVideoClipResponseFromJSON(json: any): AppEventVideoClipResponse;
export declare function AppEventVideoClipResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventVideoClipResponse;
export declare function AppEventVideoClipResponseToJSON(value?: AppEventVideoClipResponse | null): any;
