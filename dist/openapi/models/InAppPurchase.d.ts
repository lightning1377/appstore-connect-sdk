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
import type { InAppPurchaseAttributes } from "./InAppPurchaseAttributes";
import type { InAppPurchaseRelationships } from "./InAppPurchaseRelationships";
import type { ResourceLinks } from "./ResourceLinks";
/**
 *
 * @export
 * @interface InAppPurchase
 */
export interface InAppPurchase {
    /**
     *
     * @type {string}
     * @memberof InAppPurchase
     */
    type: InAppPurchaseTypeEnum;
    /**
     *
     * @type {string}
     * @memberof InAppPurchase
     */
    id: string;
    /**
     *
     * @type {InAppPurchaseAttributes}
     * @memberof InAppPurchase
     */
    attributes?: InAppPurchaseAttributes;
    /**
     *
     * @type {InAppPurchaseRelationships}
     * @memberof InAppPurchase
     */
    relationships?: InAppPurchaseRelationships;
    /**
     *
     * @type {ResourceLinks}
     * @memberof InAppPurchase
     */
    links?: ResourceLinks;
}
/**
 * @export
 */
export declare const InAppPurchaseTypeEnum: {
    readonly InAppPurchases: "inAppPurchases";
};
export type InAppPurchaseTypeEnum = (typeof InAppPurchaseTypeEnum)[keyof typeof InAppPurchaseTypeEnum];
/**
 * Check if a given object implements the InAppPurchase interface.
 */
export declare function instanceOfInAppPurchase(value: object): boolean;
export declare function InAppPurchaseFromJSON(json: any): InAppPurchase;
export declare function InAppPurchaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchase;
export declare function InAppPurchaseToJSON(value?: InAppPurchase | null): any;
