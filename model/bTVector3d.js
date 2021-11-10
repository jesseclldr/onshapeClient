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
exports.BTVector3d = void 0;
var BTVector3d = /** @class */ (function () {
    function BTVector3d() {
    }
    BTVector3d.getAttributeTypeMap = function () {
        return BTVector3d.attributeTypeMap;
    };
    BTVector3d.discriminator = undefined;
    BTVector3d.attributeTypeMap = [
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
            "name": "z",
            "baseName": "z",
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
    return BTVector3d;
}());
exports.BTVector3d = BTVector3d;
