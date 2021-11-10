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
exports.BTDocumentMigrateParams = void 0;
var BTDocumentMigrateParams = /** @class */ (function () {
    function BTDocumentMigrateParams() {
    }
    BTDocumentMigrateParams.getAttributeTypeMap = function () {
        return BTDocumentMigrateParams.attributeTypeMap;
    };
    BTDocumentMigrateParams.discriminator = undefined;
    BTDocumentMigrateParams.attributeTypeMap = [
        {
            "name": "clusterId",
            "baseName": "clusterId",
            "type": "string"
        },
        {
            "name": "documentId",
            "baseName": "documentId",
            "type": "string"
        }
    ];
    return BTDocumentMigrateParams;
}());
exports.BTDocumentMigrateParams = BTDocumentMigrateParams;
