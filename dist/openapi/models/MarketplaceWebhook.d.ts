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
import type { MarketplaceWebhookAttributes } from "./MarketplaceWebhookAttributes";
import type { ResourceLinks } from "./ResourceLinks";
/**
 *
 * @export
 * @interface MarketplaceWebhook
 */
export interface MarketplaceWebhook {
    /**
     *
     * @type {string}
     * @memberof MarketplaceWebhook
     */
    type: MarketplaceWebhookTypeEnum;
    /**
     *
     * @type {string}
     * @memberof MarketplaceWebhook
     */
    id: string;
    /**
     *
     * @type {MarketplaceWebhookAttributes}
     * @memberof MarketplaceWebhook
     */
    attributes?: MarketplaceWebhookAttributes;
    /**
     *
     * @type {ResourceLinks}
     * @memberof MarketplaceWebhook
     */
    links?: ResourceLinks;
}
/**
 * @export
 */
export declare const MarketplaceWebhookTypeEnum: {
    readonly MarketplaceWebhooks: "marketplaceWebhooks";
};
export type MarketplaceWebhookTypeEnum = (typeof MarketplaceWebhookTypeEnum)[keyof typeof MarketplaceWebhookTypeEnum];
/**
 * Check if a given object implements the MarketplaceWebhook interface.
 */
export declare function instanceOfMarketplaceWebhook(value: object): boolean;
export declare function MarketplaceWebhookFromJSON(json: any): MarketplaceWebhook;
export declare function MarketplaceWebhookFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketplaceWebhook;
export declare function MarketplaceWebhookToJSON(value?: MarketplaceWebhook | null): any;
