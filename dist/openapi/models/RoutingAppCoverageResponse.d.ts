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
import type { AppStoreVersion } from "./AppStoreVersion";
import type { DocumentLinks } from "./DocumentLinks";
import type { RoutingAppCoverage } from "./RoutingAppCoverage";
/**
 *
 * @export
 * @interface RoutingAppCoverageResponse
 */
export interface RoutingAppCoverageResponse {
    /**
     *
     * @type {RoutingAppCoverage}
     * @memberof RoutingAppCoverageResponse
     */
    data: RoutingAppCoverage;
    /**
     *
     * @type {Array<AppStoreVersion>}
     * @memberof RoutingAppCoverageResponse
     */
    included?: Array<AppStoreVersion>;
    /**
     *
     * @type {DocumentLinks}
     * @memberof RoutingAppCoverageResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the RoutingAppCoverageResponse interface.
 */
export declare function instanceOfRoutingAppCoverageResponse(value: object): boolean;
export declare function RoutingAppCoverageResponseFromJSON(json: any): RoutingAppCoverageResponse;
export declare function RoutingAppCoverageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoutingAppCoverageResponse;
export declare function RoutingAppCoverageResponseToJSON(value?: RoutingAppCoverageResponse | null): any;
