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
exports.BTListResponseBTInAppMessageInfo = void 0;
var BTListResponseBTInAppMessageInfo = /** @class */ (function () {
    function BTListResponseBTInAppMessageInfo() {
    }
    BTListResponseBTInAppMessageInfo.getAttributeTypeMap = function () {
        return BTListResponseBTInAppMessageInfo.attributeTypeMap;
    };
    BTListResponseBTInAppMessageInfo.discriminator = undefined;
    BTListResponseBTInAppMessageInfo.attributeTypeMap = [
        {
            "name": "next",
            "baseName": "next",
            "type": "string"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<BTInAppMessageInfo>"
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
    return BTListResponseBTInAppMessageInfo;
}());
exports.BTListResponseBTInAppMessageInfo = BTListResponseBTInAppMessageInfo;
