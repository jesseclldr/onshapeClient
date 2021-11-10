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
exports.BTEnterpriseReportParams = void 0;
var BTEnterpriseReportParams = /** @class */ (function () {
    function BTEnterpriseReportParams() {
    }
    BTEnterpriseReportParams.getAttributeTypeMap = function () {
        return BTEnterpriseReportParams.attributeTypeMap;
    };
    BTEnterpriseReportParams.discriminator = undefined;
    BTEnterpriseReportParams.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "ownerId",
            "baseName": "ownerId",
            "type": "string"
        },
        {
            "name": "reportId",
            "baseName": "reportId",
            "type": "string"
        },
        {
            "name": "reportName",
            "baseName": "reportName",
            "type": "string"
        },
        {
            "name": "groupName",
            "baseName": "groupName",
            "type": "string"
        },
        {
            "name": "publicReport",
            "baseName": "publicReport",
            "type": "boolean"
        }
    ];
    return BTEnterpriseReportParams;
}());
exports.BTEnterpriseReportParams = BTEnterpriseReportParams;
