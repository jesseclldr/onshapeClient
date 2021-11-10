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
exports.BTUserUsagesSummary = void 0;
var BTUserUsagesSummary = /** @class */ (function () {
    function BTUserUsagesSummary() {
    }
    BTUserUsagesSummary.getAttributeTypeMap = function () {
        return BTUserUsagesSummary.attributeTypeMap;
    };
    BTUserUsagesSummary.discriminator = undefined;
    BTUserUsagesSummary.attributeTypeMap = [
        {
            "name": "ownerName",
            "baseName": "ownerName",
            "type": "string"
        },
        {
            "name": "ownerId",
            "baseName": "ownerId",
            "type": "string"
        },
        {
            "name": "ownerType",
            "baseName": "ownerType",
            "type": "string"
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number"
        }
    ];
    return BTUserUsagesSummary;
}());
exports.BTUserUsagesSummary = BTUserUsagesSummary;
