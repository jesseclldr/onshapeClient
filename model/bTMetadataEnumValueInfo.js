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
exports.BTMetadataEnumValueInfo = void 0;
var BTMetadataEnumValueInfo = /** @class */ (function () {
    function BTMetadataEnumValueInfo() {
    }
    BTMetadataEnumValueInfo.getAttributeTypeMap = function () {
        return BTMetadataEnumValueInfo.attributeTypeMap;
    };
    BTMetadataEnumValueInfo.discriminator = undefined;
    BTMetadataEnumValueInfo.attributeTypeMap = [
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        }
    ];
    return BTMetadataEnumValueInfo;
}());
exports.BTMetadataEnumValueInfo = BTMetadataEnumValueInfo;
