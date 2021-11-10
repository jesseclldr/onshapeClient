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
exports.BTUserEmailParams = void 0;
var BTUserEmailParams = /** @class */ (function () {
    function BTUserEmailParams() {
    }
    BTUserEmailParams.getAttributeTypeMap = function () {
        return BTUserEmailParams.attributeTypeMap;
    };
    BTUserEmailParams.discriminator = undefined;
    BTUserEmailParams.attributeTypeMap = [
        {
            "name": "password",
            "baseName": "password",
            "type": "string"
        },
        {
            "name": "primary",
            "baseName": "primary",
            "type": "boolean"
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        }
    ];
    return BTUserEmailParams;
}());
exports.BTUserEmailParams = BTUserEmailParams;
