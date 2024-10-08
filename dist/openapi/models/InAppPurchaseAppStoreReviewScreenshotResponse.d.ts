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
import type { InAppPurchaseAppStoreReviewScreenshot } from "./InAppPurchaseAppStoreReviewScreenshot";
import type { InAppPurchaseV2 } from "./InAppPurchaseV2";
/**
 *
 * @export
 * @interface InAppPurchaseAppStoreReviewScreenshotResponse
 */
export interface InAppPurchaseAppStoreReviewScreenshotResponse {
    /**
     *
     * @type {InAppPurchaseAppStoreReviewScreenshot}
     * @memberof InAppPurchaseAppStoreReviewScreenshotResponse
     */
    data: InAppPurchaseAppStoreReviewScreenshot;
    /**
     *
     * @type {Array<InAppPurchaseV2>}
     * @memberof InAppPurchaseAppStoreReviewScreenshotResponse
     */
    included?: Array<InAppPurchaseV2>;
    /**
     *
     * @type {DocumentLinks}
     * @memberof InAppPurchaseAppStoreReviewScreenshotResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the InAppPurchaseAppStoreReviewScreenshotResponse interface.
 */
export declare function instanceOfInAppPurchaseAppStoreReviewScreenshotResponse(value: object): boolean;
export declare function InAppPurchaseAppStoreReviewScreenshotResponseFromJSON(json: any): InAppPurchaseAppStoreReviewScreenshotResponse;
export declare function InAppPurchaseAppStoreReviewScreenshotResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseAppStoreReviewScreenshotResponse;
export declare function InAppPurchaseAppStoreReviewScreenshotResponseToJSON(value?: InAppPurchaseAppStoreReviewScreenshotResponse | null): any;
