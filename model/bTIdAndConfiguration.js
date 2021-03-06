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
exports.BTIdAndConfiguration = void 0;
var BTIdAndConfiguration = /** @class */ (function () {
    function BTIdAndConfiguration() {
    }
    BTIdAndConfiguration.getAttributeTypeMap = function () {
        return BTIdAndConfiguration.attributeTypeMap;
    };
    BTIdAndConfiguration.discriminator = undefined;
    BTIdAndConfiguration.attributeTypeMap = [
        {
            "name": "configuration",
            "baseName": "configuration",
            "type": "{ [key: string]: BTFSValue; }"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "configurationIsNull",
            "baseName": "configurationIsNull",
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
    return BTIdAndConfiguration;
}());
exports.BTIdAndConfiguration = BTIdAndConfiguration;
