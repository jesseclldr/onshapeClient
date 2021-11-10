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
exports.BTMetadataPropertyInfo = void 0;
var BTMetadataPropertyInfo = /** @class */ (function () {
    function BTMetadataPropertyInfo() {
    }
    BTMetadataPropertyInfo.getAttributeTypeMap = function () {
        return BTMetadataPropertyInfo.attributeTypeMap;
    };
    BTMetadataPropertyInfo.discriminator = undefined;
    BTMetadataPropertyInfo.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "defaultValue",
            "baseName": "defaultValue",
            "type": "any"
        },
        {
            "name": "initialValue",
            "baseName": "initialValue",
            "type": "any"
        },
        {
            "name": "dirty",
            "baseName": "dirty",
            "type": "boolean"
        },
        {
            "name": "validator",
            "baseName": "validator",
            "type": "BTMetadataPropertyValidatorInfo"
        },
        {
            "name": "required",
            "baseName": "required",
            "type": "boolean"
        },
        {
            "name": "propertySource",
            "baseName": "propertySource",
            "type": "number"
        },
        {
            "name": "propertyId",
            "baseName": "propertyId",
            "type": "string"
        },
        {
            "name": "editable",
            "baseName": "editable",
            "type": "boolean"
        },
        {
            "name": "schemaId",
            "baseName": "schemaId",
            "type": "string"
        },
        {
            "name": "valueType",
            "baseName": "valueType",
            "type": "string"
        },
        {
            "name": "enumValues",
            "baseName": "enumValues",
            "type": "Array<BTMetadataEnumValueInfo>"
        },
        {
            "name": "uiHints",
            "baseName": "uiHints",
            "type": "BTMetadataPropertyUiHintsInfo"
        }
    ];
    return BTMetadataPropertyInfo;
}());
exports.BTMetadataPropertyInfo = BTMetadataPropertyInfo;
