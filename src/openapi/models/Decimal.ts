// Define the Decimal type
export type Decimal = {
    // Example: You can define Decimal as a string or number, depending on your use case
    value: string;
};

// Function to convert a JSON object to a Decimal type
export function DecimalFromJSON(json: any): Decimal {
    return {
        value: json.value // Adjust this based on the actual structure of your JSON
    };
}

// Function to convert a JSON object to a Decimal type with additional type checking
export function DecimalFromJSONTyped(json: any, ignoreDiscriminator: boolean): Decimal {
    if (ignoreDiscriminator) {
        return {
            value: json.value
        };
    } else {
        // You can add more sophisticated type checking here if needed
        return {
            value: json.value
        };
    }
}

// Function to convert a Decimal type to a JSON object
export function DecimalToJSON(value: Decimal): any {
    return {
        value: value.value // Adjust this based on how you want to structure the JSON output
    };
}
