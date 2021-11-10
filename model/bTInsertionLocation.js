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
exports.BTInsertionLocation = void 0;
var BTInsertionLocation = /** @class */ (function () {
    function BTInsertionLocation() {
    }
    BTInsertionLocation.getAttributeTypeMap = function () {
        return BTInsertionLocation.attributeTypeMap;
    };
    BTInsertionLocation.discriminator = undefined;
    BTInsertionLocation.attributeTypeMap = [
        {
            "name": "orderPreserving",
            "baseName": "orderPreserving",
            "type": "boolean"
        },
        {
            "name": "adjacentToNode",
            "baseName": "adjacentToNode",
            "type": "boolean"
        },
        {
            "name": "nodeId",
            "baseName": "nodeId",
            "type": "string"
        },
        {
            "name": "nodeIdRaw",
            "baseName": "nodeIdRaw",
            "type": "BTObjectId"
        },
        {
            "name": "childFieldIndex",
            "baseName": "childFieldIndex",
            "type": "number"
        },
        {
            "name": "before",
            "baseName": "before",
            "type": "boolean"
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
    return BTInsertionLocation;
}());
exports.BTInsertionLocation = BTInsertionLocation;
