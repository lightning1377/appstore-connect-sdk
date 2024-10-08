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
import type { AppPreviewSetRelationshipsAppPreviewsDataInner } from "./AppPreviewSetRelationshipsAppPreviewsDataInner";
/**
 *
 * @export
 * @interface AppPreviewSetAppPreviewsLinkagesRequest
 */
export interface AppPreviewSetAppPreviewsLinkagesRequest {
    /**
     *
     * @type {Array<AppPreviewSetRelationshipsAppPreviewsDataInner>}
     * @memberof AppPreviewSetAppPreviewsLinkagesRequest
     */
    data: Array<AppPreviewSetRelationshipsAppPreviewsDataInner>;
}
/**
 * Check if a given object implements the AppPreviewSetAppPreviewsLinkagesRequest interface.
 */
export declare function instanceOfAppPreviewSetAppPreviewsLinkagesRequest(value: object): boolean;
export declare function AppPreviewSetAppPreviewsLinkagesRequestFromJSON(json: any): AppPreviewSetAppPreviewsLinkagesRequest;
export declare function AppPreviewSetAppPreviewsLinkagesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreviewSetAppPreviewsLinkagesRequest;
export declare function AppPreviewSetAppPreviewsLinkagesRequestToJSON(value?: AppPreviewSetAppPreviewsLinkagesRequest | null): any;
