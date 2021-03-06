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
exports.BTCompanySummaryInfo = void 0;
var BTCompanySummaryInfo = /** @class */ (function () {
    function BTCompanySummaryInfo() {
    }
    BTCompanySummaryInfo.getAttributeTypeMap = function () {
        return BTCompanySummaryInfo.attributeTypeMap;
    };
    BTCompanySummaryInfo.discriminator = undefined;
    BTCompanySummaryInfo.attributeTypeMap = [
        {
            "name": "state",
            "baseName": "state",
            "type": "number"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "number"
        },
        {
            "name": "enterpriseBaseUrl",
            "baseName": "enterpriseBaseUrl",
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
            "name": "domainPrefix",
            "baseName": "domainPrefix",
            "type": "string"
        },
        {
            "name": "admin",
            "baseName": "admin",
            "type": "boolean"
        },
        {
            "name": "noPublicDocuments",
            "baseName": "noPublicDocuments",
            "type": "boolean"
        },
        {
            "name": "image",
            "baseName": "image",
            "type": "string"
        },
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
            "name": "href",
            "baseName": "href",
            "type": "string"
        },
        {
            "name": "viewRef",
            "baseName": "viewRef",
            "type": "string"
        }
    ];
    return BTCompanySummaryInfo;
}());
exports.BTCompanySummaryInfo = BTCompanySummaryInfo;
