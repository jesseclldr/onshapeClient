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
exports.BTFeatureScriptEvalResponse = void 0;
var BTFeatureScriptEvalResponse = /** @class */ (function () {
    function BTFeatureScriptEvalResponse() {
    }
    BTFeatureScriptEvalResponse.getAttributeTypeMap = function () {
        return BTFeatureScriptEvalResponse.attributeTypeMap;
    };
    BTFeatureScriptEvalResponse.discriminator = undefined;
    BTFeatureScriptEvalResponse.attributeTypeMap = [
        {
            "name": "result",
            "baseName": "result",
            "type": "BTFSValue"
        },
        {
            "name": "console",
            "baseName": "console",
            "type": "string"
        },
        {
            "name": "notices",
            "baseName": "notices",
            "type": "Array<BTNotice>"
        },
        {
            "name": "belScriptLibraryVersion",
            "baseName": "belScriptLibraryVersion",
            "type": "BTBelScriptLibraryVersion"
        },
        {
            "name": "sourceMicroversion",
            "baseName": "sourceMicroversion",
            "type": "string"
        },
        {
            "name": "rejectMicroversionSkew",
            "baseName": "rejectMicroversionSkew",
            "type": "boolean"
        },
        {
            "name": "libraryVersion",
            "baseName": "libraryVersion",
            "type": "number"
        },
        {
            "name": "serializationVersion",
            "baseName": "serializationVersion",
            "type": "string"
        },
        {
            "name": "microversionSkew",
            "baseName": "microversionSkew",
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
    return BTFeatureScriptEvalResponse;
}());
exports.BTFeatureScriptEvalResponse = BTFeatureScriptEvalResponse;
