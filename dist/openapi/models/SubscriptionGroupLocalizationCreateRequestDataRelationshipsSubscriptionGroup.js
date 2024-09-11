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
exports.instanceOfSubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroup = instanceOfSubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroup;
exports.SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroupFromJSON = SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroupFromJSON;
exports.SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroupFromJSONTyped = SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroupFromJSONTyped;
exports.SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroupToJSON = SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroupToJSON;
const AppRelationshipsSubscriptionGroupsDataInner_1 = require("./AppRelationshipsSubscriptionGroupsDataInner");
/**
 * Check if a given object implements the SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroup interface.
 */
function instanceOfSubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroup(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
function SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroupFromJSON(json) {
    return SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroupFromJSONTyped(json, false);
}
function SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroupFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        data: (0, AppRelationshipsSubscriptionGroupsDataInner_1.AppRelationshipsSubscriptionGroupsDataInnerFromJSON)(json["data"])
    };
}
function SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroupToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        data: (0, AppRelationshipsSubscriptionGroupsDataInner_1.AppRelationshipsSubscriptionGroupsDataInnerToJSON)(value.data)
    };
}
