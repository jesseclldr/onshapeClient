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
exports.BTDocumentCheckAccessParams = void 0;
var BTDocumentCheckAccessParams = /** @class */ (function () {
    function BTDocumentCheckAccessParams() {
    }
    BTDocumentCheckAccessParams.getAttributeTypeMap = function () {
        return BTDocumentCheckAccessParams.attributeTypeMap;
    };
    BTDocumentCheckAccessParams.discriminator = undefined;
    BTDocumentCheckAccessParams.attributeTypeMap = [
        {
            "name": "userIds",
            "baseName": "userIds",
            "type": "Array<string>"
        }
    ];
    return BTDocumentCheckAccessParams;
}());
exports.BTDocumentCheckAccessParams = BTDocumentCheckAccessParams;