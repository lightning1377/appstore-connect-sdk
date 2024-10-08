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
import { AppCustomProductPageVersion } from "./AppCustomProductPageVersion";
import { AppEvent } from "./AppEvent";
import { AppStoreVersion } from "./AppStoreVersion";
import { AppStoreVersionExperiment } from "./AppStoreVersionExperiment";
import { AppStoreVersionExperimentV2 } from "./AppStoreVersionExperimentV2";
/**
 * @type ReviewSubmissionItemsResponseIncludedInner
 *
 * @export
 */
export type ReviewSubmissionItemsResponseIncludedInner = AppCustomProductPageVersion | AppEvent | AppStoreVersion | AppStoreVersionExperiment | AppStoreVersionExperimentV2;
export declare function ReviewSubmissionItemsResponseIncludedInnerFromJSON(json: any): ReviewSubmissionItemsResponseIncludedInner;
export declare function ReviewSubmissionItemsResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReviewSubmissionItemsResponseIncludedInner;
export declare function ReviewSubmissionItemsResponseIncludedInnerToJSON(value?: ReviewSubmissionItemsResponseIncludedInner | null): any;
