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
exports.BTNotice = void 0;
var BTNotice = /** @class */ (function () {
    function BTNotice() {
    }
    BTNotice.getAttributeTypeMap = function () {
        return BTNotice.attributeTypeMap;
    };
    BTNotice.discriminator = undefined;
    BTNotice.attributeTypeMap = [
        {
            "name": "locationInfos",
            "baseName": "locationInfos",
            "type": "Array<BTLocationInfo>"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "stackTrace",
            "baseName": "stackTrace",
            "type": "Array<BTLocationInfo>"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "BTNotice.TypeEnum"
        },
        {
            "name": "level",
            "baseName": "level",
            "type": "BTNotice.LevelEnum"
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
            "name": "tryNode",
            "baseName": "tryNode",
            "type": "BTNodeReference"
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
    return BTNotice;
}());
exports.BTNotice = BTNotice;
(function (BTNotice) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["PARSE"] = 'PARSE'] = "PARSE";
        TypeEnum[TypeEnum["SEMANTIC"] = 'SEMANTIC'] = "SEMANTIC";
        TypeEnum[TypeEnum["EXECUTION"] = 'EXECUTION'] = "EXECUTION";
        TypeEnum[TypeEnum["GEOMETRY"] = 'GEOMETRY'] = "GEOMETRY";
        TypeEnum[TypeEnum["TEST"] = 'TEST'] = "TEST";
        TypeEnum[TypeEnum["OTHER"] = 'OTHER'] = "OTHER";
        TypeEnum[TypeEnum["UNKNOWN"] = 'UNKNOWN'] = "UNKNOWN";
    })(TypeEnum = BTNotice.TypeEnum || (BTNotice.TypeEnum = {}));
    var LevelEnum;
    (function (LevelEnum) {
        LevelEnum[LevelEnum["INTERNAL"] = 'INTERNAL'] = "INTERNAL";
        LevelEnum[LevelEnum["ERROR"] = 'ERROR'] = "ERROR";
        LevelEnum[LevelEnum["WARNING"] = 'WARNING'] = "WARNING";
        LevelEnum[LevelEnum["INFO"] = 'INFO'] = "INFO";
        LevelEnum[LevelEnum["UNKNOWN"] = 'UNKNOWN'] = "UNKNOWN";
    })(LevelEnum = BTNotice.LevelEnum || (BTNotice.LevelEnum = {}));
})(BTNotice = exports.BTNotice || (exports.BTNotice = {}));
exports.BTNotice = BTNotice;
