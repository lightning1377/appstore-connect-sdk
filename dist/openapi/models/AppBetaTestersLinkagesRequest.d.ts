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
/**
 *
 * @export
 * @interface AppBetaTestersLinkagesRequest
 */
export interface AppBetaTestersLinkagesRequest {
    /**
     *
     * @type {Array<BetaGroupRelationshipsBetaTestersDataInner>}
     * @memberof AppBetaTestersLinkagesRequest
     */
    data: Array<BetaGroupRelationshipsBetaTestersDataInner>;
}
/**
 * Check if a given object implements the AppBetaTestersLinkagesRequest interface.
 */
export declare function instanceOfAppBetaTestersLinkagesRequest(value: object): boolean;
export declare function AppBetaTestersLinkagesRequestFromJSON(json: any): AppBetaTestersLinkagesRequest;
export declare function AppBetaTestersLinkagesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppBetaTestersLinkagesRequest;
export declare function AppBetaTestersLinkagesRequestToJSON(value?: AppBetaTestersLinkagesRequest | null): any;
