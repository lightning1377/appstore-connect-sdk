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
exports.ActorTypeEnum = void 0;
exports.instanceOfActor = instanceOfActor;
exports.ActorFromJSON = ActorFromJSON;
exports.ActorFromJSONTyped = ActorFromJSONTyped;
exports.ActorToJSON = ActorToJSON;
const runtime_1 = require("../runtime");
const ActorAttributes_1 = require("./ActorAttributes");
const ResourceLinks_1 = require("./ResourceLinks");
/**
 * @export
 */
exports.ActorTypeEnum = {
    Actors: "actors"
};
/**
 * Check if a given object implements the Actor interface.
 */
function instanceOfActor(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
function ActorFromJSON(json) {
    return ActorFromJSONTyped(json, false);
}
function ActorFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        type: json["type"],
        id: json["id"],
        attributes: !(0, runtime_1.exists)(json, "attributes") ? undefined : (0, ActorAttributes_1.ActorAttributesFromJSON)(json["attributes"]),
        links: !(0, runtime_1.exists)(json, "links") ? undefined : (0, ResourceLinks_1.ResourceLinksFromJSON)(json["links"])
    };
}
function ActorToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        type: value.type,
        id: value.id,
        attributes: (0, ActorAttributes_1.ActorAttributesToJSON)(value.attributes),
        links: (0, ResourceLinks_1.ResourceLinksToJSON)(value.links)
    };
}
