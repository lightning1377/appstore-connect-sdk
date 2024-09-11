export type Decimal = {
    value: string;
};
export declare function DecimalFromJSON(json: any): Decimal;
export declare function DecimalFromJSONTyped(json: any, ignoreDiscriminator: boolean): Decimal;
export declare function DecimalToJSON(value: Decimal): any;
