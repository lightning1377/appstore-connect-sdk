/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
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

import { exists, mapValues } from "../runtime";
import type { CustomerReviewResponseV1CreateRequestDataAttributes } from "./CustomerReviewResponseV1CreateRequestDataAttributes";
import { CustomerReviewResponseV1CreateRequestDataAttributesFromJSON, CustomerReviewResponseV1CreateRequestDataAttributesFromJSONTyped, CustomerReviewResponseV1CreateRequestDataAttributesToJSON } from "./CustomerReviewResponseV1CreateRequestDataAttributes";
import type { CustomerReviewResponseV1CreateRequestDataRelationships } from "./CustomerReviewResponseV1CreateRequestDataRelationships";
import { CustomerReviewResponseV1CreateRequestDataRelationshipsFromJSON, CustomerReviewResponseV1CreateRequestDataRelationshipsFromJSONTyped, CustomerReviewResponseV1CreateRequestDataRelationshipsToJSON } from "./CustomerReviewResponseV1CreateRequestDataRelationships";

/**
 *
 * @export
 * @interface CustomerReviewResponseV1CreateRequestData
 */
export interface CustomerReviewResponseV1CreateRequestData {
    /**
     *
     * @type {string}
     * @memberof CustomerReviewResponseV1CreateRequestData
     */
    type: CustomerReviewResponseV1CreateRequestDataTypeEnum;
    /**
     *
     * @type {CustomerReviewResponseV1CreateRequestDataAttributes}
     * @memberof CustomerReviewResponseV1CreateRequestData
     */
    attributes: CustomerReviewResponseV1CreateRequestDataAttributes;
    /**
     *
     * @type {CustomerReviewResponseV1CreateRequestDataRelationships}
     * @memberof CustomerReviewResponseV1CreateRequestData
     */
    relationships: CustomerReviewResponseV1CreateRequestDataRelationships;
}

/**
 * @export
 */
export const CustomerReviewResponseV1CreateRequestDataTypeEnum = {
    CustomerReviewResponses: "customerReviewResponses"
} as const;
export type CustomerReviewResponseV1CreateRequestDataTypeEnum = (typeof CustomerReviewResponseV1CreateRequestDataTypeEnum)[keyof typeof CustomerReviewResponseV1CreateRequestDataTypeEnum];

/**
 * Check if a given object implements the CustomerReviewResponseV1CreateRequestData interface.
 */
export function instanceOfCustomerReviewResponseV1CreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function CustomerReviewResponseV1CreateRequestDataFromJSON(json: any): CustomerReviewResponseV1CreateRequestData {
    return CustomerReviewResponseV1CreateRequestDataFromJSONTyped(json, false);
}

export function CustomerReviewResponseV1CreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerReviewResponseV1CreateRequestData {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        attributes: CustomerReviewResponseV1CreateRequestDataAttributesFromJSON(json["attributes"]),
        relationships: CustomerReviewResponseV1CreateRequestDataRelationshipsFromJSON(json["relationships"])
    };
}

export function CustomerReviewResponseV1CreateRequestDataToJSON(value?: CustomerReviewResponseV1CreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        attributes: CustomerReviewResponseV1CreateRequestDataAttributesToJSON(value.attributes),
        relationships: CustomerReviewResponseV1CreateRequestDataRelationshipsToJSON(value.relationships)
    };
}
