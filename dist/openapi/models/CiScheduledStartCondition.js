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
exports.instanceOfCiScheduledStartCondition = instanceOfCiScheduledStartCondition;
exports.CiScheduledStartConditionFromJSON = CiScheduledStartConditionFromJSON;
exports.CiScheduledStartConditionFromJSONTyped = CiScheduledStartConditionFromJSONTyped;
exports.CiScheduledStartConditionToJSON = CiScheduledStartConditionToJSON;
const runtime_1 = require("../runtime");
const CiBranchPatterns_1 = require("./CiBranchPatterns");
const CiScheduledStartConditionSchedule_1 = require("./CiScheduledStartConditionSchedule");
/**
 * Check if a given object implements the CiScheduledStartCondition interface.
 */
function instanceOfCiScheduledStartCondition(value) {
    let isInstance = true;
    return isInstance;
}
function CiScheduledStartConditionFromJSON(json) {
    return CiScheduledStartConditionFromJSONTyped(json, false);
}
function CiScheduledStartConditionFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        source: !(0, runtime_1.exists)(json, "source") ? undefined : (0, CiBranchPatterns_1.CiBranchPatternsFromJSON)(json["source"]),
        schedule: !(0, runtime_1.exists)(json, "schedule") ? undefined : (0, CiScheduledStartConditionSchedule_1.CiScheduledStartConditionScheduleFromJSON)(json["schedule"])
    };
}
function CiScheduledStartConditionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        source: (0, CiBranchPatterns_1.CiBranchPatternsToJSON)(value.source),
        schedule: (0, CiScheduledStartConditionSchedule_1.CiScheduledStartConditionScheduleToJSON)(value.schedule)
    };
}
