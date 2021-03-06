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
exports.BTPSpace = void 0;
var BTPSpace = /** @class */ (function () {
    function BTPSpace() {
    }
    BTPSpace.getAttributeTypeMap = function () {
        return BTPSpace.attributeTypeMap;
    };
    BTPSpace.discriminator = undefined;
    BTPSpace.attributeTypeMap = [
        {
            "name": "text",
            "baseName": "text",
            "type": "string"
        },
        {
            "name": "lines",
            "baseName": "lines",
            "type": "Array<string>"
        },
        {
            "name": "changeableChildFieldIndices",
            "baseName": "changeableChildFieldIndices",
            "type": "Array<number>"
        },
        {
            "name": "nodeId",
            "baseName": "nodeId",
            "type": "string"
        },
        {
            "name": "childMapIndices",
            "baseName": "childMapIndices",
            "type": "Array<number>"
        },
        {
            "name": "atomicChildIndices",
            "baseName": "atomicChildIndices",
            "type": "Array<number>"
        },
        {
            "name": "nodeIdRaw",
            "baseName": "nodeIdRaw",
            "type": "BTObjectId"
        },
        {
            "name": "firstChildField",
            "baseName": "firstChildField",
            "type": "number"
        },
        {
            "name": "childListIndices",
            "baseName": "childListIndices",
            "type": "Array<number>"
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
    return BTPSpace;
}());
exports.BTPSpace = BTPSpace;
