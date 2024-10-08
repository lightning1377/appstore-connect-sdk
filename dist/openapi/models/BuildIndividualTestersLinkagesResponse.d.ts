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
import type { BetaGroupRelationshipsBetaTestersDataInner } from "./BetaGroupRelationshipsBetaTestersDataInner";
import type { PagedDocumentLinks } from "./PagedDocumentLinks";
import type { PagingInformation } from "./PagingInformation";
/**
 *
 * @export
 * @interface BuildIndividualTestersLinkagesResponse
 */
export interface BuildIndividualTestersLinkagesResponse {
    /**
     *
     * @type {Array<BetaGroupRelationshipsBetaTestersDataInner>}
     * @memberof BuildIndividualTestersLinkagesResponse
     */
    data: Array<BetaGroupRelationshipsBetaTestersDataInner>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof BuildIndividualTestersLinkagesResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof BuildIndividualTestersLinkagesResponse
     */
    meta?: PagingInformation;
}
/**
 * Check if a given object implements the BuildIndividualTestersLinkagesResponse interface.
 */
export declare function instanceOfBuildIndividualTestersLinkagesResponse(value: object): boolean;
export declare function BuildIndividualTestersLinkagesResponseFromJSON(json: any): BuildIndividualTestersLinkagesResponse;
export declare function BuildIndividualTestersLinkagesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildIndividualTestersLinkagesResponse;
export declare function BuildIndividualTestersLinkagesResponseToJSON(value?: BuildIndividualTestersLinkagesResponse | null): any;
