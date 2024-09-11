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
exports.InAppPurchasePriceScheduleTypeEnum = void 0;
exports.instanceOfInAppPurchasePriceSchedule = instanceOfInAppPurchasePriceSchedule;
exports.InAppPurchasePriceScheduleFromJSON = InAppPurchasePriceScheduleFromJSON;
exports.InAppPurchasePriceScheduleFromJSONTyped = InAppPurchasePriceScheduleFromJSONTyped;
exports.InAppPurchasePriceScheduleToJSON = InAppPurchasePriceScheduleToJSON;
const runtime_1 = require("../runtime");
const InAppPurchasePriceScheduleRelationships_1 = require("./InAppPurchasePriceScheduleRelationships");
const ResourceLinks_1 = require("./ResourceLinks");
/**
 * @export
 */
exports.InAppPurchasePriceScheduleTypeEnum = {
    InAppPurchasePriceSchedules: "inAppPurchasePriceSchedules"
};
/**
 * Check if a given object implements the InAppPurchasePriceSchedule interface.
 */
function instanceOfInAppPurchasePriceSchedule(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
function InAppPurchasePriceScheduleFromJSON(json) {
    return InAppPurchasePriceScheduleFromJSONTyped(json, false);
}
function InAppPurchasePriceScheduleFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        relationships: !(0, runtime_1.exists)(json, "relationships") ? undefined : (0, InAppPurchasePriceScheduleRelationships_1.InAppPurchasePriceScheduleRelationshipsFromJSON)(json["relationships"]),
        links: !(0, runtime_1.exists)(json, "links") ? undefined : (0, ResourceLinks_1.ResourceLinksFromJSON)(json["links"])
    };
}
function InAppPurchasePriceScheduleToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        relationships: (0, InAppPurchasePriceScheduleRelationships_1.InAppPurchasePriceScheduleRelationshipsToJSON)(value.relationships),
        links: (0, ResourceLinks_1.ResourceLinksToJSON)(value.links)
    };
}
