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
import type { AppAvailabilityV2Attributes } from "./AppAvailabilityV2Attributes";
import type { InAppPurchaseAvailabilityRelationships } from "./InAppPurchaseAvailabilityRelationships";
import type { ResourceLinks } from "./ResourceLinks";
/**
 *
 * @export
 * @interface InAppPurchaseAvailability
 */
export interface InAppPurchaseAvailability {
    /**
     *
     * @type {string}
     * @memberof InAppPurchaseAvailability
     */
    type: InAppPurchaseAvailabilityTypeEnum;
    /**
     *
     * @type {string}
     * @memberof InAppPurchaseAvailability
     */
    id: string;
    /**
     *
     * @type {AppAvailabilityV2Attributes}
     * @memberof InAppPurchaseAvailability
     */
    attributes?: AppAvailabilityV2Attributes;
    /**
     *
     * @type {InAppPurchaseAvailabilityRelationships}
     * @memberof InAppPurchaseAvailability
     */
    relationships?: InAppPurchaseAvailabilityRelationships;
    /**
     *
     * @type {ResourceLinks}
     * @memberof InAppPurchaseAvailability
     */
    links?: ResourceLinks;
}
/**
 * @export
 */
export declare const InAppPurchaseAvailabilityTypeEnum: {
    readonly InAppPurchaseAvailabilities: "inAppPurchaseAvailabilities";
};
export type InAppPurchaseAvailabilityTypeEnum = (typeof InAppPurchaseAvailabilityTypeEnum)[keyof typeof InAppPurchaseAvailabilityTypeEnum];
/**
 * Check if a given object implements the InAppPurchaseAvailability interface.
 */
export declare function instanceOfInAppPurchaseAvailability(value: object): boolean;
export declare function InAppPurchaseAvailabilityFromJSON(json: any): InAppPurchaseAvailability;
export declare function InAppPurchaseAvailabilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseAvailability;
export declare function InAppPurchaseAvailabilityToJSON(value?: InAppPurchaseAvailability | null): any;
