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
exports.instanceOfSubscriptionRelationshipsIntroductoryOffers = instanceOfSubscriptionRelationshipsIntroductoryOffers;
exports.SubscriptionRelationshipsIntroductoryOffersFromJSON = SubscriptionRelationshipsIntroductoryOffersFromJSON;
exports.SubscriptionRelationshipsIntroductoryOffersFromJSONTyped = SubscriptionRelationshipsIntroductoryOffersFromJSONTyped;
exports.SubscriptionRelationshipsIntroductoryOffersToJSON = SubscriptionRelationshipsIntroductoryOffersToJSON;
const runtime_1 = require("../runtime");
const AlternativeDistributionPackageVersionRelationshipsVariantsLinks_1 = require("./AlternativeDistributionPackageVersionRelationshipsVariantsLinks");
const PagingInformation_1 = require("./PagingInformation");
const SubscriptionRelationshipsIntroductoryOffersDataInner_1 = require("./SubscriptionRelationshipsIntroductoryOffersDataInner");
/**
 * Check if a given object implements the SubscriptionRelationshipsIntroductoryOffers interface.
 */
function instanceOfSubscriptionRelationshipsIntroductoryOffers(value) {
    let isInstance = true;
    return isInstance;
}
function SubscriptionRelationshipsIntroductoryOffersFromJSON(json) {
    return SubscriptionRelationshipsIntroductoryOffersFromJSONTyped(json, false);
}
function SubscriptionRelationshipsIntroductoryOffersFromJSONTyped(json, ignoreDiscriminator) {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        links: !(0, runtime_1.exists)(json, "links") ? undefined : (0, AlternativeDistributionPackageVersionRelationshipsVariantsLinks_1.AlternativeDistributionPackageVersionRelationshipsVariantsLinksFromJSON)(json["links"]),
        meta: !(0, runtime_1.exists)(json, "meta") ? undefined : (0, PagingInformation_1.PagingInformationFromJSON)(json["meta"]),
        data: !(0, runtime_1.exists)(json, "data") ? undefined : json["data"].map(SubscriptionRelationshipsIntroductoryOffersDataInner_1.SubscriptionRelationshipsIntroductoryOffersDataInnerFromJSON)
    };
}
function SubscriptionRelationshipsIntroductoryOffersToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        links: (0, AlternativeDistributionPackageVersionRelationshipsVariantsLinks_1.AlternativeDistributionPackageVersionRelationshipsVariantsLinksToJSON)(value.links),
        meta: (0, PagingInformation_1.PagingInformationToJSON)(value.meta),
        data: value.data === undefined ? undefined : value.data.map(SubscriptionRelationshipsIntroductoryOffersDataInner_1.SubscriptionRelationshipsIntroductoryOffersDataInnerToJSON)
    };
}
