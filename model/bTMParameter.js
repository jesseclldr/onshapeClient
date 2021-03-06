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
exports.BTMParameter = void 0;
var BTMParameter = /** @class */ (function () {
    function BTMParameter() {
    }
    BTMParameter.getAttributeTypeMap = function () {
        return BTMParameter.attributeTypeMap;
    };
    BTMParameter.discriminator = undefined;
    BTMParameter.attributeTypeMap = [
        {
            "name": "valueObject",
            "baseName": "valueObject",
            "type": "any"
        },
        {
            "name": "revisionData",
            "baseName": "revisionData",
            "type": "BTRevisionCustomData"
        },
        {
            "name": "configurationValueString",
            "baseName": "configurationValueString",
            "type": "string"
        },
        {
            "name": "directImports",
            "baseName": "directImports",
            "type": "Array<BTMImport>"
        },
        {
            "name": "stringValueForProperty",
            "baseName": "stringValueForProperty",
            "type": "string"
        },
        {
            "name": "parameterId",
            "baseName": "parameterId",
            "type": "string"
        },
        {
            "name": "changeableChildFieldIndices",
            "baseName": "changeableChildFieldIndices",
            "type": "Array<number>"
        },
        {
            "name": "forExport",
            "baseName": "forExport",
            "type": "boolean"
        },
        {
            "name": "importMicroversion",
            "baseName": "importMicroversion",
            "type": "string"
        },
        {
            "name": "childNodes",
            "baseName": "childNodes",
            "type": "{ [key: string]: BTNodeReference; }"
        },
        {
            "name": "hasUserCode",
            "baseName": "hasUserCode",
            "type": "boolean"
        },
        {
            "name": "childLocations",
            "baseName": "childLocations",
            "type": "{ [key: string]: BTInsertionLocation; }"
        },
        {
            "name": "sourceParseTreeNodes",
            "baseName": "sourceParseTreeNodes",
            "type": "{ [key: string]: Array<BTNodeReference>; }"
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
    return BTMParameter;
}());
exports.BTMParameter = BTMParameter;
