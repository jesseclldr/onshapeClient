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
exports.BTVector2d = void 0;
var BTVector2d = /** @class */ (function () {
    function BTVector2d() {
    }
    BTVector2d.getAttributeTypeMap = function () {
        return BTVector2d.attributeTypeMap;
    };
    BTVector2d.discriminator = undefined;
    BTVector2d.attributeTypeMap = [
        {
            "name": "x",
            "baseName": "x",
            "type": "number"
        },
        {
            "name": "y",
            "baseName": "y",
            "type": "number"
        },
        {
            "name": "typeId",
            "baseName": "typeId",
            "type": "number"
        },
        {
            "name": "exportTypeName",
            "baseName": "exportTypeName",
            "type": "string"
        },
        {
            "name": "connectionSource",
            "baseName": "connectionSource",
            "type": "BTConnection"
        },
        {
            "name": "unknownClass",
            "baseName": "unknownClass",
            "type": "boolean"
        }
    ];
    return BTVector2d;
}());
exports.BTVector2d = BTVector2d;