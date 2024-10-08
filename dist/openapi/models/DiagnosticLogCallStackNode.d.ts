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
 * @interface DiagnosticLogCallStackNode
 */
export interface DiagnosticLogCallStackNode {
    /**
     *
     * @type {number}
     * @memberof DiagnosticLogCallStackNode
     */
    sampleCount?: number;
    /**
     *
     * @type {boolean}
     * @memberof DiagnosticLogCallStackNode
     */
    isBlameFrame?: boolean;
    /**
     *
     * @type {string}
     * @memberof DiagnosticLogCallStackNode
     */
    symbolName?: string;
    /**
     *
     * @type {string}
     * @memberof DiagnosticLogCallStackNode
     */
    insightsCategory?: string;
    /**
     *
     * @type {string}
     * @memberof DiagnosticLogCallStackNode
     */
    offsetIntoSymbol?: string;
    /**
     *
     * @type {string}
     * @memberof DiagnosticLogCallStackNode
     */
    binaryName?: string;
    /**
     *
     * @type {string}
     * @memberof DiagnosticLogCallStackNode
     */
    fileName?: string;
    /**
     *
     * @type {string}
     * @memberof DiagnosticLogCallStackNode
     */
    binaryUUID?: string;
    /**
     *
     * @type {string}
     * @memberof DiagnosticLogCallStackNode
     */
    lineNumber?: string;
    /**
     *
     * @type {string}
     * @memberof DiagnosticLogCallStackNode
     */
    address?: string;
    /**
     *
     * @type {string}
     * @memberof DiagnosticLogCallStackNode
     */
    offsetIntoBinaryTextSegment?: string;
    /**
     *
     * @type {string}
     * @memberof DiagnosticLogCallStackNode
     */
    rawFrame?: string;
    /**
     *
     * @type {Array<DiagnosticLogCallStackNode>}
     * @memberof DiagnosticLogCallStackNode
     */
    subFrames?: Array<DiagnosticLogCallStackNode>;
}
/**
 * Check if a given object implements the DiagnosticLogCallStackNode interface.
 */
export declare function instanceOfDiagnosticLogCallStackNode(value: object): boolean;
export declare function DiagnosticLogCallStackNodeFromJSON(json: any): DiagnosticLogCallStackNode;
export declare function DiagnosticLogCallStackNodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiagnosticLogCallStackNode;
export declare function DiagnosticLogCallStackNodeToJSON(value?: DiagnosticLogCallStackNode | null): any;
