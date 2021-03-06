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
exports.BTMicroversionId = void 0;
var BTMicroversionId = /** @class */ (function () {
    function BTMicroversionId() {
    }
    BTMicroversionId.getAttributeTypeMap = function () {
        return BTMicroversionId.attributeTypeMap;
    };
    BTMicroversionId.discriminator = undefined;
    BTMicroversionId.attributeTypeMap = [
        {
            "name": "deleted",
            "baseName": "deleted",
            "type": "boolean"
        },
        {
            "name": "theId",
            "baseName": "theId",
            "type": "string"
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
    return BTMicroversionId;
}());
exports.BTMicroversionId = BTMicroversionId;
