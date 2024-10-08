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
import type { AppClipAction } from "./AppClipAction";
import type { AppClipAdvancedExperienceAttributesPlace } from "./AppClipAdvancedExperienceAttributesPlace";
import type { AppClipAdvancedExperienceLanguage } from "./AppClipAdvancedExperienceLanguage";
/**
 *
 * @export
 * @interface AppClipAdvancedExperienceCreateRequestDataAttributes
 */
export interface AppClipAdvancedExperienceCreateRequestDataAttributes {
    /**
     *
     * @type {string}
     * @memberof AppClipAdvancedExperienceCreateRequestDataAttributes
     */
    link: string;
    /**
     *
     * @type {AppClipAction}
     * @memberof AppClipAdvancedExperienceCreateRequestDataAttributes
     */
    action?: AppClipAction;
    /**
     *
     * @type {boolean}
     * @memberof AppClipAdvancedExperienceCreateRequestDataAttributes
     */
    isPoweredBy: boolean;
    /**
     *
     * @type {AppClipAdvancedExperienceAttributesPlace}
     * @memberof AppClipAdvancedExperienceCreateRequestDataAttributes
     */
    place?: AppClipAdvancedExperienceAttributesPlace;
    /**
     *
     * @type {string}
     * @memberof AppClipAdvancedExperienceCreateRequestDataAttributes
     */
    businessCategory?: AppClipAdvancedExperienceCreateRequestDataAttributesBusinessCategoryEnum;
    /**
     *
     * @type {AppClipAdvancedExperienceLanguage}
     * @memberof AppClipAdvancedExperienceCreateRequestDataAttributes
     */
    defaultLanguage: AppClipAdvancedExperienceLanguage;
}
/**
 * @export
 */
export declare const AppClipAdvancedExperienceCreateRequestDataAttributesBusinessCategoryEnum: {
    readonly Automotive: "AUTOMOTIVE";
    readonly Beauty: "BEAUTY";
    readonly Bikes: "BIKES";
    readonly Books: "BOOKS";
    readonly Casino: "CASINO";
    readonly Education: "EDUCATION";
    readonly EducationJapan: "EDUCATION_JAPAN";
    readonly Entertainment: "ENTERTAINMENT";
    readonly EvCharger: "EV_CHARGER";
    readonly FinancialUsd: "FINANCIAL_USD";
    readonly FinancialCny: "FINANCIAL_CNY";
    readonly FinancialGbp: "FINANCIAL_GBP";
    readonly FinancialJpy: "FINANCIAL_JPY";
    readonly FinancialEur: "FINANCIAL_EUR";
    readonly Fitness: "FITNESS";
    readonly FoodAndDrink: "FOOD_AND_DRINK";
    readonly Gas: "GAS";
    readonly Grocery: "GROCERY";
    readonly HealthAndMedical: "HEALTH_AND_MEDICAL";
    readonly HotelAndTravel: "HOTEL_AND_TRAVEL";
    readonly Music: "MUSIC";
    readonly Parking: "PARKING";
    readonly PetServices: "PET_SERVICES";
    readonly ProfessionalServices: "PROFESSIONAL_SERVICES";
    readonly Shopping: "SHOPPING";
    readonly Ticketing: "TICKETING";
    readonly Transit: "TRANSIT";
};
export type AppClipAdvancedExperienceCreateRequestDataAttributesBusinessCategoryEnum = (typeof AppClipAdvancedExperienceCreateRequestDataAttributesBusinessCategoryEnum)[keyof typeof AppClipAdvancedExperienceCreateRequestDataAttributesBusinessCategoryEnum];
/**
 * Check if a given object implements the AppClipAdvancedExperienceCreateRequestDataAttributes interface.
 */
export declare function instanceOfAppClipAdvancedExperienceCreateRequestDataAttributes(value: object): boolean;
export declare function AppClipAdvancedExperienceCreateRequestDataAttributesFromJSON(json: any): AppClipAdvancedExperienceCreateRequestDataAttributes;
export declare function AppClipAdvancedExperienceCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAdvancedExperienceCreateRequestDataAttributes;
export declare function AppClipAdvancedExperienceCreateRequestDataAttributesToJSON(value?: AppClipAdvancedExperienceCreateRequestDataAttributes | null): any;
