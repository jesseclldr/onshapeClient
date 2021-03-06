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
exports.VersionSpecs = void 0;
var VersionSpecs = /** @class */ (function () {
    function VersionSpecs() {
    }
    VersionSpecs.getAttributeTypeMap = function () {
        return VersionSpecs.attributeTypeMap;
    };
    VersionSpecs.discriminator = undefined;
    VersionSpecs.attributeTypeMap = [
        {
            "name": "versionId",
            "baseName": "versionId",
            "type": "string"
        },
        {
            "name": "versionName",
            "baseName": "versionName",
            "type": "string"
        }
    ];
    return VersionSpecs;
}());
exports.VersionSpecs = VersionSpecs;
