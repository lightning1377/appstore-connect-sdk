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
import type { AppPreview } from "./AppPreview";
import type { AppPreviewSet } from "./AppPreviewSet";
import type { DocumentLinks } from "./DocumentLinks";
/**
 *
 * @export
 * @interface AppPreviewResponse
 */
export interface AppPreviewResponse {
    /**
     *
     * @type {AppPreview}
     * @memberof AppPreviewResponse
     */
    data: AppPreview;
    /**
     *
     * @type {Array<AppPreviewSet>}
     * @memberof AppPreviewResponse
     */
    included?: Array<AppPreviewSet>;
    /**
     *
     * @type {DocumentLinks}
     * @memberof AppPreviewResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the AppPreviewResponse interface.
 */
export declare function instanceOfAppPreviewResponse(value: object): boolean;
export declare function AppPreviewResponseFromJSON(json: any): AppPreviewResponse;
export declare function AppPreviewResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreviewResponse;
export declare function AppPreviewResponseToJSON(value?: AppPreviewResponse | null): any;
