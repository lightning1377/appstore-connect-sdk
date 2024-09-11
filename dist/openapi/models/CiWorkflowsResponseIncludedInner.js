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
exports.CiWorkflowsResponseIncludedInnerFromJSON = CiWorkflowsResponseIncludedInnerFromJSON;
exports.CiWorkflowsResponseIncludedInnerFromJSONTyped = CiWorkflowsResponseIncludedInnerFromJSONTyped;
exports.CiWorkflowsResponseIncludedInnerToJSON = CiWorkflowsResponseIncludedInnerToJSON;
const CiMacOsVersion_1 = require("./CiMacOsVersion");
const CiProduct_1 = require("./CiProduct");
const CiXcodeVersion_1 = require("./CiXcodeVersion");
const ScmRepository_1 = require("./ScmRepository");
function CiWorkflowsResponseIncludedInnerFromJSON(json) {
    return CiWorkflowsResponseIncludedInnerFromJSONTyped(json, false);
}
function CiWorkflowsResponseIncludedInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return Object.assign(Object.assign(Object.assign(Object.assign({}, (0, CiMacOsVersion_1.CiMacOsVersionFromJSONTyped)(json, true)), (0, CiProduct_1.CiProductFromJSONTyped)(json, true)), (0, CiXcodeVersion_1.CiXcodeVersionFromJSONTyped)(json, true)), (0, ScmRepository_1.ScmRepositoryFromJSONTyped)(json, true));
}
function CiWorkflowsResponseIncludedInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    if ((0, CiMacOsVersion_1.instanceOfCiMacOsVersion)(value)) {
        return (0, CiMacOsVersion_1.CiMacOsVersionToJSON)(value);
    }
    if ((0, CiProduct_1.instanceOfCiProduct)(value)) {
        return (0, CiProduct_1.CiProductToJSON)(value);
    }
    if ((0, CiXcodeVersion_1.instanceOfCiXcodeVersion)(value)) {
        return (0, CiXcodeVersion_1.CiXcodeVersionToJSON)(value);
    }
    if ((0, ScmRepository_1.instanceOfScmRepository)(value)) {
        return (0, ScmRepository_1.ScmRepositoryToJSON)(value);
    }
    return {};
}
