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
import type { Location } from "./Location";
import type { Platform } from "./Platform";
/**
 *
 * @export
 * @interface GameCenterMatchmakingTestRequestInlineCreateAttributes
 */
export interface GameCenterMatchmakingTestRequestInlineCreateAttributes {
    /**
     *
     * @type {string}
     * @memberof GameCenterMatchmakingTestRequestInlineCreateAttributes
     */
    requestName: string;
    /**
     *
     * @type {number}
     * @memberof GameCenterMatchmakingTestRequestInlineCreateAttributes
     */
    secondsInQueue: number;
    /**
     *
     * @type {string}
     * @memberof GameCenterMatchmakingTestRequestInlineCreateAttributes
     */
    locale?: GameCenterMatchmakingTestRequestInlineCreateAttributesLocaleEnum;
    /**
     *
     * @type {Location}
     * @memberof GameCenterMatchmakingTestRequestInlineCreateAttributes
     */
    location?: Location;
    /**
     *
     * @type {number}
     * @memberof GameCenterMatchmakingTestRequestInlineCreateAttributes
     */
    minPlayers?: number;
    /**
     *
     * @type {number}
     * @memberof GameCenterMatchmakingTestRequestInlineCreateAttributes
     */
    maxPlayers?: number;
    /**
     *
     * @type {number}
     * @memberof GameCenterMatchmakingTestRequestInlineCreateAttributes
     */
    playerCount?: number;
    /**
     *
     * @type {string}
     * @memberof GameCenterMatchmakingTestRequestInlineCreateAttributes
     */
    bundleId: string;
    /**
     *
     * @type {Platform}
     * @memberof GameCenterMatchmakingTestRequestInlineCreateAttributes
     */
    platform: Platform;
    /**
     *
     * @type {string}
     * @memberof GameCenterMatchmakingTestRequestInlineCreateAttributes
     */
    appVersion: string;
}
/**
 * @export
 */
export declare const GameCenterMatchmakingTestRequestInlineCreateAttributesLocaleEnum: {
    readonly ArSa: "AR-SA";
    readonly CaEs: "CA-ES";
    readonly CsCz: "CS-CZ";
    readonly DaDk: "DA-DK";
    readonly DeDe: "DE-DE";
    readonly ElGr: "EL-GR";
    readonly EnAu: "EN-AU";
    readonly EnGb: "EN-GB";
    readonly EnUs: "EN-US";
    readonly EnKy: "EN-KY";
    readonly EsEs: "ES-ES";
    readonly EsMx: "ES-MX";
    readonly FiFi: "FI-FI";
    readonly FrCa: "FR-CA";
    readonly FrFr: "FR-FR";
    readonly HiIn: "HI-IN";
    readonly HrHr: "HR-HR";
    readonly HuHu: "HU-HU";
    readonly IdId: "ID-ID";
    readonly ItIt: "IT-IT";
    readonly IwIl: "IW-IL";
    readonly JaJp: "JA-JP";
    readonly KoKr: "KO-KR";
    readonly MsMy: "MS-MY";
    readonly NlNl: "NL-NL";
    readonly NoNo: "NO-NO";
    readonly PlPl: "PL-PL";
    readonly PtBr: "PT-BR";
    readonly PtPt: "PT-PT";
    readonly RoRo: "RO-RO";
    readonly RuRu: "RU-RU";
    readonly SkSk: "SK-SK";
    readonly SvSe: "SV-SE";
    readonly ThTh: "TH-TH";
    readonly TrTr: "TR-TR";
    readonly UkUa: "UK-UA";
    readonly ZhCn: "ZH-CN";
    readonly ZhTw: "ZH-TW";
    readonly ZhHk: "ZH-HK";
};
export type GameCenterMatchmakingTestRequestInlineCreateAttributesLocaleEnum = (typeof GameCenterMatchmakingTestRequestInlineCreateAttributesLocaleEnum)[keyof typeof GameCenterMatchmakingTestRequestInlineCreateAttributesLocaleEnum];
/**
 * Check if a given object implements the GameCenterMatchmakingTestRequestInlineCreateAttributes interface.
 */
export declare function instanceOfGameCenterMatchmakingTestRequestInlineCreateAttributes(value: object): boolean;
export declare function GameCenterMatchmakingTestRequestInlineCreateAttributesFromJSON(json: any): GameCenterMatchmakingTestRequestInlineCreateAttributes;
export declare function GameCenterMatchmakingTestRequestInlineCreateAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingTestRequestInlineCreateAttributes;
export declare function GameCenterMatchmakingTestRequestInlineCreateAttributesToJSON(value?: GameCenterMatchmakingTestRequestInlineCreateAttributes | null): any;
