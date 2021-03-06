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
exports.BTDBViewerQueryParams = void 0;
var BTDBViewerQueryParams = /** @class */ (function () {
    function BTDBViewerQueryParams() {
    }
    BTDBViewerQueryParams.getAttributeTypeMap = function () {
        return BTDBViewerQueryParams.attributeTypeMap;
    };
    BTDBViewerQueryParams.discriminator = undefined;
    BTDBViewerQueryParams.attributeTypeMap = [
        {
            "name": "collection",
            "baseName": "collection",
            "type": "string"
        },
        {
            "name": "db",
            "baseName": "db",
            "type": "string"
        },
        {
            "name": "fieldValues",
            "baseName": "fieldValues",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "fromDate",
            "baseName": "fromDate",
            "type": "Date"
        },
        {
            "name": "toDate",
            "baseName": "toDate",
            "type": "Date"
        }
    ];
    return BTDBViewerQueryParams;
}());
exports.BTDBViewerQueryParams = BTDBViewerQueryParams;
