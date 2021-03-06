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
exports.BTBelScriptLibraryVersion = void 0;
var BTBelScriptLibraryVersion = /** @class */ (function () {
    function BTBelScriptLibraryVersion() {
    }
    BTBelScriptLibraryVersion.getAttributeTypeMap = function () {
        return BTBelScriptLibraryVersion.attributeTypeMap;
    };
    BTBelScriptLibraryVersion.discriminator = undefined;
    BTBelScriptLibraryVersion.attributeTypeMap = [
        {
            "name": "major",
            "baseName": "major",
            "type": "number"
        },
        {
            "name": "minor",
            "baseName": "minor",
            "type": "number"
        },
        {
            "name": "valid",
            "baseName": "valid",
            "type": "boolean"
        },
        {
            "name": "point",
            "baseName": "point",
            "type": "number"
        },
        {
            "name": "versionNumber",
            "baseName": "versionNumber",
            "type": "number"
        }
    ];
    return BTBelScriptLibraryVersion;
}());
exports.BTBelScriptLibraryVersion = BTBelScriptLibraryVersion;
