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
import type { DocumentLinks } from "./DocumentLinks";
import type { Subscription } from "./Subscription";
import type { SubscriptionAppStoreReviewScreenshot } from "./SubscriptionAppStoreReviewScreenshot";
/**
 *
 * @export
 * @interface SubscriptionAppStoreReviewScreenshotResponse
 */
export interface SubscriptionAppStoreReviewScreenshotResponse {
    /**
     *
     * @type {SubscriptionAppStoreReviewScreenshot}
     * @memberof SubscriptionAppStoreReviewScreenshotResponse
     */
    data: SubscriptionAppStoreReviewScreenshot;
    /**
     *
     * @type {Array<Subscription>}
     * @memberof SubscriptionAppStoreReviewScreenshotResponse
     */
    included?: Array<Subscription>;
    /**
     *
     * @type {DocumentLinks}
     * @memberof SubscriptionAppStoreReviewScreenshotResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the SubscriptionAppStoreReviewScreenshotResponse interface.
 */
export declare function instanceOfSubscriptionAppStoreReviewScreenshotResponse(value: object): boolean;
export declare function SubscriptionAppStoreReviewScreenshotResponseFromJSON(json: any): SubscriptionAppStoreReviewScreenshotResponse;
export declare function SubscriptionAppStoreReviewScreenshotResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionAppStoreReviewScreenshotResponse;
export declare function SubscriptionAppStoreReviewScreenshotResponseToJSON(value?: SubscriptionAppStoreReviewScreenshotResponse | null): any;
