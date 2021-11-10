"use strict";
/**
 * Onshape REST API
 * The Onshape REST API consumed by all clients.
 *
 * OpenAPI spec version: 1.93
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProratedCharges = void 0;
var ProratedCharges = /** @class */ (function () {
    function ProratedCharges() {
    }
    ProratedCharges.getAttributeTypeMap = function () {
        return ProratedCharges.attributeTypeMap;
    };
    ProratedCharges.discriminator = undefined;
    ProratedCharges.attributeTypeMap = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "Date"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        }
    ];
    return ProratedCharges;
}());
exports.ProratedCharges = ProratedCharges;
