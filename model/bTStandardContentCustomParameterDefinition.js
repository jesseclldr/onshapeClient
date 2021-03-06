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
exports.BTStandardContentCustomParameterDefinition = void 0;
var BTStandardContentCustomParameterDefinition = /** @class */ (function () {
    function BTStandardContentCustomParameterDefinition() {
    }
    BTStandardContentCustomParameterDefinition.getAttributeTypeMap = function () {
        return BTStandardContentCustomParameterDefinition.attributeTypeMap;
    };
    BTStandardContentCustomParameterDefinition.discriminator = undefined;
    BTStandardContentCustomParameterDefinition.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "BTStandardContentCustomParameterDefinitionId"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "createdBy",
            "baseName": "createdBy",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "modifiedBy",
            "baseName": "modifiedBy",
            "type": "string"
        },
        {
            "name": "modifiedAt",
            "baseName": "modifiedAt",
            "type": "Date"
        },
        {
            "name": "parameterType",
            "baseName": "parameterType",
            "type": "number"
        },
        {
            "name": "parameterValue",
            "baseName": "parameterValue",
            "type": "string"
        },
        {
            "name": "isDrivingConfiguration",
            "baseName": "isDrivingConfiguration",
            "type": "boolean"
        },
        {
            "name": "parameterLinkType",
            "baseName": "parameterLinkType",
            "type": "number"
        },
        {
            "name": "_new",
            "baseName": "new",
            "type": "boolean"
        }
    ];
    return BTStandardContentCustomParameterDefinition;
}());
exports.BTStandardContentCustomParameterDefinition = BTStandardContentCustomParameterDefinition;
