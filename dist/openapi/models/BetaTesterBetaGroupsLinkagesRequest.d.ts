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
import type { AppRelationshipsBetaGroupsDataInner } from "./AppRelationshipsBetaGroupsDataInner";
/**
 *
 * @export
 * @interface BetaTesterBetaGroupsLinkagesRequest
 */
export interface BetaTesterBetaGroupsLinkagesRequest {
    /**
     *
     * @type {Array<AppRelationshipsBetaGroupsDataInner>}
     * @memberof BetaTesterBetaGroupsLinkagesRequest
     */
    data: Array<AppRelationshipsBetaGroupsDataInner>;
}
/**
 * Check if a given object implements the BetaTesterBetaGroupsLinkagesRequest interface.
 */
export declare function instanceOfBetaTesterBetaGroupsLinkagesRequest(value: object): boolean;
export declare function BetaTesterBetaGroupsLinkagesRequestFromJSON(json: any): BetaTesterBetaGroupsLinkagesRequest;
export declare function BetaTesterBetaGroupsLinkagesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaTesterBetaGroupsLinkagesRequest;
export declare function BetaTesterBetaGroupsLinkagesRequestToJSON(value?: BetaTesterBetaGroupsLinkagesRequest | null): any;
