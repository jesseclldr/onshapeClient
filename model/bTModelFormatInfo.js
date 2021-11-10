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
exports.BTModelFormatInfo = void 0;
var BTModelFormatInfo = /** @class */ (function () {
    function BTModelFormatInfo() {
    }
    BTModelFormatInfo.getAttributeTypeMap = function () {
        return BTModelFormatInfo.attributeTypeMap;
    };
    BTModelFormatInfo.discriminator = undefined;
    BTModelFormatInfo.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "translatorName",
            "baseName": "translatorName",
            "type": "string"
        },
        {
            "name": "couldBeAssembly",
            "baseName": "couldBeAssembly",
            "type": "boolean"
        }
    ];
    return BTModelFormatInfo;
}());
exports.BTModelFormatInfo = BTModelFormatInfo;
