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
exports.UserUpdateRequestDataTypeEnum = void 0;
exports.instanceOfUserUpdateRequestData = instanceOfUserUpdateRequestData;
exports.UserUpdateRequestDataFromJSON = UserUpdateRequestDataFromJSON;
exports.UserUpdateRequestDataFromJSONTyped = UserUpdateRequestDataFromJSONTyped;
exports.UserUpdateRequestDataToJSON = UserUpdateRequestDataToJSON;
const runtime_1 = require("../runtime");
const UserInvitationCreateRequestDataRelationships_1 = require("./UserInvitationCreateRequestDataRelationships");
const UserUpdateRequestDataAttributes_1 = require("./UserUpdateRequestDataAttributes");
/**
 * @export
 */
exports.UserUpdateRequestDataTypeEnum = {
    Users: "users"
};
/**
 * Check if a given object implements the UserUpdateRequestData interface.
 */
function instanceOfUserUpdateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
function UserUpdateRequestDataFromJSON(json) {
    return UserUpdateRequestDataFromJSONTyped(json, false);
}
function UserUpdateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !(0, runtime_1.exists)(json, "attributes") ? undefined : (0, UserUpdateRequestDataAttributes_1.UserUpdateRequestDataAttributesFromJSON)(json["attributes"]),
        relationships: !(0, runtime_1.exists)(json, "relationships") ? undefined : (0, UserInvitationCreateRequestDataRelationships_1.UserInvitationCreateRequestDataRelationshipsFromJSON)(json["relationships"])
    };
}
function UserUpdateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: (0, UserUpdateRequestDataAttributes_1.UserUpdateRequestDataAttributesToJSON)(value.attributes),
        relationships: (0, UserInvitationCreateRequestDataRelationships_1.UserInvitationCreateRequestDataRelationshipsToJSON)(value.relationships)
    };
}
