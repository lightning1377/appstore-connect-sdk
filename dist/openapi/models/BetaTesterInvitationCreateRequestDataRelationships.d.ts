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
import type { AnalyticsReportRequestCreateRequestDataRelationshipsApp } from "./AnalyticsReportRequestCreateRequestDataRelationshipsApp";
import type { BetaTesterInvitationCreateRequestDataRelationshipsBetaTester } from "./BetaTesterInvitationCreateRequestDataRelationshipsBetaTester";
/**
 *
 * @export
 * @interface BetaTesterInvitationCreateRequestDataRelationships
 */
export interface BetaTesterInvitationCreateRequestDataRelationships {
    /**
     *
     * @type {BetaTesterInvitationCreateRequestDataRelationshipsBetaTester}
     * @memberof BetaTesterInvitationCreateRequestDataRelationships
     */
    betaTester: BetaTesterInvitationCreateRequestDataRelationshipsBetaTester;
    /**
     *
     * @type {AnalyticsReportRequestCreateRequestDataRelationshipsApp}
     * @memberof BetaTesterInvitationCreateRequestDataRelationships
     */
    app: AnalyticsReportRequestCreateRequestDataRelationshipsApp;
}
/**
 * Check if a given object implements the BetaTesterInvitationCreateRequestDataRelationships interface.
 */
export declare function instanceOfBetaTesterInvitationCreateRequestDataRelationships(value: object): boolean;
export declare function BetaTesterInvitationCreateRequestDataRelationshipsFromJSON(json: any): BetaTesterInvitationCreateRequestDataRelationships;
export declare function BetaTesterInvitationCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaTesterInvitationCreateRequestDataRelationships;
export declare function BetaTesterInvitationCreateRequestDataRelationshipsToJSON(value?: BetaTesterInvitationCreateRequestDataRelationships | null): any;
