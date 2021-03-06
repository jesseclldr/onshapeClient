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
exports.BTMassPropResponse = void 0;
var BTMassPropResponse = /** @class */ (function () {
    function BTMassPropResponse() {
    }
    BTMassPropResponse.getAttributeTypeMap = function () {
        return BTMassPropResponse.attributeTypeMap;
    };
    BTMassPropResponse.discriminator = undefined;
    BTMassPropResponse.attributeTypeMap = [
        {
            "name": "microversionId",
            "baseName": "microversionId",
            "type": "string"
        },
        {
            "name": "bodies",
            "baseName": "bodies",
            "type": "{ [key: string]: BTMassProperties; }"
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
    return BTMassPropResponse;
}());
exports.BTMassPropResponse = BTMassPropResponse;
