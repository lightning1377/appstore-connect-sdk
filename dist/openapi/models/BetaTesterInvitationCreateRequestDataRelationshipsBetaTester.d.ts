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
 * @interface BetaTesterInvitationCreateRequestDataRelationshipsBetaTester
 */
export interface BetaTesterInvitationCreateRequestDataRelationshipsBetaTester {
    /**
     *
     * @type {BetaGroupRelationshipsBetaTestersDataInner}
     * @memberof BetaTesterInvitationCreateRequestDataRelationshipsBetaTester
     */
    data: BetaGroupRelationshipsBetaTestersDataInner;
}
/**
 * Check if a given object implements the BetaTesterInvitationCreateRequestDataRelationshipsBetaTester interface.
 */
export declare function instanceOfBetaTesterInvitationCreateRequestDataRelationshipsBetaTester(value: object): boolean;
export declare function BetaTesterInvitationCreateRequestDataRelationshipsBetaTesterFromJSON(json: any): BetaTesterInvitationCreateRequestDataRelationshipsBetaTester;
export declare function BetaTesterInvitationCreateRequestDataRelationshipsBetaTesterFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaTesterInvitationCreateRequestDataRelationshipsBetaTester;
export declare function BetaTesterInvitationCreateRequestDataRelationshipsBetaTesterToJSON(value?: BetaTesterInvitationCreateRequestDataRelationshipsBetaTester | null): any;
