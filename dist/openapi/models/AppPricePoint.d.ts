/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { AppPricePointRelationships } from './AppPricePointRelationships';
import type { AppPricePointV2Attributes } from './AppPricePointV2Attributes';
import type { ResourceLinks } from './ResourceLinks';
/**
 *
 * @export
 * @interface AppPricePoint
 */
export interface AppPricePoint {
    /**
     *
     * @type {string}
     * @memberof AppPricePoint
     */
    type: AppPricePointTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppPricePoint
     */
    id: string;
    /**
     *
     * @type {AppPricePointV2Attributes}
     * @memberof AppPricePoint
     */
    attributes?: AppPricePointV2Attributes;
    /**
     *
     * @type {AppPricePointRelationships}
     * @memberof AppPricePoint
     */
    relationships?: AppPricePointRelationships;
    /**
     *
     * @type {ResourceLinks}
     * @memberof AppPricePoint
     */
    links: ResourceLinks;
}
/**
 * @export
 */
export declare const AppPricePointTypeEnum: {
    readonly AppPricePoints: "appPricePoints";
};
export type AppPricePointTypeEnum = typeof AppPricePointTypeEnum[keyof typeof AppPricePointTypeEnum];
/**
 * Check if a given object implements the AppPricePoint interface.
 */
export declare function instanceOfAppPricePoint(value: object): boolean;
export declare function AppPricePointFromJSON(json: any): AppPricePoint;
export declare function AppPricePointFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPricePoint;
export declare function AppPricePointToJSON(value?: AppPricePoint | null): any;
