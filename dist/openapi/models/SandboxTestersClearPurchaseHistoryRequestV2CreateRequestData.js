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
exports.SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataTypeEnum = void 0;
exports.instanceOfSandboxTestersClearPurchaseHistoryRequestV2CreateRequestData = instanceOfSandboxTestersClearPurchaseHistoryRequestV2CreateRequestData;
exports.SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataFromJSON = SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataFromJSON;
exports.SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataFromJSONTyped = SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataFromJSONTyped;
exports.SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataToJSON = SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataToJSON;
const SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationships_1 = require("./SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationships");
/**
 * @export
 */
exports.SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataTypeEnum = {
    SandboxTestersClearPurchaseHistoryRequest: "sandboxTestersClearPurchaseHistoryRequest"
};
/**
 * Check if a given object implements the SandboxTestersClearPurchaseHistoryRequestV2CreateRequestData interface.
 */
function instanceOfSandboxTestersClearPurchaseHistoryRequestV2CreateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "relationships" in value;
    return isInstance;
}
function SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataFromJSON(json) {
    return SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataFromJSONTyped(json, false);
}
function SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        relationships: (0, SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationships_1.SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsFromJSON)(json["relationships"])
    };
}
function SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        relationships: (0, SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationships_1.SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsToJSON)(value.relationships)
    };
}
