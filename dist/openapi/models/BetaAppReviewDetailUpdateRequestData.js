"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BetaAppReviewDetailUpdateRequestDataTypeEnum = void 0;
exports.instanceOfBetaAppReviewDetailUpdateRequestData = instanceOfBetaAppReviewDetailUpdateRequestData;
exports.BetaAppReviewDetailUpdateRequestDataFromJSON = BetaAppReviewDetailUpdateRequestDataFromJSON;
exports.BetaAppReviewDetailUpdateRequestDataFromJSONTyped = BetaAppReviewDetailUpdateRequestDataFromJSONTyped;
exports.BetaAppReviewDetailUpdateRequestDataToJSON = BetaAppReviewDetailUpdateRequestDataToJSON;
const runtime_1 = require("../runtime");
const AppStoreReviewDetailAttributes_1 = require("./AppStoreReviewDetailAttributes");
/**
 * @export
 */
exports.BetaAppReviewDetailUpdateRequestDataTypeEnum = {
    BetaAppReviewDetails: "betaAppReviewDetails"
};
/**
 * Check if a given object implements the BetaAppReviewDetailUpdateRequestData interface.
 */
function instanceOfBetaAppReviewDetailUpdateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
function BetaAppReviewDetailUpdateRequestDataFromJSON(json) {
    return BetaAppReviewDetailUpdateRequestDataFromJSONTyped(json, false);
}
function BetaAppReviewDetailUpdateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !(0, runtime_1.exists)(json, "attributes") ? undefined : (0, AppStoreReviewDetailAttributes_1.AppStoreReviewDetailAttributesFromJSON)(json["attributes"])
    };
}
function BetaAppReviewDetailUpdateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: (0, AppStoreReviewDetailAttributes_1.AppStoreReviewDetailAttributesToJSON)(value.attributes)
    };
}
