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
import type { CiBuildAction } from "./CiBuildAction";
import type { CiBuildRun } from "./CiBuildRun";
import type { DocumentLinks } from "./DocumentLinks";
/**
 *
 * @export
 * @interface CiBuildActionResponse
 */
export interface CiBuildActionResponse {
    /**
     *
     * @type {CiBuildAction}
     * @memberof CiBuildActionResponse
     */
    data: CiBuildAction;
    /**
     *
     * @type {Array<CiBuildRun>}
     * @memberof CiBuildActionResponse
     */
    included?: Array<CiBuildRun>;
    /**
     *
     * @type {DocumentLinks}
     * @memberof CiBuildActionResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the CiBuildActionResponse interface.
 */
export declare function instanceOfCiBuildActionResponse(value: object): boolean;
export declare function CiBuildActionResponseFromJSON(json: any): CiBuildActionResponse;
export declare function CiBuildActionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiBuildActionResponse;
export declare function CiBuildActionResponseToJSON(value?: CiBuildActionResponse | null): any;
