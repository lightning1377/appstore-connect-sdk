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
import type { BetaTesterInvitation } from "./BetaTesterInvitation";
import type { DocumentLinks } from "./DocumentLinks";
/**
 *
 * @export
 * @interface BetaTesterInvitationResponse
 */
export interface BetaTesterInvitationResponse {
    /**
     *
     * @type {BetaTesterInvitation}
     * @memberof BetaTesterInvitationResponse
     */
    data: BetaTesterInvitation;
    /**
     *
     * @type {DocumentLinks}
     * @memberof BetaTesterInvitationResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the BetaTesterInvitationResponse interface.
 */
export declare function instanceOfBetaTesterInvitationResponse(value: object): boolean;
export declare function BetaTesterInvitationResponseFromJSON(json: any): BetaTesterInvitationResponse;
export declare function BetaTesterInvitationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaTesterInvitationResponse;
export declare function BetaTesterInvitationResponseToJSON(value?: BetaTesterInvitationResponse | null): any;
