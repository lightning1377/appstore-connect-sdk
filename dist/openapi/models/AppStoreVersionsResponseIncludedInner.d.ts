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
import { AgeRatingDeclaration } from "./AgeRatingDeclaration";
import { AlternativeDistributionPackage } from "./AlternativeDistributionPackage";
import { App } from "./App";
import { AppClipDefaultExperience } from "./AppClipDefaultExperience";
import { AppStoreReviewDetail } from "./AppStoreReviewDetail";
import { AppStoreVersionExperiment } from "./AppStoreVersionExperiment";
import { AppStoreVersionExperimentV2 } from "./AppStoreVersionExperimentV2";
import { AppStoreVersionLocalization } from "./AppStoreVersionLocalization";
import { AppStoreVersionPhasedRelease } from "./AppStoreVersionPhasedRelease";
import { AppStoreVersionSubmission } from "./AppStoreVersionSubmission";
import { Build } from "./Build";
import { RoutingAppCoverage } from "./RoutingAppCoverage";
/**
 * @type AppStoreVersionsResponseIncludedInner
 *
 * @export
 */
export type AppStoreVersionsResponseIncludedInner = AgeRatingDeclaration | AlternativeDistributionPackage | App | AppClipDefaultExperience | AppStoreReviewDetail | AppStoreVersionExperiment | AppStoreVersionExperimentV2 | AppStoreVersionLocalization | AppStoreVersionPhasedRelease | AppStoreVersionSubmission | Build | RoutingAppCoverage;
export declare function AppStoreVersionsResponseIncludedInnerFromJSON(json: any): AppStoreVersionsResponseIncludedInner;
export declare function AppStoreVersionsResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionsResponseIncludedInner;
export declare function AppStoreVersionsResponseIncludedInnerToJSON(value?: AppStoreVersionsResponseIncludedInner | null): any;
