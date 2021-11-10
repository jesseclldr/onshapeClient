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
exports.NextCharge = void 0;
var NextCharge = /** @class */ (function () {
    function NextCharge() {
    }
    NextCharge.getAttributeTypeMap = function () {
        return NextCharge.attributeTypeMap;
    };
    NextCharge.discriminator = undefined;
    NextCharge.attributeTypeMap = [
        {
            "name": "total",
            "baseName": "total",
            "type": "number"
        },
        {
            "name": "interval",
            "baseName": "interval",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "currentPeriodEnd",
            "baseName": "currentPeriodEnd",
            "type": "Date"
        }
    ];
    return NextCharge;
}());
exports.NextCharge = NextCharge;
