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

import { exists, mapValues } from "../runtime";
import type { AppClipAction } from "./AppClipAction";
import { AppClipActionFromJSON, AppClipActionFromJSONTyped, AppClipActionToJSON } from "./AppClipAction";
import type { AppClipAdvancedExperienceAttributesPlace } from "./AppClipAdvancedExperienceAttributesPlace";
import { AppClipAdvancedExperienceAttributesPlaceFromJSON, AppClipAdvancedExperienceAttributesPlaceFromJSONTyped, AppClipAdvancedExperienceAttributesPlaceToJSON } from "./AppClipAdvancedExperienceAttributesPlace";
import type { AppClipAdvancedExperienceLanguage } from "./AppClipAdvancedExperienceLanguage";
import { AppClipAdvancedExperienceLanguageFromJSON, AppClipAdvancedExperienceLanguageFromJSONTyped, AppClipAdvancedExperienceLanguageToJSON } from "./AppClipAdvancedExperienceLanguage";

/**
 *
 * @export
 * @interface AppClipAdvancedExperienceAttributes
 */
export interface AppClipAdvancedExperienceAttributes {
    /**
     *
     * @type {string}
     * @memberof AppClipAdvancedExperienceAttributes
     */
    link?: string;
    /**
     *
     * @type {number}
     * @memberof AppClipAdvancedExperienceAttributes
     */
    version?: number;
    /**
     *
     * @type {string}
     * @memberof AppClipAdvancedExperienceAttributes
     */
    status?: AppClipAdvancedExperienceAttributesStatusEnum;
    /**
     *
     * @type {AppClipAction}
     * @memberof AppClipAdvancedExperienceAttributes
     */
    action?: AppClipAction;
    /**
     *
     * @type {boolean}
     * @memberof AppClipAdvancedExperienceAttributes
     */
    isPoweredBy?: boolean;
    /**
     *
     * @type {AppClipAdvancedExperienceAttributesPlace}
     * @memberof AppClipAdvancedExperienceAttributes
     */
    place?: AppClipAdvancedExperienceAttributesPlace;
    /**
     *
     * @type {string}
     * @memberof AppClipAdvancedExperienceAttributes
     */
    placeStatus?: AppClipAdvancedExperienceAttributesPlaceStatusEnum;
    /**
     *
     * @type {string}
     * @memberof AppClipAdvancedExperienceAttributes
     */
    businessCategory?: AppClipAdvancedExperienceAttributesBusinessCategoryEnum;
    /**
     *
     * @type {AppClipAdvancedExperienceLanguage}
     * @memberof AppClipAdvancedExperienceAttributes
     */
    defaultLanguage?: AppClipAdvancedExperienceLanguage;
}

/**
 * @export
 */
export const AppClipAdvancedExperienceAttributesStatusEnum = {
    Received: "RECEIVED",
    Deactivated: "DEACTIVATED",
    AppTransferInProgress: "APP_TRANSFER_IN_PROGRESS"
} as const;
export type AppClipAdvancedExperienceAttributesStatusEnum = (typeof AppClipAdvancedExperienceAttributesStatusEnum)[keyof typeof AppClipAdvancedExperienceAttributesStatusEnum];

/**
 * @export
 */
export const AppClipAdvancedExperienceAttributesPlaceStatusEnum = {
    Pending: "PENDING",
    Matched: "MATCHED",
    NoMatch: "NO_MATCH"
} as const;
export type AppClipAdvancedExperienceAttributesPlaceStatusEnum = (typeof AppClipAdvancedExperienceAttributesPlaceStatusEnum)[keyof typeof AppClipAdvancedExperienceAttributesPlaceStatusEnum];

/**
 * @export
 */
export const AppClipAdvancedExperienceAttributesBusinessCategoryEnum = {
    Automotive: "AUTOMOTIVE",
    Beauty: "BEAUTY",
    Bikes: "BIKES",
    Books: "BOOKS",
    Casino: "CASINO",
    Education: "EDUCATION",
    EducationJapan: "EDUCATION_JAPAN",
    Entertainment: "ENTERTAINMENT",
    EvCharger: "EV_CHARGER",
    FinancialUsd: "FINANCIAL_USD",
    FinancialCny: "FINANCIAL_CNY",
    FinancialGbp: "FINANCIAL_GBP",
    FinancialJpy: "FINANCIAL_JPY",
    FinancialEur: "FINANCIAL_EUR",
    Fitness: "FITNESS",
    FoodAndDrink: "FOOD_AND_DRINK",
    Gas: "GAS",
    Grocery: "GROCERY",
    HealthAndMedical: "HEALTH_AND_MEDICAL",
    HotelAndTravel: "HOTEL_AND_TRAVEL",
    Music: "MUSIC",
    Parking: "PARKING",
    PetServices: "PET_SERVICES",
    ProfessionalServices: "PROFESSIONAL_SERVICES",
    Shopping: "SHOPPING",
    Ticketing: "TICKETING",
    Transit: "TRANSIT"
} as const;
export type AppClipAdvancedExperienceAttributesBusinessCategoryEnum = (typeof AppClipAdvancedExperienceAttributesBusinessCategoryEnum)[keyof typeof AppClipAdvancedExperienceAttributesBusinessCategoryEnum];

/**
 * Check if a given object implements the AppClipAdvancedExperienceAttributes interface.
 */
export function instanceOfAppClipAdvancedExperienceAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppClipAdvancedExperienceAttributesFromJSON(json: any): AppClipAdvancedExperienceAttributes {
    return AppClipAdvancedExperienceAttributesFromJSONTyped(json, false);
}

export function AppClipAdvancedExperienceAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAdvancedExperienceAttributes {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        link: !exists(json, "link") ? undefined : json["link"],
        version: !exists(json, "version") ? undefined : json["version"],
        status: !exists(json, "status") ? undefined : json["status"],
        action: !exists(json, "action") ? undefined : AppClipActionFromJSON(json["action"]),
        isPoweredBy: !exists(json, "isPoweredBy") ? undefined : json["isPoweredBy"],
        place: !exists(json, "place") ? undefined : AppClipAdvancedExperienceAttributesPlaceFromJSON(json["place"]),
        placeStatus: !exists(json, "placeStatus") ? undefined : json["placeStatus"],
        businessCategory: !exists(json, "businessCategory") ? undefined : json["businessCategory"],
        defaultLanguage: !exists(json, "defaultLanguage") ? undefined : AppClipAdvancedExperienceLanguageFromJSON(json["defaultLanguage"])
    };
}

export function AppClipAdvancedExperienceAttributesToJSON(value?: AppClipAdvancedExperienceAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        link: value.link,
        version: value.version,
        status: value.status,
        action: AppClipActionToJSON(value.action),
        isPoweredBy: value.isPoweredBy,
        place: AppClipAdvancedExperienceAttributesPlaceToJSON(value.place),
        placeStatus: value.placeStatus,
        businessCategory: value.businessCategory,
        defaultLanguage: AppClipAdvancedExperienceLanguageToJSON(value.defaultLanguage)
    };
}
