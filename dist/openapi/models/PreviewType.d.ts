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
/**
 *
 * @export
 */
export declare const PreviewType: {
    readonly Iphone67: "IPHONE_67";
    readonly Iphone61: "IPHONE_61";
    readonly Iphone65: "IPHONE_65";
    readonly Iphone58: "IPHONE_58";
    readonly Iphone55: "IPHONE_55";
    readonly Iphone47: "IPHONE_47";
    readonly Iphone40: "IPHONE_40";
    readonly Iphone35: "IPHONE_35";
    readonly IpadPro3Gen129: "IPAD_PRO_3GEN_129";
    readonly IpadPro3Gen11: "IPAD_PRO_3GEN_11";
    readonly IpadPro129: "IPAD_PRO_129";
    readonly Ipad105: "IPAD_105";
    readonly Ipad97: "IPAD_97";
    readonly Desktop: "DESKTOP";
    readonly AppleTv: "APPLE_TV";
    readonly AppleVisionPro: "APPLE_VISION_PRO";
};
export type PreviewType = (typeof PreviewType)[keyof typeof PreviewType];
export declare function PreviewTypeFromJSON(json: any): PreviewType;
export declare function PreviewTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PreviewType;
export declare function PreviewTypeToJSON(value?: PreviewType | null): any;
