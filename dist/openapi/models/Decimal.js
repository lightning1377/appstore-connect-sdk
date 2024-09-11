"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecimalFromJSON = DecimalFromJSON;
exports.DecimalFromJSONTyped = DecimalFromJSONTyped;
exports.DecimalToJSON = DecimalToJSON;
// Function to convert a JSON object to a Decimal type
function DecimalFromJSON(json) {
    return {
        value: json.value // Adjust this based on the actual structure of your JSON
    };
}
// Function to convert a JSON object to a Decimal type with additional type checking
function DecimalFromJSONTyped(json, ignoreDiscriminator) {
    if (ignoreDiscriminator) {
        return {
            value: json.value
        };
    }
    else {
        // You can add more sophisticated type checking here if needed
        return {
            value: json.value
        };
    }
}
// Function to convert a Decimal type to a JSON object
function DecimalToJSON(value) {
    return {
        value: value.value // Adjust this based on how you want to structure the JSON output
    };
}
