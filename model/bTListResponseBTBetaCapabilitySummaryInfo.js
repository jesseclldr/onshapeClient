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
exports.BTListResponseBTBetaCapabilitySummaryInfo = void 0;
var BTListResponseBTBetaCapabilitySummaryInfo = /** @class */ (function () {
    function BTListResponseBTBetaCapabilitySummaryInfo() {
    }
    BTListResponseBTBetaCapabilitySummaryInfo.getAttributeTypeMap = function () {
        return BTListResponseBTBetaCapabilitySummaryInfo.attributeTypeMap;
    };
    BTListResponseBTBetaCapabilitySummaryInfo.discriminator = undefined;
    BTListResponseBTBetaCapabilitySummaryInfo.attributeTypeMap = [
        {
            "name": "next",
            "baseName": "next",
            "type": "string"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<BTBetaCapabilitySummaryInfo>"
        },
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        },
        {
            "name": "previous",
            "baseName": "previous",
            "type": "string"
        }
    ];
    return BTListResponseBTBetaCapabilitySummaryInfo;
}());
exports.BTListResponseBTBetaCapabilitySummaryInfo = BTListResponseBTBetaCapabilitySummaryInfo;
