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
/**
 *
 * @export
 * @interface PagingInformationPaging
 */
export interface PagingInformationPaging {
    /**
     *
     * @type {number}
     * @memberof PagingInformationPaging
     */
    total?: number;
    /**
     *
     * @type {number}
     * @memberof PagingInformationPaging
     */
    limit: number;
}
/**
 * Check if a given object implements the PagingInformationPaging interface.
 */
export declare function instanceOfPagingInformationPaging(value: object): boolean;
export declare function PagingInformationPagingFromJSON(json: any): PagingInformationPaging;
export declare function PagingInformationPagingFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagingInformationPaging;
export declare function PagingInformationPagingToJSON(value?: PagingInformationPaging | null): any;
