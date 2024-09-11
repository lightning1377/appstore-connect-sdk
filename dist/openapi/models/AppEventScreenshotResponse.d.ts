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
import type { AppEventScreenshot } from "./AppEventScreenshot";
import type { DocumentLinks } from "./DocumentLinks";
/**
 *
 * @export
 * @interface AppEventScreenshotResponse
 */
export interface AppEventScreenshotResponse {
    /**
     *
     * @type {AppEventScreenshot}
     * @memberof AppEventScreenshotResponse
     */
    data: AppEventScreenshot;
    /**
     *
     * @type {Array<AppEventLocalization>}
     * @memberof AppEventScreenshotResponse
     */
    included?: Array<AppEventLocalization>;
    /**
     *
     * @type {DocumentLinks}
     * @memberof AppEventScreenshotResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the AppEventScreenshotResponse interface.
 */
export declare function instanceOfAppEventScreenshotResponse(value: object): boolean;
export declare function AppEventScreenshotResponseFromJSON(json: any): AppEventScreenshotResponse;
export declare function AppEventScreenshotResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventScreenshotResponse;
export declare function AppEventScreenshotResponseToJSON(value?: AppEventScreenshotResponse | null): any;
