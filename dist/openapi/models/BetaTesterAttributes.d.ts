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
import type { BetaInviteType } from "./BetaInviteType";
import type { BetaTesterState } from "./BetaTesterState";
/**
 *
 * @export
 * @interface BetaTesterAttributes
 */
export interface BetaTesterAttributes {
    /**
     *
     * @type {string}
     * @memberof BetaTesterAttributes
     */
    firstName?: string;
    /**
     *
     * @type {string}
     * @memberof BetaTesterAttributes
     */
    lastName?: string;
    /**
     *
     * @type {string}
     * @memberof BetaTesterAttributes
     */
    email?: string;
    /**
     *
     * @type {BetaInviteType}
     * @memberof BetaTesterAttributes
     */
    inviteType?: BetaInviteType;
    /**
     *
     * @type {BetaTesterState}
     * @memberof BetaTesterAttributes
     */
    state?: BetaTesterState;
}
/**
 * Check if a given object implements the BetaTesterAttributes interface.
 */
export declare function instanceOfBetaTesterAttributes(value: object): boolean;
export declare function BetaTesterAttributesFromJSON(json: any): BetaTesterAttributes;
export declare function BetaTesterAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaTesterAttributes;
export declare function BetaTesterAttributesToJSON(value?: BetaTesterAttributes | null): any;
