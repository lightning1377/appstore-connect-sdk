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
import type { AlternativeDistributionPackageVersionRelationshipsVariantsLinks } from "./AlternativeDistributionPackageVersionRelationshipsVariantsLinks";
import type { BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInner } from "./BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInner";
import type { PagingInformation } from "./PagingInformation";
/**
 *
 * @export
 * @interface BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizations
 */
export interface BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizations {
    /**
     *
     * @type {AlternativeDistributionPackageVersionRelationshipsVariantsLinks}
     * @memberof BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizations
     */
    links?: AlternativeDistributionPackageVersionRelationshipsVariantsLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizations
     */
    meta?: PagingInformation;
    /**
     *
     * @type {Array<BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInner>}
     * @memberof BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizations
     */
    data?: Array<BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInner>;
}
/**
 * Check if a given object implements the BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizations interface.
 */
export declare function instanceOfBetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizations(value: object): boolean;
export declare function BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsFromJSON(json: any): BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizations;
export declare function BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizations;
export declare function BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsToJSON(value?: BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizations | null): any;
