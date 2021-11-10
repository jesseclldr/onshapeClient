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
exports.BTStandardContentSetRunVersionsParams = void 0;
var BTStandardContentSetRunVersionsParams = /** @class */ (function () {
    function BTStandardContentSetRunVersionsParams() {
    }
    BTStandardContentSetRunVersionsParams.getAttributeTypeMap = function () {
        return BTStandardContentSetRunVersionsParams.attributeTypeMap;
    };
    BTStandardContentSetRunVersionsParams.discriminator = undefined;
    BTStandardContentSetRunVersionsParams.attributeTypeMap = [
        {
            "name": "componentDocumentId",
            "baseName": "componentDocumentId",
            "type": "string"
        },
        {
            "name": "productionVersionId",
            "baseName": "productionVersionId",
            "type": "string"
        },
        {
            "name": "testVersionId",
            "baseName": "testVersionId",
            "type": "string"
        }
    ];
    return BTStandardContentSetRunVersionsParams;
}());
exports.BTStandardContentSetRunVersionsParams = BTStandardContentSetRunVersionsParams;
