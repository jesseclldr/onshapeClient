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
exports.BTStandardContentParams = void 0;
var BTStandardContentParams = /** @class */ (function () {
    function BTStandardContentParams() {
    }
    BTStandardContentParams.getAttributeTypeMap = function () {
        return BTStandardContentParams.attributeTypeMap;
    };
    BTStandardContentParams.discriminator = undefined;
    BTStandardContentParams.attributeTypeMap = [
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "Array<BTStandardContentParameterDefinition>"
        },
        {
            "name": "saveCustomProperties",
            "baseName": "saveCustomProperties",
            "type": "boolean"
        },
        {
            "name": "parametersId",
            "baseName": "parametersId",
            "type": "string"
        },
        {
            "name": "parametersIdVersion",
            "baseName": "parametersIdVersion",
            "type": "string"
        },
        {
            "name": "targetDocumentId",
            "baseName": "targetDocumentId",
            "type": "string"
        },
        {
            "name": "targetElementId",
            "baseName": "targetElementId",
            "type": "string"
        }
    ];
    return BTStandardContentParams;
}());
exports.BTStandardContentParams = BTStandardContentParams;
