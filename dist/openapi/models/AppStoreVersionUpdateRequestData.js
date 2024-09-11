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
exports.AppStoreVersionUpdateRequestDataTypeEnum = void 0;
exports.instanceOfAppStoreVersionUpdateRequestData = instanceOfAppStoreVersionUpdateRequestData;
exports.AppStoreVersionUpdateRequestDataFromJSON = AppStoreVersionUpdateRequestDataFromJSON;
exports.AppStoreVersionUpdateRequestDataFromJSONTyped = AppStoreVersionUpdateRequestDataFromJSONTyped;
exports.AppStoreVersionUpdateRequestDataToJSON = AppStoreVersionUpdateRequestDataToJSON;
const runtime_1 = require("../runtime");
const AppStoreVersionUpdateRequestDataAttributes_1 = require("./AppStoreVersionUpdateRequestDataAttributes");
const AppStoreVersionUpdateRequestDataRelationships_1 = require("./AppStoreVersionUpdateRequestDataRelationships");
/**
 * @export
 */
exports.AppStoreVersionUpdateRequestDataTypeEnum = {
    AppStoreVersions: "appStoreVersions"
};
/**
 * Check if a given object implements the AppStoreVersionUpdateRequestData interface.
 */
function instanceOfAppStoreVersionUpdateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
function AppStoreVersionUpdateRequestDataFromJSON(json) {
    return AppStoreVersionUpdateRequestDataFromJSONTyped(json, false);
}
function AppStoreVersionUpdateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !(0, runtime_1.exists)(json, "attributes") ? undefined : (0, AppStoreVersionUpdateRequestDataAttributes_1.AppStoreVersionUpdateRequestDataAttributesFromJSON)(json["attributes"]),
        relationships: !(0, runtime_1.exists)(json, "relationships") ? undefined : (0, AppStoreVersionUpdateRequestDataRelationships_1.AppStoreVersionUpdateRequestDataRelationshipsFromJSON)(json["relationships"])
    };
}
function AppStoreVersionUpdateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: (0, AppStoreVersionUpdateRequestDataAttributes_1.AppStoreVersionUpdateRequestDataAttributesToJSON)(value.attributes),
        relationships: (0, AppStoreVersionUpdateRequestDataRelationships_1.AppStoreVersionUpdateRequestDataRelationshipsToJSON)(value.relationships)
    };
}
